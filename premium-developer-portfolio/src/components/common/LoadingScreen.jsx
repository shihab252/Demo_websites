import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ isLoading }) {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: {
                            duration: 0.8,
                            ease: "easeInOut",
                        },
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            animate={{
                                scale: [1, 1.25, 1],
                                opacity: [0.25, 0.45, 0.25],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                            className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl"
                        />

                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.15, 0.35, 0.15],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                            className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl"
                        />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">

                        {/* Logo */}
                        <motion.div
                            initial={{
                                scale: 0.8,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 shadow-2xl shadow-blue-500/40"
                        >
                            <motion.span
                                animate={{
                                    scale: [1, 1.08, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="text-4xl font-black tracking-wider text-white"
                            >
                                SK
                            </motion.span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: .3,
                            }}
                            className="mt-8 text-3xl font-black tracking-wide text-slate-900"
                        >
                            Shihab Uddin Khan
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: .5,
                            }}
                            className="mt-2 text-slate-500"
                        >
                            Full Stack Developer • Cyber Security Enthusiast
                        </motion.p>

                        {/* Progress Bar */}

                        <div className="mt-10 h-1 w-72 overflow-hidden rounded-full bg-slate-200">

                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 1.6,
                                    ease: "easeInOut",
                                }}
                                className="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600"
                            />
                        </div>

                        <motion.p
                            animate={{
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.4,
                            }}
                            className="mt-5 text-sm tracking-[0.3em] uppercase text-slate-500"
                        >
                            Loading Portfolio...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}