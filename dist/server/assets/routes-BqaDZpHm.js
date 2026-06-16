import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ArrowUp, Award, Calendar, ChevronRight, Code2, Cpu, Database, Download, ExternalLink, FileText, Github, Instagram, Linkedin, Mail, MapPin, MessageCircle, Moon, Phone, Quote, Send, Sparkles, Sun, Twitter } from "lucide-react";
//#region src/assets/portrait.jpg
var portrait_default = "/assets/portrait-Bxo7K_z5.jpg";
//#endregion
//#region src/assets/project1.jpg
var project1_default = "/assets/project1-Br6kyDmE.jpg";
//#endregion
//#region src/assets/project2.jpg
var project2_default = "/assets/project2-BcwU1FSy.jpg";
//#endregion
//#region src/assets/project3.jpg
var project3_default = "/assets/project3-DgJXcNrh.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var NAV = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Skills",
		href: "#skills"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Experience",
		href: "#experience"
	},
	{
		label: "Achievements",
		href: "#achievements"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function useReveal() {
	useEffect(() => {
		const els = document.querySelectorAll(".reveal");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("in");
					io.unobserve(e.target);
				}
			});
		}, { threshold: .12 });
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
function useCounter(target, start, duration = 1600) {
	const [val, setVal] = useState(0);
	useEffect(() => {
		if (!start) return;
		const t0 = performance.now();
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - t0) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setVal(Math.round(target * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		start,
		target,
		duration
	]);
	return val;
}
function Portfolio() {
	useReveal();
	const [dark, setDark] = useState(false);
	const [showTop, setShowTop] = useState(false);
	const [statsIn, setStatsIn] = useState(false);
	const statsRef = useRef(null);
	useEffect(() => {
		document.documentElement.classList.toggle("dark", dark);
	}, [dark]);
	useEffect(() => {
		const onScroll = () => setShowTop(window.scrollY > 600);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		if (!statsRef.current) return;
		const io = new IntersectionObserver((e) => e.forEach((x) => x.isIntersecting && setStatsIn(true)), { threshold: .4 });
		io.observe(statsRef.current);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative min-h-screen overflow-x-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 -z-10 bg-aurora opacity-80" }),
			/* @__PURE__ */ jsxs("div", {
				className: "pointer-events-none fixed inset-0 -z-10",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute -left-32 top-20 h-96 w-96 rounded-full bg-lavender/40 blur-3xl animate-blob" }),
					/* @__PURE__ */ jsx("div", {
						className: "absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-rose/30 blur-3xl animate-blob",
						style: { animationDelay: "-6s" }
					}),
					/* @__PURE__ */ jsx("div", {
						className: "absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-navy/20 blur-3xl animate-blob",
						style: { animationDelay: "-12s" }
					})
				]
			}),
			/* @__PURE__ */ jsx(Nav, {
				dark,
				setDark
			}),
			/* @__PURE__ */ jsx("section", {
				id: "home",
				className: "relative pt-32 pb-24 sm:pt-40 sm:pb-32",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "reveal",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-foreground/70",
								children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-gold" }), " Open to graduate roles · 2026"]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block text-foreground/90",
									children: "Hello, I'm"
								}), /* @__PURE__ */ jsx("span", {
									className: "block text-gradient italic",
									children: "Lekha Shastry H"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 max-w-xl font-display text-2xl italic text-foreground/70 sm:text-3xl",
								children: "Information Science & Engineering Graduate"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
								children: "I build thoughtful software at the intersection of full-stack engineering, data and applied AI — translating curiosity into systems that are clean, considered and quietly powerful."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-10 flex flex-wrap gap-3",
								children: [
									/* @__PURE__ */ jsxs(BtnPrimary, {
										href: "#projects",
										children: [/* @__PURE__ */ jsx("span", { children: "View Portfolio" }), /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
									}),
									/* @__PURE__ */ jsxs(BtnGlass, {
										href: "#",
										children: [/* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "Download Resume" })]
									}),
									/* @__PURE__ */ jsxs(BtnGlass, {
										href: "#contact",
										children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "Contact Me" })]
									}),
									/* @__PURE__ */ jsxs(BtnOutline, {
										href: "#contact",
										children: [/* @__PURE__ */ jsx("span", { children: "Let's Work Together" }), /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								ref: statsRef,
								className: "mt-14 grid max-w-xl grid-cols-3 gap-6",
								children: [
									/* @__PURE__ */ jsx(Stat, {
										value: useCounter(10, statsIn),
										suffix: "+",
										label: "Projects built"
									}),
									/* @__PURE__ */ jsx(Stat, {
										value: useCounter(8, statsIn),
										suffix: " CGPA",
										label: "Final score"
									}),
									/* @__PURE__ */ jsx(Stat, {
										value: useCounter(7, statsIn),
										suffix: "",
										label: "Hackathons & awards"
									})
								]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "reveal relative",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-lavender/60 via-rose/40 to-navy/30 blur-2xl" }), /* @__PURE__ */ jsxs("div", {
							className: "relative animate-float",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "overflow-hidden rounded-[2rem] glass-strong p-2",
									children: /* @__PURE__ */ jsx("img", {
										src: portrait_default,
										alt: "Portrait of Lekha Shastry H",
										width: 1024,
										height: 1280,
										className: "h-[34rem] w-full rounded-[1.6rem] object-cover sm:h-[38rem]"
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute -bottom-6 -left-6 hidden rounded-2xl glass-strong px-5 py-4 sm:block",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-xs uppercase tracking-widest text-muted-foreground",
										children: "GRADUATED"
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-1 font-display text-lg",
										children: "B.E. ISE · BMS College of Engineering"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute -right-4 top-10 hidden rounded-full glass-strong px-4 py-2 text-xs font-medium sm:block",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-gold",
										children: "★"
									}), " Smart India Hackathon Winner"]
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx(Section, {
				id: "about",
				eyebrow: "About",
				title: "A graduate shaped by curiosity and code",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid gap-10 lg:grid-cols-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "reveal lg:col-span-2 space-y-5 text-lg leading-relaxed text-foreground/80",
						children: [
							/* @__PURE__ */ jsx("p", { children: "I'm a recent Information Science & Engineering graduate with a soft spot for the parts of software that quietly do the heavy lifting — clean APIs, well-shaped data, and interfaces that don't make people think twice." }),
							/* @__PURE__ */ jsx("p", { children: "Across four years I explored everything from data structures and DBMS to machine learning, cloud computing and full-stack development. Two internships taught me how production software really behaves, and a handful of hackathons taught me how to ship." }),
							/* @__PURE__ */ jsx("p", { children: "I'm now looking to join a team where I can keep learning fast, contribute to meaningful products, and grow into a thoughtful software engineer over the next few years." })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "reveal space-y-4",
						children: [
							/* @__PURE__ */ jsx(Highlight, {
								label: "Career goal",
								text: "Join a strong engineering team as an SDE / Data Engineer."
							}),
							/* @__PURE__ */ jsx(Highlight, {
								label: "Key win",
								text: "Smart India Hackathon 2024 — National Winner, Software track."
							}),
							/* @__PURE__ */ jsx(Highlight, {
								label: "Focus areas",
								text: "Full-stack · Data Engineering · Applied ML"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx(Section, {
				id: "skills",
				eyebrow: "Skills",
				title: "A toolkit across four disciplines",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: SKILLS.map((s, i) => /* @__PURE__ */ jsx(SkillCard, {
						...s,
						delay: i * 80
					}, s.title))
				})
			}),
			/* @__PURE__ */ jsx(Section, {
				id: "projects",
				eyebrow: "Selected Work",
				title: "Projects crafted with intention",
				children: /* @__PURE__ */ jsx("div", {
					className: "space-y-10",
					children: PROJECTS.map((p, i) => /* @__PURE__ */ jsx(ProjectCard, {
						project: p,
						reverse: i % 2 === 1
					}, p.title))
				})
			}),
			/* @__PURE__ */ jsx(Section, {
				id: "experience",
				eyebrow: "Experience",
				title: "Where I've made things",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto max-w-3xl",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-lavender via-rose to-navy sm:left-1/2" }), /* @__PURE__ */ jsx("div", {
						className: "space-y-12",
						children: EXPERIENCE.map((e, i) => /* @__PURE__ */ jsx(TimelineItem, {
							item: e,
							side: i % 2 === 0 ? "left" : "right"
						}, e.company))
					})]
				})
			}),
			/* @__PURE__ */ jsx(Section, {
				id: "achievements",
				eyebrow: "Achievements",
				title: "Recognition & milestones",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: ACHIEVEMENTS.map((a) => /* @__PURE__ */ jsxs("div", {
						className: "reveal glass rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-luxe",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-lavender/60 to-rose/60 text-foreground",
									children: /* @__PURE__ */ jsx(Award, { className: "h-5 w-5" })
								}), /* @__PURE__ */ jsx("span", {
									className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
									children: a.kind
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-4 font-display text-xl",
								children: a.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: a.detail
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-xs text-foreground/50",
								children: a.year
							})
						]
					}, a.title))
				})
			}),
			/* @__PURE__ */ jsx(Section, {
				eyebrow: "Words",
				title: "Kind words from collaborators",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsxs("figure", {
						className: "reveal glass rounded-3xl p-7",
						children: [
							/* @__PURE__ */ jsx(Quote, { className: "h-7 w-7 text-gold" }),
							/* @__PURE__ */ jsxs("blockquote", {
								className: "mt-4 font-display text-xl leading-snug text-foreground/90",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ jsxs("figcaption", {
								className: "mt-6 flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "grid h-11 w-11 place-items-center rounded-full font-display text-base text-primary-foreground",
									style: { background: "var(--gradient-text)" },
									children: t.name.split(" ").map((n) => n[0]).join("")
								}), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
									className: "block text-sm font-medium",
									children: t.name
								}), /* @__PURE__ */ jsx("span", {
									className: "block text-xs text-muted-foreground",
									children: t.role
								})] })]
							})
						]
					}, t.name))
				})
			}),
			/* @__PURE__ */ jsx(Section, {
				eyebrow: "Gallery",
				title: "A look inside the studio",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
					children: [
						project1_default,
						project2_default,
						project3_default,
						portrait_default,
						project2_default,
						project3_default,
						project1_default,
						portrait_default
					].map((src, i) => /* @__PURE__ */ jsx("div", {
						className: `reveal overflow-hidden rounded-2xl glass ${i % 5 === 0 ? "col-span-2 row-span-2" : ""}`,
						children: /* @__PURE__ */ jsx("img", {
							src,
							alt: "",
							loading: "lazy",
							className: "h-full w-full object-cover transition duration-700 hover:scale-105"
						})
					}, i))
				})
			}),
			/* @__PURE__ */ jsx(Section, {
				id: "contact",
				eyebrow: "Contact",
				title: "Let's create something memorable",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid gap-8 lg:grid-cols-[1.1fr_0.9fr]",
					children: [/* @__PURE__ */ jsxs("form", {
						onSubmit: (e) => e.preventDefault(),
						className: "reveal glass-strong rounded-3xl p-7 sm:p-10",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ jsx(Field, {
									label: "Name",
									placeholder: "Your full name"
								}), /* @__PURE__ */ jsx(Field, {
									label: "Email",
									type: "email",
									placeholder: "you@studio.com"
								})]
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Subject",
								placeholder: "Project, role, or hello",
								className: "mt-5"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-5",
								children: [/* @__PURE__ */ jsx("label", {
									className: "mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground",
									children: "Message"
								}), /* @__PURE__ */ jsx("textarea", {
									rows: 5,
									placeholder: "Tell me a little about what you're building…",
									className: "w-full resize-none rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none ring-ring/40 transition focus:ring-2"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-7 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ jsxs(BtnPrimary, {
									type: "submit",
									children: [/* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "Send Message" })]
								}), /* @__PURE__ */ jsxs(BtnGlass, {
									href: "#",
									children: [/* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "Schedule a Call" })]
								})]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "reveal space-y-4",
						children: [
							/* @__PURE__ */ jsx(ContactRow, {
								icon: Mail,
								label: "Email",
								value: "lshastryhss16@gmail.com"
							}),
							/* @__PURE__ */ jsx(ContactRow, {
								icon: Phone,
								label: "Phone",
								value: "+91 8296284699"
							}),
							/* @__PURE__ */ jsx(ContactRow, {
								icon: MapPin,
								label: "Based in",
								value: "Bengaluru · Open to relocation"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "glass rounded-3xl p-6",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
									children: "Follow"
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-4 flex gap-3",
									children: [
										Linkedin,
										Github,
										Twitter,
										Instagram
									].map((Icon, i) => /* @__PURE__ */ jsx("a", {
										href: "#",
										"aria-label": "Social link",
										className: "grid h-11 w-11 place-items-center rounded-full glass transition hover:-translate-y-0.5 hover:text-foreground",
										children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
									}, i))
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx("button", {
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				"aria-label": "Back to top",
				className: `fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full glass-strong transition-all ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`,
				children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-5 w-5" })
			})
		]
	});
}
function Nav({ dark, setDark }) {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const f = () => setScrolled(window.scrollY > 20);
		f();
		window.addEventListener("scroll", f);
		return () => window.removeEventListener("scroll", f);
	}, []);
	return /* @__PURE__ */ jsx("header", {
		className: `fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: `flex items-center justify-between gap-4 rounded-full px-5 py-2.5 transition-all ${scrolled ? "glass-strong" : ""}`,
				children: [
					/* @__PURE__ */ jsxs("a", {
						href: "#home",
						className: "flex items-center gap-2 font-display text-lg",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid h-8 w-8 place-items-center rounded-full text-primary-foreground",
							style: { background: "var(--gradient-text)" },
							children: "L"
						}), /* @__PURE__ */ jsx("span", {
							className: "hidden sm:inline",
							children: "Lekha Shastry H"
						})]
					}),
					/* @__PURE__ */ jsx("nav", {
						className: "hidden items-center gap-7 text-sm text-foreground/70 lg:flex",
						children: NAV.map((n) => /* @__PURE__ */ jsx("a", {
							href: n.href,
							className: "relative transition hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full",
							children: n.label
						}, n.label))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ jsx("button", {
								onClick: () => setDark(!dark),
								className: "grid h-9 w-9 place-items-center rounded-full glass",
								"aria-label": "Toggle theme",
								children: dark ? /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#contact",
								className: "hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:inline-flex",
								children: "Get in touch"
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => setOpen(!open),
								className: "grid h-9 w-9 place-items-center rounded-full glass lg:hidden",
								"aria-label": "Menu",
								children: /* @__PURE__ */ jsx(ChevronRight, { className: `h-4 w-4 transition ${open ? "rotate-90" : ""}` })
							})
						]
					})
				]
			}), open && /* @__PURE__ */ jsx("div", {
				className: "mt-2 grid gap-1 rounded-2xl glass-strong p-3 lg:hidden",
				children: NAV.map((n) => /* @__PURE__ */ jsx("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "rounded-xl px-3 py-2 text-sm hover:bg-secondary",
					children: n.label
				}, n.label))
			})]
		})
	});
}
function Section({ id, eyebrow, title, children }) {
	return /* @__PURE__ */ jsx("section", {
		id,
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "reveal mb-12 max-w-2xl",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-medium uppercase tracking-[0.3em] text-gold",
					children: eyebrow
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-4xl leading-tight sm:text-5xl",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-gradient",
						children: title
					})
				})]
			}), children]
		})
	});
}
function BtnPrimary({ children, href, type }) {
	const cls = "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-luxe transition hover:-translate-y-0.5 hover:opacity-95";
	return href ? /* @__PURE__ */ jsx("a", {
		href,
		className: cls,
		children
	}) : /* @__PURE__ */ jsx("button", {
		type: type ?? "button",
		className: cls,
		children
	});
}
function BtnGlass({ children, href }) {
	return /* @__PURE__ */ jsx("a", {
		href,
		className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5",
		children
	});
}
function BtnOutline({ children, href }) {
	return /* @__PURE__ */ jsx("a", {
		href,
		className: "inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition hover:border-foreground/50",
		children
	});
}
function Stat({ value, suffix, label }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
		className: "font-display text-3xl sm:text-4xl text-gradient",
		children: [value, suffix]
	}), /* @__PURE__ */ jsx("div", {
		className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
		children: label
	})] });
}
function Highlight({ label, text }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "glass rounded-2xl p-5",
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-xs uppercase tracking-widest text-gold",
			children: label
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-1 font-display text-lg leading-snug",
			children: text
		})]
	});
}
var SKILLS = [
	{
		title: "Engineering",
		icon: Code2,
		blurb: "Full-stack web with a love for clean code.",
		items: [
			{
				name: "Java · Python · C++",
				value: 92
			},
			{
				name: "React · Node.js",
				value: 88
			},
			{
				name: "REST APIs & Testing",
				value: 84
			}
		]
	},
	{
		title: "Data & AI",
		icon: Database,
		blurb: "From SQL fundamentals to ML pipelines.",
		items: [
			{
				name: "SQL · MongoDB",
				value: 90
			},
			{
				name: "Pandas · NumPy",
				value: 86
			},
			{
				name: "Machine Learning",
				value: 78
			}
		]
	},
	{
		title: "Systems",
		icon: Cpu,
		blurb: "How software actually runs at scale.",
		items: [
			{
				name: "OS & Computer Networks",
				value: 88
			},
			{
				name: "Docker · Linux",
				value: 82
			},
			{
				name: "AWS Cloud Basics",
				value: 76
			}
		]
	},
	{
		title: "Collaboration",
		icon: MessageCircle,
		blurb: "Teamwork, writing, and clear thinking.",
		items: [
			{
				name: "Git & Code Review",
				value: 92
			},
			{
				name: "Technical Writing",
				value: 84
			},
			{
				name: "Public Speaking",
				value: 80
			}
		]
	}
];
function SkillCard({ title, icon: Icon, blurb, items, delay }) {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);
	useEffect(() => {
		if (!ref.current) return;
		const io = new IntersectionObserver((e) => e.forEach((x) => x.isIntersecting && setInView(true)), { threshold: .3 });
		io.observe(ref.current);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		ref,
		className: "reveal glass rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-luxe",
		style: { animationDelay: `${delay}ms` },
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-lavender/60 to-rose/60",
				children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "mt-5 font-display text-2xl",
				children: title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: blurb
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-6 space-y-4",
				children: items.map((it) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between text-xs",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-foreground/80",
						children: it.name
					}), /* @__PURE__ */ jsxs("span", {
						className: "text-muted-foreground",
						children: [it.value, "%"]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted",
					children: /* @__PURE__ */ jsx("div", {
						className: "h-full rounded-full transition-[width] duration-1000 ease-out",
						style: {
							width: inView ? `${it.value}%` : "0%",
							background: "var(--gradient-gold)"
						}
					})
				})] }, it.name))
			})
		]
	});
}
var PROJECTS = [
	{
		title: "MediTrack — Hospital Records Platform",
		category: "Final Year Project · 2025",
		description: "A full-stack hospital records system with role-based access for doctors, patients and admins. Built with the MERN stack and a normalized PostgreSQL schema; deployed on AWS with CI via GitHub Actions.",
		image: project1_default,
		tags: [
			"React",
			"Node.js",
			"PostgreSQL",
			"AWS"
		]
	},
	{
		title: "CampusCart — Student Marketplace",
		category: "Smart India Hackathon · 2024",
		description: "A peer-to-peer marketplace for college students with real-time chat, image search and Razorpay payments. Won the national finals on the Software track for ed-tech.",
		image: project2_default,
		tags: [
			"Next.js",
			"MongoDB",
			"Socket.io"
		]
	},
	{
		title: "LeafSense — Plant Disease Detection",
		category: "Mini Project · 2023",
		description: "A CNN-based image classifier that detects 14 common crop diseases from a smartphone photo. Trained on PlantVillage and served through a lightweight FastAPI backend with a React Native client.",
		image: project3_default,
		tags: [
			"Python",
			"TensorFlow",
			"FastAPI"
		]
	}
];
function ProjectCard({ project, reverse }) {
	return /* @__PURE__ */ jsxs("article", {
		className: `reveal grid gap-8 overflow-hidden rounded-[2rem] glass p-5 lg:grid-cols-2 lg:p-7 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "group relative overflow-hidden rounded-3xl",
			children: [/* @__PURE__ */ jsx("img", {
				src: project.image,
				alt: project.title,
				loading: "lazy",
				className: "h-72 w-full object-cover transition duration-700 group-hover:scale-105 lg:h-full"
			}), /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col justify-center p-2 lg:p-6",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "text-xs font-medium uppercase tracking-[0.3em] text-gold",
					children: project.category
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "mt-3 font-display text-4xl leading-tight",
					children: project.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-base leading-relaxed text-muted-foreground",
					children: project.description
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: project.tags.map((t) => /* @__PURE__ */ jsx("span", {
						className: "rounded-full glass px-3 py-1 text-xs",
						children: t
					}, t))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-7 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: "#",
							className: "inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90",
							children: ["View Project ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "#",
							className: "inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-medium",
							children: [/* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" }), " Live Demo"]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "#",
							className: "inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-4 py-2 text-xs font-medium hover:border-foreground/40",
							children: [/* @__PURE__ */ jsx(FileText, { className: "h-3.5 w-3.5" }), " Case Study"]
						})
					]
				})
			]
		})]
	});
}
var EXPERIENCE = [
	{
		company: "BMS College of Engineering",
		role: "B.E. — Information Science & Engineering",
		period: "2021 — 2025",
		text: "Graduated with a CGPA of 8/10. Coursework in DSA, DBMS, OS, Networks, ML and Cloud Computing. Active member of IEEE and Coding clubs."
	},
	{
		company: "Aumovio",
		role: "SDE Intern",
		period: "SUMMER 2025",
		text: "Built Dashboards for the department using Power BI and Visual Boards. Wrote python scripts and helped migrate three services to a new auth layer."
	},
	{
		company: "SoftServe",
		role: "AIML Intern",
		period: "SPRING 2024",
		text: "Worked on a Python anomalies module — wrote Pyhton aggregation pipelines and exposed them through REST API endpoints used in production dashboards."
	},
	{
		company: "GDSC BMSCE",
		role: "IEEE Member",
		period: "2022 — 2025",
		text: "Led a chapter of 40+ students. Organized workshops on IEEE, Git and cloud fundamentals; mentored juniors through their first open-source contributions."
	}
];
function TimelineItem({ item, side }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "reveal relative grid sm:grid-cols-2 sm:gap-10",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: `relative pl-12 sm:pl-0 ${side === "right" ? "sm:order-2 sm:pl-12" : "sm:pr-12 sm:text-right"}`,
				children: [/* @__PURE__ */ jsx("span", {
					className: "absolute left-2 top-3 grid h-4 w-4 place-items-center rounded-full sm:left-auto sm:right-auto",
					style: {
						background: "var(--gradient-gold)",
						left: side === "right" ? void 0 : void 0,
						...side === "left" ? { right: "calc(-0.5rem - 1px)" } : { left: "calc(-0.5rem - 1px)" }
					}
				}), /* @__PURE__ */ jsxs("div", {
					className: "glass rounded-2xl p-5",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs font-medium uppercase tracking-widest text-gold",
							children: item.period
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-1 font-display text-2xl",
							children: item.role
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-sm text-foreground/70",
							children: item.company
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: item.text
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "hidden sm:block" }),
			/* @__PURE__ */ jsx("span", {
				className: "absolute left-2 top-4 h-4 w-4 rounded-full ring-4 ring-background sm:left-1/2 sm:-translate-x-1/2",
				style: { background: "var(--gradient-gold)" }
			})
		]
	});
}
var ACHIEVEMENTS = [
	{
		kind: "Award",
		title: "Smart India Hackathon — National Winner",
		detail: "Software track, ed-tech problem statement.",
		year: "2024"
	},
	{
		kind: "Certification",
		title: "AWS Certified Cloud Practitioner",
		detail: "Foundational certification in cloud services.",
		year: "2024"
	},
	{
		kind: "Award",
		title: "Dean's List — Top 5%",
		detail: "Recognised in 4th, 5th and 6th semesters.",
		year: "2023 – 2024"
	},
	{
		kind: "Milestone",
		title: "GSoC Contributor",
		detail: "Contributed to an open-source DevTools organization.",
		year: "2024"
	},
	{
		kind: "Certification",
		title: "Stanford ML — Coursera",
		detail: "Andrew Ng's Machine Learning Specialization.",
		year: "2023"
	},
	{
		kind: "Award",
		title: "Best Paper — Student Symposium",
		detail: "Paper on lightweight CNNs for edge devices.",
		year: "2024"
	}
];
var TESTIMONIALS = [
	{
		name: "Dr. Anitha H M ",
		role: "Proctor, BMSCE",
		quote: "Lekha approaches problems with rare patience — she reads the spec, asks the right questions, and then ships."
	},
	{
		name: "Gautam KeshavaMurthy",
		role: "Manager, AUMOVIO",
		quote: "One of the strongest interns I've worked with. Picked up our codebase quickly and wrote tests without being asked."
	},
	{
		name: "Sony Mahato",
		role: "Teammate, BMSCE",
		quote: "She made our team better. Calm under pressure during the hackathon finals, and always the first to help juniors debug."
	}
];
function ContactRow({ icon: Icon, label, value }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-4 rounded-2xl glass p-5",
		children: [/* @__PURE__ */ jsx("span", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-lavender/60 to-rose/60",
			children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ jsx("div", {
				className: "text-xs uppercase tracking-widest text-muted-foreground",
				children: label
			}), /* @__PURE__ */ jsx("div", {
				className: "truncate font-display text-lg",
				children: value
			})]
		})]
	});
}
function Field({ label, type = "text", placeholder, className }) {
	return /* @__PURE__ */ jsxs("div", {
		className,
		children: [/* @__PURE__ */ jsx("label", {
			className: "mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("input", {
			type,
			placeholder,
			className: "w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none ring-ring/40 transition focus:ring-2"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative mt-12 border-t border-border/60 px-6 pt-16 pb-10",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 font-display text-xl",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid h-9 w-9 place-items-center rounded-full text-primary-foreground",
							style: { background: "var(--gradient-text)" },
							children: "L"
						}), "Lekha Shastry H"]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-sm text-sm text-muted-foreground",
						children: "An Information Science & Engineering graduate building thoughtful software across full-stack, data and AI."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-5 flex gap-2",
						children: [
							Linkedin,
							Github,
							Twitter,
							Instagram
						].map((Icon, i) => /* @__PURE__ */ jsx("a", {
							href: "#",
							"aria-label": "Social",
							className: "grid h-10 w-10 place-items-center rounded-full glass hover:-translate-y-0.5 transition",
							children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
						}, i))
					})
				] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-medium uppercase tracking-widest text-gold",
					children: "Explore"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-4 grid grid-cols-2 gap-2 text-sm",
					children: NAV.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: n.href,
						className: "text-foreground/70 hover:text-foreground",
						children: n.label
					}) }, n.label))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs font-medium uppercase tracking-widest text-gold",
						children: "Newsletter"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "Occasional notes on the projects I'm building and what I'm learning — once a month."
					}),
					/* @__PURE__ */ jsxs("form", {
						onSubmit: (e) => e.preventDefault(),
						className: "mt-4 flex items-center gap-2 rounded-full glass p-1.5",
						children: [/* @__PURE__ */ jsx("input", {
							type: "email",
							placeholder: "you@email.com",
							className: "flex-1 bg-transparent px-4 py-2 text-sm outline-none"
						}), /* @__PURE__ */ jsx("button", {
							className: "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90",
							children: "Subscribe"
						})]
					})
				] })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Lekha Shastry H . All rights reserved."
			] }), /* @__PURE__ */ jsx("div", { children: "Designed & built with intention in Bengaluru." })]
		})]
	});
}
//#endregion
export { Portfolio as component };
