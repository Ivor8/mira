import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
import { t as StatusBadge } from "./StatusBadge-DVF5UlfU.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { t as Textarea } from "./textarea-Cp94w9lz.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as format } from "../_libs/date-fns.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.support-CjBZ207n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ticketSchema = objectType({
	subject: stringType().trim().min(3).max(200),
	message: stringType().trim().min(10).max(3e3)
});
function StudentSupport() {
	const { user } = useAuthUser();
	const qc = useQueryClient();
	const [form, setForm] = (0, import_react.useState)({
		subject: "",
		message: ""
	});
	const { data: tickets, isLoading } = useQuery({
		queryKey: ["my-tickets", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("support_tickets").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const createTicket = useMutation({
		mutationFn: async () => {
			const parsed = ticketSchema.safeParse(form);
			if (!parsed.success) throw new Error(parsed.error.issues[0]?.message ?? "Invalid input");
			const { error } = await supabase.from("support_tickets").insert({
				user_id: user.id,
				subject: parsed.data.subject,
				message: parsed.data.message
			});
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Support ticket submitted");
			setForm({
				subject: "",
				message: ""
			});
			qc.invalidateQueries({ queryKey: ["my-tickets"] });
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Support"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted-foreground",
				children: "Open a ticket and track responses from our team."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					createTicket.mutate();
				},
				className: "card-elevated mt-8 max-w-xl space-y-4 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold",
						children: "New ticket"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "subject",
						children: "Subject"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "subject",
						value: form.subject,
						onChange: (e) => setForm({
							...form,
							subject: e.target.value
						}),
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "message",
						children: "Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "message",
						rows: 5,
						value: form.message,
						onChange: (e) => setForm({
							...form,
							message: e.target.value
						}),
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: createTicket.isPending,
						className: "rounded-full bg-brand-gradient text-white",
						children: createTicket.isPending ? "Submitting…" : "Submit ticket"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-bold",
						children: "Your tickets"
					}),
					isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Loading…"
					}),
					!isLoading && (tickets ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "No tickets yet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-3",
						children: (tickets ?? []).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-elevated p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: t.subject
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: t.status })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground whitespace-pre-wrap",
									children: t.message
								}),
								t.response && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 rounded-xl bg-muted/40 p-4 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
										children: "Team response"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 whitespace-pre-wrap",
										children: t.response
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-muted-foreground",
									children: format(new Date(t.created_at), "PPp")
								})
							]
						}, t.id))
					})
				]
			})
		]
	});
}
//#endregion
export { StudentSupport as component };
