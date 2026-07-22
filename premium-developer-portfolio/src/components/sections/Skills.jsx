import { motion } from "framer-motion";

import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaDocker,
    FaAws,
    FaServer,
    FaShieldAlt,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";

import {
    SiJavascript,
    SiTailwindcss,
    SiVite,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiTensorflow,
    SiScikitlearn,
    SiPandas,
    SiKubernetes,
    SiBurpsuite,
    SiWireshark,
    SiKalilinux,
    SiOwasp,
} from "react-icons/si";

import Container from "../common/Container";
import Badge from "../common/Badge";
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
            staggerChildren: 0.12,
        },
    },
};

const skillData = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React",
                level: "Advanced",
                icon: FaReact,
                color: "text-sky-500",
            },
            {
                name: "JavaScript",
                level: "Advanced",
                icon: SiJavascript,
                color: "text-yellow-400",
            },
            {
                name: "Tailwind CSS",
                level: "Advanced",
                icon: SiTailwindcss,
                color: "text-cyan-500",
            },
            {
                name: "HTML5",
                level: "Advanced",
                icon: FaHtml5,
                color: "text-orange-500",
            },
            {
                name: "CSS3",
                level: "Advanced",
                icon: FaCss3Alt,
                color: "text-blue-500",
            },
            {
                name: "Vite",
                level: "Intermediate",
                icon: SiVite,
                color: "text-violet-500",
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name: "Node.js",
                level: "Advanced",
                icon: FaNodeJs,
                color: "text-green-600",
            },
            {
                name: "Express.js",
                level: "Advanced",
                icon: SiExpress,
                color: "text-slate-800",
            },
            {
                name: "MongoDB",
                level: "Advanced",
                icon: SiMongodb,
                color: "text-green-500",
            },
            {
                name: "Firebase",
                level: "Intermediate",
                icon: SiFirebase,
                color: "text-amber-500",
            },
            {
                name: "REST API",
                level: "Advanced",
                icon: FaServer,
                color: "text-blue-500",
            },
        ],
    },
    {
        title: "Cyber Security",
        skills: [
            {
                name: "Burp Suite",
                level: "Advanced",
                icon: SiBurpsuite,
                color: "text-orange-500",
            },
            {
                name: "Wireshark",
                level: "Intermediate",
                icon: SiWireshark,
                color: "text-blue-500",
            },
            {
                name: "Kali Linux",
                level: "Advanced",
                icon: SiKalilinux,
                color: "text-slate-700",
            },
            {
                name: "Nmap",
                level: "Intermediate",
                icon: FaShieldAlt,
                color: "text-indigo-500",
            },
            {
                name: "OWASP",
                level: "Intermediate",
                icon: SiOwasp,
                color: "text-red-500",
            },
        ],
    },
    {
        title: "Machine Learning",
        skills: [
            {
                name: "Python",
                level: "Advanced",
                icon: FaPython,
                color: "text-yellow-500",
            },
            {
                name: "TensorFlow",
                level: "Intermediate",
                icon: SiTensorflow,
                color: "text-orange-500",
            },
            {
                name: "Scikit-learn",
                level: "Intermediate",
                icon: SiScikitlearn,
                color: "text-blue-600",
            },
            {
                name: "Pandas",
                level: "Intermediate",
                icon: SiPandas,
                color: "text-indigo-600",
            },
        ],
    },
    {
        title: "Currently Learning",
        skills: [
            {
                name: "Docker",
                level: "Learning",
                icon: FaDocker,
                color: "text-blue-500",
            },
            {
                name: "AWS",
                level: "Learning",
                icon: FaAws,
                color: "text-orange-500",
            },
            {
                name: "Kubernetes",
                level: "Learning",
                icon: SiKubernetes,
                color: "text-sky-600",
            },
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden py-32"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-30 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -80, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -left-32 top-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[130px]"
                />

                <motion.div
                    animate={{
                        x: [0, -120, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px]"
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
                        subtitle="Skills"
                        title="Technologies I Work With"
                        description="A collection of technologies, tools, and frameworks I use to build secure, scalable, and modern applications."
                        center
                    />
                </motion.div>

                {/* Categories */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="mt-24 space-y-20"
                >
                    {skillData.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={fadeUp}
                        >
                            {/* Category Header */}
                            <div className="mb-10 flex items-center gap-4">
                                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />

                                <h2 className="text-3xl font-black text-slate-900 lg:text-4xl">
                                    {category.title}
                                </h2>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {category.skills.map((skill) => {
                                    const Icon = skill.icon;

                                    return (
                                        <motion.div
                                            key={skill.name}
                                            variants={fadeUp}
                                            whileHover={{
                                                y: -10,
                                                scale: 1.03,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 240,
                                            }}
                                            className="group relative overflow-hidden rounded-[30px] border border-slate-200/70 bg-white/70 p-7 shadow-[0_25px_70px_rgba(15,23,42,.08)] backdrop-blur-2xl"
                                        >
                                            {/* Hover Glow */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-400/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                            {/* Icon */}
                                            <div className="relative">
                                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 transition duration-300 group-hover:bg-blue-50">
                                                    <Icon
                                                        className={`text-4xl transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
                                                    />
                                                </div>
                                            </div>

                                            {/* Name */}
                                            <h3 className="mt-6 text-xl font-bold text-slate-900">
                                                {skill.name}
                                            </h3>

                                            {/* Level */}
                                            <Badge className="mt-4 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                                                {skill.level}
                                            </Badge>

                                            {/* Decorative Gradient */}
                                            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    className="relative mt-28 overflow-hidden rounded-[36px] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-16 text-center shadow-[0_40px_120px_rgba(15,23,42,.18)] lg:px-20"
                >
                    {/* Background Glow */}
                    <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
                    <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />

                    {/* Badge */}
                    <Badge className="relative rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-300">
                        Always Learning
                    </Badge>

                    {/* Heading */}
                    <motion.h2
                        variants={fadeUp}
                        className="relative mt-6 text-3xl font-black leading-tight text-white lg:text-5xl"
                    >
                        Technology Never Stops.
                        <br />
                        Neither Do I.
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        className="relative mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300"
                    >
                        I continuously improve my skills by building real-world
                        projects, solving Capture The Flag challenges, exploring
                        cyber security, and learning modern development
                        technologies every day.
                    </motion.p>

                    {/* Learning Tags */}
                    <motion.div
                        variants={fadeUp}
                        className="relative mt-10 flex flex-wrap justify-center gap-3"
                    >
                        {[
                            "Docker",
                            "AWS",
                            "Kubernetes",
                            "Cloud Security",
                            "DevOps",
                            "System Design",
                        ].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                            >
                                {item}
                            </span>
                        ))}
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        variants={fadeUp}
                        className="relative mt-10"
                    >
                        <div className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}