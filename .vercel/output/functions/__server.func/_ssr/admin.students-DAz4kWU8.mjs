import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { G as Award, g as MessageSquare } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
import { t as AdminGuard } from "./AdminGuard-9Ew3Rz2W.mjs";
import { t as StatusBadge } from "./StatusBadge-DVF5UlfU.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-TCrgttyU.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { a as SelectValue, c as TableCell, d as TableRow, i as SelectTrigger, l as TableHead, n as SelectContent, o as Table, r as SelectItem, s as TableBody, t as Select, u as TableHeader } from "./table-AdfiHerr.mjs";
import { t as Textarea } from "./textarea-Cp94w9lz.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as format } from "../_libs/date-fns.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-DO3DZj4v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.students-DAz4kWU8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminStudentsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminGuard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminStudents, {}) });
}
function AdminStudents() {
	const qc = useQueryClient();
	const [ticketDialog, setTicketDialog] = (0, import_react.useState)(null);
	const { data: registrations, isLoading } = useQuery({
		queryKey: ["admin-registrations"],
		queryFn: async () => {
			const { data, error } = await supabase.from("registrations").select("*, bootcamp:bootcamps(title), student:profiles(full_name, phone)").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: tickets } = useQuery({
		queryKey: ["admin-tickets"],
		queryFn: async () => {
			const { data, error } = await supabase.from("support_tickets").select("*, user:profiles(full_name)").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const updateReg = useMutation({
		mutationFn: async ({ id, status, payment_status }) => {
			const patch = {};
			if (status) patch.status = status;
			if (payment_status) patch.payment_status = payment_status;
			const { error } = await supabase.from("registrations").update(patch).eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Registration updated");
			qc.invalidateQueries({ queryKey: ["admin-registrations"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const issueCert = useMutation({
		mutationFn: async ({ student_id, bootcamp_id }) => {
			const { error } = await supabase.from("certificates").insert({
				student_id,
				bootcamp_id
			});
			if (error) throw error;
			await supabase.from("notifications").insert({
				user_id: student_id,
				title: "Certificate issued",
				body: "Congratulations! Your bootcamp certificate is ready.",
				link: "/dashboard/certificates",
				type: "success"
			});
		},
		onSuccess: () => toast.success("Certificate issued"),
		onError: (e) => toast.error(e.message)
	});
	const respondTicket = useMutation({
		mutationFn: async () => {
			if (!ticketDialog) return;
			const ticket = tickets?.find((t) => t.id === ticketDialog.id);
			const { error } = await supabase.from("support_tickets").update({
				response: ticketDialog.response,
				status: "resolved"
			}).eq("id", ticketDialog.id);
			if (error) throw error;
			if (ticket?.user_id) await supabase.from("notifications").insert({
				user_id: ticket.user_id,
				title: "Support ticket updated",
				body: "Our team has responded to your support request.",
				link: "/dashboard/support",
				type: "info"
			});
		},
		onSuccess: () => {
			toast.success("Response sent");
			setTicketDialog(null);
			qc.invalidateQueries({ queryKey: ["admin-tickets"] });
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "admin",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Students"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted-foreground",
				children: "Manage enrollments, certificates, and support tickets."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "enrollments",
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "enrollments",
						children: "Enrollments"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "tickets",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "mr-2 h-4 w-4" }), "Support tickets"]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "enrollments",
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-elevated overflow-hidden p-0",
							children: [isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "p-6 text-muted-foreground",
								children: "Loading…"
							}), !isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Student" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Bootcamp" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Payment" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-right",
									children: "Actions"
								})
							] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: (registrations ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: r.student?.full_name ?? "—"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: r.student?.phone
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: r.bootcamp?.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: r.status,
									onValueChange: (v) => updateReg.mutate({
										id: r.id,
										status: v
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "h-8 w-32",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "reserved",
											children: "Reserved"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "confirmed",
											children: "Confirmed"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "completed",
											children: "Completed"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "cancelled",
											children: "Cancelled"
										})
									] })]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.payment_status }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "secondary",
										className: "rounded-full",
										onClick: () => issueCert.mutate({
											student_id: r.student_id,
											bootcamp_id: r.bootcamp_id
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mr-1 h-3 w-3" }), " Cert"]
									})
								})
							] }, r.id)) })] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "tickets",
						className: "mt-4 space-y-3",
						children: [(tickets ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "No support tickets."
						}), (tickets ?? []).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-elevated p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: t.subject
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [
											t.user?.full_name,
											" · ",
											format(new Date(t.created_at), "PPp")
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: t.status })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground whitespace-pre-wrap",
									children: t.message
								}),
								t.response && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 rounded-xl bg-muted/40 p-3 text-sm",
									children: t.response
								}),
								t.status !== "resolved" && t.status !== "closed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									className: "mt-3 rounded-full",
									variant: "outline",
									onClick: () => setTicketDialog({
										id: t.id,
										response: ""
									}),
									children: "Respond"
								})
							]
						}, t.id))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!ticketDialog,
				onOpenChange: () => setTicketDialog(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Respond to ticket" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Response" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 5,
						value: ticketDialog?.response ?? "",
						onChange: (e) => setTicketDialog((d) => d ? {
							...d,
							response: e.target.value
						} : null)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setTicketDialog(null),
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => respondTicket.mutate(),
						className: "bg-brand-gradient text-white",
						children: "Send"
					})] })
				] })
			})
		]
	});
}
//#endregion
export { AdminStudentsPage as component };
