import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { A as redirect, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$31 } from "./auth-Bpb16ABY.mjs";
import { n as Route$32 } from "./routes-BGxe_4wa.mjs";
import { t as Route$33 } from "./bootcamps._slug-BZwUyNhu.mjs";
import { t as Route$34 } from "./certificate-BnV5_pj-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CSVwgbLh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DhZvj8Og.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-8xl font-bold text-brand-gradient",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-2xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/30 transition hover:opacity-90",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try again or head home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-primary/30",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-border px-5 py-2.5 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var TITLE = "Mira Edge Academy — Live Full-Stack & AI Bootcamps";
var DESCRIPTION = "Become a professional full-stack developer with live instructor-led bootcamps in modern web technologies and AI-assisted development. Real projects, official certificates, career-ready skills.";
var Route$30 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: TITLE },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				name: "author",
				content: "Mira Edge Technologies"
			},
			{
				property: "og:title",
				content: TITLE
			},
			{
				property: "og:description",
				content: DESCRIPTION
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@MiraEdge"
			},
			{
				name: "theme-color",
				content: "#0b1230"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$30.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((event) => {
			if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
			router.invalidate();
			if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
		});
		return () => sub.subscription.unsubscribe();
	}, [router, queryClient]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
var $$splitComponentImporter$26 = () => import("./terms-BgrL-yHk.mjs");
var Route$29 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms — Mira Edge Academy" }] }),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./support-DcpdFOeX.mjs");
var Route$28 = createFileRoute("/support")({
	head: () => ({ meta: [{ title: "Support — Mira Edge Academy" }] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./reset-password-D65jDX_z.mjs");
var Route$27 = createFileRoute("/reset-password")({
	head: () => ({ meta: [{ title: "Set new password — Mira Edge Academy" }] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./privacy-Law5L5M_.mjs");
var Route$26 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy — Mira Edge Academy" }] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./pricing-B5sxmNel.mjs");
var Route$25 = createFileRoute("/pricing")({
	head: () => ({ meta: [{ title: "Pricing — Mira Edge Academy" }, {
		name: "description",
		content: "Flexible pricing for our live full-stack bootcamps."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./forgot-password-2PajvZsJ.mjs");
var Route$24 = createFileRoute("/forgot-password")({
	head: () => ({ meta: [{ title: "Reset password — Mira Edge Academy" }] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./faq-CbP50bDp.mjs");
var Route$23 = createFileRoute("/faq")({
	head: () => ({ meta: [{ title: "FAQ — Mira Edge Academy" }] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./contact-BkEWQ7t-.mjs");
var Route$22 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact — Mira Edge Academy" }, {
		name: "description",
		content: "Talk to the Mira Edge Academy team."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./bootcamps-B_0asNQp.mjs");
var Route$21 = createFileRoute("/bootcamps")({
	head: () => ({ meta: [
		{ title: "Bootcamps — Mira Edge Academy" },
		{
			name: "description",
			content: "Browse upcoming live cohorts in full-stack web development and AI-assisted engineering."
		},
		{
			property: "og:title",
			content: "Bootcamps — Mira Edge Academy"
		},
		{
			property: "og:description",
			content: "Browse upcoming bootcamps."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./about-DdOUaDkI.mjs");
var Route$20 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About — Mira Edge Academy" }, {
		name: "description",
		content: "Mira Edge Academy is a premium online academy training modern full-stack engineers."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./route-Di7iQBCH.mjs");
var Route$19 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./dashboard-0l81t6zv.mjs");
var Route$18 = createFileRoute("/_authenticated/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./admin-DIpP_CsA.mjs");
var Route$17 = createFileRoute("/_authenticated/admin")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./dashboard.index-CMSKHnDN.mjs");
var Route$16 = createFileRoute("/_authenticated/dashboard/")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./admin.index-D8baAaDX.mjs");
var Route$15 = createFileRoute("/_authenticated/admin/")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var Route$14 = createFileRoute("/api/public/seed-admin")({ server: { handlers: { POST: async () => {
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const users = [{
		email: "admin@miraedge.tech",
		password: "Admin@12345",
		full_name: "Mira Edge Admin",
		roles: ["super_admin", "admin"]
	}, {
		email: "student@miraedge.tech",
		password: "Student@12345",
		full_name: "Demo Student",
		roles: ["student"]
	}];
	const results = [];
	for (const u of users) {
		const { data: list } = await supabaseAdmin.auth.admin.listUsers({
			page: 1,
			perPage: 200
		});
		let existing = list?.users.find((x) => x.email === u.email);
		if (!existing) {
			const { data, error } = await supabaseAdmin.auth.admin.createUser({
				email: u.email,
				password: u.password,
				email_confirm: true,
				user_metadata: { full_name: u.full_name }
			});
			if (error) {
				results.push({
					email: u.email,
					error: error.message
				});
				continue;
			}
			existing = data.user;
		}
		if (!existing) continue;
		for (const role of u.roles) await supabaseAdmin.from("user_roles").upsert({
			user_id: existing.id,
			role
		}, { onConflict: "user_id,role" });
		results.push({
			email: u.email,
			id: existing.id,
			ok: true
		});
	}
	return new Response(JSON.stringify({ results }, null, 2), { headers: { "content-type": "application/json" } });
} } } });
var Route$13 = createFileRoute("/api/payments/status")({ server: { handlers: { GET: async ({ request }) => {
	try {
		const { searchParams } = new URL(request.url);
		const transId = searchParams.get("transId");
		if (!transId) return new Response(JSON.stringify({ error: "Missing query parameter: transId" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
		const { data: dbPayment, error: dbPayError } = await supabaseAdmin.from("payments").select("*").eq("transaction_ref", transId).maybeSingle();
		if (dbPayError) {
			console.error("Fetch local payment error:", dbPayError);
			return new Response(JSON.stringify({ error: "Database query error" }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
		if (!dbPayment) return new Response(JSON.stringify({ error: "Payment transaction not found in local database" }), {
			status: 404,
			headers: { "Content-Type": "application/json" }
		});
		if (!dbPayment.bootcamp_id || !dbPayment.student_id) return new Response(JSON.stringify({ error: "Invalid payment record in database: missing bootcamp_id or student_id" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		if (dbPayment.status === "successful") return new Response(JSON.stringify({
			status: "SUCCESSFUL",
			message: "Payment already confirmed successful"
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
		if (dbPayment.status === "failed") return new Response(JSON.stringify({
			status: "FAILED",
			message: "Payment already marked as failed"
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
		const FAPSHI_API_USER = process.env.FAPSHI_API_USER;
		const FAPSHI_API_KEY = process.env.FAPSHI_API_KEY;
		const FAPSHI_BASE_URL = process.env.FAPSHI_BASE_URL || "https://sandbox.fapshi.com";
		const isMockMode = transId.startsWith("mock_") || !FAPSHI_API_USER || !FAPSHI_API_KEY || FAPSHI_API_USER === "YOUR_FAPSHI_API_USER";
		let fapshiStatus = "PENDING";
		let fapshiData;
		if (isMockMode) {
			const currentMetadata = dbPayment.metadata || {};
			const pollCount = (currentMetadata.mockPollCount ?? 0) + 1;
			await supabaseAdmin.from("payments").update({ metadata: {
				...currentMetadata,
				mockPollCount: pollCount
			} }).eq("id", dbPayment.id);
			if (pollCount >= 2) if (dbPayment.phone_number === "690000001" || dbPayment.phone_number?.endsWith("000001")) fapshiStatus = "FAILED";
			else fapshiStatus = "SUCCESSFUL";
			else fapshiStatus = "PENDING";
			fapshiData = {
				status: fapshiStatus,
				mock: true,
				pollCount
			};
		} else {
			const fapshiRes = await fetch(`${FAPSHI_BASE_URL}/payment-status/${transId}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"apiuser": FAPSHI_API_USER,
					"apikey": FAPSHI_API_KEY
				}
			});
			fapshiData = await fapshiRes.json();
			if (!fapshiRes.ok || !fapshiData.status) return new Response(JSON.stringify({ error: fapshiData.message || fapshiData.error || "Fapshi check status request failed" }), {
				status: fapshiRes.status || 400,
				headers: { "Content-Type": "application/json" }
			});
			fapshiStatus = fapshiData.status;
		}
		if (fapshiStatus === "SUCCESSFUL") {
			const { data: existingReg, error: regSelectError } = await supabaseAdmin.from("registrations").select("*").eq("bootcamp_id", dbPayment.bootcamp_id).eq("student_id", dbPayment.student_id).maybeSingle();
			if (regSelectError) {
				console.error("Check existing registration error:", regSelectError);
				return new Response(JSON.stringify({ error: "Database error checking existing registration" }), {
					status: 500,
					headers: { "Content-Type": "application/json" }
				});
			}
			let regId = existingReg?.id;
			if (existingReg) {
				const { error: regUpdateError } = await supabaseAdmin.from("registrations").update({
					status: "confirmed",
					payment_status: "successful"
				}).eq("id", existingReg.id);
				if (regUpdateError) {
					console.error("Update registration error:", regUpdateError);
					return new Response(JSON.stringify({ error: "Database error updating registration" }), {
						status: 500,
						headers: { "Content-Type": "application/json" }
					});
				}
			} else {
				const { data: newReg, error: regInsertError } = await supabaseAdmin.from("registrations").insert({
					bootcamp_id: dbPayment.bootcamp_id,
					student_id: dbPayment.student_id,
					status: "confirmed",
					payment_status: "successful"
				}).select("id").single();
				if (regInsertError) {
					console.error("Insert registration error:", regInsertError);
					return new Response(JSON.stringify({ error: regInsertError.message || "Database error enclosing registration" }), {
						status: 500,
						headers: { "Content-Type": "application/json" }
					});
				}
				regId = newReg.id;
			}
			const currentMetadata = dbPayment.metadata || {};
			const { error: payUpdateError } = await supabaseAdmin.from("payments").update({
				status: "successful",
				registration_id: regId,
				metadata: {
					...currentMetadata,
					fapshiStatusResponse: fapshiData
				}
			}).eq("id", dbPayment.id);
			if (payUpdateError) {
				console.error("Update payment status error:", payUpdateError);
				return new Response(JSON.stringify({ error: "Database error updating payment record" }), {
					status: 500,
					headers: { "Content-Type": "application/json" }
				});
			}
			return new Response(JSON.stringify({
				status: "SUCCESSFUL",
				message: "Payment successfully confirmed"
			}), {
				status: 200,
				headers: { "Content-Type": "application/json" }
			});
		} else if (fapshiStatus === "FAILED" || fapshiStatus === "EXPIRED") {
			const currentMetadata = dbPayment.metadata || {};
			const { error: payUpdateError } = await supabaseAdmin.from("payments").update({
				status: "failed",
				metadata: {
					...currentMetadata,
					fapshiStatusResponse: fapshiData
				}
			}).eq("id", dbPayment.id);
			if (payUpdateError) console.error("Update payment failure error:", payUpdateError);
			return new Response(JSON.stringify({
				status: "FAILED",
				message: `Payment failed with status ${fapshiStatus}`
			}), {
				status: 200,
				headers: { "Content-Type": "application/json" }
			});
		} else return new Response(JSON.stringify({
			status: "PENDING",
			message: "Payment is still pending authorize in phone"
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (e) {
		console.error("Status check error:", e);
		return new Response(JSON.stringify({ error: e.message || "Internal server error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
} } } });
var Route$12 = createFileRoute("/api/payments/initiate")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const { amount, phone, provider, studentId, bootcampId } = await request.json();
		if (!amount || !phone || !provider || !studentId || !bootcampId) return new Response(JSON.stringify({ error: "Missing required fields: amount, phone, provider, studentId, bootcampId" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const FAPSHI_API_USER = process.env.FAPSHI_API_USER;
		const FAPSHI_API_KEY = process.env.FAPSHI_API_KEY;
		const FAPSHI_BASE_URL = process.env.FAPSHI_BASE_URL || "https://sandbox.fapshi.com";
		const isMockMode = !FAPSHI_API_USER || !FAPSHI_API_KEY || FAPSHI_API_USER === "YOUR_FAPSHI_API_USER" || FAPSHI_API_KEY === "YOUR_FAPSHI_API_KEY";
		const medium = provider === "mtn_momo" ? "MTN" : "ORANGE";
		let cleanedPhone = phone.replace(/\D/g, "");
		if (cleanedPhone.length > 9) cleanedPhone = cleanedPhone.slice(-9);
		if (cleanedPhone.length !== 9 || !["6"].includes(cleanedPhone[0])) return new Response(JSON.stringify({ error: "Invalid Cameroon mobile network number. Must be 9 digits (e.g., 67xxxxxxx or 69xxxxxxx)" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		let transId;
		let fapshiData;
		if (isMockMode) {
			console.log("Fapshi API credentials not configured. Running in Mock Sandbox mode.");
			transId = "mock_trans_" + Math.random().toString(36).slice(2, 10);
			fapshiData = {
				mock: true,
				transId,
				status: "PENDING",
				mockPollCount: 0
			};
		} else {
			const fapshiRes = await fetch(`${FAPSHI_BASE_URL}/direct-pay`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"apiuser": FAPSHI_API_USER,
					"apikey": FAPSHI_API_KEY
				},
				body: JSON.stringify({
					amount,
					phone: cleanedPhone,
					medium,
					userId: studentId,
					externalId: bootcampId
				})
			});
			fapshiData = await fapshiRes.json();
			if (!fapshiRes.ok || !fapshiData.transId) return new Response(JSON.stringify({ error: fapshiData.message || fapshiData.error || "Fapshi Direct Pay request failed" }), {
				status: fapshiRes.status || 400,
				headers: { "Content-Type": "application/json" }
			});
			transId = fapshiData.transId;
		}
		const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
		const { error: dbError } = await supabaseAdmin.from("payments").insert({
			student_id: studentId,
			bootcamp_id: bootcampId,
			amount: parseFloat(amount),
			currency: "XAF",
			provider,
			phone_number: cleanedPhone,
			transaction_ref: transId,
			status: "pending",
			metadata: { fapshiResponse: fapshiData }
		});
		if (dbError) {
			console.error("Database insert error:", dbError);
			return new Response(JSON.stringify({ error: "Failed to record payment initialization in database" }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
		return new Response(JSON.stringify({
			transId,
			message: "Payment initialized on user phone"
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (e) {
		console.error("Initiate error:", e);
		return new Response(JSON.stringify({ error: e.message || "Internal server error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
} } } });
var $$splitComponentImporter$11 = () => import("./dashboard.support-CjBZ207n.mjs");
var Route$11 = createFileRoute("/_authenticated/dashboard/support")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./dashboard.sessions-CGYOxW4O.mjs");
var Route$10 = createFileRoute("/_authenticated/dashboard/sessions")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./dashboard.resources-scDbtoMQ.mjs");
var Route$9 = createFileRoute("/_authenticated/dashboard/resources")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./dashboard.profile-CcHeOHjp.mjs");
var Route$8 = createFileRoute("/_authenticated/dashboard/profile")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./dashboard.payments-Csu9GFAe.mjs");
var Route$7 = createFileRoute("/_authenticated/dashboard/payments")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./dashboard.notifications-zUvCDoHQ.mjs");
var Route$6 = createFileRoute("/_authenticated/dashboard/notifications")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./dashboard.certificates-BZP16GZj.mjs");
var Route$5 = createFileRoute("/_authenticated/dashboard/certificates")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./dashboard.bootcamps-RpDGi5aL.mjs");
var Route$4 = createFileRoute("/_authenticated/dashboard/bootcamps")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./admin.students-DAz4kWU8.mjs");
var Route$3 = createFileRoute("/_authenticated/admin/students")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./admin.sessions-Lx_0ShRv.mjs");
var Route$2 = createFileRoute("/_authenticated/admin/sessions")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./admin.payments-ukBBR5J1.mjs");
var Route$1 = createFileRoute("/_authenticated/admin/payments")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./admin.bootcamps-D_fp233G.mjs");
var Route = createFileRoute("/_authenticated/admin/bootcamps")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var TermsRoute = Route$29.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$30
});
var SupportRoute = Route$28.update({
	id: "/support",
	path: "/support",
	getParentRoute: () => Route$30
});
var ResetPasswordRoute = Route$27.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$30
});
var PrivacyRoute = Route$26.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$30
});
var PricingRoute = Route$25.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$30
});
var ForgotPasswordRoute = Route$24.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$30
});
var FaqRoute = Route$23.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$30
});
var ContactRoute = Route$22.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$30
});
var CertificateRoute = Route$34.update({
	id: "/certificate",
	path: "/certificate",
	getParentRoute: () => Route$30
});
var BootcampsRoute = Route$21.update({
	id: "/bootcamps",
	path: "/bootcamps",
	getParentRoute: () => Route$30
});
var AuthRoute = Route$31.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$30
});
var AboutRoute = Route$20.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$30
});
var AuthenticatedRouteRoute = Route$19.update({
	id: "/_authenticated",
	getParentRoute: () => Route$30
});
var IndexRoute = Route$32.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$30
});
var BootcampsSlugRoute = Route$33.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BootcampsRoute
});
var AuthenticatedDashboardRoute = Route$18.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminRoute = Route$17.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardIndexRoute = Route$16.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedAdminIndexRoute = Route$15.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthenticatedAdminRoute
});
var ApiPublicSeedAdminRoute = Route$14.update({
	id: "/api/public/seed-admin",
	path: "/api/public/seed-admin",
	getParentRoute: () => Route$30
});
var ApiPaymentsStatusRoute = Route$13.update({
	id: "/api/payments/status",
	path: "/api/payments/status",
	getParentRoute: () => Route$30
});
var ApiPaymentsInitiateRoute = Route$12.update({
	id: "/api/payments/initiate",
	path: "/api/payments/initiate",
	getParentRoute: () => Route$30
});
var AuthenticatedDashboardSupportRoute = Route$11.update({
	id: "/support",
	path: "/support",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedDashboardSessionsRoute = Route$10.update({
	id: "/sessions",
	path: "/sessions",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedDashboardResourcesRoute = Route$9.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedDashboardProfileRoute = Route$8.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedDashboardPaymentsRoute = Route$7.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedDashboardNotificationsRoute = Route$6.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedDashboardCertificatesRoute = Route$5.update({
	id: "/certificates",
	path: "/certificates",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedDashboardBootcampsRoute = Route$4.update({
	id: "/bootcamps",
	path: "/bootcamps",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedAdminStudentsRoute = Route$3.update({
	id: "/students",
	path: "/students",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminSessionsRoute = Route$2.update({
	id: "/sessions",
	path: "/sessions",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminPaymentsRoute = Route$1.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminRouteChildren = {
	AuthenticatedAdminBootcampsRoute: Route.update({
		id: "/bootcamps",
		path: "/bootcamps",
		getParentRoute: () => AuthenticatedAdminRoute
	}),
	AuthenticatedAdminPaymentsRoute,
	AuthenticatedAdminSessionsRoute,
	AuthenticatedAdminStudentsRoute,
	AuthenticatedAdminIndexRoute
};
var AuthenticatedAdminRouteWithChildren = AuthenticatedAdminRoute._addFileChildren(AuthenticatedAdminRouteChildren);
var AuthenticatedDashboardRouteChildren = {
	AuthenticatedDashboardBootcampsRoute,
	AuthenticatedDashboardCertificatesRoute,
	AuthenticatedDashboardNotificationsRoute,
	AuthenticatedDashboardPaymentsRoute,
	AuthenticatedDashboardProfileRoute,
	AuthenticatedDashboardResourcesRoute,
	AuthenticatedDashboardSessionsRoute,
	AuthenticatedDashboardSupportRoute,
	AuthenticatedDashboardIndexRoute
};
var AuthenticatedRouteRouteChildren = {
	AuthenticatedAdminRoute: AuthenticatedAdminRouteWithChildren,
	AuthenticatedDashboardRoute: AuthenticatedDashboardRoute._addFileChildren(AuthenticatedDashboardRouteChildren)
};
var AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
var BootcampsRouteChildren = { BootcampsSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
	AboutRoute,
	AuthRoute,
	BootcampsRoute: BootcampsRoute._addFileChildren(BootcampsRouteChildren),
	CertificateRoute,
	ContactRoute,
	FaqRoute,
	ForgotPasswordRoute,
	PricingRoute,
	PrivacyRoute,
	ResetPasswordRoute,
	SupportRoute,
	TermsRoute,
	ApiPaymentsInitiateRoute,
	ApiPaymentsStatusRoute,
	ApiPublicSeedAdminRoute
};
var routeTree = Route$30._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
