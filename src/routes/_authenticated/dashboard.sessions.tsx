import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AppShell } from "@/components/AppShell";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";
import { ExternalLink, Video } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/dashboard/sessions")({
  component: StudentSessions,
});

function StudentSessions() {
  const { user } = useAuthUser();
  const qc = useQueryClient();

  const { data: sessions, isLoading } = useQuery({
    queryKey: ["student-sessions", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sessions")
        .select("*, bootcamp:bootcamps(title, slug)")
        .order("session_date", { ascending: true })
        .order("start_time", { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
  });

  const { data: attendance } = useQuery({
    queryKey: ["my-attendance", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await supabase.from("attendance").select("session_id").eq("student_id", user!.id);
      return new Set((data ?? []).map((a) => a.session_id));
    },
  });

  const joinMutation = useMutation({
    mutationFn: async (session: { id: string; bootcamp_id: string; meet_url: string }) => {
      const { error } = await supabase.from("attendance").insert({
        session_id: session.id,
        student_id: user!.id,
        bootcamp_id: session.bootcamp_id,
        browser: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 200) : null,
      });
      if (error && error.code !== "23505") throw error;
      window.open(session.meet_url, "_blank", "noopener,noreferrer");
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["my-attendance"] });
      toast.success("Attendance recorded — opening live class");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const upcoming = (sessions ?? []).filter((s) => s.session_date >= new Date().toISOString().slice(0, 10));
  const past = (sessions ?? []).filter((s) => s.session_date < new Date().toISOString().slice(0, 10));

  return (
    <AppShell mode="student">
      <h1 className="font-display text-3xl font-bold">Live sessions</h1>
      <p className="mt-1 text-muted-foreground">Join Google Meet classes for your enrolled bootcamps.</p>

      {isLoading && <p className="mt-8 text-muted-foreground">Loading…</p>}

      {!isLoading && (sessions ?? []).length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground">
          No sessions scheduled yet for your bootcamps.
        </div>
      )}

      {upcoming.length > 0 && (
        <section className="mt-8">
          <h2 className="font-display text-xl font-bold">Upcoming</h2>
          <div className="mt-4 space-y-3">
            {upcoming.map((s) => (
              <SessionRow
                key={s.id}
                session={s}
                attended={attendance?.has(s.id)}
                onJoin={() => joinMutation.mutate(s)}
                busy={joinMutation.isPending}
              />
            ))}
          </div>
        </section>
      )}

      {past.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold">Past sessions</h2>
          <div className="mt-4 space-y-3">
            {past.map((s) => (
              <SessionRow key={s.id} session={s} attended={attendance?.has(s.id)} past />
            ))}
          </div>
        </section>
      )}
    </AppShell>
  );
}

function SessionRow({
  session: s,
  attended,
  onJoin,
  busy,
  past,
}: {
  session: any;
  attended?: boolean;
  onJoin?: () => void;
  busy?: boolean;
  past?: boolean;
}) {
  return (
    <div className="card-elevated flex flex-wrap items-center justify-between gap-4 p-5">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
          <Video className="h-5 w-5" />
        </div>
        <div>
          <p className="font-semibold">{s.title}</p>
          <p className="text-sm text-muted-foreground">{s.bootcamp?.title}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {format(new Date(s.session_date), "PPP")} · {s.start_time?.slice(0, 5)} – {s.end_time?.slice(0, 5)}
          </p>
          <div className="mt-2 flex gap-2">
            <StatusBadge status={s.status} />
            {attended && <StatusBadge status="completed" />}
          </div>
        </div>
      </div>
      {!past && onJoin && (
        <Button
          onClick={onJoin}
          disabled={busy}
          className="rounded-full bg-brand-gradient text-white"
        >
          Join class <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
