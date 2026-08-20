import { createFileRoute } from "@tanstack/react-router";

type SessionPayload = {
  title: string;
  bootcamp_id: string;
  meet_url: string;
  session_date: string;
  start_time: string;
  end_time: string;
  status: string;
  description: string | null;
  created_by: string | null;
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] ?? character,
  );
}

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) chunks.push(items.slice(index, index + size));
  return chunks;
}

export const Route = createFileRoute("/api/admin/sessions")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const token = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
          if (!token) return json({ error: "Unauthorized" }, 401);

          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          const { data: authData, error: authError } = await supabaseAdmin.auth.getUser(token);
          if (authError || !authData.user) return json({ error: "Unauthorized" }, 401);

          const { data: isAdmin, error: roleError } = await supabaseAdmin.rpc("is_admin", { _user_id: authData.user.id });
          if (roleError || !isAdmin) return json({ error: "Admin access required" }, 403);

          const payload = (await request.json()) as Partial<SessionPayload>;
          if (!payload.title?.trim() || !payload.bootcamp_id || !payload.meet_url?.trim() || !payload.session_date) {
            return json({ error: "Fill required fields" }, 400);
          }

          const sessionPayload: SessionPayload = {
            title: payload.title.trim(),
            bootcamp_id: payload.bootcamp_id,
            meet_url: payload.meet_url.trim(),
            session_date: payload.session_date,
            start_time: payload.start_time || "09:00",
            end_time: payload.end_time || "11:00",
            status: payload.status || "scheduled",
            description: payload.description?.trim() || null,
            created_by: authData.user.id,
          };

          const { data: session, error: sessionError } = await supabaseAdmin
            .from("sessions")
            .insert(sessionPayload)
            .select("id, title, bootcamp_id, meet_url, session_date, start_time, end_time, description")
            .single();
          if (sessionError || !session) return json({ error: sessionError?.message || "Failed to create session" }, 400);

          const [{ data: bootcamp }, { data: registrations }] = await Promise.all([
            supabaseAdmin.from("bootcamps").select("title").eq("id", session.bootcamp_id).single(),
            supabaseAdmin.from("registrations").select("student_id").eq("bootcamp_id", session.bootcamp_id).in("status", ["reserved", "confirmed", "completed"]),
          ]);

          const studentIds = [...new Set((registrations ?? []).map((registration) => registration.student_id))];
          const recipients: { email: string; name: string }[] = [];
          for (const studentId of studentIds) {
            const { data } = await supabaseAdmin.auth.admin.getUserById(studentId);
            if (data.user?.email) {
              recipients.push({
                email: data.user.email,
                name: String(data.user.user_metadata?.full_name || data.user.email.split("@")[0]),
              });
            }
          }

          const bootcampTitle = bootcamp?.title || "your bootcamp";
          const safeTitle = escapeHtml(session.title);
          const safeBootcamp = escapeHtml(bootcampTitle);
          const safeDate = escapeHtml(session.session_date);
          const safeStart = escapeHtml(session.start_time.slice(0, 5));
          const safeEnd = escapeHtml(session.end_time.slice(0, 5));
          const safeDescription = session.description ? `<p>${escapeHtml(session.description)}</p>` : "";
          const emailPayload = (recipient: { email: string; name: string }) => ({
            from: process.env.RESEND_FROM_EMAIL || "Mira Edge Academy <info@miraedge.tech>",
            to: [recipient.email],
            subject: `${bootcampTitle}: ${session.title}`,
            html: `<p>Hello ${escapeHtml(recipient.name)},</p><p>A new session has been scheduled for <strong>${safeBootcamp}</strong>.</p><h2>${safeTitle}</h2><p><strong>Date:</strong> ${safeDate}<br><strong>Time:</strong> ${safeStart} - ${safeEnd}</p>${safeDescription}<p><a href="${escapeHtml(session.meet_url)}">Join the session</a></p><p>Please prepare ahead of time. We will keep you updated with any changes.</p><p>Regards,<br>Mira Edge Academy</p>`,
          });

          let emailSent = 0;
          let emailError: string | null = null;
          if (recipients.length > 0 && process.env.RESEND_API_KEY) {
            for (const batch of chunk(recipients, 100)) {
              const response = await fetch("https://api.resend.com/emails/batch", {
                method: "POST",
                headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "content-type": "application/json" },
                body: JSON.stringify(batch.map(emailPayload)),
              });
              if (!response.ok) {
                emailError = (await response.text()).slice(0, 500);
                break;
              }
              emailSent += batch.length;
            }
          } else if (recipients.length > 0) {
            emailError = "RESEND_API_KEY is not configured";
          }

          if (studentIds.length > 0) {
            await supabaseAdmin.from("notifications").insert(studentIds.map((userId) => ({
              user_id: userId,
              title: `New session: ${session.title}`,
              body: `${bootcampTitle} is scheduled for ${session.session_date} at ${session.start_time.slice(0, 5)}.`,
              link: "/dashboard/sessions",
              type: "session",
            })));
          }

          return json({ session, recipientCount: recipients.length, emailSent, emailError });
        } catch (error) {
          console.error("Create session error:", error);
          return json({ error: error instanceof Error ? error.message : "Internal server error" }, 500);
        }
      },
    },
  },
});