import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Check,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const stages = [
  {
    number: "01",
    label: "ASSESS",
    title: "Understand your cardiovascular profile.",
    description:
      "Start with a focused consultation designed to understand your symptoms, history, lifestyle, and cardiovascular risk factors.",
    icon: Stethoscope,
    metric: "01 / 04",
    detail: "Clinical assessment",
  },
  {
    number: "02",
    label: "PLAN",
    title: "Build a care plan around you.",
    description:
      "Your consultation becomes a clear plan — from recommended investigations to treatment options and practical next steps.",
    icon: HeartPulse,
    metric: "02 / 04",
    detail: "Personalized planning",
  },
  {
    number: "03",
    label: "ACT",
    title: "Move forward with confidence.",
    description:
      "Make informed decisions with clear explanations, coordinated care, and guidance throughout the treatment process.",
    icon: Activity,
    metric: "03 / 04",
    detail: "Care execution",
  },
  {
    number: "04",
    label: "CONTINUE",
    title: "Keep your heart health moving forward.",
    description:
      "Follow-up care keeps progress visible and gives you an ongoing relationship with your clinical team.",
    icon: ShieldCheck,
    metric: "04 / 04",
    detail: "Long-term follow-up",
  },
];

function CareOverview() {
  const [active, setActive] = useState(0);

  const current = stages[active];
  const Icon = current.icon;

  return (
    <section
      id="care"
      className="relative overflow-hidden bg-[#e7e9e8] text-[#11191f]"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-[-12%] top-[10%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute right-[-10%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.06] blur-[140px]" />

      {/* =====================================================
          ARCHITECTURAL GRID
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#17232b]" />
        <div className="absolute left-[25%] top-0 h-full w-px bg-[#17232b]" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-[#17232b]" />
        <div className="absolute left-[75%] top-0 h-full w-px bg-[#17232b]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[#17232b]" />

        <div className="absolute left-0 top-[18%] h-px w-full bg-[#17232b]" />
        <div className="absolute left-0 top-[50%] h-px w-full bg-[#17232b]" />
        <div className="absolute left-0 top-[82%] h-px w-full bg-[#17232b]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.28em] text-[#1687a7]">
              <span className="h-2 w-2 rounded-full bg-[#1687a7]" />
              CARE SYSTEM / 02
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              A clearer path
              <br />
              from <span className="text-[#1687a7]">concern</span>
              <br />
              to care.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#59666c] sm:text-base">
              NEXA is designed around continuity. Every step connects to the
              next, so your cardiovascular care feels less fragmented and more
              understandable.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            CARE JOURNEY
        ====================================================== */}

        <div className="relative">
          {/* Progress line */}

          <div className="absolute left-0 right-0 top-[72px] hidden h-px bg-[#17232b]/10 lg:block">
            <motion.div
              className="h-full bg-[#1687a7]"
              animate={{
                width: `${((active + 1) / stages.length) * 100}%`,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            />
          </div>

          {/* =====================================================
              STAGE NAVIGATION
          ====================================================== */}

          <div className="relative z-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, index) => {
              const StageIcon = stage.icon;
              const isActive = index === active;

              return (
                <motion.button
                  key={stage.number}
                  onClick={() => setActive(index)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group text-left"
                >
                  <div
                    className={`relative h-[145px] border p-5 transition-all duration-500 ${
                      isActive
                        ? "border-[#1687a7]/50 bg-[#d9eeee]"
                        : "border-[#17232b]/10 bg-white/40 hover:border-[#17232b]/20 hover:bg-white/70"
                    }`}
                  >
                    {/* Number + Icon */}

                    <div className="flex items-start justify-between">
                      <span
                        className={`font-mono text-xs ${
                          isActive
                            ? "text-[#1687a7]"
                            : "text-[#899397]"
                        }`}
                      >
                        {stage.number}
                      </span>

                      <StageIcon
                        size={17}
                        strokeWidth={1.5}
                        className={`transition-colors ${
                          isActive
                            ? "text-[#1687a7]"
                            : "text-[#899397] group-hover:text-[#17232b]"
                        }`}
                      />
                    </div>

                    {/* Label */}

                    <div className="absolute bottom-5 left-5">
                      <p
                        className={`text-[10px] font-semibold tracking-[0.25em] transition-colors ${
                          isActive
                            ? "text-[#17232b]"
                            : "text-[#69757a] group-hover:text-[#17232b]"
                        }`}
                      >
                        {stage.label}
                      </p>

                      <div
                        className={`mt-3 h-[2px] transition-all duration-500 ${
                          isActive
                            ? "w-12 bg-[#1687a7]"
                            : "w-5 bg-[#17232b]/10 group-hover:w-8"
                        }`}
                      />
                    </div>

                    {/* Active marker */}

                    {isActive && (
                      <motion.div
                        layoutId="active-stage"
                        className="absolute -bottom-[5px] left-8 h-2 w-2 rotate-45 bg-[#1687a7]"
                      />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* =====================================================
              MAIN DETAIL INTERFACE
          ====================================================== */}

          <div className="mt-4 grid min-h-[520px] border border-[#17232b]/10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* =================================================
                LEFT VISUAL SYSTEM
            ================================================== */}

            <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden border-b border-[#17232b]/10 bg-[#dde1df] lg:border-b-0 lg:border-r">
              {/* Outer rotating ring */}

              <motion.div
                animate={{
                  rotate: active % 2 === 0 ? 360 : -360,
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[280px] w-[280px] rounded-full border border-[#1687a7]/15"
              >
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#1687a7] shadow-[0_0_18px_rgba(22,135,167,0.45)]" />
              </motion.div>

              {/* Inner rotating ring */}

              <motion.div
                animate={{
                  rotate: active % 2 === 0 ? -360 : 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[210px] w-[210px] rounded-full border border-[#17232b]/10"
              >
                <span className="absolute bottom-4 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#17232b]/30" />
              </motion.div>

              {/* Pulse animation */}

              <motion.div
                key={active}
                initial={{
                  scale: 0.6,
                  opacity: 0,
                }}
                animate={{
                  scale: 1.4,
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute h-28 w-28 rounded-full border border-[#1687a7]/25"
              />

              {/* Center */}

              <motion.div
                key={`icon-${active}`}
                initial={{
                  scale: 0.85,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#1687a7]/30 bg-[#d4e7e7] shadow-[0_0_80px_rgba(22,135,167,0.10)]"
              >
                <Icon
                  size={40}
                  strokeWidth={1.2}
                  className="text-[#1687a7]"
                />
              </motion.div>

              {/* System label */}

              <div className="absolute left-6 top-6 font-mono text-[9px] tracking-[0.2em] text-[#899397]">
                NEXA / CARE ENGINE
              </div>

              {/* System status */}

              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 text-[10px] text-[#69757a]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  SYSTEM ACTIVE
                </div>
              </div>

              {/* Counter */}

              <div className="absolute right-6 top-6 font-mono text-[10px] text-[#899397]">
                {current.metric}
              </div>

              {/* Current stage */}

              <div className="absolute bottom-6 right-6 text-right">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#899397]">
                  Current stage
                </p>

                <p className="mt-1 text-xs text-[#4f5c61]">
                  {current.detail}
                </p>
              </div>
            </div>

            {/* =================================================
                RIGHT INFORMATION PANEL
            ================================================== */}

            <div className="relative flex flex-col justify-between bg-[#e7e9e8] p-8 sm:p-12 lg:p-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  {/* Top metadata */}

                  <div className="mb-12 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#1687a7]">
                      {current.number} / 04
                    </span>

                    <span className="text-[10px] tracking-[0.2em] text-[#899397]">
                      NEXA CARE JOURNEY
                    </span>
                  </div>

                  {/* Label */}

                  <p className="mb-5 text-[11px] font-semibold tracking-[0.3em] text-[#899397]">
                    {current.label}
                  </p>

                  {/* Title */}

                  <h3 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.035em] text-[#17232b] sm:text-4xl lg:text-5xl">
                    {current.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-7 max-w-xl text-sm leading-7 text-[#59666c] sm:text-base">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* =================================================
                  BOTTOM CONTENT
              ================================================== */}

              <div className="mt-16">
                <div className="mb-8 h-px w-full bg-[#17232b]/10" />

                <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
                  {/* Explanation */}

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#899397]">
                      What this means
                    </p>

                    <p className="mt-3 max-w-md text-sm leading-6 text-[#59666c]">
                      Clear information. Thoughtful decisions. Continuous
                      support.
                    </p>
                  </div>

                  {/* CTA */}

                  <motion.a
                    href="#appointment"
                    whileHover={{
                      x: 4,
                    }}
                    className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#1687a7]"
                  >
                    Start your care journey

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1687a7]/30 transition-colors group-hover:bg-[#1687a7] group-hover:text-white">
                      <ArrowUpRight size={15} />
                    </span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-20 grid gap-8 border-t border-[#17232b]/10 pt-8 sm:grid-cols-[1fr_auto]"
        >
          <p className="max-w-2xl text-sm leading-7 text-[#69757a]">
            Good healthcare isn't only about the appointment. It's about what
            happens before it, during it, and after you leave.
          </p>

          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#899397]">
            <Check
              size={13}
              className="text-[#1687a7]"
            />

            Designed around continuity
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CareOverview;