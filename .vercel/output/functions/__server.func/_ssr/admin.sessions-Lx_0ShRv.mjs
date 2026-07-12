import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { H as ChartColumn, m as Pencil, p as Plus, s as Trash2 } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
import { t as AdminGuard } from "./AdminGuard-9Ew3Rz2W.mjs";
import { t as StatusBadge } from "./StatusBadge-DVF5UlfU.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-TCrgttyU.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { a as SelectValue, c as TableCell, d as TableRow, i as SelectTrigger, l as TableHead, n as SelectContent, o as Table, r as SelectItem, s as TableBody, t as Select, u as TableHeader } from "./table-AdfiHerr.mjs";
import { t as Textarea } from "./textarea-Cp94w9lz.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as format } from "../_libs/date-fns.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-DO3DZj4v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.sessions-Lx_0ShRv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminSessionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminGuard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSessions, {}) });
}
function AdminSessions() {
	const { user } = useAuthUser();
	const qc = useQueryClient();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [resourceOpen, setResourceOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [resourceSessionId, setResourceSessionId] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		title: "",
		bootcamp_id: "",
		meet_url: "",
		session_date: "",
		start_time: "09:00",
		end_time: "11:00",
		status: "scheduled",
		description: ""
	});
	const [resourceForm, setResourceForm] = (0, import_react.useState)({
		title: "",
		file_url: "",
		description: ""
	});
	const { data: bootcamps } = useQuery({
		queryKey: ["admin-bootcamps-select"],
		queryFn: async () => {
			const { data } = await supabase.from("bootcamps").select("id, title").order("title");
			return data ?? [];
		}
	});
	const { data: sessions, isLoading } = useQuery({
		queryKey: ["admin-sessions"],
		queryFn: async () => {
			const { data, error } = await supabase.from("sessions").select("*, bootcamp:bootcamps(title)").order("session_date", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: attendanceStats } = useQuery({
		queryKey: ["admin-attendance-stats"],
		queryFn: async () => {
			const { data, error } = await supabase.from("attendance").select("session_id, student_id, joined_at, session:sessions(title, session_date), student:profiles(full_name)");
			if (error) throw error;
			const bySession = /* @__PURE__ */ new Map();
			for (const row of data ?? []) {
				const sid = row.session_id;
				const existing = bySession.get(sid) ?? {
					title: row.session?.title ?? "Session",
					date: row.session?.session_date ?? "",
					count: 0,
					rows: []
				};
				existing.count += 1;
				existing.rows.push(row);
				bySession.set(sid, existing);
			}
			return [...bySession.entries()].map(([id, v]) => ({
				id,
				...v
			}));
		}
	});
	const save = useMutation({
		mutationFn: async () => {
			if (!form.title?.trim() || !form.bootcamp_id || !form.meet_url?.trim() || !form.session_date) throw new Error("Fill required fields");
			const payload = {
				title: form.title.trim(),
				bootcamp_id: form.bootcamp_id,
				meet_url: form.meet_url.trim(),
				session_date: form.session_date,
				start_time: form.start_time || "09:00",
				end_time: form.end_time || "11:00",
				status: form.status || "scheduled",
				description: form.description?.trim() || null,
				created_by: user?.id ?? null
			};
			if (editing) {
				const { error } = await supabase.from("sessions").update(payload).eq("id", editing.id);
				if (error) throw error;
			} else {
				const { error } = await supabase.from("sessions").insert(payload);
				if (error) throw error;
			}
		},
		onSuccess: () => {
			toast.success(editing ? "Session updated" : "Session created");
			setOpen(false);
			setEditing(null);
			qc.invalidateQueries({ queryKey: ["admin-sessions"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const addResource = useMutation({
		mutationFn: async () => {
			const session = sessions?.find((s) => s.id === resourceSessionId);
			if (!session || !resourceForm.title.trim() || !resourceForm.file_url.trim()) throw new Error("Title and file URL required");
			const { error } = await supabase.from("resources").insert({
				bootcamp_id: session.bootcamp_id,
				session_id: session.id,
				title: resourceForm.title.trim(),
				file_url: resourceForm.file_url.trim(),
				description: resourceForm.description.trim() || null,
				uploaded_by: user?.id ?? null
			});
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Resource added");
			setResourceOpen(false);
			setResourceForm({
				title: "",
				file_url: "",
				description: ""
			});
		},
		onError: (e) => toast.error(e.message)
	});
	const remove = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("sessions").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Session deleted");
			qc.invalidateQueries({ queryKey: ["admin-sessions"] });
			qc.invalidateQueries({ queryKey: ["admin-attendance-stats"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const openCreate = () => {
		setEditing(null);
		setForm({
			title: "",
			bootcamp_id: bootcamps?.[0]?.id ?? "",
			meet_url: "",
			session_date: "",
			start_time: "09:00",
			end_time: "11:00",
			status: "scheduled",
			description: ""
		});
		setOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "admin",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold",
					children: "Sessions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted-foreground",
					children: "Schedule live classes and track attendance."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: openCreate,
					className: "rounded-full bg-brand-gradient text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " New session"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "sessions",
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "sessions",
						children: "All sessions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "attendance",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "mr-2 h-4 w-4" }), "Attendance"]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "sessions",
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-elevated overflow-hidden p-0",
							children: [isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "p-6 text-muted-foreground",
								children: "Loading…"
							}), !isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Session" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Bootcamp" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Date" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-right",
									children: "Actions"
								})
							] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: (sessions ?? []).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										s.start_time?.slice(0, 5),
										" – ",
										s.end_time?.slice(0, 5)
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: s.bootcamp?.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: format(new Date(s.session_date), "PP") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: s.status }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
									className: "text-right space-x-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "ghost",
											onClick: () => {
												setResourceSessionId(s.id);
												setResourceOpen(true);
											},
											children: "Resource"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "ghost",
											onClick: () => {
												setEditing(s);
												setForm(s);
												setOpen(true);
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "ghost",
											className: "text-destructive",
											onClick: () => remove.mutate(s.id),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
										})
									]
								})
							] }, s.id)) })] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "attendance",
						className: "mt-4 space-y-4",
						children: [(attendanceStats ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "No attendance recorded yet."
						}), (attendanceStats ?? []).map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-elevated p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: group.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: group.date && format(new Date(group.date), "PP")
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl font-bold text-primary",
									children: group.count
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-1 text-sm text-muted-foreground",
								children: group.rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									r.student?.full_name ?? "Student",
									" — ",
									format(new Date(r.joined_at), "PPp")
								] }, r.student_id + r.joined_at))
							})]
						}, group.id))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[90vh] overflow-y-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editing ? "Edit session" : "New session" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 py-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Bootcamp" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: form.bootcamp_id ?? "",
									onValueChange: (v) => setForm((f) => ({
										...f,
										bootcamp_id: v
									})),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select bootcamp" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: (bootcamps ?? []).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: b.id,
										children: b.title
									}, b.id)) })]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: form.title ?? "",
									onChange: (e) => setForm((f) => ({
										...f,
										title: e.target.value
									}))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Google Meet URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: form.meet_url ?? "",
									onChange: (e) => setForm((f) => ({
										...f,
										meet_url: e.target.value
									}))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "date",
											value: form.session_date ?? "",
											onChange: (e) => setForm((f) => ({
												...f,
												session_date: e.target.value
											}))
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Start" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "time",
											value: form.start_time?.slice(0, 5) ?? "",
											onChange: (e) => setForm((f) => ({
												...f,
												start_time: e.target.value
											}))
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "End" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "time",
											value: form.end_time?.slice(0, 5) ?? "",
											onChange: (e) => setForm((f) => ({
												...f,
												end_time: e.target.value
											}))
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: form.status ?? "scheduled",
									onValueChange: (v) => setForm((f) => ({
										...f,
										status: v
									})),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "scheduled",
											children: "Scheduled"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "live",
											children: "Live"
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
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: form.description ?? "",
									onChange: (e) => setForm((f) => ({
										...f,
										description: e.target.value
									}))
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setOpen(false),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => save.mutate(),
							disabled: save.isPending,
							className: "bg-brand-gradient text-white",
							children: "Save"
						})] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: resourceOpen,
				onOpenChange: setResourceOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Add resource" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: resourceForm.title,
								onChange: (e) => setResourceForm({
									...resourceForm,
									title: e.target.value
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "File URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: resourceForm.file_url,
								onChange: (e) => setResourceForm({
									...resourceForm,
									file_url: e.target.value
								}),
								placeholder: "https://…"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: resourceForm.description,
								onChange: (e) => setResourceForm({
									...resourceForm,
									description: e.target.value
								})
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setResourceOpen(false),
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => addResource.mutate(),
						disabled: addResource.isPending,
						className: "bg-brand-gradient text-white",
						children: "Add"
					})] })
				] })
			})
		]
	});
}
//#endregion
export { AdminSessionsPage as component };
