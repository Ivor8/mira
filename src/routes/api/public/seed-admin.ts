import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/seed-admin")({
  server: {
    handlers: {
      POST: async () => {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        const users = [
          { email: "admin@miraedge.tech", password: "Admin@12345", full_name: "Mira Edge Admin", roles: ["super_admin", "admin"] as const },
          { email: "student@miraedge.tech", password: "Student@12345", full_name: "Demo Student", roles: ["student"] as const },
        ];

        const results: any[] = [];
        for (const u of users) {
          // Check if user exists via listing (paginated)
          const { data: list } = await supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 200 });
          let existing = list?.users.find((x) => x.email === u.email);

          if (!existing) {
            const { data, error } = await supabaseAdmin.auth.admin.createUser({
              email: u.email, password: u.password, email_confirm: true,
              user_metadata: { full_name: u.full_name },
            });
            if (error) { results.push({ email: u.email, error: error.message }); continue; }
            existing = data.user;
          }
          if (!existing) continue;

          for (const role of u.roles) {
            await supabaseAdmin.from("user_roles").upsert({ user_id: existing.id, role }, { onConflict: "user_id,role" });
          }
          results.push({ email: u.email, id: existing.id, ok: true });
        }
        return new Response(JSON.stringify({ results }, null, 2), { headers: { "content-type": "application/json" } });
      },
    },
  },
});
