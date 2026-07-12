import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CTJdFVPM.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as useRouterState, c as Outlet, d as createRootRouteWithContext, f as Link, h as redirect, i as HeadContent, l as lazyRouteComponent, m as useRouter, p as useNavigate, r as Scripts, s as createRouter, u as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { A as ExternalLink, B as ChevronDown, C as LifeBuoy, D as FileText, F as CircleQuestionMark, G as Award, H as ChartColumn, I as CirclePlay, K as ArrowRight, L as CircleCheck, M as CodeXml, N as Clock, O as Eye, P as CircleX, R as ChevronUp, S as LoaderCircle, T as GraduationCap, U as Calendar, V as Check, W as Bell, _ as MessageCircle, a as Users, b as Mail, c as Target, d as ShieldCheck, f as Rocket, g as MessageSquare, i as Video, j as CreditCard, k as EyeOff, m as Pencil, n as X, o as User, p as Plus, q as ArrowLeft, r as Wallet, s as Trash2, t as Zap, u as Sparkles, v as Menu, w as LayoutDashboard, x as LogOut, y as MapPin, z as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as SiteHeader, c as formatXAF, i as SiteFooter, l as useAuthUser, n as Button, o as cn, r as Logo, s as daysUntil, t as BRAND } from "./format-BsBIdMp6.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as useQueryClient, n as useQuery, r as QueryClientProvider, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as format } from "../_libs/date-fns.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as Trigger, n as List, r as Root2$1, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C1gJ51z7.js
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
var Route$35 = createRootRouteWithContext()({
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
	const { queryClient } = Route$35.useRouteContext();
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
var Route$34 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms — Mira Edge Academy" }] }),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-bold sm:text-5xl",
					children: "Terms of Service"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 leading-relaxed text-muted-foreground",
					children: "By enrolling in a Mira Edge Academy bootcamp you agree to attend the live sessions, complete assignments in good faith, and respect the cohort community. Tuition, refund policy, and program schedule are described on each bootcamp's page. Certificates are awarded only after successful completion."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	})
});
var Route$33 = createFileRoute("/support")({
	head: () => ({ meta: [{ title: "Support — Mira Edge Academy" }] }),
	component: Support
});
function Support() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-4xl px-4 pt-32 pb-24 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-widest text-primary",
								children: "Support"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-display text-4xl font-bold sm:text-6xl",
								children: "How can we help?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground",
								children: "Choose the fastest way to reach us. Our team responds within a few hours during business days."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 grid gap-5 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: BRAND.whatsappUrl,
								className: "card-elevated p-6 text-center transition hover:-translate-y-0.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mx-auto h-8 w-8 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-display text-lg font-bold",
										children: "WhatsApp"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: BRAND.whatsapp
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${BRAND.email}`,
								className: "card-elevated p-6 text-center transition hover:-translate-y-0.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mx-auto h-8 w-8 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-display text-lg font-bold",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: BRAND.email
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/faq",
								className: "card-elevated p-6 text-center transition hover:-translate-y-0.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "mx-auto h-8 w-8 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-display text-lg font-bold",
										children: "FAQ"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: "Common questions answered"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "rounded-full bg-brand-gradient text-white",
								children: "Open a support ticket"
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Route$32 = createFileRoute("/reset-password")({
	head: () => ({ meta: [{ title: "Set new password — Mira Edge Academy" }] }),
	component: ResetPage
});
function ResetPage() {
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [ready, setReady] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((event) => {
			if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") setReady(true);
		});
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) setReady(true);
		});
		return () => sub.subscription.unsubscribe();
	}, []);
	const submit = async (e) => {
		e.preventDefault();
		setBusy(true);
		const { error } = await supabase.auth.updateUser({ password });
		setBusy(false);
		if (error) return toast.error(error.message);
		toast.success("Password updated");
		navigate({ to: "/dashboard" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-col items-center text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-14 w-14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-3xl font-bold",
					children: "Set a new password"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "card-elevated p-6",
				children: !ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center text-sm text-muted-foreground",
					children: [
						"Open the reset link from your email to continue.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/forgot-password",
							className: "mt-3 inline-block text-primary hover:underline",
							children: "Request a new link"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "np",
						children: "New password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "np",
						type: "password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						required: true,
						minLength: 6
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: busy,
						className: "w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white",
						children: busy ? "Updating…" : "Update password"
					})]
				})
			})]
		})
	});
}
var Route$31 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy — Mira Edge Academy" }] }),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legal, {
		title: "Privacy Policy",
		body: "Mira Edge Academy respects your privacy. We collect only the information necessary to deliver our services — your name, email, phone (optional), and payment records — and we never sell personal data. For any questions, contact info@miraedge.tech."
	})
});
function Legal({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-bold sm:text-5xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 whitespace-pre-wrap leading-relaxed text-muted-foreground",
					children: body
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var Route$30 = createFileRoute("/pricing")({
	head: () => ({ meta: [{ title: "Pricing — Mira Edge Academy" }, {
		name: "description",
		content: "Flexible pricing for our live full-stack bootcamps."
	}] }),
	component: Pricing
});
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
var Route$29 = createFileRoute("/forgot-password")({
	head: () => ({ meta: [{ title: "Reset password — Mira Edge Academy" }] }),
	component: ForgotPage
});
function ForgotPage() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		setBusy(true);
		const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
		setBusy(false);
		if (error) return toast.error(error.message);
		setSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen items-center justify-center bg-background px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-hero-grid opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/auth",
				className: "absolute left-6 top-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to sign in"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-14 w-14" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-3xl font-bold",
							children: "Reset your password"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "We'll email you a secure reset link."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "card-elevated p-6",
					children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: "Check your inbox"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: [
								"If an account exists for ",
								email,
								", we've sent password reset instructions."
							]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "fp-email",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "fp-email",
							type: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							required: true
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy,
							className: "w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white",
							children: busy ? "Sending…" : "Send reset link"
						})]
					})
				})]
			})
		]
	});
}
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
var Route$28 = createFileRoute("/faq")({
	head: () => ({ meta: [{ title: "FAQ — Mira Edge Academy" }] }),
	component: Faq
});
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
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Route$27 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact — Mira Edge Academy" }, {
		name: "description",
		content: "Talk to the Mira Edge Academy team."
	}] }),
	component: Contact
});
var schema = objectType({
	name: stringType().trim().min(1).max(100),
	email: stringType().trim().email().max(200),
	message: stringType().trim().min(5).max(2e3)
});
function Contact() {
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const submit = async (e) => {
		e.preventDefault();
		const parsed = schema.safeParse(form);
		if (!parsed.success) return toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
		setBusy(true);
		const { data: userData } = await supabase.auth.getUser();
		if (userData.user) {
			const { error } = await supabase.from("support_tickets").insert({
				user_id: userData.user.id,
				subject: `Contact: ${parsed.data.name}`,
				message: `${parsed.data.email}\n\n${parsed.data.message}`
			});
			setBusy(false);
			if (error) return toast.error(error.message);
			toast.success("Message sent — we'll get back to you shortly.");
			setForm({
				name: "",
				email: "",
				message: ""
			});
		} else {
			setBusy(false);
			window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent("Website contact from " + parsed.data.name)}&body=${encodeURIComponent(parsed.data.message + "\n\nFrom: " + parsed.data.email)}`;
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-6xl px-4 pt-32 pb-24 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-primary",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl font-bold sm:text-6xl",
							children: "Let's talk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Questions about a bootcamp, private cohorts, or partnerships? We usually reply within a few hours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: BRAND.whatsappUrl,
									className: "card-elevated flex items-center gap-4 p-4 transition hover:-translate-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: BRAND.whatsapp
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${BRAND.email}`,
									className: "card-elevated flex items-center gap-4 p-4 transition hover:-translate-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: BRAND.email
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "card-elevated flex items-center gap-4 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Online"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: "Live cohorts worldwide"
									})] })]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "card-elevated space-y-4 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "c-name",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "c-name",
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								}),
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "c-email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "c-email",
								type: "email",
								value: form.email,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								}),
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "c-msg",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "c-msg",
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
								disabled: busy,
								className: "w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white",
								children: busy ? "Sending…" : "Send message"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var Route$26 = createFileRoute("/certificate")({
	validateSearch: (search) => ({ code: typeof search.code === "string" ? search.code : "" }),
	head: () => ({ meta: [{ title: "Verify certificate — Mira Edge Academy" }] }),
	component: Verify
});
function Verify() {
	const { code: initialCode } = Route$26.useSearch();
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
var $$splitComponentImporter = () => import("./routes-N6ZQMexN.mjs");
createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
function BootcampCard$1({ b }) {
	const remaining = Math.max((b.max_seats ?? 0) - (b.seats_taken ?? 0), 0);
	const dLeft = daysUntil(b.registration_deadline);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: `/bootcamps/${b.slug}`,
		className: "group card-elevated flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:glow-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-52 overflow-hidden bg-slate-950/5",
			children: [b.cover_image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: b.cover_image_url,
				alt: "",
				className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-full bg-black/30 px-2 py-1 backdrop-blur",
					children: [b.duration_weeks ?? 8, " weeks"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-full bg-black/30 px-2 py-1 backdrop-blur",
					children: [remaining, " seats left"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-semibold group-hover:text-brand-gradient",
					children: b.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-3 text-sm text-muted-foreground",
					children: b.short_description ?? b.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-2 gap-3 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5 text-primary" }),
							" ",
							b.start_date ?? "TBA"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-primary" }),
							" ",
							dLeft != null ? dLeft > 0 ? `${dLeft}d to register` : "Closed" : "Open"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3 border-t border-border/50 pt-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-bold text-brand-gradient",
						children: formatXAF(b.price, b.currency)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary transition group-hover:bg-primary/10",
						children: "View details"
					})]
				})
			]
		})]
	});
}
var Route$24 = createFileRoute("/bootcamps")({
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
	component: BootcampsPage
});
function BootcampsPage() {
	if (!(useRouterState({ select: (s) => s.location.pathname }) === "/bootcamps")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	const { data, isLoading } = useQuery({
		queryKey: ["bootcamps-all"],
		queryFn: async () => {
			const { data, error } = await supabase.from("bootcamps").select("*").in("status", ["published", "closed"]).order("start_date", { ascending: true });
			if (error) throw error;
			return data ?? [];
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-primary",
							children: "Bootcamps"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl font-bold sm:text-6xl",
							children: "All cohorts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Live, cohort-based programs designed to make you a shipping full-stack engineer."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: [
						isLoading && Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-96 animate-pulse rounded-3xl bg-muted/40" }, i)),
						!isLoading && (data ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-full card-elevated py-20 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl font-semibold",
								children: "No bootcamps published yet"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Check back soon — new cohorts are added regularly."
							})]
						}),
						(data ?? []).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootcampCard$1, { b }, b.id))
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var Tabs = Root2$1;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var searchSchema = objectType({ next: stringType().optional() });
var Route$23 = createFileRoute("/auth")({
	validateSearch: (s) => searchSchema.parse(s),
	head: () => ({ meta: [{ title: "Sign in — Mira Edge Academy" }, {
		name: "description",
		content: "Sign in or create your Mira Edge Academy account."
	}] }),
	component: AuthPage
});
function AuthPage() {
	const { next } = Route$23.useSearch();
	const navigate = useNavigate();
	const [tab, setTab] = (0, import_react.useState)("signin");
	(0, import_react.useEffect)(() => {
		supabase.auth.getUser().then(({ data }) => {
			if (data.user) navigate({ to: next ?? "/dashboard" });
		});
	}, [next, navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-hero-grid opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-gradient opacity-20 blur-3xl animate-gradient" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "absolute left-6 top-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back home"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex min-h-screen items-center justify-center px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "w-full max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-14 w-14" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-display text-3xl font-bold",
								children: "Welcome to Mira Edge"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Learn. Build. Innovate. Lead."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "card-elevated p-6 backdrop-blur",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
							value: tab,
							onValueChange: (v) => setTab(v),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
									className: "grid w-full grid-cols-2 rounded-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "signin",
										className: "rounded-full",
										children: "Sign in"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "signup",
										className: "rounded-full",
										children: "Create account"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
									value: "signin",
									className: "mt-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignInForm, { onDone: () => navigate({ to: next ?? "/dashboard" }) })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
									value: "signup",
									className: "mt-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignUpForm, { onDone: () => navigate({ to: next ?? "/dashboard" }) })
								})
							]
						})
					})]
				})
			})
		]
	});
}
function PasswordInput({ value, onChange, id }) {
	const [show, setShow] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id,
			type: show ? "text" : "password",
			value,
			onChange: (e) => onChange(e.target.value),
			required: true,
			minLength: 6
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setShow((s) => !s),
			className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground",
			children: show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
		})]
	});
}
function SignInForm({ onDone }) {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		setBusy(true);
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		setBusy(false);
		if (error) return toast.error(error.message);
		toast.success("Welcome back!");
		onDone();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "si-email",
				children: "Email"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "si-email",
				type: "email",
				value: email,
				onChange: (e) => setEmail(e.target.value),
				required: true,
				autoComplete: "email"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "si-pass",
					children: "Password"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/forgot-password",
					className: "text-xs text-primary hover:underline",
					children: "Forgot?"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInput, {
				id: "si-pass",
				value: password,
				onChange: setPassword
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: busy,
				className: "w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white shadow-lg shadow-primary/30",
				children: busy ? "Signing in…" : "Sign in"
			})
		]
	});
}
function SignUpForm({ onDone }) {
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		setBusy(true);
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${window.location.origin}/dashboard`,
				data: {
					full_name: fullName,
					phone
				}
			}
		});
		setBusy(false);
		if (error) return toast.error(error.message);
		toast.success("Account created!");
		onDone();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "su-name",
				children: "Full name"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "su-name",
				value: fullName,
				onChange: (e) => setFullName(e.target.value),
				required: true,
				maxLength: 80
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "su-email",
				children: "Email"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "su-email",
				type: "email",
				value: email,
				onChange: (e) => setEmail(e.target.value),
				required: true,
				autoComplete: "email"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "su-phone",
				children: "Phone (optional)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "su-phone",
				value: phone,
				onChange: (e) => setPhone(e.target.value),
				placeholder: "+237…"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "su-pass",
				children: "Password"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInput, {
				id: "su-pass",
				value: password,
				onChange: setPassword
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: busy,
				className: "w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white shadow-lg shadow-primary/30",
				children: busy ? "Creating…" : "Create account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center text-xs text-muted-foreground",
				children: [
					"By continuing you agree to our ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "underline",
						children: "Terms"
					}),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "underline",
						children: "Privacy"
					}),
					"."
				]
			})
		]
	});
}
var Route$22 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About — Mira Edge Academy" }, {
		name: "description",
		content: "Mira Edge Academy is a premium online academy training modern full-stack engineers."
	}] }),
	component: About
});
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-5xl px-4 pt-32 pb-24 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-primary",
							children: "About us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl font-bold sm:text-6xl",
							children: "Training modern engineers for a modern world"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-3xl text-lg text-muted-foreground",
							children: [
								"Mira Edge Academy is powered by ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: BRAND.website,
									className: "text-foreground underline",
									children: BRAND.poweredBy
								}),
								". We train professional full-stack developers through live cohorts, real projects, and AI-assisted workflows used by leading technology teams."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-5 md:grid-cols-2",
					children: [
						{
							icon: Target,
							t: "Our mission",
							d: "Make world-class engineering education accessible, practical, and career-changing."
						},
						{
							icon: Rocket,
							t: "Our approach",
							d: "Small live cohorts, senior instructors, weekly code reviews, real projects and modern AI-assisted tools."
						},
						{
							icon: Sparkles,
							t: "Our stack",
							d: "React, TypeScript, Node, Postgres, Tailwind, Supabase, Vite, Cursor, and Copilot — the stack top teams ship on."
						},
						{
							icon: Users,
							t: "Our community",
							d: "Alumni network, career support, and open project reviews long after graduation."
						}
					].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-elevated p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 font-display text-xl font-bold",
								children: x.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: x.d
							})
						]
					}, x.t))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var Route$21 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
});
var Route$20 = createFileRoute("/")({ component: Landing });
var fadeUp = {
	initial: {
		opacity: 0,
		y: 24
	},
	whileInView: {
		opacity: 1,
		y: 0
	},
	viewport: {
		once: true,
		margin: "-80px"
	},
	transition: {
		duration: .6,
		ease: "easeOut"
	}
};
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpcomingBootcamps, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Curriculum, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-grid opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-gradient opacity-30 blur-3xl animate-gradient" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "mx-auto max-w-4xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Cohort-based · Live · AI-powered"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl",
							children: [
								"Become a professional ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand-gradient animate-gradient",
									children: "Full-Stack Developer"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl",
							children: "Live instructor-led bootcamps in modern web technologies & AI-assisted development. Ship real projects, earn an official certificate, launch your career."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/bootcamps",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									className: "rounded-full bg-brand-gradient px-7 py-6 text-base font-semibold text-white shadow-2xl shadow-primary/40 hover:opacity-90",
									children: ["Join a bootcamp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/bootcamps",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									variant: "outline",
									className: "rounded-full border-border/60 px-7 py-6 text-base backdrop-blur",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "mr-2 h-4 w-4" }), " Browse bootcamps"]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground",
							children: [
								"Hands-on Projects",
								"Live Classes",
								"AI-Assisted",
								"Modern Stack",
								"Career Prep",
								"Official Certificates"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-primary" }),
									" ",
									t
								]
							}, t))
						})
					]
				})
			})
		]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border/40 bg-navy-deep/30 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4",
			children: [
				{
					k: "500+",
					v: "Students trained"
				},
				{
					k: "12",
					v: "Live cohorts"
				},
				{
					k: "94%",
					v: "Completion rate"
				},
				{
					k: "24/7",
					v: "AI-assisted support"
				}
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				transition: {
					...fadeUp.transition,
					delay: i * .08
				},
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl font-bold text-brand-gradient sm:text-5xl",
					children: s.k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs uppercase tracking-widest text-muted-foreground",
					children: s.v
				})]
			}, s.v))
		})
	});
}
function Features() {
	const items = [
		{
			icon: CodeXml,
			title: "Modern stack",
			body: "React, Next.js, TypeScript, Node, Postgres, Tailwind, Supabase, and Vite — the stack shipped by teams like Vercel and Linear."
		},
		{
			icon: Zap,
			title: "AI-assisted workflows",
			body: "Build faster with Copilot, Cursor, Claude, and Lovable. Learn prompt-driven engineering the modern way."
		},
		{
			icon: Users,
			title: "Cohort-based live",
			body: "Small cohorts. Real instructors on Google Meet. Weekly code reviews, pair programming and demo days."
		},
		{
			icon: Rocket,
			title: "Ship real projects",
			body: "Every module ends with a portfolio project deployed to production, not a toy exercise."
		},
		{
			icon: GraduationCap,
			title: "Career preparation",
			body: "Resume, GitHub, interview prep, and technical mock interviews from working senior engineers."
		},
		{
			icon: Award,
			title: "Official certificate",
			body: "Verifiable certificate issued by Mira Edge Technologies on successful completion."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary",
						children: "Why Mira Edge"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold sm:text-5xl",
						children: "A modern academy for modern engineers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Everything you need to go from curious learner to production-ready developer."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: items.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					transition: {
						...fadeUp.transition,
						delay: i * .05
					},
					className: "group card-elevated p-6 transition hover:-translate-y-1 hover:glow-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-lg shadow-primary/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-lg font-semibold",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: f.body
						})
					]
				}, f.title))
			})]
		})
	});
}
function UpcomingBootcamps() {
	const { data, isLoading } = useQuery({
		queryKey: ["bootcamps-upcoming"],
		queryFn: async () => {
			const { data, error } = await supabase.from("bootcamps").select("*").eq("status", "published").order("start_date", { ascending: true }).limit(3);
			if (error) throw error;
			return data ?? [];
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-brand-gradient opacity-[0.04]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-primary",
					children: "Upcoming cohorts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
					children: "Reserve your seat"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/bootcamps",
					className: "text-sm font-medium text-primary hover:underline",
					children: "See all bootcamps →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: [
					isLoading && Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-96 animate-pulse rounded-3xl bg-muted/40" }, i)),
					!isLoading && (data ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-full card-elevated flex flex-col items-center justify-center px-6 py-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-10 w-10 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-xl font-semibold",
								children: "New cohorts opening soon"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-md text-sm text-muted-foreground",
								children: "We're preparing our next intake. Contact us on WhatsApp to reserve your seat before public registration opens."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: BRAND.whatsappUrl,
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "rounded-full bg-brand-gradient text-white",
									children: "Contact on WhatsApp"
								})
							})
						]
					}),
					(data ?? []).map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						...fadeUp,
						transition: {
							...fadeUp.transition,
							delay: i * .08
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootcampCard, { b })
					}, b.id))
				]
			})]
		})]
	});
}
function BootcampCard({ b }) {
	const remaining = Math.max((b.max_seats ?? 0) - (b.seats_taken ?? 0), 0);
	const dLeft = daysUntil(b.registration_deadline);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: `/bootcamps/${b.slug}`,
		className: "group card-elevated flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:glow-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-52 overflow-hidden bg-slate-950/5",
			children: [b.cover_image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: b.cover_image_url,
				alt: "",
				className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-full bg-black/30 px-2 py-1 backdrop-blur",
					children: [b.duration_weeks ?? 8, " weeks"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-full bg-black/30 px-2 py-1 backdrop-blur",
					children: [remaining, " seats left"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-semibold group-hover:text-brand-gradient",
					children: b.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-3 text-sm text-muted-foreground",
					children: b.short_description ?? b.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-2 gap-3 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5 text-primary" }),
							" ",
							b.start_date ?? "TBA"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-primary" }),
							" ",
							dLeft != null ? dLeft > 0 ? `${dLeft}d to register` : "Closed" : "Open"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3 border-t border-border/50 pt-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-bold text-brand-gradient",
						children: formatXAF(b.price, b.currency)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary transition group-hover:bg-primary/10",
						children: "View details"
					})]
				})
			]
		})]
	});
}
function HowItWorks() {
	const steps = [
		{
			n: "01",
			t: "Choose a bootcamp",
			d: "Browse upcoming cohorts and pick the track that matches your goal."
		},
		{
			n: "02",
			t: "Reserve your seat",
			d: "Register and pay securely via MTN Mobile Money or Orange Money."
		},
		{
			n: "03",
			t: "Learn live",
			d: "Join weekly live sessions on Google Meet with your instructor and cohort."
		},
		{
			n: "04",
			t: "Ship & get certified",
			d: "Complete your capstone, get reviewed, and receive your certificate."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-primary",
					children: "How it works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
					children: "Four steps to a new career"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					transition: {
						...fadeUp.transition,
						delay: i * .06
					},
					className: "card-elevated relative p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-5xl font-bold text-brand-gradient opacity-70",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-lg font-semibold",
							children: s.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.d
						})
					]
				}, s.n))
			})]
		})
	});
}
function Curriculum() {
	const modules = [
		"Web fundamentals: HTML, CSS, Modern JS",
		"React, TypeScript & component design",
		"Backend with Node, APIs, and Postgres",
		"Auth, security, and deployment",
		"AI-assisted development with Cursor, Copilot, Lovable",
		"Capstone project & career prep"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary",
						children: "Curriculum"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
						children: "Everything a modern full-stack engineer ships"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Our curriculum is designed and taught by working engineers. Each module ends with a project you can deploy and put in your portfolio."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/bootcamps",
						className: "mt-6 inline-block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "rounded-full bg-brand-gradient text-white",
							children: ["Explore bootcamps ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
				...fadeUp,
				className: "grid gap-3",
				children: modules.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "card-elevated flex items-center gap-4 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-sm font-bold text-brand-gradient",
						children: ["M", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: m
					})]
				}, m))
			})]
		})
	});
}
function Testimonials() {
	const t = [
		{
			name: "Amina O.",
			role: "Junior Developer, Douala",
			q: "The live sessions plus the AI-assisted workflows completely changed the way I code. I shipped 3 real projects in 8 weeks."
		},
		{
			name: "Kwame A.",
			role: "Freelancer, Yaoundé",
			q: "The instructors treat you like a real engineer. Code reviews were tough but that's exactly what I needed."
		},
		{
			name: "Sarah T.",
			role: "Career switcher",
			q: "I moved from marketing to a full-stack role in 6 months. Mira Edge made it feel achievable."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border/40 bg-navy-deep/30 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-primary",
					children: "Success stories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
					children: "Students shipping in the real world"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-3",
				children: t.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					transition: {
						...fadeUp.transition,
						delay: i * .06
					},
					className: "card-elevated p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-relaxed",
						children: [
							"\"",
							x.q,
							"\""
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10 rounded-full bg-brand-gradient" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: x.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: x.role
						})] })]
					})]
				}, x.name))
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...fadeUp,
				className: "relative overflow-hidden rounded-3xl bg-brand-gradient p-10 text-center text-white shadow-2xl shadow-primary/30 sm:p-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-grid opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold sm:text-5xl",
							children: "Ready to become a full-stack engineer?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-white/80",
							children: "Join the next Mira Edge cohort. Live classes, real projects, official certificate."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/bootcamps",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									className: "rounded-full bg-white px-7 py-6 text-base font-semibold text-navy-deep hover:bg-white/90",
									children: "Join a bootcamp"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									variant: "outline",
									className: "rounded-full border-white/40 bg-white/10 px-7 py-6 text-base text-white backdrop-blur hover:bg-white/20",
									children: "Talk to us"
								})
							})]
						})
					]
				})]
			})
		})
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Route$19 = createFileRoute("/bootcamps/$slug")({ component: BootcampDetail });
function BootcampDetail() {
	const { slug } = Route$19.useParams();
	const navigate = useNavigate();
	const { user } = useAuthUser();
	const qc = useQueryClient();
	const [showPayModal, setShowPayModal] = (0, import_react.useState)(false);
	const [phoneNumber, setPhoneNumber] = (0, import_react.useState)("");
	const [paymentProvider, setPaymentProvider] = (0, import_react.useState)("mtn_momo");
	const [paymentStatus, setPaymentStatus] = (0, import_react.useState)("idle");
	const [paymentError, setPaymentError] = (0, import_react.useState)("");
	const [transactionId, setTransactionId] = (0, import_react.useState)("");
	const pollIntervalRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (user?.phone) setPhoneNumber(user.phone);
	}, [user?.phone]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
		};
	}, []);
	const { data: b, isLoading } = useQuery({
		queryKey: ["bootcamp", slug],
		queryFn: async () => {
			const { data, error } = await supabase.from("bootcamps").select("*").eq("slug", slug).maybeSingle();
			if (error) throw error;
			return data;
		}
	});
	const registrationQuery = useQuery({
		queryKey: [
			"registration",
			user?.id,
			slug
		],
		enabled: Boolean(user?.id && b?.id),
		queryFn: async () => {
			const { data, error } = await supabase.from("registrations").select("*").eq("bootcamp_id", b.id).eq("student_id", user.id).limit(1);
			if (error) throw error;
			return data ?? [];
		}
	});
	const alreadyRegistered = !!registrationQuery.data?.length;
	const startStatusPolling = (transId) => {
		if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
		pollIntervalRef.current = setInterval(async () => {
			try {
				const res = await fetch(`/api/payments/status?transId=${transId}`);
				const data = await res.json();
				if (!res.ok) throw new Error(data.error || "Failed checking payment status");
				if (data.status === "SUCCESSFUL") {
					if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
					setPaymentStatus("success");
					toast.success("Payment confirmed! Seat reserved successfully.");
					registrationQuery.refetch();
					qc.invalidateQueries({ queryKey: ["bootcamp", slug] });
					qc.invalidateQueries({ queryKey: [
						"registration",
						user?.id,
						slug
					] });
					setTimeout(() => {
						setShowPayModal(false);
						navigate({ to: "/dashboard" });
					}, 2e3);
				} else if (data.status === "FAILED") {
					if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
					setPaymentStatus("failed");
					setPaymentError("The transaction failed or was canceled. Please ensure your account has sufficient funds and try again.");
					toast.error("Payment failed. Please try again.");
				}
			} catch (err) {
				console.error("Polling payment status error:", err);
			}
		}, 3e3);
	};
	const handleInitiatePayment = async () => {
		if (!phoneNumber.trim()) {
			toast.error("Please enter your Mobile Money phone number");
			return;
		}
		setPaymentStatus("initiating");
		setPaymentError("");
		setTransactionId("");
		try {
			const res = await fetch("/api/payments/initiate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					amount: b.price,
					phone: phoneNumber.trim(),
					provider: paymentProvider,
					studentId: user.id,
					bootcampId: b.id
				})
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Failed to initiate payment");
			setTransactionId(data.transId);
			setPaymentStatus("pending_pin");
			toast.info("Payment request sent! Check your phone for verification prompt.");
			startStatusPolling(data.transId);
		} catch (err) {
			setPaymentStatus("idle");
			setPaymentError(err.message || "Failed to initiate payment. Please try again.");
			toast.error(err.message || "Could not initiate payment");
		}
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl p-24 text-center text-muted-foreground",
			children: "Loading…"
		})]
	});
	if (!b) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6 pt-40 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold",
					children: "Bootcamp not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "The bootcamp you're looking for doesn't exist or was archived."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/bootcamps",
					className: "mt-6 inline-block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "rounded-full bg-brand-gradient text-white",
						children: "Browse bootcamps"
					})
				})
			]
		})]
	});
	const remaining = Math.max((b.max_seats ?? 0) - (b.seats_taken ?? 0), 0);
	const dLeft = daysUntil(b.registration_deadline);
	const canRegister = b.status === "published" && remaining > 0 && (dLeft == null || dLeft >= 0);
	const curriculum = b.curriculum ?? [];
	const benefits = b.benefits ?? [];
	const projects = b.projects ?? [];
	const requirements = b.requirements ?? [];
	const faqs = b.faqs ?? [];
	const instructor = b.instructor ?? {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden pt-32 pb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-brand-gradient opacity-10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-grid opacity-30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto max-w-6xl px-4 sm:px-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.nav, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								className: "text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/bootcamps",
										className: "hover:text-foreground",
										children: "Bootcamps"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "mx-2 inline h-3 w-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: b.title
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-10 lg:grid-cols-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "lg:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
											initial: {
												opacity: 0,
												y: 20
											},
											animate: {
												opacity: 1,
												y: 0
											},
											className: "font-display text-4xl font-bold sm:text-6xl",
											children: b.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-lg text-muted-foreground",
											children: b.short_description ?? b.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-primary" }),
														" ",
														b.duration_weeks ?? 8,
														" weeks"
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 text-primary" }),
														" Starts ",
														b.start_date ?? "TBA"
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-primary" }),
														" ",
														remaining,
														" seats remaining"
													]
												})
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									className: "card-elevated h-fit p-6 glow-primary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs uppercase tracking-widest text-muted-foreground",
											children: "Tuition"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-display text-4xl font-bold text-brand-gradient",
											children: formatXAF(b.price, b.currency)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 space-y-2 text-sm text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "mr-2 inline h-4 w-4 text-primary" }),
												" Deadline: ",
												b.registration_deadline ?? "Open"
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mr-2 inline h-4 w-4 text-primary" }),
												" ",
												remaining,
												" of ",
												b.max_seats,
												" seats left"
											] })]
										}),
										user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											disabled: !canRegister || alreadyRegistered,
											onClick: () => {
												setPaymentStatus("idle");
												setPaymentError("");
												setTransactionId("");
												setShowPayModal(true);
											},
											className: "mt-6 w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white shadow-lg shadow-primary/30 hover:opacity-90",
											children: alreadyRegistered ? "Already registered" : canRegister ? "Reserve my seat" : "Registration closed"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/auth",
											search: { next: `/bootcamps/${b.slug}` },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												className: "mt-6 w-full rounded-full bg-brand-gradient py-6 text-base font-semibold text-white shadow-lg shadow-primary/30",
												children: "Sign in to register"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-center text-xs text-muted-foreground",
											children: "Secure MTN MoMo & Orange Money supported"
										})
									]
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-10 lg:col-span-2",
							children: [
								b.description && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl font-bold",
									children: "About this bootcamp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 whitespace-pre-wrap text-muted-foreground",
									children: b.description
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: "Curriculum",
									icon: GraduationCap,
									children: curriculum.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
										className: "space-y-3",
										children: curriculum.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "card-elevated flex items-start gap-4 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-display text-sm font-bold text-brand-gradient",
												children: ["M", i + 1]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold",
												children: m.title ?? m
											}), m.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-muted-foreground",
												children: m.description
											})] })]
										}, i))
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "Curriculum coming soon" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: "Projects you'll ship",
									icon: Rocket,
									children: projects.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-3 sm:grid-cols-2",
										children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "card-elevated p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold",
												children: p.title ?? p
											}), p.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-muted-foreground",
												children: p.description
											})]
										}, i))
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "Project list coming soon" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: "What you'll get",
									icon: CircleCheck,
									children: benefits.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "grid gap-2 sm:grid-cols-2",
										children: benefits.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2 text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 text-primary" }),
												" ",
												x.title ?? x
											]
										}, i))
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "Benefits will be listed here" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: "Requirements",
									children: requirements.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2",
										children: requirements.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "text-sm text-muted-foreground",
											children: ["• ", r.title ?? r]
										}, i))
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "No prior experience required" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: "FAQ",
									children: faqs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-3",
										children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "card-elevated p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold",
												children: f.q ?? f.question
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-muted-foreground",
												children: f.a ?? f.answer
											})]
										}, i))
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "FAQ coming soon" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "space-y-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-elevated p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-widest text-muted-foreground",
										children: "Instructor"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-12 w-12 rounded-full bg-brand-gradient" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: instructor.name ?? "Mira Edge Faculty"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: instructor.title ?? "Senior Engineer"
										})] })]
									}),
									instructor.bio && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground",
										children: instructor.bio
									})
								]
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
					open: showPayModal,
					onOpenChange: (open) => {
						if (paymentStatus === "initiating" || paymentStatus === "pending_pin") return;
						setShowPayModal(open);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "sm:max-w-[425px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "font-display text-2xl font-bold",
								children: "Bootcamp Registration"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
								"To reserve your seat for ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: b.title }),
								", please complete your payment."
							] })] }),
							paymentStatus === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6 py-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-amber-500/10 border border-amber-500/20 p-4 text-sm text-yellow-600/90 dark:text-yellow-500 flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-5 w-5 shrink-0 text-amber-500 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold block mb-0.5",
												children: "Secure payment required"
											}),
											"Mobile money transaction will consume ",
											formatXAF(b.price, b.currency),
											" immediately to confirm reservation."
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "provider",
												children: "Mobile Money Network"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => setPaymentProvider("mtn_momo"),
													className: `flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all cursor-pointer ${paymentProvider === "mtn_momo" ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-border/80"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-bold text-sm tracking-wider",
														children: "MTN MoMo"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground mt-0.5",
														children: "Yellow Card"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => setPaymentProvider("orange_money"),
													className: `flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all cursor-pointer ${paymentProvider === "orange_money" ? "border-orange-500 bg-orange-500/5 text-orange-500" : "border-border hover:border-orange-500/80"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-bold text-sm tracking-wider",
														children: "Orange Money"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground mt-0.5",
														children: "Orange Card"
													})]
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "phone",
													children: "Mobile Money Number"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute left-3 top-2.5 text-sm text-muted-foreground font-semibold",
														children: "+237"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														id: "phone",
														type: "tel",
														value: phoneNumber,
														onChange: (e) => setPhoneNumber(e.target.value),
														placeholder: "670000000",
														className: "pl-14 rounded-xl h-11 text-base font-medium tracking-wide",
														maxLength: 9
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-muted-foreground",
													children: "Enter 9 digits Cameroon number (e.g. 6xxxxxxxx)."
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										onClick: handleInitiatePayment,
										className: "w-full bg-brand-gradient hover:opacity-95 text-white font-semibold rounded-xl h-12 text-sm shadow-md",
										children: [
											"Pay ",
											formatXAF(b.price, b.currency),
											" & Register"
										]
									})
								]
							}),
							paymentStatus === "initiating" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center justify-center py-12 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 text-primary animate-spin" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-semibold text-lg animate-pulse",
										children: "Initializing Payment..."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground max-w-[280px]",
										children: "Contacting payment gateway. Please hold on."
									})
								]
							}),
							paymentStatus === "pending_pin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center justify-center py-8 text-center space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex items-center justify-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-14 w-14 rounded-full border-4 border-primary border-t-transparent animate-spin flex items-center justify-center" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 absolute text-primary animate-pulse" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-lg",
											children: "Check Your Phone!"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-sm text-muted-foreground max-w-[300px]",
											children: [
												"We've sent a Mobile Money payment prompt to ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["+237 ", phoneNumber] }),
												"."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-3 text-xs font-semibold px-4 py-2 border rounded-full bg-secondary bg-opacity-40 inline-block text-secondary-foreground",
											children: ["Ref ID: ", transactionId || "..."]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-primary/10 border border-primary/20 p-3 text-xs text-primary max-w-[320px] text-left",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold block mb-0.5",
												children: "Prompt Not Showing?"
											}),
											"Dial MTN ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "*126#" }),
											" or Orange ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "#150#" }),
											" to authorize pending transactions if the push alert does not appear automatically."
										]
									})
								]
							}),
							paymentStatus === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center justify-center py-12 text-center space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-10 w-10 text-green-500 animate-bounce" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-xl text-green-600 dark:text-green-500",
										children: "Payment Confirmed!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "Your seat has been reserved and your registration is confirmed."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Redirecting you to dashboard..."
									})
								] })]
							}),
							paymentStatus === "failed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center justify-center py-8 text-center space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-14 w-14 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-red-500 text-3xl font-extrabold",
											children: "!"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-lg text-red-500",
											children: "Payment Failed"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground max-w-[280px]",
											children: paymentError
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex w-full gap-3 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											onClick: () => setShowPayModal(false),
											className: "flex-1 rounded-xl",
											children: "Close"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											onClick: () => setPaymentStatus("idle"),
											className: "flex-1 bg-brand-gradient text-white rounded-xl",
											children: "Try Again"
										})]
									})
								]
							})
						]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Section({ title, icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
		className: "flex items-center gap-2 font-display text-2xl font-bold",
		children: [
			Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary" }),
			" ",
			title
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4",
		children
	})] });
}
function Empty({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-2xl border border-dashed border-border/60 p-6 text-center text-sm text-muted-foreground",
		children: text
	});
}
var Route$18 = createFileRoute("/_authenticated/dashboard")({ component: DashboardLayout });
function DashboardLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
var STUDENT_NAV = [
	{
		to: "/dashboard",
		label: "Overview",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/dashboard/bootcamps",
		label: "My bootcamps",
		icon: GraduationCap
	},
	{
		to: "/dashboard/sessions",
		label: "Sessions",
		icon: Calendar
	},
	{
		to: "/dashboard/resources",
		label: "Resources",
		icon: FileText
	},
	{
		to: "/dashboard/payments",
		label: "Payments",
		icon: CreditCard
	},
	{
		to: "/dashboard/certificates",
		label: "Certificates",
		icon: Award
	},
	{
		to: "/dashboard/notifications",
		label: "Notifications",
		icon: Bell
	},
	{
		to: "/dashboard/profile",
		label: "Profile",
		icon: User
	},
	{
		to: "/dashboard/support",
		label: "Support",
		icon: LifeBuoy
	}
];
var ADMIN_NAV = [
	{
		to: "/admin",
		label: "Overview",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/admin/bootcamps",
		label: "Bootcamps",
		icon: GraduationCap
	},
	{
		to: "/admin/sessions",
		label: "Sessions",
		icon: Calendar
	},
	{
		to: "/admin/students",
		label: "Students",
		icon: User
	},
	{
		to: "/admin/payments",
		label: "Payments",
		icon: CreditCard
	}
];
function AppShell({ children, mode }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { user, isAdmin } = useAuthUser();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `fixed inset-y-0 left-0 z-40 w-72 transform border-r border-border/60 bg-card/70 backdrop-blur-xl transition-transform ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-16 items-center justify-between px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-9 w-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-bold",
								children: "Mira Edge"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-widest text-muted-foreground",
								children: mode === "admin" ? "Admin" : "Academy"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(false),
							className: "lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-col gap-1 px-3 py-4",
						children: (mode === "admin" ? ADMIN_NAV : STUDENT_NAV).map((n) => {
							const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: n.to,
								onClick: () => setOpen(false),
								className: `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${active ? "bg-brand-gradient text-white shadow-lg shadow-primary/30" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, { className: "h-4 w-4" }), n.label]
							}, n.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-3 bottom-4 space-y-2",
						children: [
							mode === "student" && isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admin",
								className: "flex items-center gap-3 rounded-xl border border-border/60 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), " Admin panel"]
							}),
							mode === "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/dashboard",
								className: "flex items-center gap-3 rounded-xl border border-border/60 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }), " Student view"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: async () => {
									await supabase.auth.signOut();
									window.location.href = "/";
								},
								className: "flex w-full items-center gap-3 rounded-xl border border-border/60 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Sign out"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl bg-muted/40 px-3 py-2 text-xs text-muted-foreground truncate",
								children: user?.email
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-72",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/60 bg-background/70 px-4 backdrop-blur-xl sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(true),
							className: "lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold",
							children: mode === "admin" ? "Admin Panel" : "Student Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard/notifications",
							className: "rounded-full p-2 text-muted-foreground hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.main, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
					children
				})]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onClick: () => setOpen(false),
				className: "fixed inset-0 z-30 bg-black/40 lg:hidden"
			})
		]
	});
}
function AdminGuard({ children }) {
	const { isAdmin, loading } = useAuthUser();
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		mode: "admin",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Loading…"
		})
	});
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		mode: "student",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-elevated p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold",
					children: "Admins only"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "Your account does not have admin permissions."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dashboard",
					className: "mt-4 inline-block text-primary hover:underline",
					children: "Back to dashboard"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var Route$17 = createFileRoute("/_authenticated/admin")({ component: AdminLayout });
function AdminLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminGuard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
var Route$16 = createFileRoute("/_authenticated/dashboard/")({ component: DashboardHome });
function DashboardHome() {
	const { user } = useAuthUser();
	const { data: regs } = useQuery({
		queryKey: ["my-regs", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data } = await supabase.from("registrations").select("*, bootcamp:bootcamps(*)").eq("student_id", user.id);
			return data ?? [];
		}
	});
	const { data: nextSession } = useQuery({
		queryKey: ["next-session", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data } = await supabase.from("sessions").select("*, bootcamp:bootcamps(title,slug)").gte("session_date", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)).order("session_date").order("start_time").limit(1);
			return data?.[0] ?? null;
		}
	});
	const { data: certs } = useQuery({
		queryKey: ["my-cert-count", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { count } = await supabase.from("certificates").select("*", {
				count: "exact",
				head: true
			}).eq("student_id", user.id);
			return count ?? 0;
		}
	});
	const stats = [
		{
			icon: GraduationCap,
			k: regs?.length ?? 0,
			v: "Enrolled bootcamps"
		},
		{
			icon: Calendar,
			k: nextSession ? "1" : "0",
			v: "Upcoming session"
		},
		{
			icon: Award,
			k: certs ?? 0,
			v: "Certificates earned"
		},
		{
			icon: CreditCard,
			k: regs?.filter((r) => r.payment_status === "successful").length ?? 0,
			v: "Successful payments"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold",
					children: "Welcome back 👋"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted-foreground",
					children: "Here's what's happening in your learning journey."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevated p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-3xl font-bold",
							children: s.k
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: s.v
						})
					]
				}, s.v))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevated p-6 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-bold",
							children: "My bootcamps"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/bootcamps",
							className: "text-sm text-primary hover:underline",
							children: "Browse all →"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-3",
						children: [(regs ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-xl border border-dashed border-border/60 p-6 text-center text-sm text-muted-foreground",
							children: "You haven't enrolled in any bootcamps yet."
						}), (regs ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-xl border border-border/60 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: r.bootcamp?.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									"Status: ",
									r.status,
									" · Payment: ",
									r.payment_status
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/bootcamps/$slug",
								params: { slug: r.bootcamp?.slug },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									size: "sm",
									className: "rounded-full",
									children: "Details"
								})
							})]
						}, r.id))]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevated p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-bold",
						children: "Next live session"
					}), nextSession ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: nextSession.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: nextSession.bootcamp?.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm",
								children: format(new Date(nextSession.session_date), "PPP")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									nextSession.start_time,
									" — ",
									nextSession.end_time
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: nextSession.meet_url,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-4 inline-block w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "w-full rounded-full bg-brand-gradient text-white",
									children: ["Join live class ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-2 h-4 w-4" })]
								})
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "No upcoming sessions scheduled."
					})]
				})]
			})
		]
	});
}
var Route$15 = createFileRoute("/_authenticated/admin/")({ component: AdminOverview });
function AdminOverview() {
	const { data: stats } = useQuery({
		queryKey: ["admin-stats"],
		queryFn: async () => {
			const [bootcamps, sessions, regs, payments, tickets] = await Promise.all([
				supabase.from("bootcamps").select("*", {
					count: "exact",
					head: true
				}),
				supabase.from("sessions").select("*", {
					count: "exact",
					head: true
				}),
				supabase.from("registrations").select("*", {
					count: "exact",
					head: true
				}),
				supabase.from("payments").select("*", {
					count: "exact",
					head: true
				}).eq("status", "pending"),
				supabase.from("support_tickets").select("*", {
					count: "exact",
					head: true
				}).eq("status", "open")
			]);
			return {
				bootcamps: bootcamps.count ?? 0,
				sessions: sessions.count ?? 0,
				students: regs.count ?? 0,
				pendingPayments: payments.count ?? 0,
				openTickets: tickets.count ?? 0
			};
		}
	});
	const cards = [
		{
			icon: GraduationCap,
			k: stats?.bootcamps ?? "—",
			v: "Bootcamps",
			to: "/admin/bootcamps"
		},
		{
			icon: Calendar,
			k: stats?.sessions ?? "—",
			v: "Sessions",
			to: "/admin/sessions"
		},
		{
			icon: Users,
			k: stats?.students ?? "—",
			v: "Registrations",
			to: "/admin/students"
		},
		{
			icon: CreditCard,
			k: stats?.pendingPayments ?? "—",
			v: "Pending payments",
			to: "/admin/payments"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "admin",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Admin overview"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Manage bootcamps, sessions, students, and payments."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: cards.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: s.to,
					className: "card-elevated block p-5 transition hover:-translate-y-0.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-3xl font-bold",
							children: s.k
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: s.v
						})
					]
				}, s.v))
			}),
			(stats?.openTickets ?? 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 card-elevated flex items-center gap-4 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "h-8 w-8 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-semibold",
					children: [stats?.openTickets, " open support ticket(s)"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Review and respond from the Students section or support workflow."
				})] })]
			})
		]
	});
}
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
		const medium = provider === "mtn_momo" ? "mobile money" : "orange money";
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
var STYLES = {
	draft: "bg-muted text-muted-foreground",
	published: "bg-primary/10 text-primary",
	closed: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
	archived: "bg-muted text-muted-foreground",
	reserved: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
	confirmed: "bg-primary/10 text-primary",
	cancelled: "bg-destructive/10 text-destructive",
	completed: "bg-green-500/10 text-green-700 dark:text-green-400",
	pending: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
	successful: "bg-green-500/10 text-green-700 dark:text-green-400",
	failed: "bg-destructive/10 text-destructive",
	refunded: "bg-muted text-muted-foreground",
	scheduled: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
	live: "bg-green-500/10 text-green-700 dark:text-green-400",
	open: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
	resolved: "bg-green-500/10 text-green-700 dark:text-green-400",
	info: "bg-primary/10 text-primary"
};
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize", STYLES[status] ?? "bg-muted text-muted-foreground"),
		children: status.replace(/_/g, " ")
	});
}
var Route$11 = createFileRoute("/_authenticated/dashboard/support")({ component: StudentSupport });
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
var Route$10 = createFileRoute("/_authenticated/dashboard/sessions")({ component: StudentSessions });
function StudentSessions() {
	const { user } = useAuthUser();
	const qc = useQueryClient();
	const { data: sessions, isLoading } = useQuery({
		queryKey: ["student-sessions", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("sessions").select("*, bootcamp:bootcamps(title, slug)").order("session_date", { ascending: true }).order("start_time", { ascending: true });
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: attendance } = useQuery({
		queryKey: ["my-attendance", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data } = await supabase.from("attendance").select("session_id").eq("student_id", user.id);
			return new Set((data ?? []).map((a) => a.session_id));
		}
	});
	const joinMutation = useMutation({
		mutationFn: async (session) => {
			const { error } = await supabase.from("attendance").insert({
				session_id: session.id,
				student_id: user.id,
				bootcamp_id: session.bootcamp_id,
				browser: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 200) : null
			});
			if (error && error.code !== "23505") throw error;
			window.open(session.meet_url, "_blank", "noopener,noreferrer");
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["my-attendance"] });
			toast.success("Attendance recorded — opening live class");
		},
		onError: (e) => toast.error(e.message)
	});
	const upcoming = (sessions ?? []).filter((s) => s.session_date >= (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	const past = (sessions ?? []).filter((s) => s.session_date < (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Live sessions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted-foreground",
				children: "Join Google Meet classes for your enrolled bootcamps."
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted-foreground",
				children: "Loading…"
			}),
			!isLoading && (sessions ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground",
				children: "No sessions scheduled yet for your bootcamps."
			}),
			upcoming.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold",
					children: "Upcoming"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-3",
					children: upcoming.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionRow, {
						session: s,
						attended: attendance?.has(s.id),
						onJoin: () => joinMutation.mutate(s),
						busy: joinMutation.isPending
					}, s.id))
				})]
			}),
			past.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold",
					children: "Past sessions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-3",
					children: past.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionRow, {
						session: s,
						attended: attendance?.has(s.id),
						past: true
					}, s.id))
				})]
			})
		]
	});
}
function SessionRow({ session: s, attended, onJoin, busy, past }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-elevated flex flex-wrap items-center justify-between gap-4 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: s.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: s.bootcamp?.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: [
						format(new Date(s.session_date), "PPP"),
						" · ",
						s.start_time?.slice(0, 5),
						" – ",
						s.end_time?.slice(0, 5)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: s.status }), attended && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: "completed" })]
				})
			] })]
		}), !past && onJoin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: onJoin,
			disabled: busy,
			className: "rounded-full bg-brand-gradient text-white",
			children: ["Join class ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-2 h-4 w-4" })]
		})]
	});
}
var Route$9 = createFileRoute("/_authenticated/dashboard/resources")({ component: StudentResources });
function StudentResources() {
	const { user } = useAuthUser();
	const { data: resources, isLoading } = useQuery({
		queryKey: ["student-resources", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("resources").select("*, bootcamp:bootcamps(title), session:sessions(title)").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Resources"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted-foreground",
				children: "Files and materials for your enrolled bootcamps."
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted-foreground",
				children: "Loading…"
			}),
			!isLoading && (resources ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground",
				children: "No resources uploaded yet for your bootcamps."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: (resources ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "card-elevated p-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: r.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: r.bootcamp?.title
								}),
								r.session?.title && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: ["Session: ", r.session.title]
								}),
								r.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground line-clamp-2",
									children: r.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: format(new Date(r.created_at), "PP")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: r.file_url,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-3 inline-block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "secondary",
										className: "rounded-full",
										children: ["Open resource ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-2 h-3 w-3" })]
									})
								})
							]
						})]
					})
				}, r.id))
			})
		]
	});
}
var Route$8 = createFileRoute("/_authenticated/dashboard/profile")({ component: StudentProfile });
function StudentProfile() {
	const { user } = useAuthUser();
	const qc = useQueryClient();
	const { data: profile, isLoading } = useQuery({
		queryKey: ["my-profile", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).single();
			if (error) throw error;
			return data;
		}
	});
	const [form, setForm] = (0, import_react.useState)(null);
	const values = form ?? {
		full_name: profile?.full_name ?? "",
		phone: profile?.phone ?? "",
		bio: profile?.bio ?? "",
		avatar_url: profile?.avatar_url ?? ""
	};
	const save = useMutation({
		mutationFn: async () => {
			const { error } = await supabase.from("profiles").update({
				full_name: values.full_name.trim() || null,
				phone: values.phone.trim() || null,
				bio: values.bio.trim() || null,
				avatar_url: values.avatar_url.trim() || null
			}).eq("id", user.id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Profile updated");
			setForm(null);
			qc.invalidateQueries({ queryKey: ["my-profile"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const set = (key, v) => setForm((prev) => ({
		...prev ?? values,
		[key]: v
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Profile"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted-foreground",
				children: "Manage your account details."
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted-foreground",
				children: "Loading…"
			}),
			!isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					save.mutate();
				},
				className: "card-elevated mt-8 max-w-xl space-y-4 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: user?.email ?? "",
						disabled: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "full_name",
						children: "Full name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "full_name",
						value: values.full_name,
						onChange: (e) => set("full_name", e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "phone",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "phone",
						value: values.phone,
						onChange: (e) => set("phone", e.target.value),
						placeholder: "+237…"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "avatar",
						children: "Avatar URL"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "avatar",
						value: values.avatar_url,
						onChange: (e) => set("avatar_url", e.target.value),
						placeholder: "https://…"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "bio",
						children: "Bio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "bio",
						rows: 4,
						value: values.bio,
						onChange: (e) => set("bio", e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: save.isPending,
						className: "rounded-full bg-brand-gradient text-white",
						children: save.isPending ? "Saving…" : "Save profile"
					})
				]
			})
		]
	});
}
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var Table = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
		ref,
		className: cn("w-full caption-bottom text-sm", className),
		...props
	})
}));
Table.displayName = "Table";
var TableHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
	ref,
	className: cn("[&_tr]:border-b", className),
	...props
}));
TableHeader.displayName = "TableHeader";
var TableBody = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
	ref,
	className: cn("[&_tr:last-child]:border-0", className),
	...props
}));
TableBody.displayName = "TableBody";
var TableFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
	ref,
	className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
	...props
}));
TableFooter.displayName = "TableFooter";
var TableRow = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
	ref,
	className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
	...props
}));
TableRow.displayName = "TableRow";
var TableHead = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
	ref,
	className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableHead.displayName = "TableHead";
var TableCell = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
	ref,
	className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableCell.displayName = "TableCell";
var TableCaption = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
	ref,
	className: cn("mt-4 text-sm text-muted-foreground", className),
	...props
}));
TableCaption.displayName = "TableCaption";
var Route$7 = createFileRoute("/_authenticated/dashboard/payments")({ component: StudentPayments });
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
var Route$6 = createFileRoute("/_authenticated/dashboard/notifications")({ component: StudentNotifications });
function StudentNotifications() {
	const { user } = useAuthUser();
	const qc = useQueryClient();
	const { data: notifications, isLoading } = useQuery({
		queryKey: ["my-notifications", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("notifications").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const markRead = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("notifications").update({ read_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => qc.invalidateQueries({ queryKey: ["my-notifications"] }),
		onError: (e) => toast.error(e.message)
	});
	const markAllRead = useMutation({
		mutationFn: async () => {
			const unread = (notifications ?? []).filter((n) => !n.read_at);
			await Promise.all(unread.map((n) => supabase.from("notifications").update({ read_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", n.id)));
		},
		onSuccess: () => {
			toast.success("All notifications marked as read");
			qc.invalidateQueries({ queryKey: ["my-notifications"] });
		}
	});
	const unreadCount = (notifications ?? []).filter((n) => !n.read_at).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold",
					children: "Notifications"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted-foreground",
					children: unreadCount > 0 ? `${unreadCount} unread` : "You're all caught up."
				})] }), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "rounded-full",
					onClick: () => markAllRead.mutate(),
					children: "Mark all read"
				})]
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted-foreground",
				children: "Loading…"
			}),
			!isLoading && (notifications ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground",
				children: "No notifications yet."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-3",
				children: (notifications ?? []).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `card-elevated flex items-start gap-4 p-5 ${!n.read_at ? "border-primary/30" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: n.title
								}),
								n.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: n.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: format(new Date(n.created_at), "PPp")
								}),
								n.link && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: n.link,
									className: "mt-2 inline-block text-sm text-primary hover:underline",
									children: "Open link →"
								})
							]
						}),
						!n.read_at && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							className: "rounded-full shrink-0",
							onClick: () => markRead.mutate(n.id),
							children: "Mark read"
						})
					]
				}, n.id))
			})
		]
	});
}
var Route$5 = createFileRoute("/_authenticated/dashboard/certificates")({ component: StudentCertificates });
function StudentCertificates() {
	const { user } = useAuthUser();
	const { data: certs, isLoading } = useQuery({
		queryKey: ["my-certificates", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("certificates").select("*, bootcamp:bootcamps(title, slug)").eq("student_id", user.id).order("issued_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Certificates"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted-foreground",
				children: "Your earned certificates of completion."
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted-foreground",
				children: "Loading…"
			}),
			!isLoading && (certs ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground",
				children: "No certificates issued yet. Complete a bootcamp to earn one."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: (certs ?? []).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "card-elevated p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-bold",
								children: c.bootcamp?.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-sm text-primary",
								children: c.certificate_code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: ["Issued ", format(new Date(c.issued_at), "PPP")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/certificate",
								search: { code: c.certificate_code },
								className: "mt-4 inline-block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "secondary",
									className: "rounded-full",
									children: ["Verify & share ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-2 h-3 w-3" })]
								})
							})
						] })]
					})
				}, c.id))
			})
		]
	});
}
var Route$4 = createFileRoute("/_authenticated/dashboard/bootcamps")({ component: MyBootcamps });
function MyBootcamps() {
	const { user } = useAuthUser();
	const { data: regs, isLoading } = useQuery({
		queryKey: ["my-regs", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("registrations").select("*, bootcamp:bootcamps(*)").eq("student_id", user.id).order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mode: "student",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold",
					children: "My bootcamps"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted-foreground",
					children: "All bootcamps you are enrolled in."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/bootcamps",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "rounded-full bg-brand-gradient text-white",
						children: "Browse bootcamps"
					})
				})]
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Loading…"
			}),
			!isLoading && (regs ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground",
				children: "You have not enrolled in any bootcamps yet."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: (regs ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevated p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-bold",
								children: r.bootcamp?.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground line-clamp-2",
								children: r.bootcamp?.short_description
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.status })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Payment: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.payment_status })] }),
								r.bootcamp?.start_date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Starts ", format(new Date(r.bootcamp.start_date), "PP")] }),
								r.bootcamp?.price != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatXAF(r.bootcamp.price, r.bootcamp.currency) })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/bootcamps/$slug",
								params: { slug: r.bootcamp?.slug ?? "" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									size: "sm",
									className: "rounded-full",
									children: "View details"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard/sessions",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									className: "rounded-full",
									children: "Sessions"
								})
							})]
						})
					]
				}, r.id))
			})
		]
	});
}
var Route$3 = createFileRoute("/_authenticated/admin/students")({ component: AdminStudentsPage });
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
var Route$2 = createFileRoute("/_authenticated/admin/sessions")({ component: AdminSessionsPage });
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
var Route$1 = createFileRoute("/_authenticated/admin/payments")({ component: AdminPaymentsPage });
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
function slugify(value) {
	return value.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var Route = createFileRoute("/_authenticated/admin/bootcamps")({ component: AdminBootcampsPage });
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
var TermsRoute = Route$34.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$35
});
var SupportRoute = Route$33.update({
	id: "/support",
	path: "/support",
	getParentRoute: () => Route$35
});
var ResetPasswordRoute = Route$32.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$35
});
var PrivacyRoute = Route$31.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$35
});
var PricingRoute = Route$30.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$35
});
var ForgotPasswordRoute = Route$29.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$35
});
var FaqRoute = Route$28.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$35
});
var ContactRoute = Route$27.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$35
});
var CertificateRoute = Route$26.update({
	id: "/certificate",
	path: "/certificate",
	getParentRoute: () => Route$35
});
var BootcampsRoute = Route$24.update({
	id: "/bootcamps",
	path: "/bootcamps",
	getParentRoute: () => Route$35
});
var AuthRoute = Route$23.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$35
});
var AboutRoute = Route$22.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$35
});
var AuthenticatedRouteRoute = Route$21.update({
	id: "/_authenticated",
	getParentRoute: () => Route$35
});
var IndexRoute = Route$20.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$35
});
var BootcampsSlugRoute = Route$19.update({
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
	getParentRoute: () => Route$35
});
var ApiPaymentsStatusRoute = Route$13.update({
	id: "/api/payments/status",
	path: "/api/payments/status",
	getParentRoute: () => Route$35
});
var ApiPaymentsInitiateRoute = Route$12.update({
	id: "/api/payments/initiate",
	path: "/api/payments/initiate",
	getParentRoute: () => Route$35
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
var routeTree = Route$35._addFileChildren(rootRouteChildren)._addFileTypes();
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
