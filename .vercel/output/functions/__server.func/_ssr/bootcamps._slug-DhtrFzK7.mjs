import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as useAuthUser } from "./useAuthUser-DHoxW5X_.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as CircleCheck, N as Clock, S as LoaderCircle, T as GraduationCap, U as Calendar, a as Users, f as Rocket, r as Wallet, z as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as SiteFooter, r as SiteHeader } from "./SiteFooter-B8AmoCCx.mjs";
import { n as formatXAF, t as daysUntil } from "./format-LeLbyl3U.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-TCrgttyU.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./bootcamps._slug-BZwUyNhu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bootcamps._slug-DhtrFzK7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BootcampDetail() {
	const { slug } = Route.useParams();
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
//#endregion
export { BootcampDetail as component };
