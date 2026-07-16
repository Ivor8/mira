import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/Logo";

function getAppOrigin() {
  if (typeof window !== "undefined" && window.location?.origin) return window.location.origin;
  if (import.meta.env.VITE_APP_URL) return import.meta.env.VITE_APP_URL;
  if (import.meta.env.VITE_SITE_URL) return import.meta.env.VITE_SITE_URL;
  return "https://miraedge-academy.com";
}

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Reset password — Mira Edge Academy" }] }),
  component: ForgotPage,
});

function ForgotPage() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${getAppOrigin()}/reset-password` });
    setBusy(false);
    if (error) return toast.error(error.message);
    setSent(true);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4">
      <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-30" />
      <Link to="/auth" className="absolute left-6 top-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to sign in
      </Link>
      <div className="relative w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <Logo className="h-14 w-14" />
          <h1 className="mt-4 font-display text-3xl font-bold">Reset your password</h1>
          <p className="mt-1 text-sm text-muted-foreground">We'll email you a secure reset link.</p>
        </div>
        <div className="card-elevated p-6">
          {sent ? (
            <div className="text-center">
              <p className="font-semibold">Check your inbox</p>
              <p className="mt-2 text-sm text-muted-foreground">If an account exists for {email}, we've sent password reset instructions.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div><Label htmlFor="fp-email">Email</Label><Input id="fp-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
              <Button type="submit" disabled={busy} className="w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white">
                {busy ? "Sending…" : "Send reset link"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
