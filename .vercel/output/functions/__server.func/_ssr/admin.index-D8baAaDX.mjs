import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as LifeBuoy, T as GraduationCap, U as Calendar, a as Users, j as CreditCard } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-D8baAaDX.js
var import_jsx_runtime = require_jsx_runtime();
function AdminOverview() {
	const { data: stats } = useQuery({
		queryKey: ["admin-stats"],
		queryFn: async () => {
			const [bootcamps, sessions, regs, payments, tickets] = await Promise.all([
				supabase.from("bootcamps").select("*", {
					count: "exact",
					head: true
				}),
				supabase.from("sessions").select("*", {
					count: "exact",
					head: true
				}),
				supabase.from("registrations").select("*", {
					count: "exact",
					head: true
				}),
				supabase.from("payments").select("*", {
					count: "exact",
					head: true
				}).eq("status", "pending"),
				supabase.from("support_tickets").select("*", {
					count: "exact",
					head: true
				}).eq("status", "open")
			]);
			return {
				bootcamps: bootcamps.count ?? 0,
				sessions: sessions.count ?? 0,
				students: regs.count ?? 0,
				pendingPayments: payments.count ?? 0,
				openTickets: tickets.count ?? 0
			};
		}
	});
	const cards = [
		{
			icon: GraduationCap,
			k: stats?.bootcamps ?? "—",
			v: "Bootcamps",
			to: "/admin/bootcamps"
		},
		{
			icon: Calendar,
			k: stats?.sessions ?? "—",
			v: "Sessions",
			to: "/admin/sessions"
		},
		{
			icon: Users,
			k: stats?.students ?? "—",
			v: "Registrations",
			to: "/admin/students"
		},
		{
			icon: CreditCard,
			k: stats?.pendingPayments ?? "—",
			v: "Pending payments",
			to: "/admin/payments"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "admin",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Admin overview"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Manage bootcamps, sessions, students, and payments."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: cards.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: s.to,
					className: "card-elevated block p-5 transition hover:-translate-y-0.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-3xl font-bold",
							children: s.k
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: s.v
						})
					]
				}, s.v))
			}),
			(stats?.openTickets ?? 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 card-elevated flex items-center gap-4 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "h-8 w-8 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-semibold",
					children: [stats?.openTickets, " open support ticket(s)"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Review and respond from the Students section or support workflow."
				})] })]
			})
		]
	});
}
//#endregion
export { AdminOverview as component };
