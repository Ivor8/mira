import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";
import { ExternalLink, FileText } from "lucide-react";
import { format } from "date-fns";

export const Route = createFileRoute("/_authenticated/dashboard/resources")({
  component: StudentResources,
});

function StudentResources() {
  const { user } = useAuthUser();
  const { data: resources, isLoading } = useQuery({
    queryKey: ["student-resources", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("resources")
        .select("*, bootcamp:bootcamps(title), session:sessions(title)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  return (
    <AppShell mode="student">
      <h1 className="font-display text-3xl font-bold">Resources</h1>
      <p className="mt-1 text-muted-foreground">Files and materials for your enrolled bootcamps.</p>

      {isLoading && <p className="mt-8 text-muted-foreground">Loading…</p>}
      {!isLoading && (resources ?? []).length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground">
          No resources uploaded yet for your bootcamps.
        </div>
      )}

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {(resources ?? []).map((r) => (
          <div key={r.id} className="card-elevated p-5">
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <FileText className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{r.title}</p>
                <p className="text-xs text-muted-foreground">{r.bootcamp?.title}</p>
                {r.session?.title && <p className="text-xs text-muted-foreground">Session: {r.session.title}</p>}
                {r.description && <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{r.description}</p>}
                <p className="mt-2 text-xs text-muted-foreground">{format(new Date(r.created_at), "PP")}</p>
                <a href={r.file_url} target="_blank" rel="noreferrer" className="mt-3 inline-block">
                  <Button size="sm" variant="secondary" className="rounded-full">
                    Open resource <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
