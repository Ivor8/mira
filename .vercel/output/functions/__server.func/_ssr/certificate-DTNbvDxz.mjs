import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { L as CircleCheck, P as CircleX, d as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as SiteFooter, r as SiteHeader } from "./SiteFooter-B8AmoCCx.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { t as format } from "../_libs/date-fns.mjs";
import { t as Route } from "./certificate-BnV5_pj-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/certificate-DTNbvDxz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Verify() {
	const { code: initialCode } = Route.useSearch();
	const [code, setCode] = (0, import_react.useState)(initialCode);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const check = async (e) => {
		e?.preventDefault();
		setBusy(true);
		const { data } = await supabase.from("certificates").select("certificate_code, issued_at, bootcamp:bootcamps(title), student:profiles(full_name)").eq("certificate_code", code.trim().toUpperCase()).maybeSingle();
		setBusy(false);
		setResult({
			found: !!data,
			...data
		});
	};
	(0, import_react.useEffect)(() => {
		if (initialCode) check();
	}, [initialCode]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-2xl px-4 pt-32 pb-24 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mx-auto h-10 w-10 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-display text-4xl font-bold sm:text-5xl",
								children: "Verify a certificate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "Enter the certificate code (e.g. MEA-ABC12345) printed on any Mira Edge Academy certificate."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: check,
						className: "card-elevated mt-10 space-y-4 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "code",
							children: "Certificate code"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "code",
							value: code,
							onChange: (e) => setCode(e.target.value),
							placeholder: "MEA-XXXXXXXX",
							required: true
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy,
							className: "w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white",
							children: busy ? "Verifying…" : "Verify"
						})]
					}),
					result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `card-elevated mt-6 p-6 ${result.found ? "border-primary/60" : "border-destructive/60"}`,
						children: result.found ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl font-bold",
									children: "Valid certificate"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: ["Issued to ", result.student?.full_name ?? "—"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground",
									children: ["Bootcamp: ", result.bootcamp?.title ?? "—"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground",
									children: ["Issued: ", result.issued_at ? format(new Date(result.issued_at), "PPP") : "—"]
								})
							] })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-8 w-8 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl font-bold",
								children: "Certificate not found"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Double-check the code, or contact info@miraedge.tech."
							})] })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Verify as component };
