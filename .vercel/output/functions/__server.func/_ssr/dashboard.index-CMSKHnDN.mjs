import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ExternalLink, G as Award, T as GraduationCap, U as Calendar, j as CreditCard } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.index-CMSKHnDN.js
var import_jsx_runtime = require_jsx_runtime();
function DashboardHome() {
	const { user } = useAuthUser();
	const { data: regs } = useQuery({
		queryKey: ["my-regs", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data } = await supabase.from("registrations").select("*, bootcamp:bootcamps(*)").eq("student_id", user.id);
			return data ?? [];
		}
	});
	const { data: nextSession } = useQuery({
		queryKey: ["next-session", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data } = await supabase.from("sessions").select("*, bootcamp:bootcamps(title,slug)").gte("session_date", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)).order("session_date").order("start_time").limit(1);
			return data?.[0] ?? null;
		}
	});
	const { data: certs } = useQuery({
		queryKey: ["my-cert-count", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { count } = await supabase.from("certificates").select("*", {
				count: "exact",
				head: true
			}).eq("student_id", user.id);
			return count ?? 0;
		}
	});
	const stats = [
		{
			icon: GraduationCap,
			k: regs?.length ?? 0,
			v: "Enrolled bootcamps"
		},
		{
			icon: Calendar,
			k: nextSession ? "1" : "0",
			v: "Upcoming session"
		},
		{
			icon: Award,
			k: certs ?? 0,
			v: "Certificates earned"
		},
		{
			icon: CreditCard,
			k: regs?.filter((r) => r.payment_status === "successful").length ?? 0,
			v: "Successful payments"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold",
					children: "Welcome back 👋"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted-foreground",
					children: "Here's what's happening in your learning journey."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevated p-5",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevated p-6 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-bold",
							children: "My bootcamps"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/bootcamps",
							className: "text-sm text-primary hover:underline",
							children: "Browse all →"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-3",
						children: [(regs ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-xl border border-dashed border-border/60 p-6 text-center text-sm text-muted-foreground",
							children: "You haven't enrolled in any bootcamps yet."
						}), (regs ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-xl border border-border/60 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: r.bootcamp?.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									"Status: ",
									r.status,
									" · Payment: ",
									r.payment_status
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/bootcamps/$slug",
								params: { slug: r.bootcamp?.slug },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									size: "sm",
									className: "rounded-full",
									children: "Details"
								})
							})]
						}, r.id))]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevated p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-bold",
						children: "Next live session"
					}), nextSession ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: nextSession.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: nextSession.bootcamp?.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm",
								children: format(new Date(nextSession.session_date), "PPP")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									nextSession.start_time,
									" — ",
									nextSession.end_time
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: nextSession.meet_url,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-4 inline-block w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "w-full rounded-full bg-brand-gradient text-white",
									children: ["Join live class ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-2 h-4 w-4" })]
								})
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "No upcoming sessions scheduled."
					})]
				})]
			})
		]
	});
}
//#endregion
export { DashboardHome as component };
