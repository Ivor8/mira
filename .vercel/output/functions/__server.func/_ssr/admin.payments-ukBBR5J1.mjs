import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { p as Plus } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
import { t as AdminGuard } from "./AdminGuard-9Ew3Rz2W.mjs";
import { n as formatXAF } from "./format-LeLbyl3U.mjs";
import { t as StatusBadge } from "./StatusBadge-DVF5UlfU.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-TCrgttyU.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { a as SelectValue, c as TableCell, d as TableRow, i as SelectTrigger, l as TableHead, n as SelectContent, o as Table, r as SelectItem, s as TableBody, t as Select, u as TableHeader } from "./table-AdfiHerr.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.payments-ukBBR5J1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminPaymentsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminGuard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPayments, {}) });
}
function AdminPayments() {
	const { user } = useAuthUser();
	const qc = useQueryClient();
	const [manualOpen, setManualOpen] = (0, import_react.useState)(false);
	const [manual, setManual] = (0, import_react.useState)({
		student_id: "",
		bootcamp_id: "",
		amount: "",
		provider: "manual"
	});
	const { data: payments, isLoading } = useQuery({
		queryKey: ["admin-payments"],
		queryFn: async () => {
			const { data, error } = await supabase.from("payments").select("*, bootcamp:bootcamps(title), student:profiles(full_name)").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: students } = useQuery({
		queryKey: ["admin-student-profiles"],
		queryFn: async () => {
			const { data } = await supabase.from("profiles").select("id, full_name").order("full_name");
			return data ?? [];
		}
	});
	const { data: bootcamps } = useQuery({
		queryKey: ["admin-bootcamps-pay"],
		queryFn: async () => {
			const { data } = await supabase.from("bootcamps").select("id, title, price, currency");
			return data ?? [];
		}
	});
	const updateStatus = useMutation({
		mutationFn: async ({ id, status, registration_id }) => {
			const { error } = await supabase.from("payments").update({ status }).eq("id", id);
			if (error) throw error;
			if (registration_id && status === "successful") {
				await supabase.from("registrations").update({
					payment_status: "successful",
					status: "confirmed"
				}).eq("id", registration_id);
				const pay = payments?.find((p) => p.id === id);
				if (pay?.student_id) await supabase.from("notifications").insert({
					user_id: pay.student_id,
					title: "Payment confirmed",
					body: "Your payment has been confirmed. Welcome to the cohort!",
					link: "/dashboard/payments",
					type: "success"
				});
			}
		},
		onSuccess: () => {
			toast.success("Payment updated");
			qc.invalidateQueries({ queryKey: ["admin-payments"] });
			qc.invalidateQueries({ queryKey: ["admin-registrations"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const createManual = useMutation({
		mutationFn: async () => {
			const bootcamp = bootcamps?.find((b) => b.id === manual.bootcamp_id);
			if (!manual.student_id || !manual.bootcamp_id) throw new Error("Select student and bootcamp");
			const { error } = await supabase.from("payments").insert({
				student_id: manual.student_id,
				bootcamp_id: manual.bootcamp_id,
				amount: Number(manual.amount) || bootcamp?.price || 0,
				currency: bootcamp?.currency ?? "XAF",
				provider: "manual",
				status: "successful"
			});
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Manual payment recorded");
			setManualOpen(false);
			qc.invalidateQueries({ queryKey: ["admin-payments"] });
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "admin",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold",
					children: "Payments"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted-foreground",
					children: "Review and confirm student payments."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setManualOpen(true),
					className: "rounded-full bg-brand-gradient text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Manual payment"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-elevated mt-8 overflow-hidden p-0",
				children: [isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "p-6 text-muted-foreground",
					children: "Loading…"
				}), !isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Student" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Bootcamp" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Amount" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Provider" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Phone" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Date" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Action"
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: (payments ?? []).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: p.student?.full_name ?? "—" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: p.bootcamp?.title ?? "—" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: formatXAF(p.amount, p.currency) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "capitalize",
						children: p.provider.replace(/_/g, " ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-muted-foreground",
						children: p.phone_number ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: p.status }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-muted-foreground",
						children: format(new Date(p.created_at), "PP")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right",
						children: p.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-end gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								className: "rounded-full",
								onClick: () => updateStatus.mutate({
									id: p.id,
									status: "successful",
									registration_id: p.registration_id
								}),
								children: "Confirm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								className: "text-destructive rounded-full",
								onClick: () => updateStatus.mutate({
									id: p.id,
									status: "failed"
								}),
								children: "Reject"
							})]
						})
					})
				] }, p.id)) })] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: manualOpen,
				onOpenChange: setManualOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Record manual payment" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Student" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: manual.student_id,
								onValueChange: (v) => setManual({
									...manual,
									student_id: v
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select student" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: (students ?? []).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: s.id,
									children: s.full_name ?? s.id.slice(0, 8)
								}, s.id)) })]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Bootcamp" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: manual.bootcamp_id,
								onValueChange: (v) => {
									const b = bootcamps?.find((x) => x.id === v);
									setManual({
										...manual,
										bootcamp_id: v,
										amount: String(b?.price ?? "")
									});
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select bootcamp" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: (bootcamps ?? []).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: b.id,
									children: b.title
								}, b.id)) })]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: manual.amount,
								onChange: (e) => setManual({
									...manual,
									amount: e.target.value
								})
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setManualOpen(false),
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => createManual.mutate(),
						className: "bg-brand-gradient text-white",
						children: "Save"
					})] })
				] })
			})
		]
	});
}
//#endregion
export { AdminPaymentsPage as component };
