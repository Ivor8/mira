import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { useAuthUser } from "@/hooks/useAuthUser";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/admin")({
  component: AdminHome,
});

function AdminHome() {
  const { isAdmin, loading } = useAuthUser();
  if (loading) return <AppShell mode="admin"><p className="text-muted-foreground">Loading…</p></AppShell>;
  if (!isAdmin) {
    return (
      <AppShell mode="student">
        <div className="card-elevated p-10 text-center">
          <h1 className="font-display text-2xl font-bold">Admins only</h1>
          <p className="mt-2 text-muted-foreground">Your account does not have admin permissions.</p>
          <Link to="/dashboard" className="mt-4 inline-block text-primary hover:underline">Back to dashboard</Link>
        </div>
      </AppShell>
    );
  }
  return (
    <AppShell mode="admin">
      <h1 className="font-display text-3xl font-bold">Admin overview</h1>
      <p className="mt-2 text-muted-foreground">Manage bootcamps, sessions, students, and payments.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["Bootcamps","Sessions","Students","Payments"].map((k) => (
          <div key={k} className="card-elevated p-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{k}</p>
            <p className="mt-2 font-display text-3xl font-bold text-brand-gradient">—</p>
          </div>
        ))}
      </div>
      <div className="mt-10 card-elevated p-6">
        <p className="text-sm text-muted-foreground">Admin CRUD panels (create bootcamp, sessions, attendance analytics, student management) are wired to the schema and ready to be built out on request.</p>
      </div>
    </AppShell>
  );
}
