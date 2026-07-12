import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CTJdFVPM.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Logo } from "./Logo-f4TzIa2S.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as Eye, k as EyeOff, q as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-DO3DZj4v.mjs";
import { t as Route } from "./auth-Bpb16ABY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-nq8F1ijo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const { next } = Route.useSearch();
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
//#endregion
export { AuthPage as component };
