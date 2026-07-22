import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.7, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.7, y: 20 }}
                    transition={{ duration: 0.25 }}
                    whileHover={{
                        scale: 1.1,
                        y: -4,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="fixed bottom-8 right-8 z-[999] flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 text-white shadow-2xl shadow-blue-500/30 backdrop-blur-xl"
                >
                    <ArrowUp size={22} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}