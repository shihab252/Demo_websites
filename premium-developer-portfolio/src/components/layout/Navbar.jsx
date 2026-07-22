import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Moon, Sun, ArrowUpRight } from "lucide-react";
import clsx from "clsx";

import Container from "../common/Container";
import Button from "../common/Button";
import { navigationLinks } from "../../data/navigation";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [activeSection, setActiveSection] = useState(navigationLinks[0]?.to);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 300,
        damping: 40,
        restDelta: 0.001,
    });

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -55% 0px",
            threshold: 0,
        };

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        navigationLinks.forEach((link) => {
            const el = document.getElementById(link.to);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const closeMobileMenu = useCallback(() => setIsMobileOpen(false), []);

    useEffect(() => {
        if (!isMobileOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") closeMobileMenu();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isMobileOpen, closeMobileMenu]);

    const navContainerVariants = {
        hidden: { opacity: 0, y: -24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const navListVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.06, delayChildren: 0.2 },
        },
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
        exit: { opacity: 0, transition: { duration: 0.25, ease: "easeInOut" } },
    };

    const mobileListVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
        exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    };

    const mobileItemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
        },
        exit: {
            opacity: 0,
            y: 16,
            transition: { duration: 0.25, ease: "easeInOut" },
        },
    };

    return (
        <>
            <motion.div
                style={{ scaleX }}
                className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600"
            />

            <motion.header
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
                className={clsx(
                    "fixed inset-x-0 top-5 z-50 transition-all duration-700 ease-out px-4",
                    isScrolled ? "py-1" : "py-3"
                )}
            >
                <Container>
                    <div
                        className={clsx(
                            "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6 transition-all duration-700 ease-out",
                            isScrolled
                                ? "h-16 border-slate-200/60 bg-white/70 shadow-2xl shadow-blue-500/10 backdrop-blur-2xl"
                                : "h-18 border-transparent bg-white/20 backdrop-blur-xl"
                        )}
                    >
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="cursor-pointer focus:outline-none"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="flex items-center gap-2 select-none"
                            >
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 shadow-lg shadow-fuchsia-500/30"
                                >
                                    <span className="text-sm font-bold text-slate-900">SK</span>
                                </motion.span>
                                <span className="text-xl font-black tracking-wider text-slate-900">
                                    SHIHAB
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-indigo-400">
                                        <span className="text-blue-600">KHAN</span>
                                    </span>
                                </span>
                            </motion.div>
                        </ScrollLink>

                        <motion.nav
                            variants={navListVariants}
                            initial="hidden"
                            animate="visible"
                            className="hidden items-center gap-1 rounded-full bg-slate-100/80 p-1 p-1 lg:flex"
                            aria-label="Main Navigation"
                        >
                            {navigationLinks.map((item) => {
                                const isActive = activeSection === item.to;
                                return (
                                    <motion.div key={item.id} variants={navItemVariants}>
                                        <ScrollLink
                                            to={item.to}
                                            spy={true}
                                            smooth={true}
                                            offset={-80}
                                            duration={500}
                                            onSetActive={() => setActiveSection(item.to)}
                                            className={clsx(
                                                "relative cursor-pointer select-none rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60",
                                                isActive
                                                    ? "text-slate-900"
                                                    : "text-slate-500 hover:text-slate-900"
                                            )}
                                        >
                                            <span className="relative z-10">{item.title}</span>
                                            {isActive && (
                                                <motion.span
                                                    layoutId="navbar-active-pill"
                                                    className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-blue-600"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 380,
                                                        damping: 32,
                                                    }}
                                                />
                                            )}
                                        </ScrollLink>
                                    </motion.div>
                                );
                            })}
                        </motion.nav>

                        <div className="hidden items-center gap-3 lg:flex">
                            <motion.button
                                type="button"
                                onClick={() => setIsDark((prev) => !prev)}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Toggle theme"
                                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-100 text-slate-700 backdrop-blur-md transition-colors duration-300 hover:bg-blue-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {isDark ? (
                                        <motion.span
                                            key="moon"
                                            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="absolute"
                                        >
                                            <Moon size={16} strokeWidth={2} />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="sun"
                                            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="absolute"
                                        >
                                            <Sun size={16} strokeWidth={2} />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            <Button
                                size="md"
                                className="group rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 text-slate-900 shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
                            >
                                <span className="relative z-10 flex items-center gap-1.5">
                                    Let's Talk
                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </span>
                                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-2 lg:hidden">
                            <motion.button
                                type="button"
                                onClick={() => setIsDark((prev) => !prev)}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Toggle theme"
                                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-100 text-slate-700 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {isDark ? (
                                        <motion.span
                                            key="moon-m"
                                            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="absolute"
                                        >
                                            <Moon size={16} strokeWidth={2} />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="sun-m"
                                            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="absolute"
                                        >
                                            <Sun size={16} strokeWidth={2} />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            <motion.button
                                type="button"
                                onClick={() => setIsMobileOpen((prev) => !prev)}
                                whileTap={{ scale: 0.9 }}
                                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isMobileOpen}
                                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-100 text-slate-700 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
                            >
                                <div className="relative flex h-4 w-4 flex-col items-center justify-center">
                                    <motion.span
                                        animate={
                                            isMobileOpen
                                                ? { rotate: 45, y: 0 }
                                                : { rotate: 0, y: -4 }
                                        }
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="absolute h-[1.5px] w-4 rounded-full bg-white"
                                    />
                                    <motion.span
                                        animate={
                                            isMobileOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }
                                        }
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                        className="absolute h-[1.5px] w-4 rounded-full bg-white"
                                    />
                                    <motion.span
                                        animate={
                                            isMobileOpen
                                                ? { rotate: -45, y: 0 }
                                                : { rotate: 0, y: 4 }
                                        }
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="absolute h-[1.5px] w-4 rounded-full bg-white"
                                    />
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </Container>
            </motion.header>

            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        role="dialog"
                        aria-modal="true"
                        className="fixed inset-0 z-40 flex flex-col bg-neutral/90 backdrop-blur-2xl lg:hidden"
                    >
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(217,70,239,0.15),transparent_60%)]" />

                        <div className="flex flex-1 flex-col items-center justify-center px-8">
                            <motion.nav
                                variants={mobileListVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="flex flex-col items-center gap-8"
                            >
                                {navigationLinks.map((item) => {
                                    const isActive = activeSection === item.to;
                                    return (
                                        <motion.div
                                            key={item.id}
                                            variants={mobileItemVariants}
                                            className="relative"
                                        >
                                            <ScrollLink
                                                to={item.to}
                                                spy={true}
                                                smooth={true}
                                                offset={-80}
                                                duration={500}
                                                onSetActive={() => setActiveSection(item.to)}
                                                onClick={closeMobileMenu}
                                                className={clsx(
                                                    "relative cursor-pointer select-none text-3xl font-semibold tracking-tight transition-colors duration-300 focus:outline-none",
                                                    isActive
                                                        ? "text-slate-900"
                                                        : "text-state-500 hover:text-slate-900"
                                                )}
                                            >
                                                {item.title}
                                                {isActive && (
                                                    <motion.span
                                                        layoutId="navbar-active-dot"
                                                        className="absolute -left-5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-gradient-to-r from-fuchsia-400 to-indigo-400"
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 380,
                                                            damping: 32,
                                                        }}
                                                    />
                                                )}
                                            </ScrollLink>
                                        </motion.div>
                                    );
                                })}
                            </motion.nav>

                            <motion.div
                                variants={mobileItemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="mt-12 flex w-full max-w-xs flex-col items-center gap-5"
                            >
                                <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                    </span>
                                    Available for Freelance
                                </div>

                                <Button
                                    variant="primary"
                                    className="w-full justify-center"
                                    onClick={closeMobileMenu}
                                >
                                    Let's Talk
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}