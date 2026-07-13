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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";
import type { Tables } from "@/integrations/supabase/types";
import { BarChart3, Pencil, Plus, Trash2 } from "lucide-react";
import { format } from "date-fns";

export const Route = createFileRoute("/_authenticated/admin/sessions")({
  component: AdminSessionsPage,
});

type Session = Tables<"sessions">;

function AdminSessionsPage() {
  return (
    <AdminGuard>
      <AdminSessions />
    </AdminGuard>
  );
}

function AdminSessions() {
  const { user } = useAuthUser();
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [editing, setEditing] = useState<Session | null>(null);
  const [resourceSessionId, setResourceSessionId] = useState<string | null>(null);
  const [form, setForm] = useState<Partial<Session>>({
    title: "",
    bootcamp_id: "",
    meet_url: "",
    session_date: "",
    start_time: "09:00",
    end_time: "11:00",
    status: "scheduled",
    description: "",
  });
  const [resourceForm, setResourceForm] = useState({ title: "", file_url: "", description: "" });

  const { data: bootcamps } = useQuery({
    queryKey: ["admin-bootcamps-select"],
    queryFn: async () => {
      const { data } = await supabase.from("bootcamps").select("id, title").order("title");
      return data ?? [];
    },
  });

  const { data: sessions, isLoading } = useQuery({
    queryKey: ["admin-sessions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sessions")
        .select("*, bootcamp:bootcamps(title)")
        .order("session_date", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const { data: attendanceStats } = useQuery({
    queryKey: ["admin-attendance-stats"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("attendance")
        .select("session_id, student_id, joined_at, session:sessions(title, session_date)");
      if (error) throw error;
      const attendance = data ?? [];
      const studentIds = Array.from(new Set(attendance.map((r: any) => r.student_id).filter(Boolean)));
      const studentMap = new Map<string, any>();
      if (studentIds.length > 0) {
        const { data: users, error: userError } = await supabase
          .from("profiles")
          .select("id, full_name")
          .in("id", studentIds);
        if (userError) throw userError;
        for (const user of users ?? []) {
          studentMap.set(user.id, user);
        }
      }
      const bySession = new Map<string, { title: string; date: string; count: number; rows: typeof attendance }>();
      for (const row of attendance) {
        const sid = row.session_id;
        const existing = bySession.get(sid) ?? {
          title: (row.session as any)?.title ?? "Session",
          date: (row.session as any)?.session_date ?? "",
          count: 0,
          rows: [],
        };
        const rowWithStudent = { ...row, student: studentMap.get(row.student_id) ?? null };
        existing.count += 1;
        existing.rows.push(rowWithStudent);
        bySession.set(sid, existing);
      }
      return [...bySession.entries()].map(([id, v]) => ({ id, ...v }));
    },
  });

  const save = useMutation({
    mutationFn: async () => {
      if (!form.title?.trim() || !form.bootcamp_id || !form.meet_url?.trim() || !form.session_date) {
        throw new Error("Fill required fields");
      }
      const payload = {
        title: form.title.trim(),
        bootcamp_id: form.bootcamp_id,
        meet_url: form.meet_url.trim(),
        session_date: form.session_date,
        start_time: form.start_time || "09:00",
        end_time: form.end_time || "11:00",
        status: form.status || "scheduled",
        description: form.description?.trim() || null,
        created_by: user?.id ?? null,
      };
      if (editing) {
        const { error } = await supabase.from("sessions").update(payload).eq("id", editing.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("sessions").insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast.success(editing ? "Session updated" : "Session created");
      setOpen(false);
      setEditing(null);
      qc.invalidateQueries({ queryKey: ["admin-sessions"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const addResource = useMutation({
    mutationFn: async () => {
      const session = sessions?.find((s) => s.id === resourceSessionId);
      if (!session || !resourceForm.title.trim() || !resourceForm.file_url.trim()) {
        throw new Error("Title and file URL required");
      }
      const { error } = await supabase.from("resources").insert({
        bootcamp_id: session.bootcamp_id,
        session_id: session.id,
        title: resourceForm.title.trim(),
        file_url: resourceForm.file_url.trim(),
        description: resourceForm.description.trim() || null,
        uploaded_by: user?.id ?? null,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Resource added");
      setResourceOpen(false);
      setResourceForm({ title: "", file_url: "", description: "" });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("sessions").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Session deleted");
      qc.invalidateQueries({ queryKey: ["admin-sessions"] });
      qc.invalidateQueries({ queryKey: ["admin-attendance-stats"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const openCreate = () => {
    setEditing(null);
    setForm({
      title: "",
      bootcamp_id: bootcamps?.[0]?.id ?? "",
      meet_url: "",
      session_date: "",
      start_time: "09:00",
      end_time: "11:00",
      status: "scheduled",
      description: "",
    });
    setOpen(true);
  };

  return (
    <AppShell mode="admin">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Sessions</h1>
          <p className="mt-1 text-muted-foreground">Schedule live classes and track attendance.</p>
        </div>
        <Button onClick={openCreate} className="rounded-full bg-brand-gradient text-white">
          <Plus className="mr-2 h-4 w-4" /> New session
        </Button>
      </div>

      <Tabs defaultValue="sessions" className="mt-8">
        <TabsList>
          <TabsTrigger value="sessions">All sessions</TabsTrigger>
          <TabsTrigger value="attendance"><BarChart3 className="mr-2 h-4 w-4" />Attendance</TabsTrigger>
        </TabsList>

        <TabsContent value="sessions" className="mt-4">
          <div className="card-elevated overflow-hidden p-0">
            {isLoading && <p className="p-6 text-muted-foreground">Loading…</p>}
            {!isLoading && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Session</TableHead>
                    <TableHead>Bootcamp</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(sessions ?? []).map((s) => (
                    <TableRow key={s.id}>
                      <TableCell>
                        <p className="font-medium">{s.title}</p>
                        <p className="text-xs text-muted-foreground">{s.start_time?.slice(0, 5)} – {s.end_time?.slice(0, 5)}</p>
                      </TableCell>
                      <TableCell>{(s.bootcamp as any)?.title}</TableCell>
                      <TableCell>{format(new Date(s.session_date), "PP")}</TableCell>
                      <TableCell><StatusBadge status={s.status} /></TableCell>
                      <TableCell className="text-right space-x-1">
                        <Button size="sm" variant="ghost" onClick={() => { setResourceSessionId(s.id); setResourceOpen(true); }}>Resource</Button>
                        <Button size="sm" variant="ghost" onClick={() => { setEditing(s); setForm(s); setOpen(true); }}><Pencil className="h-4 w-4" /></Button>
                        <Button size="sm" variant="ghost" className="text-destructive" onClick={() => remove.mutate(s.id)}><Trash2 className="h-4 w-4" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </TabsContent>

        <TabsContent value="attendance" className="mt-4 space-y-4">
          {(attendanceStats ?? []).length === 0 && (
            <p className="text-sm text-muted-foreground">No attendance recorded yet.</p>
          )}
          {(attendanceStats ?? []).map((group) => (
            <div key={group.id} className="card-elevated p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{group.title}</p>
                  <p className="text-xs text-muted-foreground">{group.date && format(new Date(group.date), "PP")}</p>
                </div>
                <p className="font-display text-2xl font-bold text-primary">{group.count}</p>
              </div>
              <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                {group.rows.map((r: any) => (
                  <li key={r.student_id + r.joined_at}>
                    {r.student?.full_name ?? "Student"} — {format(new Date(r.joined_at), "PPp")}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </TabsContent>
      </Tabs>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing ? "Edit session" : "New session"}</DialogTitle></DialogHeader>
          <div className="grid gap-4 py-2">
            <div>
              <Label>Bootcamp</Label>
              <Select value={form.bootcamp_id ?? ""} onValueChange={(v) => setForm((f) => ({ ...f, bootcamp_id: v }))}>
                <SelectTrigger><SelectValue placeholder="Select bootcamp" /></SelectTrigger>
                <SelectContent>
                  {(bootcamps ?? []).map((b) => <SelectItem key={b.id} value={b.id}>{b.title}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div><Label>Title</Label><Input value={form.title ?? ""} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} /></div>
            <div><Label>Google Meet URL</Label><Input value={form.meet_url ?? ""} onChange={(e) => setForm((f) => ({ ...f, meet_url: e.target.value }))} /></div>
            <div className="grid grid-cols-3 gap-3">
              <div><Label>Date</Label><Input type="date" value={form.session_date ?? ""} onChange={(e) => setForm((f) => ({ ...f, session_date: e.target.value }))} /></div>
              <div><Label>Start</Label><Input type="time" value={form.start_time?.slice(0, 5) ?? ""} onChange={(e) => setForm((f) => ({ ...f, start_time: e.target.value }))} /></div>
              <div><Label>End</Label><Input type="time" value={form.end_time?.slice(0, 5) ?? ""} onChange={(e) => setForm((f) => ({ ...f, end_time: e.target.value }))} /></div>
            </div>
            <div>
              <Label>Status</Label>
              <Select value={form.status ?? "scheduled"} onValueChange={(v) => setForm((f) => ({ ...f, status: v }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="live">Live</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div><Label>Description</Label><Textarea value={form.description ?? ""} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} /></div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => save.mutate()} disabled={save.isPending} className="bg-brand-gradient text-white">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={resourceOpen} onOpenChange={setResourceOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Add resource</DialogTitle></DialogHeader>
          <div className="grid gap-4 py-2">
            <div><Label>Title</Label><Input value={resourceForm.title} onChange={(e) => setResourceForm({ ...resourceForm, title: e.target.value })} /></div>
            <div><Label>File URL</Label><Input value={resourceForm.file_url} onChange={(e) => setResourceForm({ ...resourceForm, file_url: e.target.value })} placeholder="https://…" /></div>
            <div><Label>Description</Label><Textarea value={resourceForm.description} onChange={(e) => setResourceForm({ ...resourceForm, description: e.target.value })} /></div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setResourceOpen(false)}>Cancel</Button>
            <Button onClick={() => addResource.mutate()} disabled={addResource.isPending} className="bg-brand-gradient text-white">Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}
