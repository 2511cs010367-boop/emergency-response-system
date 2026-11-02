"use client";

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { UsersThree } from "@phosphor-icons/react";
import { PageHeader, SectionHeading } from "@/components/phoenix/AppShell";
import { EmptyState } from "@/components/phoenix/EmptyState";
import { StatusBadge } from "@/components/phoenix/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/lib/phoenix/auth";
import { listContacts, createContact, updateContact, deleteContact } from "@/lib/phoenix/api";
import { RELATIONSHIPS } from "@/lib/phoenix/constants";
import type { EmergencyContact } from "@/lib/phoenix/constants";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Enter a name").max(100),
  relationship: z.string().trim().min(1, "Choose a relationship").max(50),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+0-9()\-\s]+$/, "Digits and + ( ) - only"),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  priority: z.coerce.number().int().min(1).max(99),
  is_primary: z.boolean(),
});

function FieldError({ id, message }: { id: string; message?: string | undefined }) {
  if (!message) return null;
  return (
    <p id={id} className="text-[15px] font-semibold text-emergency">
      {message}
    </p>
  );
}

export function ContactsPage() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState<EmergencyContact | null>(null);
  const [open, setOpen] = useState(false);
  const [removing, setRemoving] = useState<EmergencyContact | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPrimary, setIsPrimary] = useState(false);
  const [relationship, setRelationship] = useState<string>("Friend");

  const { data: contacts = [], isLoading } = useQuery({
    queryKey: ["contacts", user?.id],
    queryFn: () => listContacts(user!.id),
    enabled: Boolean(user?.id),
  });

  const ranked = [...contacts].sort((a, b) => a.priority - b.priority);

  const refresh = () => {
    void queryClient.invalidateQueries({ queryKey: ["contacts"] });
    void queryClient.invalidateQueries({ queryKey: ["dashboard"] });
  };

  const save = useMutation({
    mutationFn: async (values: z.infer<typeof schema>) => {
      const payload = {
        name: values.name,
        relationship: values.relationship,
        phone: values.phone,
        email: values.email ? values.email : null,
        priority: values.priority,
        is_primary: values.is_primary,
      };
      return editing
        ? updateContact(user!.id, editing.id, payload)
        : createContact(user!.id, payload);
    },
    onSuccess: () => {
      toast.success(editing ? "Contact updated." : "Contact added.");
      setOpen(false);
      setEditing(null);
      refresh();
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => deleteContact(id),
    onSuccess: () => {
      toast.success("Contact removed.");
      setRemoving(null);
      refresh();
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const openForm = (contact: EmergencyContact | null) => {
    setEditing(contact);
    setErrors({});
    setIsPrimary(contact?.is_primary ?? contacts.length === 0);
    setRelationship(contact?.relationship ?? "Friend");
    setOpen(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = schema.safeParse({
      name: String(form.get("name") ?? ""),
      relationship,
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      priority: String(form.get("priority") ?? "1"),
      is_primary: isPrimary,
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    save.mutate(parsed.data);
  };

  return (
    <>
      <PageHeader
        title="Emergency contacts"
        description="When you raise an SOS, these people are told what is happening and where you are, in priority order."
        action={<Button onClick={() => openForm(null)}>Add contact</Button>}
      />

      {isLoading ? (
        <div className="space-y-2">
          <Skeleton className="h-10" />
          <Skeleton className="h-40" />
        </div>
      ) : ranked.length === 0 ? (
        <EmptyState
          icon={UsersThree}
          title="No emergency contacts"
          description="Add at least one trusted person so PHOENIX can reach them during an emergency."
          action={<Button onClick={() => openForm(null)}>Add your first contact</Button>}
        />
      ) : (
        <section aria-labelledby="contact-list-heading">
          <SectionHeading
            id="contact-list-heading"
            title={`${ranked.length} ${ranked.length === 1 ? "person" : "people"} to tell`}
          />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Emergency contacts, ordered by priority</caption>
              <thead>
                <tr className="border-b-2 border-ink text-[15px]">
                  <th scope="col" className="w-20 py-3 pr-4 font-bold">
                    Priority
                  </th>
                  <th scope="col" className="py-3 pr-4 font-bold">
                    Name
                  </th>
                  <th scope="col" className="py-3 pr-4 font-bold">
                    Phone
                  </th>
                  <th scope="col" className="hidden py-3 pr-4 font-bold md:table-cell">
                    Email
                  </th>
                  <th scope="col" className="py-3 text-right font-bold">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ranked.map((contact) => (
                  <tr key={contact.id} className="border-b border-border align-top">
                    <td
                      className={cn(
                        "py-4 pr-4 tabular-nums",
                        contact.priority === 1 ? "font-bold" : "text-muted-foreground",
                      )}
                    >
                      {contact.priority}
                    </td>
                    <td className="py-4 pr-4">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-semibold">{contact.name}</span>
                        {contact.is_primary ? <StatusBadge status="PRIMARY" tone="success" /> : null}
                      </span>
                      <span className="block text-sm text-muted-foreground">{contact.relationship}</span>
                    </td>
                    <td className="whitespace-nowrap py-4 pr-4 tabular-nums">
                      <a href={`tel:${contact.phone}`} className="underline-offset-4 hover:underline">
                        {contact.phone}
                      </a>
                    </td>
                    <td className="hidden max-w-[260px] truncate py-4 pr-4 text-muted-foreground md:table-cell">
                      {contact.email ?? "—"}
                    </td>
                    <td className="py-4 text-right">
                      <span className="inline-flex gap-5">
                        <Button
                          variant="link"
                          className="h-auto p-0 font-semibold"
                          onClick={() => openForm(contact)}
                        >
                          Edit<span className="sr-only"> {contact.name}</span>
                        </Button>
                        <Button
                          variant="link"
                          className="h-auto p-0 font-semibold text-emergency hover:text-emergency-deep"
                          onClick={() => setRemoving(contact)}
                        >
                          Remove<span className="sr-only"> {contact.name}</span>
                        </Button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Priority 1 is told first. Your primary contact is marked so you know who hears first.
          </p>
        </section>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[560px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-extrabold">
              {editing ? "Edit contact" : "Add an emergency contact"}
            </DialogTitle>
            <DialogDescription>This person will be told when you raise an SOS.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="space-y-2">
              <Label htmlFor="contact-name">Full name</Label>
              <FieldError id="contact-name-error" message={errors["name"]} />
              <Input
                id="contact-name"
                name="name"
                defaultValue={editing?.name ?? ""}
                maxLength={100}
                autoComplete="off"
                aria-invalid={Boolean(errors["name"])}
                aria-describedby={errors["name"] ? "contact-name-error" : undefined}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-relationship">Relationship</Label>
              <FieldError id="contact-relationship-error" message={errors["relationship"]} />
              <Select value={relationship} onValueChange={setRelationship}>
                <SelectTrigger id="contact-relationship" aria-invalid={Boolean(errors["relationship"])}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {RELATIONSHIPS.map((value) => (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-6 sm:grid-cols-[1fr_120px]">
              <div className="space-y-2">
                <Label htmlFor="contact-phone">Phone</Label>
                <FieldError id="contact-phone-error" message={errors["phone"]} />
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  defaultValue={editing?.phone ?? ""}
                  maxLength={20}
                  className="tabular-nums"
                  aria-invalid={Boolean(errors["phone"])}
                  aria-describedby={errors["phone"] ? "contact-phone-error" : undefined}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-priority">Priority</Label>
                <FieldError id="contact-priority-error" message={errors["priority"]} />
                <Input
                  id="contact-priority"
                  name="priority"
                  type="number"
                  min={1}
                  max={99}
                  className="tabular-nums"
                  defaultValue={editing?.priority ?? contacts.length + 1}
                  aria-invalid={Boolean(errors["priority"])}
                  aria-describedby={errors["priority"] ? "contact-priority-error" : undefined}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email (optional)</Label>
              <p className="text-sm text-muted-foreground">Used to send them an alert by email.</p>
              <FieldError id="contact-email-error" message={errors["email"]} />
              <Input
                id="contact-email"
                name="email"
                type="email"
                defaultValue={editing?.email ?? ""}
                maxLength={255}
                aria-invalid={Boolean(errors["email"])}
                aria-describedby={errors["email"] ? "contact-email-error" : undefined}
              />
            </div>
            <div className="flex items-start justify-between gap-6 border-y border-border py-4">
              <div>
                <Label htmlFor="contact-primary">Primary contact</Label>
                <p className="text-sm text-muted-foreground">Told first in an emergency.</p>
              </div>
              <Switch id="contact-primary" checked={isPrimary} onCheckedChange={setIsPrimary} />
            </div>
            <DialogFooter className="flex-row items-center justify-start gap-6 sm:justify-start">
              <Button type="submit" disabled={save.isPending}>
                {editing ? "Save contact" : "Add contact"}
              </Button>
              <Button type="button" variant="link" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={Boolean(removing)} onOpenChange={(value) => !value && setRemoving(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove {removing?.name}?</AlertDialogTitle>
            <AlertDialogDescription>They will no longer be told when you raise an SOS.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep contact</AlertDialogCancel>
            <AlertDialogAction
              className="bg-emergency text-emergency-foreground hover:bg-emergency-deep"
              onClick={() => removing && remove.mutate(removing.id)}
            >
              Remove contact
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
