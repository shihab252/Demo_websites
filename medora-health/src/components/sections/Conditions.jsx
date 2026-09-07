import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  HeartPulse,
  ShieldAlert,
  Waves,
} from "lucide-react";

const conditions = [
  {
    id: "01",
    title: "Heart rhythm",
    short: "Rhythm",
    description:
      "Focused evaluation for symptoms and conditions related to irregular or changing heart rhythms.",
    icon: Activity,
    stat: "01",
    tag: "RHYTHM",
  },
  {
    id: "02",
    title: "Blood pressure",
    short: "Pressure",
    description:
      "Structured assessment and ongoing care for blood pressure and its impact on cardiovascular health.",
    icon: Waves,
    stat: "02",
    tag: "PRESSURE",
  },
  {
    id: "03",
    title: "Heart health",
    short: "Prevention",
    description:
      "Preventive cardiovascular care focused on understanding risk and supporting long-term heart health.",
    icon: HeartPulse,
    stat: "03",
    tag: "PREVENTION",
  },
  {
    id: "04",
    title: "Cardiovascular risk",
    short: "Risk",
    description:
      "A broader view of cardiovascular risk factors to help create informed and practical next steps.",
    icon: ShieldAlert,
    stat: "04",
    tag: "RISK",
  },
];

function Conditions() {
  const [active, setActive] = useState(0);

  const current = conditions[active];
  const Icon = current.icon;

  return (
    <section
      id="conditions"
      className="relative overflow-hidden bg-[#08141e] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.05] blur-[150px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[550px] w-[550px] rounded-full bg-blue-500/[0.06] blur-[160px]" />
      </div>

      {/* Fine architectural grid */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div className="absolute left-[12%] top-0 h-full w-px bg-white" />
        <div className="absolute left-[38%] top-0 h-full w-px bg-white" />
        <div className="absolute left-[62%] top-0 h-full w-px bg-white" />
        <div className="absolute left-[88%] top-0 h-full w-px bg-white" />

        <div className="absolute left-0 top-[25%] h-px w-full bg-white" />
        <div className="absolute left-0 top-[50%] h-px w-full bg-white" />
        <div className="absolute left-0 top-[75%] h-px w-full bg-white" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"
        >
          {/* Section label */}

          <div>
            <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.28em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              CONDITIONS / 03
            </div>

            <p className="mt-8 max-w-xs text-xs leading-6 text-slate-500">
              Focused cardiovascular care built around understanding the
              individual, not just the condition.
            </p>
          </div>

          {/* Heading */}

          <div>
            <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Focused care.
              <br />
              <span className="text-slate-500">Without the noise.</span>
            </h2>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN INTERFACE
        ====================================================== */}

        <div className="mt-24 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          {/* =================================================
              LEFT CONDITION LIST
          ================================================== */}

          <div className="border-y border-white/10">
            {conditions.map((condition, index) => {
              const isActive = index === active;
              const ConditionIcon = condition.icon;

              return (
                <motion.button
                  key={condition.id}
                  onClick={() => setActive(index)}
                  whileHover={{
                    x: 5,
                  }}
                  className={`group relative flex w-full items-center justify-between border-b border-white/10 px-4 py-7 text-left transition-all duration-500 last:border-b-0 sm:px-6 ${
                    isActive ? "bg-white/[0.045]" : "hover:bg-white/[0.025]"
                  }`}
                >
                  {/* Active indicator */}

                  <div
                    className={`absolute left-0 top-0 h-full w-[2px] transition-all duration-500 ${
                      isActive ? "bg-cyan-300" : "bg-transparent"
                    }`}
                  />

                  <div className="flex items-center gap-5">
                    <span
                      className={`font-mono text-xs transition-colors ${
                        isActive ? "text-cyan-300" : "text-slate-600"
                      }`}
                    >
                      {condition.id}
                    </span>

                    <div>
                      <p
                        className={`text-lg font-medium transition-colors sm:text-xl ${
                          isActive
                            ? "text-white"
                            : "text-slate-400 group-hover:text-white"
                        }`}
                      >
                        {condition.title}
                      </p>

                      <p
                        className={`mt-1 text-[9px] tracking-[0.25em] transition-colors ${
                          isActive ? "text-cyan-300" : "text-slate-700"
                        }`}
                      >
                        {condition.tag}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-500 ${
                      isActive
                        ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-300"
                        : "border-white/10 text-slate-700 group-hover:border-white/20 group-hover:text-slate-400"
                    }`}
                  >
                    <ConditionIcon
                      size={15}
                      strokeWidth={1.5}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* =================================================
              RIGHT INTERACTIVE VISUAL
          ================================================== */}

          <div className="relative min-h-[560px] overflow-hidden border border-white/10 bg-[#0b1b27]">
            {/* Top metadata */}

            <div className="absolute left-6 right-6 top-6 z-20 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600">
                NEXA / CLINICAL FOCUS
              </span>

              <span className="font-mono text-[10px] text-slate-600">
                {current.id} / 04
              </span>
            </div>

            {/* =================================================
                CENTRAL ORBIT
            ================================================== */}

            <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
              {/* Outer ring */}

              <motion.div
                animate={{
                  rotate: active % 2 === 0 ? 360 : -360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative h-[330px] w-[330px] rounded-full border border-cyan-300/10"
              >
                <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />

                <span className="absolute bottom-[16%] right-[5%] h-1 w-1 rounded-full bg-white/30" />
              </motion.div>

              {/* Middle ring */}

              <motion.div
                animate={{
                  rotate: active % 2 === 0 ? -360 : 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              >
                <span className="absolute left-[10%] top-[50%] h-1 w-1 rounded-full bg-white/20" />
              </motion.div>

              {/* Inner pulse */}

              <motion.div
                key={active}
                initial={{
                  scale: 0.5,
                  opacity: 0,
                }}
                animate={{
                  scale: 1.6,
                  opacity: [0, 0.25, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30"
              />

              {/* Center */}

              <motion.div
                key={`center-${active}`}
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="absolute left-1/2 top-1/2 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/30 bg-[#0e2634] shadow-[0_0_100px_rgba(34,211,238,0.12)]"
              >
                <Icon
                  size={43}
                  strokeWidth={1.1}
                  className="text-cyan-300"
                />
              </motion.div>
            </div>

            {/* =================================================
                FLOATING DATA
            ================================================== */}

            <div className="absolute left-6 top-[30%]">
              <span className="font-mono text-[9px] tracking-[0.2em] text-slate-600">
                AREA
              </span>

              <p className="mt-2 text-xs text-slate-300">
                {current.short}
              </p>
            </div>

            <div className="absolute right-6 top-[30%] text-right">
              <span className="font-mono text-[9px] tracking-[0.2em] text-slate-600">
                STATUS
              </span>

              <p className="mt-2 flex items-center justify-end gap-2 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                ACTIVE
              </p>
            </div>

            {/* =================================================
                BOTTOM INFORMATION
            ================================================== */}

            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#091720]/90 p-7 backdrop-blur-xl sm:p-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end"
                >
                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.28em] text-cyan-300">
                      {current.tag}
                    </p>

                    <h3 className="mt-3 text-2xl font-medium tracking-[-0.025em]">
                      {current.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                      {current.description}
                    </p>
                  </div>

                  <motion.a
                    href="#appointment"
                    whileHover={{
                      x: 4,
                    }}
                    className="group flex shrink-0 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300"
                  >
                    Explore care

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/30 transition-colors group-hover:bg-cyan-300 group-hover:text-[#08141e]">
                      <ArrowUpRight size={14} />
                    </span>
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =====================================================
            FOOTER STATEMENT
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
          }}
          className="mt-20 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-[1fr_auto]"
        >
          <p className="max-w-2xl text-sm leading-7 text-slate-500">
            The goal isn't to make healthcare feel complicated. It's to make
            the important things easier to understand.
          </p>

          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Focused cardiovascular care
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Conditions;