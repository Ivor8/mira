import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy — Mira Edge Academy" }] }),
  component: () => <Legal title="Privacy Policy" body="Mira Edge Academy respects your privacy. We collect only the information necessary to deliver our services — your name, email, phone (optional), and payment records — and we never sell personal data. For any questions, contact info@miraedge.tech." />,
});

function Legal({ title, body }: { title: string; body: string }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-6 whitespace-pre-wrap leading-relaxed text-muted-foreground">{body}</p>
      </main>
      <SiteFooter />
    </div>
  );
}
