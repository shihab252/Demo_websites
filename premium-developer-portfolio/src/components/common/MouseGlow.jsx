import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
    const mouseX = useMotionValue(-300);
    const mouseY = useMotionValue(-300);

    const x = useSpring(mouseX, {
        stiffness: 120,
        damping: 20,
    });

    const y = useSpring(mouseY, {
        stiffness: 120,
        damping: 20,
    });

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX - 200);
        mouseY.set(e.clientY - 200);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="pointer-events-none fixed inset-0 z-0"
        >
            <motion.div
                style={{
                    x,
                    y,
                }}
                className="absolute h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl"
            />

            <motion.div
                style={{
                    x,
                    y,
                }}
                className="absolute h-[250px] w-[250px] translate-x-16 translate-y-16 rounded-full bg-cyan-400/10 blur-2xl"
            />
        </div>
    );
}