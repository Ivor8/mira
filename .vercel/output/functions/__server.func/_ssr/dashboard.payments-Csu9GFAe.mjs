import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
import { n as formatXAF } from "./format-LeLbyl3U.mjs";
import { t as StatusBadge } from "./StatusBadge-DVF5UlfU.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { a as SelectValue, c as TableCell, d as TableRow, i as SelectTrigger, l as TableHead, n as SelectContent, o as Table, r as SelectItem, s as TableBody, t as Select, u as TableHeader } from "./table-AdfiHerr.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.payments-Csu9GFAe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StudentPayments() {
	const { user } = useAuthUser();
	const qc = useQueryClient();
	const [bootcampId, setBootcampId] = (0, import_react.useState)("");
	const [provider, setProvider] = (0, import_react.useState)("mtn_momo");
	const [phone, setPhone] = (0, import_react.useState)("");
	const { data: regs } = useQuery({
		queryKey: ["my-regs-pay", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data } = await supabase.from("registrations").select("*, bootcamp:bootcamps(id, title, price, currency)").eq("student_id", user.id).in("payment_status", ["pending", "failed"]);
			return data ?? [];
		}
	});
	const { data: payments, isLoading } = useQuery({
		queryKey: ["my-payments", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("payments").select("*, bootcamp:bootcamps(title)").eq("student_id", user.id).order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const submitPayment = useMutation({
		mutationFn: async () => {
			const reg = regs?.find((r) => r.bootcamp_id === bootcampId);
			if (!reg?.bootcamp) throw new Error("Select a bootcamp");
			if (!phone.trim()) throw new Error("Enter your mobile money number");
			const { error } = await supabase.from("payments").insert({
				student_id: user.id,
				bootcamp_id: reg.bootcamp_id,
				registration_id: reg.id,
				amount: reg.bootcamp.price,
				currency: reg.bootcamp.currency,
				provider,
				phone_number: phone.trim(),
				status: "pending"
			});
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Payment submitted — an admin will confirm once received.");
			setPhone("");
			setBootcampId("");
			qc.invalidateQueries({ queryKey: ["my-payments"] });
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Payments"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted-foreground",
				children: "Submit MTN MoMo or Orange Money payments for your enrollments."
			}),
			(regs ?? []).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-elevated mt-8 space-y-4 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold",
						children: "Submit a payment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Bootcamp" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: bootcampId,
								onValueChange: setBootcampId,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select bootcamp" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: (regs ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
									value: r.bootcamp_id,
									children: [
										r.bootcamp?.title,
										" — ",
										formatXAF(r.bootcamp?.price ?? 0, r.bootcamp?.currency)
									]
								}, r.id)) })]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Provider" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: provider,
								onValueChange: (v) => setProvider(v),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "mtn_momo",
									children: "MTN MoMo"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "orange_money",
									children: "Orange Money"
								})] })]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Phone number" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: phone,
									onChange: (e) => setPhone(e.target.value),
									placeholder: "+237 6XX XXX XXX"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => submitPayment.mutate(),
						disabled: submitPayment.isPending || !bootcampId,
						className: "rounded-full bg-brand-gradient text-white",
						children: submitPayment.isPending ? "Submitting…" : "Submit payment"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-elevated mt-8 overflow-hidden p-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b border-border/60 px-6 py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-bold",
							children: "Payment history"
						})
					}),
					isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "p-6 text-muted-foreground",
						children: "Loading…"
					}),
					!isLoading && (payments ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "p-6 text-sm text-muted-foreground",
						children: "No payments yet."
					}),
					(payments ?? []).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Bootcamp" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Amount" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Provider" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Date" })
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: (payments ?? []).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: p.bootcamp?.title ?? "—" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: formatXAF(p.amount, p.currency) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "capitalize",
							children: p.provider.replace(/_/g, " ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: p.status }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-muted-foreground",
							children: format(new Date(p.created_at), "PP")
						})
					] }, p.id)) })] })
				]
			})
		]
	});
}
//#endregion
export { StudentPayments as component };
