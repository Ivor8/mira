import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Users, c as Target, f as Rocket, u as Sparkles } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as SiteFooter, r as SiteHeader, t as BRAND } from "./SiteFooter-B8AmoCCx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DdOUaDkI.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-5xl px-4 pt-32 pb-24 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-primary",
							children: "About us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl font-bold sm:text-6xl",
							children: "Training modern engineers for a modern world"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-3xl text-lg text-muted-foreground",
							children: [
								"Mira Edge Academy is powered by ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: BRAND.website,
									className: "text-foreground underline",
									children: BRAND.poweredBy
								}),
								". We train professional full-stack developers through live cohorts, real projects, and AI-assisted workflows used by leading technology teams."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-5 md:grid-cols-2",
					children: [
						{
							icon: Target,
							t: "Our mission",
							d: "Make world-class engineering education accessible, practical, and career-changing."
						},
						{
							icon: Rocket,
							t: "Our approach",
							d: "Small live cohorts, senior instructors, weekly code reviews, real projects and modern AI-assisted tools."
						},
						{
							icon: Sparkles,
							t: "Our stack",
							d: "React, TypeScript, Node, Postgres, Tailwind, Supabase, Vite, Cursor, and Copilot — the stack top teams ship on."
						},
						{
							icon: Users,
							t: "Our community",
							d: "Alumni network, career support, and open project reviews long after graduation."
						}
					].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-elevated p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 font-display text-xl font-bold",
								children: x.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: x.d
							})
						]
					}, x.t))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { About as component };
