import { o as __toESM } from "../_runtime.mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as cn } from "./button-BpE9Czok.mjs";
import { B as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as SiteFooter, r as SiteHeader } from "./SiteFooter-B8AmoCCx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-CbP50bDp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var FAQS = [
	{
		q: "Who is this bootcamp for?",
		a: "Beginners with basic computer skills who want a career in tech, and self-taught developers who want to level up with modern tools and a live cohort."
	},
	{
		q: "Are classes live or recorded?",
		a: "Classes are live on Google Meet with your instructor and cohort. Recordings and resources are available to enrolled students after each session."
	},
	{
		q: "How do I pay?",
		a: "We accept MTN Mobile Money and Orange Money. Installments are available for the Full-Stack Pro program."
	},
	{
		q: "Will I get a certificate?",
		a: "Yes. Students who complete the program and capstone project receive an official verifiable certificate from Mira Edge Technologies."
	},
	{
		q: "What if I miss a class?",
		a: "Recordings, resources, and homework remain accessible in your dashboard. Ask questions in your cohort channel any time."
	},
	{
		q: "Do you provide job placement?",
		a: "We provide career preparation — resume, GitHub, portfolio review and mock interviews. Placement is not guaranteed but our alumni network actively refers opportunities."
	}
];
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary",
						children: "FAQ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl font-bold sm:text-6xl",
						children: "Frequently asked"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-12",
					children: FAQS.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `i-${i}`,
						className: "card-elevated mb-3 px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left font-semibold hover:no-underline",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-muted-foreground",
							children: f.a
						})]
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Faq as component };
