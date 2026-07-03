import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";
import { Award, ExternalLink } from "lucide-react";
import { format } from "date-fns";

export const Route = createFileRoute("/_authenticated/dashboard/certificates")({
  component: StudentCertificates,
});

function StudentCertificates() {
  const { user } = useAuthUser();
  const { data: certs, isLoading } = useQuery({
    queryKey: ["my-certificates", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("certificates")
        .select("*, bootcamp:bootcamps(title, slug)")
        .eq("student_id", user!.id)
        .order("issued_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  return (
    <AppShell mode="student">
      <h1 className="font-display text-3xl font-bold">Certificates</h1>
      <p className="mt-1 text-muted-foreground">Your earned certificates of completion.</p>

      {isLoading && <p className="mt-8 text-muted-foreground">Loading…</p>}
      {!isLoading && (certs ?? []).length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground">
          No certificates issued yet. Complete a bootcamp to earn one.
        </div>
      )}

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {(certs ?? []).map((c) => (
          <div key={c.id} className="card-elevated p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-lg font-bold">{c.bootcamp?.title}</p>
                <p className="mt-1 font-mono text-sm text-primary">{c.certificate_code}</p>
                <p className="mt-2 text-xs text-muted-foreground">Issued {format(new Date(c.issued_at), "PPP")}</p>
                <Link to="/certificate" search={{ code: c.certificate_code }} className="mt-4 inline-block">
                  <Button size="sm" variant="secondary" className="rounded-full">
                    Verify & share <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
