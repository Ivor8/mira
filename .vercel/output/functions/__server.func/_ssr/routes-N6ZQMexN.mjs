import { t as supabase } from "./client-CTJdFVPM.mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { G as Award, I as CirclePlay, K as ArrowRight, L as CircleCheck, M as CodeXml, N as Clock, T as GraduationCap, U as Calendar, a as Users, f as Rocket, t as Zap, u as Sparkles } from "../_libs/lucide-react.mjs";
import { a as SiteHeader, c as formatXAF, i as SiteFooter, n as Button, s as daysUntil, t as BRAND } from "./format-BsBIdMp6.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-N6ZQMexN.js
var import_jsx_runtime = require_jsx_runtime();
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
//#endregion
export { BootcampCard, Landing as component };
