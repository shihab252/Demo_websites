import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
    Mail,
    ArrowUpRight,
    MapPin,
    Sparkles,
    ChevronUp,
    Heart,
    Code2,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import Container from "../common/Container";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
];

const socialLinks = [
    {
        name: "GitHub",
        icon: FaGithub,
        href: "https://github.com/yourusername",
        color: "hover:bg-slate-900 hover:text-white",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        href: "https://linkedin.com/in/yourusername",
        color: "hover:bg-blue-600 hover:text-white",
    },
    {
        name: "Twitter",
        icon: FaTwitter,
        href: "https://twitter.com/yourusername",
        color: "hover:bg-sky-500 hover:text-white",
    },
    {
        name: "Email",
        icon: Mail,
        href: "mailto:your@email.com",
        color: "hover:bg-cyan-600 hover:text-white",
    },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative overflow-hidden border-t border-slate-200/80 bg-slate-50/50 pt-20 pb-12">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 80, 0],
                        y: [0, -60, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -left-20 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-[130px]"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute right-0 bottom-10 h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-[130px]"
                />
            </div>

            <Container>
                {/* Pre-Footer CTA Card */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative mb-20 overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 shadow-2xl lg:p-14"
                >
                    {/* Inner Accent Glow */}
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

                    <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                        <div className="max-w-2xl">
                            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                                <Sparkles className="h-3.5 w-3.5" />
                                Available for New Opportunities
                            </span>
                            <h2 className="mt-4 text-3xl font-black text-white lg:text-4xl tracking-tight">
                                Ready to bring your next idea to life?
                            </h2>
                            <p className="mt-3 text-slate-300 text-sm leading-relaxed lg:text-base">
                                Whether you're looking for a Full Stack Developer, Security Consultant, or AI Engineer, my inbox is always open.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                to="contact"
                                smooth
                                duration={700}
                                offset={-80}
                                className="group inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/35"
                            >
                                Let's Talk
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>

                            <button
                                onClick={scrollToTop}
                                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                            >
                                Back to Top
                                <ChevronUp className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Main 4-Column Footer Grid */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-12 pb-16 pt-4 sm:grid-cols-2 lg:grid-cols-4 border-b border-slate-200/80"
                >
                    {/* Col 1: Brand & Bio */}
                    <div className="space-y-4 lg:col-span-1">
                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold shadow-md">
                                S
                            </div>
                            <span className="text-xl font-black text-slate-900 tracking-tight">
                                Shihab Uddin
                            </span>
                        </div>

                        <p className="text-xs leading-relaxed text-slate-600">
                            Full Stack Developer & Cyber Security Enthusiast focused on building secure, high-performance web applications and intelligent systems.
                        </p>

                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 pt-2">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            Based in Dhaka, Bangladesh
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                            Navigation
                        </h3>
                        <ul className="space-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.to}
                                        smooth
                                        duration={700}
                                        offset={-80}
                                        className="group inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-slate-300 transition-all duration-200 group-hover:w-2 group-hover:bg-blue-600" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Technical Specializations */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                            Core Focus
                        </h3>
                        <ul className="space-y-2.5 text-xs text-slate-600">
                            <li className="flex items-center gap-2">
                                <Code2 className="h-3.5 w-3.5 text-blue-500" /> Full Stack Web Apps
                            </li>
                            <li className="flex items-center gap-2">
                                <Code2 className="h-3.5 w-3.5 text-cyan-500" /> Penetration Testing & OWASP
                            </li>
                            <li className="flex items-center gap-2">
                                <Code2 className="h-3.5 w-3.5 text-indigo-500" /> Machine Learning Solutions
                            </li>
                            <li className="flex items-center gap-2">
                                <Code2 className="h-3.5 w-3.5 text-emerald-500" /> REST API Architecture
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Social Connections */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                            Connect
                        </h3>
                        <p className="text-xs text-slate-600">
                            Follow my journey, inspect my code, or reach out directly.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-1">
                            {socialLinks.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.name}
                                        className={`flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${item.color}`}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar / Copyright */}
                <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center sm:flex-row sm:text-left">
                    <p className="text-xs font-medium text-slate-500">
                        © {new Date().getFullYear()} Shihab Uddin Khan. All rights reserved.
                    </p>

                    <p className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        Built with React, Tailwind CSS & Framer Motion
                    </p>
                </div>
            </Container>
        </footer>
    );
}