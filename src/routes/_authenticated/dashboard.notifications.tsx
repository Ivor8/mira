import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";
import { Bell } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/dashboard/notifications")({
  component: StudentNotifications,
});

function StudentNotifications() {
  const { user } = useAuthUser();
  const qc = useQueryClient();

  const { data: notifications, isLoading } = useQuery({
    queryKey: ["my-notifications", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", user!.id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const markRead = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("notifications")
        .update({ read_at: new Date().toISOString() })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["my-notifications"] }),
    onError: (e: Error) => toast.error(e.message),
  });

  const markAllRead = useMutation({
    mutationFn: async () => {
      const unread = (notifications ?? []).filter((n) => !n.read_at);
      await Promise.all(
        unread.map((n) =>
          supabase.from("notifications").update({ read_at: new Date().toISOString() }).eq("id", n.id),
        ),
      );
    },
    onSuccess: () => {
      toast.success("All notifications marked as read");
      qc.invalidateQueries({ queryKey: ["my-notifications"] });
    },
  });

  const unreadCount = (notifications ?? []).filter((n) => !n.read_at).length;

  return (
    <AppShell mode="student">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Notifications</h1>
          <p className="mt-1 text-muted-foreground">
            {unreadCount > 0 ? `${unreadCount} unread` : "You're all caught up."}
          </p>
        </div>
        {unreadCount > 0 && (
          <Button variant="outline" className="rounded-full" onClick={() => markAllRead.mutate()}>
            Mark all read
          </Button>
        )}
      </div>

      {isLoading && <p className="mt-8 text-muted-foreground">Loading…</p>}
      {!isLoading && (notifications ?? []).length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground">
          No notifications yet.
        </div>
      )}

      <div className="mt-8 space-y-3">
        {(notifications ?? []).map((n) => (
          <div
            key={n.id}
            className={`card-elevated flex items-start gap-4 p-5 ${!n.read_at ? "border-primary/30" : ""}`}
          >
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
              <Bell className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{n.title}</p>
              {n.body && <p className="mt-1 text-sm text-muted-foreground">{n.body}</p>}
              <p className="mt-2 text-xs text-muted-foreground">{format(new Date(n.created_at), "PPp")}</p>
              {n.link && (
                <a href={n.link} className="mt-2 inline-block text-sm text-primary hover:underline">
                  Open link →
                </a>
              )}
            </div>
            {!n.read_at && (
              <Button size="sm" variant="ghost" className="rounded-full shrink-0" onClick={() => markRead.mutate(n.id)}>
                Mark read
              </Button>
            )}
          </div>
        ))}
      </div>
    </AppShell>
  );
}
