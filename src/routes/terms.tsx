import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms — Mira Edge Academy" }] }),
  component: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Terms of Service</h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          By enrolling in a Mira Edge Academy bootcamp you agree to attend the live sessions, complete assignments in good faith, and respect the cohort community. Tuition, refund policy, and program schedule are described on each bootcamp's page. Certificates are awarded only after successful completion.
        </p>
      </main>
      <SiteFooter />
    </div>
  ),
});
