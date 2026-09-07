import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Phone,
  Sparkles,
} from "lucide-react";

export default function FinalCTA() {
  const scrollToAppointment = () => {
    document.querySelector("#appointment")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[#17211f] px-5 py-24 text-[#f5f4ef] md:px-8 md:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#b7d9cf]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#52756d]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-end gap-14 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b7d9cf]/30">
                <Sparkles size={14} className="text-[#b7d9cf]" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b7d9cf]">
                Your next step
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl text-[clamp(3.3rem,8vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.065em]"
            >
              Your heart
              <br />
              deserves{" "}
              <span className="font-serif italic font-normal text-[#b7d9cf]">
                attention.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-base leading-7 text-white/55 md:text-lg md:leading-8"
            >
              Take the first step toward understanding your cardiovascular
              health with thoughtful, personalized medical care.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-3 sm:flex-row lg:flex-col"
          >
            <button
              onClick={scrollToAppointment}
              className="group flex items-center justify-between gap-8 rounded-full bg-[#f5f4ef] px-6 py-4 text-sm font-medium text-[#17211f] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Request an Appointment

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#17211f] text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={15} />
              </span>
            </button>

            <a
              href="tel:+8801000000000"
              className="flex items-center justify-between gap-8 rounded-full border border-white/15 px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
            >
              <span className="flex items-center gap-3">
                <Phone size={15} />
                Call the clinic
              </span>

              <span className="text-white/35">↗</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-20 h-px origin-left bg-white/10"
        />

        <div className="mt-7 flex flex-col justify-between gap-5 text-xs text-white/40 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <CalendarDays size={14} />
            <span>Appointments available Monday — Thursday</span>
          </div>

          <span>Gulshan · Dhaka</span>
        </div>
      </div>
    </section>
  );
}