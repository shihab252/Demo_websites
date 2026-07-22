import { motion } from "framer-motion";
import {
    ArrowRight,
    Download,
    MapPin,
} from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import Resume from "../../assets/cv/CV_Shihab_Uddin_Khan_SOC_Analyst.pdf";
import HeroImage from "../../assets/images/hero.jpeg";

const sectionVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

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

const imageVariants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function AboutMe() {
    return (
        <section
            id="about"
            className="relative overflow-hidden py-32"
        >
            {/* Background */}

            <div className="absolute inset-0 -z-30 overflow-hidden">

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
                    className="absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]"
                />

                <motion.div
                    animate={{
                        x: [0, -90, 0],
                        y: [0, 90, 0],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-[120px]"
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.7),transparent_70%)]" />

            </div>

            <Container>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <SectionTitle
                        subtitle="About Me"
                        title="Crafting Secure & Modern Digital Experiences"
                        description="I'm passionate about building scalable web applications, exploring cyber security, and creating intelligent software that solves real-world problems."
                        center
                    />
                </motion.div>

                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="mt-24 grid items-center gap-20 lg:grid-cols-2"
                >

                    {/* Left Side */}

                    <motion.div
                        variants={imageVariants}
                        className="relative flex justify-center"
                    >
                        {/* Background Glow */}

                        <motion.div
                            animate={{
                                scale: [1, 1.08, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute h-[380px] w-[380px] rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-indigo-500/20 blur-3xl"
                        />

                        {/* Outer Ring */}

                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 35,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute flex h-[330px] w-[330px] items-center justify-center rounded-full border border-blue-200/50"
                        >
                            <div className="absolute -top-2 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,.9)]" />
                        </motion.div>

                        {/* Inner Ring */}

                        <motion.div
                            animate={{
                                rotate: -360,
                            }}
                            transition={{
                                duration: 28,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute flex h-[290px] w-[290px] items-center justify-center rounded-full border border-cyan-200/40"
                        >
                            <div className="absolute bottom-0 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,.8)]" />
                        </motion.div>

                        {/* Profile Card */}

                        <motion.div
                            whileHover={{
                                rotate: -2,
                                y: -8,
                                scale: 1.02,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 220,
                            }}
                            className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_40px_100px_rgba(15,23,42,.12)] backdrop-blur-2xl"
                        >
                            {/* Glass Reflection */}

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent" />

                            <div className="overflow-hidden rounded-[28px]">

                                <motion.img
                                    whileHover={{
                                        scale: 1.08,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                    }}
                                    src={HeroImage}
                                    alt="Profile"
                                    className="h-[420px] w-[320px] object-cover"
                                />

                            </div>

                            {/* Shine */}

                            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                                <div className="absolute -left-40 top-0 h-full w-24 -skew-x-12 bg-white/40 blur-xl transition-all duration-1000 hover:left-[140%]" />

                            </div>
                        </motion.div>

                        {/* Available Badge */}

                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                            className="absolute -right-2 top-8 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl"
                        >
                            <p className="text-xs uppercase tracking-widest text-slate-400">
                                Status
                            </p>

                            <p className="mt-1 font-bold text-emerald-500">
                                Available
                            </p>
                        </motion.div>

                        {/* Location Badge */}

                        <motion.div
                            animate={{
                                y: [0, 8, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                            className="absolute -bottom-4 -left-2 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl"
                        >
                            <MapPin
                                size={18}
                                className="text-blue-600"
                            />

                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-400">
                                    Based In
                                </p>

                                <p className="font-semibold text-slate-800">
                                    Bangladesh
                                </p>
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* Right Side */}

                    <motion.div variants={fadeUp}>
                        {/* About Badge */}

                        <motion.div variants={fadeUp}>
                            <Badge className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-blue-700">
                                About Me
                            </Badge>
                        </motion.div>

                        {/* Heading */}

                        <motion.h2
                            variants={fadeUp}
                            className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-6xl"
                        >
                            Building Secure,
                            <br />
                            Modern &
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                                {" "}
                                Scalable
                            </span>
                            <br />
                            Digital Experiences.
                        </motion.h2>

                        {/* Description */}

                        <motion.div
                            variants={fadeUp}
                            className="mt-8 space-y-6 text-lg leading-8 text-slate-600"
                        >
                            <p>
                                I'm a Full Stack Developer and Cyber Security enthusiast who
                                enjoys building fast, secure, and user-friendly applications.
                                I love transforming ideas into reliable digital products with
                                clean code and modern technologies.
                            </p>

                            <p>
                                Alongside web development, I explore Machine Learning and
                                Network Security to create intelligent systems that solve
                                real-world problems. I'm always learning, experimenting, and
                                improving my skills through practical projects.
                            </p>
                        </motion.div>

                        {/* Highlights */}

                        <motion.div
                            variants={fadeUp}
                            className="mt-10 grid gap-4 sm:grid-cols-2"
                        >
                            {[
                                "Full Stack Development",
                                "Cyber Security",
                                "Machine Learning",
                                "Problem Solving",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/60 px-5 py-4 backdrop-blur-xl"
                                >
                                    <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />

                                    <span className="font-medium text-slate-700">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Buttons */}

                        <motion.div
                            variants={fadeUp}
                            className="mt-12 flex flex-wrap gap-4"
                        >
                            <a
                                href={Resume}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="group rounded-full px-7 py-6">
                                    <span className="flex items-center gap-2">
                                        Download CV

                                        <Download
                                            size={18}
                                            className="transition-transform duration-300 group-hover:translate-y-1"
                                        />
                                    </span>
                                </Button>
                            </a>

                            <Button
                                variant="outline"
                                className="group rounded-full px-7 py-6"
                            >
                                <span className="flex items-center gap-2">
                                    Let's Talk

                                    <ArrowRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </span>
                            </Button>
                        </motion.div>

                    </motion.div>

                </motion.div>

                {/* Statistics */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    className="mt-28 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
                >
                    {[
                        {
                            value: "20+",
                            label: "Projects Completed",
                            color: "from-blue-500 to-cyan-500",
                        },
                        {
                            value: "5+",
                            label: "Core Technologies",
                            color: "from-cyan-500 to-sky-500",
                        },
                        {
                            value: "2+",
                            label: "Years Learning",
                            color: "from-indigo-500 to-blue-500",
                        },
                        {
                            value: "100%",
                            label: "Passion & Dedication",
                            color: "from-sky-500 to-cyan-500",
                        },
                    ].map((item) => (
                        <motion.div
                            key={item.label}
                            variants={fadeUp}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 220,
                            }}
                            className="group relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/70 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
                        >
                            {/* Hover Glow */}

                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                            />

                            {/* Top Line */}

                            <div
                                className={`mb-8 h-1 w-20 rounded-full bg-gradient-to-r ${item.color}`}
                            />

                            {/* Value */}

                            <h3 className="text-5xl font-black tracking-tight text-slate-900">
                                {item.value}
                            </h3>

                            {/* Label */}

                            <p className="mt-4 text-base leading-7 text-slate-600">
                                {item.label}
                            </p>

                            {/* Decorative Circle */}

                            <div
                                className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-2xl`}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Skills */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    className="mt-28"
                >
                    <motion.div
                        variants={fadeUp}
                        className="mb-14 text-center"
                    >
                        <Badge className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-blue-700">
                            My Expertise
                        </Badge>

                        <h3 className="mt-5 text-3xl font-black text-slate-900 lg:text-5xl">
                            Technologies I Work With
                        </h3>

                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                            I enjoy building secure, scalable and high-performance
                            applications using modern technologies while continuously learning
                            new tools and frameworks.
                        </p>
                    </motion.div>

                    <div className="grid gap-10 lg:grid-cols-2">

                        {[
                            {
                                title: "Frontend Development",
                                percentage: "95%",
                                value: 95,
                                color: "from-blue-500 to-cyan-500",
                            },
                            {
                                title: "Backend Development",
                                percentage: "90%",
                                value: 90,
                                color: "from-cyan-500 to-sky-500",
                            },
                            {
                                title: "Cyber Security",
                                percentage: "85%",
                                value: 85,
                                color: "from-indigo-500 to-blue-500",
                            },
                            {
                                title: "Machine Learning",
                                percentage: "75%",
                                value: 75,
                                color: "from-sky-500 to-cyan-500",
                            },
                        ].map((skill) => (
                            <motion.div
                                key={skill.title}
                                variants={fadeUp}
                                whileHover={{
                                    y: -6,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 220,
                                }}
                                className="rounded-[28px] border border-slate-200/70 bg-white/70 p-8 shadow-[0_20px_70px_rgba(15,23,42,.08)] backdrop-blur-2xl"
                            >
                                <div className="mb-4 flex items-center justify-between">
                                    <h4 className="text-xl font-bold text-slate-900">
                                        {skill.title}
                                    </h4>

                                    <span className="font-semibold text-slate-500">
                                        {skill.percentage}
                                    </span>
                                </div>

                                <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                                    <motion.div
                                        initial={{
                                            width: 0,
                                        }}
                                        whileInView={{
                                            width: `${skill.value}%`,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 1.3,
                                            ease: "easeOut",
                                        }}
                                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                    />
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </motion.div>

                {/* Quote */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    className="relative mt-28 overflow-hidden rounded-[36px] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-16 text-center shadow-[0_40px_120px_rgba(15,23,42,.2)] lg:px-20"
                >
                    {/* Background Glow */}

                    <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

                    <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />

                    {/* Quote */}

                    <motion.h3
                        variants={fadeUp}
                        className="relative mx-auto max-w-4xl text-3xl font-black leading-tight text-white lg:text-5xl"
                    >
                        "I believe great software is built with
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            {" "}
                            clean code,
                        </span>
                        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            {" "}
                            strong security,
                        </span>
                        {" "}and exceptional user experience."
                    </motion.h3>

                    <motion.p
                        variants={fadeUp}
                        className="relative mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300"
                    >
                        Every project is an opportunity to learn, improve, and create
                        meaningful digital experiences that people genuinely enjoy using.
                    </motion.p>

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