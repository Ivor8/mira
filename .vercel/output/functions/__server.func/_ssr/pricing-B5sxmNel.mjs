import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { V as Check } from "../_libs/lucide-react.mjs";
import { n as SiteFooter, r as SiteHeader } from "./SiteFooter-B8AmoCCx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-B5sxmNel.js
var import_jsx_runtime = require_jsx_runtime();
var TIERS = [
	{
		name: "Fundamentals",
		price: "150 000",
		best: false,
		features: [
			"6-week live cohort",
			"Weekly projects",
			"Community access",
			"Certificate of completion"
		]
	},
	{
		name: "Full-Stack Pro",
		price: "350 000",
		best: true,
		features: [
			"12-week live cohort",
			"AI-assisted development",
			"Portfolio capstone",
			"Career prep & mock interviews",
			"Official Mira Edge certificate"
		]
	},
	{
		name: "Team",
		price: "Contact us",
		best: false,
		features: [
			"Private cohort for 5+",
			"Custom curriculum",
			"Dedicated instructor",
			"Progress reports"
		]
	}
];
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 pt-32 pb-24 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-primary",
							children: "Pricing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl font-bold sm:text-6xl",
							children: "Simple, transparent tuition"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Pay via MTN Mobile Money or Orange Money. Installments available."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: TIERS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `card-elevated p-6 ${t.best ? "border-primary/60 glow-primary" : ""}`,
						children: [
							t.best && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 inline-block rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white",
								children: "Most popular"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-bold",
								children: t.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 font-display text-3xl font-bold text-brand-gradient",
								children: [t.price, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-1 text-sm font-medium text-muted-foreground",
									children: t.price === "Contact us" ? "" : "XAF"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2 text-sm",
								children: t.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 text-primary" }),
										" ",
										f
									]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: t.name === "Team" ? "/contact" : "/bootcamps",
								className: "mt-6 block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: `w-full rounded-full ${t.best ? "bg-brand-gradient text-white" : ""}`,
									variant: t.best ? "default" : "secondary",
									children: t.name === "Team" ? "Contact us" : "Reserve seat"
								})
							})
						]
					}, t.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Pricing as component };
