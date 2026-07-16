import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";
import { AdminGuard } from "@/components/AdminGuard";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";
import { formatXAF } from "@/lib/format";
import { slugify } from "@/lib/slug";
import type { Tables } from "@/integrations/supabase/types";
import { Pencil, Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/bootcamps")({
  component: AdminBootcampsPage,
});

type Bootcamp = Tables<"bootcamps">;

const emptyForm = (): Partial<Bootcamp> => ({
  title: "",
  slug: "",
  short_description: "",
  description: "",
  cover_image_url: "",
  price: 0,
  currency: "XAF",
  max_seats: 30,
  duration_weeks: 8,
  status: "draft",
  start_date: "",
  end_date: "",
  registration_deadline: "",
  curriculum: "",
  benefits: "",
  requirements: "",
  projects: "",
  faqs: "",
});

function listToText(list?: any[]) {
  return (list ?? []).map((item) => {
    if (!item) return "";
    if (typeof item === "string") return item;
    if (typeof item === "object") return item.title ?? item.q ?? item.question ?? JSON.stringify(item);
    return String(item);
  }).filter(Boolean).join("\n");
}

function parseListText(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function faqListToText(list?: any[]) {
  return (list ?? []).map((item) => {
    if (!item) return "";
    if (typeof item === "string") return item;
    const q = item.q ?? item.question ?? "";
    const a = item.a ?? item.answer ?? "";
    return `${q}${q && a ? " | " : ""}${a}`;
  }).filter(Boolean).join("\n");
}

function parseFaqText(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [question, answer] = line.split("|").map((part) => part.trim());
      return { q: question, a: answer ?? "" };
    });
}

function safeListValue(value?: any): any[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") return parseListText(value);
  return [];
}

function safeFaqValue(value?: any): any[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") return parseFaqText(value);
  return [];
}

function AdminBootcampsPage() {
  return (
    <AdminGuard>
      <AdminBootcamps />
    </AdminGuard>
  );
}

function AdminBootcamps() {
  const { user } = useAuthUser();
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Bootcamp | null>(null);
  const [form, setForm] = useState<Partial<Bootcamp>>(emptyForm());

  const { data: bootcamps, isLoading } = useQuery({
    queryKey: ["admin-bootcamps"],
    queryFn: async () => {
      const { data, error } = await supabase.from("bootcamps").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const save = useMutation({
    mutationFn: async () => {
      if (!form.title?.trim()) throw new Error("Title is required");
      const slug = form.slug?.trim() || slugify(form.title);
      const basePayload = {
        title: form.title.trim(),
        slug,
        short_description: form.short_description?.trim() || null,
        description: form.description?.trim() || null,
        cover_image_url: form.cover_image_url?.trim() || null,
        price: Number(form.price) || 0,
        currency: form.currency || "XAF",
        max_seats: Number(form.max_seats) || 30,
        duration_weeks: Number(form.duration_weeks) || 8,
        status: form.status || "draft",
        start_date: form.start_date || null,
        end_date: form.end_date || null,
        registration_deadline: form.registration_deadline || null,
        curriculum: safeListValue(form.curriculum),
        benefits: safeListValue(form.benefits),
        requirements: safeListValue(form.requirements),
        projects: safeListValue(form.projects),
        faqs: safeFaqValue(form.faqs),
      };
      if (editing) {
        const { error } = await supabase.from("bootcamps").update(basePayload).eq("id", editing.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("bootcamps").insert({ ...basePayload, created_by: user?.id ?? null });
        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast.success(editing ? "Bootcamp updated" : "Bootcamp created");
      setOpen(false);
      setEditing(null);
      setForm(emptyForm());
      qc.invalidateQueries({ queryKey: ["admin-bootcamps"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("bootcamps").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Bootcamp deleted");
      qc.invalidateQueries({ queryKey: ["admin-bootcamps"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm());
    setOpen(true);
  };

  const openEdit = (b: Bootcamp) => {
    setEditing(b);
    setForm({
      ...b,
      curriculum: listToText(b.curriculum as any[]),
      benefits: listToText(b.benefits as any[]),
      requirements: listToText(b.requirements as any[]),
      projects: listToText(b.projects as any[]),
      faqs: faqListToText(b.faqs as any[]),
    });
    setOpen(true);
  };

  const set = (key: keyof Bootcamp, value: string | number) => setForm((f) => ({ ...f, [key]: value }));

  return (
    <AppShell mode="admin">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Bootcamps</h1>
          <p className="mt-1 text-muted-foreground">Create and manage bootcamp programs.</p>
        </div>
        <Button onClick={openCreate} className="rounded-full bg-brand-gradient text-white">
          <Plus className="mr-2 h-4 w-4" /> New bootcamp
        </Button>
      </div>

      <div className="card-elevated mt-8 overflow-hidden p-0">
        {isLoading && <p className="p-6 text-muted-foreground">Loading…</p>}
        {!isLoading && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Seats</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(bootcamps ?? []).map((b) => (
                <TableRow key={b.id}>
                  <TableCell>
                    <p className="font-medium">{b.title}</p>
                    <p className="text-xs text-muted-foreground">{b.slug}</p>
                  </TableCell>
                  <TableCell><StatusBadge status={b.status} /></TableCell>
                  <TableCell>{b.seats_taken}/{b.max_seats}</TableCell>
                  <TableCell>{formatXAF(b.price, b.currency)}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost" onClick={() => openEdit(b)}><Pencil className="h-4 w-4" /></Button>
                    <Button size="sm" variant="ghost" className="text-destructive" onClick={() => remove.mutate(b.id)}><Trash2 className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit bootcamp" : "New bootcamp"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div>
              <Label>Title</Label>
              <Input value={form.title ?? ""} onChange={(e) => { set("title", e.target.value); if (!editing) set("slug", slugify(e.target.value)); }} />
            </div>
            <div>
              <Label>Slug</Label>
              <Input value={form.slug ?? ""} onChange={(e) => set("slug", e.target.value)} />
            </div>
            <div>
              <Label>Short description</Label>
              <Input value={form.short_description ?? ""} onChange={(e) => set("short_description", e.target.value)} />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea rows={4} value={form.description ?? ""} onChange={(e) => set("description", e.target.value)} />
            </div>
            <div>
              <Label>Cover image URL</Label>
              <Input value={form.cover_image_url ?? ""} onChange={(e) => set("cover_image_url", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Price</Label>
                <Input type="number" value={form.price ?? 0} onChange={(e) => set("price", e.target.value)} />
              </div>
              <div>
                <Label>Max seats</Label>
                <Input type="number" value={form.max_seats ?? 30} onChange={(e) => set("max_seats", e.target.value)} />
              </div>
            </div>
            <div>
              <Label>Status</Label>
              <Select value={form.status ?? "draft"} onValueChange={(v) => set("status", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div><Label>Start</Label><Input type="date" value={form.start_date ?? ""} onChange={(e) => set("start_date", e.target.value)} /></div>
              <div><Label>End</Label><Input type="date" value={form.end_date ?? ""} onChange={(e) => set("end_date", e.target.value)} /></div>
              <div><Label>Reg. deadline</Label><Input type="date" value={form.registration_deadline ?? ""} onChange={(e) => set("registration_deadline", e.target.value)} /></div>
            </div>
            <div>
              <Label>Curriculum (one item per line)</Label>
              <Textarea rows={4} value={form.curriculum ?? ""} onChange={(e) => set("curriculum", e.target.value)} />
            </div>
            <div>
              <Label>Projects you'll ship (one per line)</Label>
              <Textarea rows={3} value={form.projects ?? ""} onChange={(e) => set("projects", e.target.value)} />
            </div>
            <div>
              <Label>What you'll get / Benefits (one per line)</Label>
              <Textarea rows={3} value={form.benefits ?? ""} onChange={(e) => set("benefits", e.target.value)} />
            </div>
            <div>
              <Label>Requirements (one per line)</Label>
              <Textarea rows={3} value={form.requirements ?? ""} onChange={(e) => set("requirements", e.target.value)} />
            </div>
            <div>
              <Label>FAQ (question | answer per line)</Label>
              <Textarea rows={4} value={form.faqs ?? ""} onChange={(e) => set("faqs", e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => save.mutate()} disabled={save.isPending} className="bg-brand-gradient text-white">
              {save.isPending ? "Saving…" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}
