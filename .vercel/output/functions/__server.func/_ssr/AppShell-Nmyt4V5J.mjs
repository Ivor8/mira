import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Logo } from "./Logo-f4TzIa2S.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as LifeBuoy, D as FileText, G as Award, T as GraduationCap, U as Calendar, W as Bell, d as ShieldCheck, j as CreditCard, n as X, o as User, v as Menu, w as LayoutDashboard, x as LogOut } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppShell-Nmyt4V5J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STUDENT_NAV = [
	{
		to: "/dashboard",
		label: "Overview",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/dashboard/bootcamps",
		label: "My bootcamps",
		icon: GraduationCap
	},
	{
		to: "/dashboard/sessions",
		label: "Sessions",
		icon: Calendar
	},
	{
		to: "/dashboard/resources",
		label: "Resources",
		icon: FileText
	},
	{
		to: "/dashboard/payments",
		label: "Payments",
		icon: CreditCard
	},
	{
		to: "/dashboard/certificates",
		label: "Certificates",
		icon: Award
	},
	{
		to: "/dashboard/notifications",
		label: "Notifications",
		icon: Bell
	},
	{
		to: "/dashboard/profile",
		label: "Profile",
		icon: User
	},
	{
		to: "/dashboard/support",
		label: "Support",
		icon: LifeBuoy
	}
];
var ADMIN_NAV = [
	{
		to: "/admin",
		label: "Overview",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/admin/bootcamps",
		label: "Bootcamps",
		icon: GraduationCap
	},
	{
		to: "/admin/sessions",
		label: "Sessions",
		icon: Calendar
	},
	{
		to: "/admin/students",
		label: "Students",
		icon: User
	},
	{
		to: "/admin/payments",
		label: "Payments",
		icon: CreditCard
	}
];
function AppShell({ children, mode }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { user, isAdmin } = useAuthUser();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `fixed inset-y-0 left-0 z-40 w-72 transform border-r border-border/60 bg-card/70 backdrop-blur-xl transition-transform ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-16 items-center justify-between px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-9 w-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-bold",
								children: "Mira Edge"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-widest text-muted-foreground",
								children: mode === "admin" ? "Admin" : "Academy"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(false),
							className: "lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-col gap-1 px-3 py-4",
						children: (mode === "admin" ? ADMIN_NAV : STUDENT_NAV).map((n) => {
							const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: n.to,
								onClick: () => setOpen(false),
								className: `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${active ? "bg-brand-gradient text-white shadow-lg shadow-primary/30" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, { className: "h-4 w-4" }), n.label]
							}, n.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-3 bottom-4 space-y-2",
						children: [
							mode === "student" && isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admin",
								className: "flex items-center gap-3 rounded-xl border border-border/60 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), " Admin panel"]
							}),
							mode === "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/dashboard",
								className: "flex items-center gap-3 rounded-xl border border-border/60 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }), " Student view"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: async () => {
									await supabase.auth.signOut();
									window.location.href = "/";
								},
								className: "flex w-full items-center gap-3 rounded-xl border border-border/60 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Sign out"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl bg-muted/40 px-3 py-2 text-xs text-muted-foreground truncate",
								children: user?.email
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-72",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/60 bg-background/70 px-4 backdrop-blur-xl sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(true),
							className: "lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold",
							children: mode === "admin" ? "Admin Panel" : "Student Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard/notifications",
							className: "rounded-full p-2 text-muted-foreground hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.main, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
					children
				})]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onClick: () => setOpen(false),
				className: "fixed inset-0 z-30 bg-black/40 lg:hidden"
			})
		]
	});
}
//#endregion
export { AppShell as t };
