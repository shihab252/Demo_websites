import { motion } from "framer-motion";
import {
    GraduationCap,
    Code2,
    ShieldCheck,
    Trophy,
    BrainCircuit,
} from "lucide-react";

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
            staggerChildren: 0.18,
        },
    },
};

const timelineData = [
    {
        year: "2022",
        icon: GraduationCap,
        title: "Started B.Sc. in Computer Science",
        subtitle: "Bangladesh University of Business & Technology",
        description:
            "Began my Computer Science journey, learning programming fundamentals, algorithms, and software engineering.",
        color: "from-blue-500 to-cyan-500",
    },

    {
        year: "2023",
        icon: Code2,
        title: "Full Stack Web Development",
        subtitle: "React • Node.js • Express • MongoDB",
        description:
            "Built multiple MERN applications while improving frontend design, backend APIs, databases, authentication, and deployment.",
        color: "from-violet-500 to-indigo-500",
    },

    {
        year: "2024",
        icon: ShieldCheck,
        title: "Cyber Security",
        subtitle: "Web Security & Penetration Testing",
        description:
            "Focused on ethical hacking, PortSwigger labs, Burp Suite, Kali Linux, Nmap, Wireshark, and CTF challenges.",
        color: "from-emerald-500 to-green-500",
    },

    {
        year: "2025",
        icon: Trophy,
        title: "CTF Champion",
        subtitle: "BIUCTF 2026",
        description:
            "Won the BIUCTF competition by solving real-world cybersecurity challenges involving web exploitation, OSINT, cryptography, and reverse engineering.",
        color: "from-amber-500 to-orange-500",
    },

    {
        year: "2026",
        icon: BrainCircuit,
        title: "Hybrid Network Intrusion Detection System",
        subtitle: "Final Year Capstone Project",
        description:
            "Developed an AI-powered intrusion detection system using machine learning models for detecting network attacks with improved accuracy.",
        color: "from-pink-500 to-rose-500",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative overflow-hidden py-32"
        >
            {/* Background */}

            <div className="absolute inset-0 -z-30 overflow-hidden">

                <motion.div
                    animate={{
                        x: [0, 120, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]"
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
                    className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[140px]"
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
                        subtitle="Experience"
                        title="My Journey So Far"
                        description="From learning the fundamentals of computer science to building full-stack applications and exploring cybersecurity, every step has strengthened my passion for technology."
                        center
                    />
                </motion.div>

                {/* Timeline */}
                                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="relative mx-auto mt-24 max-w-5xl"
                >
                    {/* Animated Timeline Line */}

                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4 }}
                        className="absolute left-7 top-0 h-full w-[3px] origin-top rounded-full bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-500 lg:left-1/2 lg:-translate-x-1/2"
                    />

                    {timelineData.slice(0, 3).map((item, index) => {
                        const Icon = item.icon;
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={item.year}
                                variants={fadeUp}
                                className={`relative mb-20 flex items-center ${
                                    isLeft
                                        ? "lg:justify-start"
                                        : "lg:justify-end"
                                }`}
                            >
                                {/* Timeline Dot */}

                                <div
                                    className={`absolute left-7 z-20 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-xl lg:left-1/2`}
                                >
                                    <Icon className="h-6 w-6 text-white" />
                                </div>

                                {/* Card */}

                                <motion.div
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 220,
                                    }}
                                    className={`ml-20 w-full rounded-[30px] border border-slate-200/70 bg-white/70 p-8 shadow-[0_25px_70px_rgba(15,23,42,.08)] backdrop-blur-xl lg:ml-0 lg:w-[44%] ${
                                        isLeft
                                            ? "lg:mr-auto"
                                            : "lg:ml-auto"
                                    }`}
                                >
                                    {/* Year */}

                                    <span
                                        className={`inline-flex rounded-full bg-gradient-to-r ${item.color} px-4 py-1 text-sm font-semibold text-white`}
                                    >
                                        {item.year}
                                    </span>

                                    {/* Title */}

                                    <h3 className="mt-5 text-2xl font-bold text-slate-900">
                                        {item.title}
                                    </h3>

                                    {/* Subtitle */}

                                    <p className="mt-2 text-sm font-medium text-blue-600">
                                        {item.subtitle}
                                    </p>

                                    {/* Description */}

                                    <p className="mt-5 leading-8 text-slate-600">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        );
                    })}

                    {/* Remaining Timeline */}
                                        {timelineData.slice(3).map((item, index) => {
                        const Icon = item.icon;
                        const isLeft = index % 2 !== 0;

                        return (
                            <motion.div
                                key={item.year}
                                variants={fadeUp}
                                className={`relative mb-20 flex items-center ${
                                    isLeft
                                        ? "lg:justify-start"
                                        : "lg:justify-end"
                                }`}
                            >
                                {/* Timeline Dot */}

                                <div
                                    className={`absolute left-7 z-20 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-xl lg:left-1/2`}
                                >
                                    <Icon className="h-6 w-6 text-white" />
                                </div>

                                {/* Timeline Card */}

                                <motion.div
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 220,
                                    }}
                                    className={`group relative ml-20 w-full overflow-hidden rounded-[30px] border border-slate-200/70 bg-white/70 p-8 shadow-[0_25px_70px_rgba(15,23,42,.08)] backdrop-blur-xl lg:ml-0 lg:w-[44%] ${
                                        isLeft
                                            ? "lg:mr-auto"
                                            : "lg:ml-auto"
                                    }`}
                                >
                                    {/* Hover Glow */}

                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-400/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Decorative Blob */}

                                    <div
                                        className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-3xl`}
                                    />

                                    <div className="relative">
                                        {/* Year */}

                                        <span
                                            className={`inline-flex rounded-full bg-gradient-to-r ${item.color} px-4 py-1 text-sm font-semibold text-white shadow-lg`}
                                        >
                                            {item.year}
                                        </span>

                                        {/* Title */}

                                        <h3 className="mt-5 text-2xl font-bold text-slate-900">
                                            {item.title}
                                        </h3>

                                        {/* Subtitle */}

                                        <p className="mt-2 text-sm font-medium text-blue-600">
                                            {item.subtitle}
                                        </p>

                                        {/* Description */}

                                        <p className="mt-5 leading-8 text-slate-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}

                </motion.div>

                {/* Journey Summary */}
                                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    className="relative mt-28 overflow-hidden rounded-[36px] border border-slate-200/70 bg-white/70 p-10 shadow-[0_30px_80px_rgba(15,23,42,.08)] backdrop-blur-2xl lg:p-14"
                >
                    {/* Background Glow */}

                    <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

                    <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

                    <div className="relative">

                        <div className="text-center">

                            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                                Journey at a Glance
                            </span>

                            <h2 className="mt-6 text-3xl font-black text-slate-900 lg:text-5xl">
                                Continuous Learning,
                                <br />
                                Continuous Growth
                            </h2>

                            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                                Every project, competition, and technology I've
                                explored has strengthened my ability to solve
                                real-world problems through software engineering
                                and cybersecurity.
                            </p>

                        </div>

                        {/* Stats */}

                        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                            {[
                                {
                                    number: "4+",
                                    label: "Years Learning",
                                },
                                {
                                    number: "20+",
                                    label: "Projects Built",
                                },
                                {
                                    number: "20+",
                                    label: "Technologies Used",
                                },
                                {
                                    number: "3",
                                    label: "CTF Championship",
                                },
                            ].map((item) => (

                                <motion.div
                                    key={item.label}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.03,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 220,
                                    }}
                                    className="rounded-3xl border border-slate-200/70 bg-white/60 p-8 text-center backdrop-blur-xl"
                                >

                                    <h3 className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-5xl font-black text-transparent">
                                        {item.number}
                                    </h3>

                                    <p className="mt-3 font-medium text-slate-600">
                                        {item.label}
                                    </p>

                                </motion.div>

                            ))}

                        </div>

                        {/* Quote */}

                        <motion.div
                            variants={fadeUp}
                            className="mt-16 rounded-[28px] border border-slate-200/70 bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-center lg:p-10"
                        >
                            <p className="mx-auto max-w-3xl text-lg italic leading-8 text-slate-300">
                                "I enjoy building secure, scalable applications,
                                exploring cybersecurity challenges, and
                                continuously learning new technologies to create
                                meaningful solutions."
                            </p>
                        </motion.div>

                    </div>
                </motion.div>

            </Container>
        </section>
    );
}

