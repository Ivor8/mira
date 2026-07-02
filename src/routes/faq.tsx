import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — Mira Edge Academy" }] }),
  component: Faq,
});

const FAQS = [
  { q: "Who is this bootcamp for?", a: "Beginners with basic computer skills who want a career in tech, and self-taught developers who want to level up with modern tools and a live cohort." },
  { q: "Are classes live or recorded?", a: "Classes are live on Google Meet with your instructor and cohort. Recordings and resources are available to enrolled students after each session." },
  { q: "How do I pay?", a: "We accept MTN Mobile Money and Orange Money. Installments are available for the Full-Stack Pro program." },
  { q: "Will I get a certificate?", a: "Yes. Students who complete the program and capstone project receive an official verifiable certificate from Mira Edge Technologies." },
  { q: "What if I miss a class?", a: "Recordings, resources, and homework remain accessible in your dashboard. Ask questions in your cohort channel any time." },
  { q: "Do you provide job placement?", a: "We provide career preparation — resume, GitHub, portfolio review and mock interviews. Placement is not guaranteed but our alumni network actively refers opportunities." },
];

function Faq() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">Frequently asked</h1>
        </div>
        <Accordion type="single" collapsible className="mt-12">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="card-elevated mb-3 px-5">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
      <SiteFooter />
    </div>
  );
}
