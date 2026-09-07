import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Activity,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const specialties = [
  {
    number: "01",
    title: "Preventive Cardiology",
    description:
      "Early assessment and personalized strategies designed to protect long-term cardiovascular health.",
    icon: ShieldCheck,
    tags: ["Risk Assessment", "Heart Health", "Prevention"],
  },
  {
    number: "02",
    title: "Heart Disease",
    description:
      "Comprehensive evaluation and ongoing management for common cardiovascular conditions.",
    icon: HeartPulse,
    tags: ["Diagnosis", "Management", "Follow-up"],
  },
  {
    number: "03",
    title: "Hypertension",
    description:
      "Structured care for blood pressure management with practical, sustainable lifestyle guidance.",
    icon: Activity,
    tags: ["Blood Pressure", "Monitoring", "Lifestyle"],
  },
  {
    number: "04",
    title: "Cardiac Consultation",
    description:
      "Detailed cardiovascular consultations focused on understanding symptoms, risk factors, and next steps.",
    icon: Stethoscope,
    tags: ["Consultation", "Assessment", "Guidance"],
  },
];

export default function Specialties() {
  const [active, setActive] = useState(0);

  const ActiveIcon = specialties[active].icon;

  return (
    <section
      id="specialties"
      className="relative overflow-hidden bg-[#f5f4ef] text-[#17211f]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 border-b border-[#17211f]/10 pb-14 lg:grid-cols-[0.32fr_1fr]"
        >
          <div className="flex items-start gap-3">
            <span className="mt-2 h-px w-8 bg-[#52756d]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#52756d]">
              Areas of Expertise
            </span>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6.5vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Focused on your
              <br />
              <span className="font-serif italic font-normal text-[#52756d]">
                heart health.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#17211f]/55 md:text-lg md:leading-8">
              Specialized cardiovascular care built around careful assessment,
              clear explanations, and treatment decisions made with you.
            </p>
          </div>
        </motion.div>

        {/* Main specialty layout */}
        <div className="grid gap-14 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:pt-24">

          {/* Specialty list */}
          <div>
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              const isActive = active === index;

              return (
                <motion.button
                  key={specialty.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`group relative flex w-full items-center border-t border-[#17211f]/10 py-6 text-left transition-all duration-500 md:py-8 ${
                    index === specialties.length - 1
                      ? "border-b"
                      : ""
                  }`}
                >
                  {/* Active line */}
                  <motion.span
                    initial={false}
                    animate={{
                      scaleY: isActive ? 1 : 0,
                    }}
                    className="absolute left-0 top-0 h-full w-[3px] origin-top bg-[#52756d]"
                  />

                  {/* Number */}
                  <span
                    className={`w-14 shrink-0 text-xs font-medium transition-colors duration-300 md:w-20 ${
                      isActive
                        ? "text-[#52756d]"
                        : "text-[#17211f]/30"
                    }`}
                  >
                    {specialty.number}
                  </span>

                  {/* Icon */}
                  <span
                    className={`mr-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 md:mr-7 ${
                      isActive
                        ? "border-[#52756d]/30 bg-[#dceae5] text-[#52756d]"
                        : "border-[#17211f]/10 text-[#17211f]/35"
                    }`}
                  >
                    <Icon size={17} />
                  </span>

                  {/* Title */}
                  <span
                    className={`text-xl font-medium tracking-[-0.03em] transition-all duration-500 md:text-3xl ${
                      isActive
                        ? "translate-x-1 text-[#17211f]"
                        : "text-[#17211f]/55"
                    }`}
                  >
                    {specialty.title}
                  </span>

                  {/* Arrow */}
                  <span
                    className={`ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-[#17211f] text-white"
                        : "border border-[#17211f]/10 text-[#17211f]/30"
                    }`}
                  >
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Preview panel */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32">

              <div className="relative aspect-[0.9] overflow-hidden rounded-[2rem] bg-[#17211f]">

                {/* Decorative glow */}
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#52756d]/25 blur-[80px]" />

                <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#b7d9cf]/10 blur-[80px]" />

                {/* Decorative circles */}
                <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

                <div className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b7d9cf]/15" />

                {/* Icon */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                      rotate: -10,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.15,
                      rotate: 10,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#b7d9cf] text-[#17211f] shadow-2xl"
                  >
                    <ActiveIcon size={48} strokeWidth={1.4} />
                  </motion.div>
                </AnimatePresence>

                {/* Orbit dots */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2"
                >
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#b7d9cf]" />
                  <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/30" />
                </motion.div>

                {/* Top metadata */}
                <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    Specialty
                  </span>

                  <span className="text-xs text-white/35">
                    {specialties[active].number}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35 }}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b7d9cf]">
                        Cardiovascular Care
                      </p>

                      <h3 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white">
                        {specialties[active].title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
                        {specialties[active].description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {specialties[active].tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-white/45"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Small note */}
              <div className="mt-5 flex items-center justify-between px-1">
                <span className="text-[9px] uppercase tracking-[0.18em] text-[#17211f]/35">
                  Hover to explore
                </span>

                <span className="text-[9px] uppercase tracking-[0.18em] text-[#17211f]/35">
                  04 Specialties
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile active description */}
        <div className="mt-8 lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="rounded-[1.5rem] bg-[#17211f] p-6 text-white"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b7d9cf] text-[#17211f]">
                  <ActiveIcon size={18} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#b7d9cf]">
                    Specialty
                  </p>

                  <h3 className="mt-1 text-lg font-medium">
                    {specialties[active].title}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-white/55">
                {specialties[active].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col justify-between gap-6 border-t border-[#17211f]/10 pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-sm leading-6 text-[#17211f]/45">
            Every consultation begins with listening, careful assessment, and
            a clear understanding of what matters to you.
          </p>

          <a
            href="#appointment"
            className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium"
          >
            Request a consultation

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#17211f] text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}