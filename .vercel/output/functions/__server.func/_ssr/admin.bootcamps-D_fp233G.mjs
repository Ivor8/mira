import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { m as Pencil, p as Plus, s as Trash2 } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Nmyt4V5J.mjs";
import { t as AdminGuard } from "./AdminGuard-9Ew3Rz2W.mjs";
import { n as formatXAF } from "./format-LeLbyl3U.mjs";
import { t as StatusBadge } from "./StatusBadge-DVF5UlfU.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-TCrgttyU.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { a as SelectValue, c as TableCell, d as TableRow, i as SelectTrigger, l as TableHead, n as SelectContent, o as Table, r as SelectItem, s as TableBody, t as Select, u as TableHeader } from "./table-AdfiHerr.mjs";
import { t as Textarea } from "./textarea-Cp94w9lz.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.bootcamps-D_fp233G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function slugify(value) {
	return value.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var emptyForm = () => ({
	title: "",
	slug: "",
	short_description: "",
	description: "",
	cover_image_url: "",
	price: 0,
	currency: "XAF",
	max_seats: 30,
	duration_weeks: 8,
	status: "draft",
	start_date: "",
	end_date: "",
	registration_deadline: ""
});
function AdminBootcampsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminGuard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminBootcamps, {}) });
}
function AdminBootcamps() {
	const { user } = useAuthUser();
	const qc = useQueryClient();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)(emptyForm());
	const { data: bootcamps, isLoading } = useQuery({
		queryKey: ["admin-bootcamps"],
		queryFn: async () => {
			const { data, error } = await supabase.from("bootcamps").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const save = useMutation({
		mutationFn: async () => {
			if (!form.title?.trim()) throw new Error("Title is required");
			const slug = form.slug?.trim() || slugify(form.title);
			const payload = {
				title: form.title.trim(),
				slug,
				short_description: form.short_description?.trim() || null,
				description: form.description?.trim() || null,
				cover_image_url: form.cover_image_url?.trim() || null,
				price: Number(form.price) || 0,
				currency: form.currency || "XAF",
				max_seats: Number(form.max_seats) || 30,
				duration_weeks: Number(form.duration_weeks) || 8,
				status: form.status || "draft",
				start_date: form.start_date || null,
				end_date: form.end_date || null,
				registration_deadline: form.registration_deadline || null,
				created_by: user?.id ?? null
			};
			if (editing) {
				const { error } = await supabase.from("bootcamps").update(payload).eq("id", editing.id);
				if (error) throw error;
			} else {
				const { error } = await supabase.from("bootcamps").insert(payload);
				if (error) throw error;
			}
		},
		onSuccess: () => {
			toast.success(editing ? "Bootcamp updated" : "Bootcamp created");
			setOpen(false);
			setEditing(null);
			setForm(emptyForm());
			qc.invalidateQueries({ queryKey: ["admin-bootcamps"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const remove = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("bootcamps").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Bootcamp deleted");
			qc.invalidateQueries({ queryKey: ["admin-bootcamps"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const openCreate = () => {
		setEditing(null);
		setForm(emptyForm());
		setOpen(true);
	};
	const openEdit = (b) => {
		setEditing(b);
		setForm({ ...b });
		setOpen(true);
	};
	const set = (key, value) => setForm((f) => ({
		...f,
		[key]: value
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "admin",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold",
					children: "Bootcamps"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted-foreground",
					children: "Create and manage bootcamp programs."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: openCreate,
					className: "rounded-full bg-brand-gradient text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " New bootcamp"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-elevated mt-8 overflow-hidden p-0",
				children: [isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "p-6 text-muted-foreground",
					children: "Loading…"
				}), !isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Title" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Seats" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Price" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Actions"
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: (bootcamps ?? []).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: b.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: b.slug
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: b.status }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [
						b.seats_taken,
						"/",
						b.max_seats
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: formatXAF(b.price, b.currency) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => openEdit(b),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							className: "text-destructive",
							onClick: () => remove.mutate(b.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
						})]
					})
				] }, b.id)) })] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[90vh] overflow-y-auto sm:max-w-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editing ? "Edit bootcamp" : "New bootcamp" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 py-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: form.title ?? "",
									onChange: (e) => {
										set("title", e.target.value);
										if (!editing) set("slug", slugify(e.target.value));
									}
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Slug" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: form.slug ?? "",
									onChange: (e) => set("slug", e.target.value)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Short description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: form.short_description ?? "",
									onChange: (e) => set("short_description", e.target.value)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									rows: 4,
									value: form.description ?? "",
									onChange: (e) => set("description", e.target.value)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Cover image URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: form.cover_image_url ?? "",
									onChange: (e) => set("cover_image_url", e.target.value)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Price" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										value: form.price ?? 0,
										onChange: (e) => set("price", e.target.value)
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Max seats" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										value: form.max_seats ?? 30,
										onChange: (e) => set("max_seats", e.target.value)
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: form.status ?? "draft",
									onValueChange: (v) => set("status", v),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "draft",
											children: "Draft"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "published",
											children: "Published"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "closed",
											children: "Closed"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "archived",
											children: "Archived"
										})
									] })]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Start" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "date",
											value: form.start_date ?? "",
											onChange: (e) => set("start_date", e.target.value)
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "End" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "date",
											value: form.end_date ?? "",
											onChange: (e) => set("end_date", e.target.value)
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Reg. deadline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "date",
											value: form.registration_deadline ?? "",
											onChange: (e) => set("registration_deadline", e.target.value)
										})] })
									]
								})
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
							children: save.isPending ? "Saving…" : "Save"
						})] })
					]
				})
			})
		]
	});
}
//#endregion
export { AdminBootcampsPage as component };
