import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        try {
            // EmailJS will be added here
            await new Promise((resolve) =>
                setTimeout(resolve, 1500)
            );

            setStatus("success");
            e.target.reset();
        } catch (err) {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden py-32"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-30 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 120, 0],
                        y: [0, -80, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]"
                />

                <motion.div
                    animate={{
                        x: [0, -120, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]"
                />
            </div>

            <Container>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <SectionTitle
                        subtitle="Contact"
                        title="Let's Build Something Amazing"
                        description="Whether you have a project, collaboration opportunity, or just want to say hello, I'd love to hear from you. Feel free to reach out anytime."
                        center
                    />
                </motion.div>

                {/* Contact Content Grid */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="mt-24 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"
                >
                    {/* Left Column: Contact Cards & Info */}
                    <motion.div variants={fadeUp} className="space-y-8">
                        <div className="space-y-6">
                            {[
                                {
                                    icon: Mail,
                                    title: "Email",
                                    value: "khanshihab252@email.com",
                                    href: "mailto:khanshihab252@email.com",
                                    color: "from-blue-500 to-cyan-500",
                                },
                                {
                                    icon: FaGithub,
                                    title: "GitHub",
                                    value: "https://github.com/shihab252",
                                    href: "https://github.com/shihab252",
                                    color: "from-slate-700 to-slate-900",
                                },
                                {
                                    icon: FaLinkedin,
                                    title: "LinkedIn",
                                    value: "https://www.linkedin.com/in/shihab-uddin-khan/",
                                    href: "https://www.linkedin.com/in/shihab-uddin-khan/",
                                    color: "from-sky-500 to-blue-600",
                                },
                                {
                                    icon: MapPin,
                                    title: "Location",
                                    value: "Dhaka, Bangladesh",
                                    href: "#",
                                    color: "from-emerald-500 to-green-500",
                                },
                            ].map((item) => {
                                const Icon = item.icon;

                                return (
                                    <motion.a
                                        key={item.title}
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        whileHover={{
                                            y: -6,
                                            scale: 1.02,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 220,
                                        }}
                                        className="group relative flex items-center gap-6 overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,.08)] backdrop-blur-xl"
                                    >
                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-400/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                        {/* Icon */}
                                        <div
                                            className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}
                                        >
                                            <Icon className="h-7 w-7 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="relative flex-1">
                                            <p className="text-sm font-medium text-slate-500">
                                                {item.title}
                                            </p>
                                            <h3 className="mt-1 text-lg font-semibold text-slate-900 break-all">
                                                {item.value}
                                            </h3>
                                        </div>

                                        {/* Arrow */}
                                        <Send className="relative h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Small Introduction Card */}
                        <div className="overflow-hidden rounded-[32px] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,.18)]">
                            <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                                Available for Opportunities
                            </span>

                            <h2 className="mt-6 text-3xl font-black leading-tight">
                                Let's turn your ideas
                                <br />
                                into reality.
                            </h2>

                            <p className="mt-6 leading-8 text-slate-300">
                                I'm always interested in discussing full-stack development,
                                cybersecurity, AI-powered applications, internships, freelance work,
                                and exciting collaborations.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        variants={fadeUp}
                        className="relative overflow-hidden rounded-[36px] border border-slate-200/70 bg-white/70 p-8 shadow-[0_30px_80px_rgba(15,23,42,.08)] backdrop-blur-2xl lg:p-10"
                    >
                        {/* Background Glow */}
                        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

                        <div className="relative">
                            <h3 className="text-3xl font-black text-slate-900">
                                Send Me a Message
                            </h3>

                            <p className="mt-3 text-slate-600">
                                Fill out the form below and I'll get back to you as soon as possible.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Project Discussion"
                                        className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        required
                                        placeholder="Tell me about your project..."
                                        className="w-full resize-none rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/35 disabled:opacity-50"
                                >
                                    {loading ? (
                                        "Sending Message..."
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="h-5 w-5" />
                                        </>
                                    )}
                                </button>

                                {/* Feedback Status */}
                                {status === "success" && (
                                    <p className="rounded-2xl border border-green-200 bg-green-50 p-4 text-center font-medium text-green-700">
                                        ✅ Your message has been sent successfully.
                                    </p>
                                )}

                                {status === "error" && (
                                    <p className="rounded-2xl border border-red-200 bg-red-50 p-4 text-center font-medium text-red-700">
                                        ❌ Something went wrong. Please try again.
                                    </p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Thanks For Visiting Banner */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-24 rounded-[36px] border border-slate-200/70 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 text-center shadow-[0_40px_120px_rgba(15,23,42,.15)]"
                >
                    <h2 className="text-4xl font-black text-white">
                        Thanks for Visiting
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                        Whether you're looking for a developer, a cybersecurity enthusiast,
                        or someone passionate about building impactful software, I'd love
                        to connect and create something meaningful together.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {[
                            "React",
                            "Cyber Security",
                            "Machine Learning",
                            "MERN Stack",
                            "Open to Opportunities",
                        ].map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}