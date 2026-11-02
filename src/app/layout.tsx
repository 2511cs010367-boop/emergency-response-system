import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Public_Sans } from "next/font/google";

import "leaflet/dist/leaflet.css";
import "../styles.css";
import { Providers } from "./providers";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PHOENIX — Smart Public Safety & Emergency Response",
  description:
    "PHOENIX connects people to emergency assistance with SOS alerts, live location sharing and incident reporting.",
  authors: [{ name: "PHOENIX" }],
  openGraph: {
    title: "PHOENIX — Smart Public Safety",
    description: "Emergency SOS, live location and incident reporting in one safety platform.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14161a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
