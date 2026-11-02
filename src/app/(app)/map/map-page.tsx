"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { LayerGroup, Map as LeafletMap } from "leaflet";
import { MapTrifold, SpinnerGap, WarningCircle } from "@phosphor-icons/react";
import { PageHeader, SectionHeading } from "@/components/phoenix/AppShell";
import { EmptyState } from "@/components/phoenix/EmptyState";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getCurrentPosition, distanceKm } from "@/lib/phoenix/geolocation";

interface Place {
  id: string;
  name: string;
  kind: string;
  lat: number;
  lon: number;
  km: number;
}

const KINDS: Record<string, string> = {
  police: "Police",
  hospital: "Hospital",
  fire_station: "Fire station",
  clinic: "Clinic",
};

const KIND_LABELS = Object.values(KINDS);

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) =>
    char === "&" ? "&amp;" : char === "<" ? "&lt;" : char === ">" ? "&gt;" : char === '"' ? "&quot;" : "&#39;",
  );
}

export function MapPage() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [origin, setOrigin] = useState<{ latitude: number; longitude: number } | null>(null);
  const [enabledKinds, setEnabledKinds] = useState<string[]>(KIND_LABELS);

  const mapElement = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<LayerGroup | null>(null);
  const leafletRef = useRef<typeof import("leaflet") | null>(null);
  const [mapReady, setMapReady] = useState(false);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const position = await getCurrentPosition();
      setOrigin(position);
      const query = `[out:json][timeout:25];(
        node["amenity"~"police|hospital|fire_station|clinic"](around:5000,${position.latitude},${position.longitude});
      );out body 40;`;
      const response = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: query,
      });
      if (!response.ok) throw new Error("Could not load nearby services right now.");
      const payload = (await response.json()) as {
        elements: { id: number; lat: number; lon: number; tags?: Record<string, string> }[];
      };
      const results = payload.elements
        .filter((element) => element.tags?.["amenity"])
        .map((element) => ({
          id: String(element.id),
          name: element.tags?.["name"] ?? KINDS[element.tags?.["amenity"] ?? ""] ?? "Service",
          kind: KINDS[element.tags?.["amenity"] ?? ""] ?? "Service",
          lat: element.lat,
          lon: element.lon,
          km: distanceKm(
            { lat: position.latitude, lon: position.longitude },
            { lat: element.lat, lon: element.lon },
          ),
        }))
        .sort((a, b) => a.km - b.km)
        .slice(0, 20);
      setPlaces(results);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const visible = useMemo(
    () => places.filter((place) => enabledKinds.includes(place.kind) || !KIND_LABELS.includes(place.kind)),
    [places, enabledKinds],
  );

  const toggleKind = (kind: string) =>
    setEnabledKinds((current) =>
      current.includes(kind) ? current.filter((value) => value !== kind) : [...current, kind],
    );

  // Create the Leaflet map once we know where the person is. Leaflet touches `window`,
  // so it is loaded on the client only.
  useEffect(() => {
    if (!origin || !mapElement.current) return;
    let cancelled = false;

    void import("leaflet").then((L) => {
      if (cancelled || !mapElement.current) return;
      leafletRef.current = L;
      if (!mapRef.current) {
        const map = L.map(mapElement.current, { scrollWheelZoom: false }).setView(
          [origin.latitude, origin.longitude],
          14,
        );
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);
        mapRef.current = map;
        markersRef.current = L.layerGroup().addTo(map);
      } else {
        mapRef.current.setView([origin.latitude, origin.longitude]);
      }
      setMapReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [origin]);

  useEffect(
    () => () => {
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current = null;
    },
    [],
  );

  // Draw markers: you are a square ink marker, services are numbered square red markers.
  useEffect(() => {
    const L = leafletRef.current;
    const layer = markersRef.current;
    if (!mapReady || !L || !layer || !origin) return;
    layer.clearLayers();

    L.marker([origin.latitude, origin.longitude], {
      icon: L.divIcon({
        className: "",
        html: '<span style="display:block;width:16px;height:16px;background:var(--color-ink);border:3px solid var(--color-paper);outline:1px solid var(--color-ink)"></span>',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      }),
      title: "You are here",
      zIndexOffset: 1000,
    })
      .bindPopup("<strong>You are here</strong>")
      .addTo(layer);

    visible.forEach((place, index) => {
      L.marker([place.lat, place.lon], {
        icon: L.divIcon({
          className: "",
          html: `<span style="display:flex;align-items:center;justify-content:center;width:24px;height:24px;background:var(--color-emergency);color:var(--color-paper);border:1px solid var(--color-ink);font:700 12px/1 var(--font-sans);font-variant-numeric:tabular-nums">${index + 1}</span>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        }),
        title: place.name,
      })
        .bindPopup(
          `<strong>${escapeHtml(place.name)}</strong><br/>${escapeHtml(place.kind)} · ${place.km.toFixed(1)} km`,
        )
        .addTo(layer);
    });
  }, [visible, mapReady, origin]);

  const directionsHref = (place: Place) =>
    origin
      ? `https://www.openstreetmap.org/directions?route=${origin.latitude}%2C${origin.longitude}%3B${place.lat}%2C${place.lon}`
      : `https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lon}#map=17/${place.lat}/${place.lon}`;

  return (
    <>
      <PageHeader
        title="Nearby services"
        description="Police, hospitals, clinics and fire stations within 5 km of where you are now."
        action={
          <Button variant="outline" onClick={load} disabled={loading}>
            {loading ? <SpinnerGap size={18} className="animate-spin" aria-hidden /> : null}
            {loading ? "Finding you…" : "Refresh location"}
          </Button>
        }
      />

      {error ? (
        <div role="alert" className="mb-8 flex gap-3 bg-tag-red p-5 text-tag-red-ink">
          <WarningCircle size={24} className="mt-0.5 shrink-0" aria-hidden />
          <div>
            <p className="font-bold">We couldn't load nearby services</p>
            <p className="mt-1">{error}</p>
            <p className="mt-1">
              If your browser asked for your location, allow it and try again. In an emergency, call your local
              emergency number.
            </p>
            <Button variant="outline" className="mt-4" onClick={load} disabled={loading}>
              Try again
            </Button>
          </div>
        </div>
      ) : null}

      <fieldset className="mb-6">
        <legend className="mb-3 text-[15px] font-semibold">Show</legend>
        <div className="flex flex-wrap gap-2">
          {KIND_LABELS.map((kind) => {
            const on = enabledKinds.includes(kind);
            return (
              <Button
                key={kind}
                type="button"
                size="sm"
                variant={on ? "default" : "outline"}
                aria-pressed={on}
                onClick={() => toggleKind(kind)}
              >
                {kind}
              </Button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-2">
          <div className="relative min-h-[360px] border border-ink bg-surface lg:min-h-[560px]">
            <div
              ref={mapElement}
              className="absolute inset-0"
              role="region"
              aria-label="Map of nearby services"
            />
            {!origin ? (
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-muted-foreground">
                {loading ? "Finding your location…" : "Your location is needed to show the map."}
              </div>
            ) : null}
          </div>
          {origin ? (
            <p className="mt-2 text-sm text-muted-foreground tabular-nums">
              Searching around {origin.latitude.toFixed(4)}, {origin.longitude.toFixed(4)}
            </p>
          ) : null}
        </div>

        <section aria-labelledby="nearby-heading" className="min-w-0">
          <SectionHeading
            id="nearby-heading"
            title="Closest first"
            action={
              places.length ? (
                <span className="text-sm text-muted-foreground tabular-nums">
                  {visible.length} of {places.length}
                </span>
              ) : undefined
            }
          />
          {loading && places.length === 0 ? (
            <div className="space-y-2 pt-3">
              <Skeleton className="h-14" />
              <Skeleton className="h-14" />
              <Skeleton className="h-14" />
            </div>
          ) : places.length === 0 && !error ? (
            <EmptyState
              icon={MapTrifold}
              title="No services found nearby"
              description="Try refreshing, or move to an area with better GPS accuracy."
            />
          ) : visible.length === 0 && places.length > 0 ? (
            <p className="py-4 text-muted-foreground">Nothing matches the types you have chosen.</p>
          ) : (
            <ol className="lg:max-h-[560px] lg:overflow-y-auto">
              {visible.map((place, index) => (
                <li
                  key={place.id}
                  className="grid grid-cols-[2rem_1fr_auto] items-baseline gap-x-3 border-b border-border py-3.5"
                >
                  <span className="font-bold tabular-nums">{index + 1}</span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{place.name}</span>
                    <span className="block text-sm text-muted-foreground">
                      {place.kind} · <span className="tabular-nums">{place.km.toFixed(1)} km</span>
                    </span>
                  </span>
                  <a
                    href={directionsHref(place)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[15px] font-semibold text-link underline underline-offset-4 hover:text-ink hover:decoration-2"
                  >
                    Directions<span className="sr-only"> to {place.name} (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ol>
          )}
        </section>
      </div>
    </>
  );
}
