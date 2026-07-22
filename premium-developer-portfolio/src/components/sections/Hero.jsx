import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Download } from "lucide-react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import Container from "../common/Container";
import Button from "../common/Button";

import HeroImage from "../../assets/images/hero.jpeg";
import Resume from "../../assets/cv/CV_Shihab_Uddin_Khan_SOC_Analyst.pdf";

const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -60,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeRight = {
    hidden: {
        opacity: 0,
        x: 60,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24"
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
                    className="absolute -left-36 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]"
                />

                <motion.div
                    animate={{
                        x: [0, -120, 0],
                        y: [0, 80, 0],
                    }}
                    transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[140px]"
                />

                <div className="absolute inset-0 bg-[radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:34px_34px] opacity-40" />

            </div>

            <Container>

                <div className="grid items-center gap-24 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        animate="show"
                    >

                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">

                            <span className="h-2 w-2 rounded-full bg-emerald-500" />

                            Available for Freelance

                        </div>

                        <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-7xl">

                            Full Stack

                            <br />

                            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                                Developer
                            </span>

                            <br />

                            & Cyber Security

                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

                            I build modern web applications, secure systems,
                            and intelligent software using React, Node.js,
                            Machine Learning, and Cyber Security principles
                            to solve real-world problems.

                        </p>

                        {/* Buttons */}

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Link
                                to="projects"
                                smooth={true}
                                duration={700}
                                offset={-80}
                            >
                                <Button
                                    size="lg"
                                    rightIcon={<ArrowRight size={18} />}
                                >
                                    View Projects
                                </Button>
                            </Link>

                            <a
                                href={Resume}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group"
                                >
                                    <span className="flex items-center gap-2">

                                        Download CV

                                        <Download
                                            size={18}
                                            className="transition-transform duration-300 group-hover:translate-y-1"
                                        />

                                    </span>

                                </Button>
                            </a>

                        </div>

                        {/* Stats */}

                        <div className="mt-16 flex flex-wrap gap-10">

                            <div>

                                <h2 className="text-4xl font-black text-blue-600">
                                    25+
                                </h2>

                                <p className="mt-2 text-slate-500">
                                    Projects
                                </p>

                            </div>

                            <div>

                                <h2 className="text-4xl font-black text-blue-600">
                                    15+
                                </h2>

                                <p className="mt-2 text-slate-500">
                                    Technologies
                                </p>

                            </div>

                            <div>

                                <h2 className="text-4xl font-black text-blue-600">
                                    1
                                </h2>

                                <p className="mt-2 text-slate-500">
                                    CTF Champion
                                </p>

                            </div>

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        animate="show"
                        className="relative flex justify-center"
                    >
                                                {/* Gradient Glow */}

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
                            className="absolute h-[430px] w-[430px] rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-indigo-500/20 blur-3xl"
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
                            className="absolute flex h-[430px] w-[430px] items-center justify-center rounded-full border border-blue-200/50"
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
                            className="absolute flex h-[380px] w-[380px] items-center justify-center rounded-full border border-cyan-200/40"
                        >
                            <div className="absolute bottom-0 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,.8)]" />
                        </motion.div>

                        {/* Profile Card */}

                        <motion.div
                            animate={{
                                y: [-12, 12, -12],
                            }}
                            whileHover={{
                                scale: 1.04,
                                rotate: -2,
                            }}
                            transition={{
                                y: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                                scale: {
                                    duration: 0.35,
                                },
                                rotate: {
                                    duration: 0.35,
                                },
                            }}
                            className="relative overflow-hidden rounded-[40px] border border-white/70 bg-white/70 p-4 shadow-[0_40px_120px_rgba(15,23,42,.18)] backdrop-blur-2xl"
                        >
                            {/* Glass Reflection */}

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent" />

                            <div className="overflow-hidden rounded-[30px]">

                                <img
                                    src={HeroImage}
                                    alt="Shihab Uddin Khan"
                                    className="h-[480px] w-[360px] object-cover"
                                />

                            </div>
                        </motion.div>

                        {/* React */}

                        <motion.div
                            animate={{
                                y: [-10, 10, -10],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                            className="absolute left-0 top-5 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl"
                        >
                            <FaReact className="text-4xl text-sky-500" />
                        </motion.div>

                        {/* Node */}

                        <motion.div
                            animate={{
                                y: [10, -10, 10],
                            }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                            }}
                            className="absolute right-2 top-20 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl"
                        >
                            <FaNodeJs className="text-4xl text-green-600" />
                        </motion.div>

                        {/* Tailwind */}

                        <motion.div
                            animate={{
                                y: [-8, 8, -8],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                            className="absolute bottom-20 left-2 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl"
                        >
                            <SiTailwindcss className="text-4xl text-cyan-500" />
                        </motion.div>

                        {/* GitHub */}

                        <motion.a
                            href="https://github.com/YOUR_GITHUB_USERNAME"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                scale: 1.08,
                                rotate: 8,
                            }}
                            animate={{
                                y: [8, -8, 8],
                            }}
                            transition={{
                                duration: 5.5,
                                repeat: Infinity,
                            }}
                            className="absolute bottom-4 right-12 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl"
                        >
                            <FaGithub className="text-4xl text-slate-800" />
                        </motion.a>

                        {/* Experience Card */}

                        <motion.div
                            animate={{
                                y: [-6, 6, -6],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                            }}
                            className="absolute -left-10 top-1/2 rounded-3xl border border-white/70 bg-white/90 px-6 py-5 shadow-2xl backdrop-blur-xl"
                        >
                            <h3 className="text-4xl font-black text-blue-600">
                                3+
                            </h3>

                            <p className="mt-1 text-sm font-medium text-slate-500">
                                Years Learning
                            </p>
                        </motion.div>
                                            </motion.div>

                </div>
            </Container>

            {/* Scroll Indicator */}

            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 1.5,
                    duration: 1,
                }}
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
            >
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="flex h-14 w-8 justify-center rounded-full border-2 border-slate-300 bg-white/60 backdrop-blur-xl"
                >
                    <motion.div
                        animate={{
                            y: [0, 18, 0],
                        }}
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="mt-2 h-3 w-1 rounded-full bg-gradient-to-b from-blue-600 to-cyan-500"
                    />
                </motion.div>

                <p className="mt-3 text-center text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                    Scroll
                </p>
            </motion.div>

            {/* Decorative Blur */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/70 to-transparent" />

        </section>
    );
};

export default Hero;