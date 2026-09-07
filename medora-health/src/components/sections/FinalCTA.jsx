import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#102a43] px-6 py-28 text-white md:px-10 lg:px-16 lg:py-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-0 h-full w-px bg-white/[0.05]" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-white/[0.05]" />
        <div className="absolute right-[12%] top-0 h-full w-px bg-white/[0.05]" />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1787a6] blur-3xl"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#72d9e5]/10"
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#72d9e5]"
        >
          <Sparkles size={23} strokeWidth={1.5} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#72d9e5]"
        >
          Your next step
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-5 max-w-5xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[6.5rem]"
        >
          Better care
          <br />
          <span className="text-[#72d9e5]">starts here.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-8 max-w-xl text-base leading-7 text-white/50 md:text-lg"
        >
          Take the first step toward a more connected and understandable
          cardiovascular care experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#appointment"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#102a43] transition hover:bg-[#72d9e5]"
          >
            Request a consultation

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <button
            onClick={() => {
              window.dispatchEvent(new Event("open-nexa-ai"));
            }}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            Ask NEXA AI
            <Sparkles size={17} className="text-[#72d9e5]" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mt-20 flex max-w-xl items-center justify-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/25"
        >
          <span className="h-px flex-1 bg-white/10" />
          NEXA HEALTH
          <span className="h-px flex-1 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}