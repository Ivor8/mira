import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, ShieldCheck } from "lucide-react";
import { format } from "date-fns";

export const Route = createFileRoute("/certificate")({
  validateSearch: (search: Record<string, unknown>) => ({
    code: typeof search.code === "string" ? search.code : "",
  }),
  head: () => ({ meta: [{ title: "Verify certificate — Mira Edge Academy" }] }),
  component: Verify,
});

function Verify() {
  const { code: initialCode } = Route.useSearch();
  const [code, setCode] = useState(initialCode);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<any>(null);

  const check = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setBusy(true);
    const { data } = await supabase
      .from("certificates")
      .select("certificate_code, issued_at, bootcamp:bootcamps(title), student:profiles(full_name)")
      .eq("certificate_code", code.trim().toUpperCase())
      .maybeSingle();
    setBusy(false);
    setResult({ found: !!data, ...data });
  };

  useEffect(() => {
    if (initialCode) void check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCode]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 pt-32 pb-24 sm:px-6">
        <div className="text-center">
          <ShieldCheck className="mx-auto h-10 w-10 text-primary" />
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Verify a certificate</h1>
          <p className="mt-3 text-muted-foreground">Enter the certificate code (e.g. MEA-ABC12345) printed on any Mira Edge Academy certificate.</p>
        </div>

        <form onSubmit={check} className="card-elevated mt-10 space-y-4 p-6">
          <div><Label htmlFor="code">Certificate code</Label><Input id="code" value={code} onChange={(e) => setCode(e.target.value)} placeholder="MEA-XXXXXXXX" required /></div>
          <Button type="submit" disabled={busy} className="w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white">{busy ? "Verifying…" : "Verify"}</Button>
        </form>

        {result && (
          <div className={`card-elevated mt-6 p-6 ${result.found ? "border-primary/60" : "border-destructive/60"}`}>
            {result.found ? (
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-8 w-8 text-success" />
                <div>
                  <p className="font-display text-xl font-bold">Valid certificate</p>
                  <p className="mt-1 text-sm text-muted-foreground">Issued to {result.student?.full_name ?? "—"}</p>
                  <p className="text-sm text-muted-foreground">Bootcamp: {result.bootcamp?.title ?? "—"}</p>
                  <p className="text-sm text-muted-foreground">Issued: {result.issued_at ? format(new Date(result.issued_at), "PPP") : "—"}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-4">
                <XCircle className="h-8 w-8 text-destructive" />
                <div>
                  <p className="font-display text-xl font-bold">Certificate not found</p>
                  <p className="mt-1 text-sm text-muted-foreground">Double-check the code, or contact info@miraedge.tech.</p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
