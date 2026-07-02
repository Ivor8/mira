import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";

const Placeholder = ({ title, note }: { title: string; note: string }) => (
  <AppShell mode="student">
    <h1 className="font-display text-3xl font-bold">{title}</h1>
    <p className="mt-2 text-muted-foreground">{note}</p>
    <div className="mt-8 rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground">This section is ready to be filled with your data.</div>
  </AppShell>
);

export const Route = createFileRoute("/_authenticated/dashboard/bootcamps")({
  component: () => <Placeholder title="My bootcamps" note="All the bootcamps you're enrolled in." />,
});
