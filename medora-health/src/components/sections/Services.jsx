import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Activity,
  HeartPulse,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    id: "01",
    label: "CONSULTATION",
    title: "Cardiology consultation",
    description:
      "A focused consultation to understand symptoms, medical history, cardiovascular concerns, and the most appropriate next steps.",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    meta: "01 / CLINICAL",
  },
  {
    id: "02",
    label: "DIAGNOSTICS",
    title: "Cardiovascular assessment",
    description:
      "Structured evaluation designed to provide a clearer picture of cardiovascular health and identify areas that may require further attention.",
    icon: Activity,
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85",
    meta: "02 / ASSESSMENT",
  },
  {
    id: "03",
    label: "RISK MANAGEMENT",
    title: "Heart health & prevention",
    description:
      "Practical guidance around cardiovascular risk factors, prevention, lifestyle, and long-term heart health.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=85",
    meta: "03 / PREVENTION",
  },
  {
    id: "04",
    label: "FOLLOW-UP",
    title: "Ongoing cardiovascular care",
    description:
      "Follow-up appointments help track progress, review changes, and keep your care plan aligned with your needs.",
    icon: Activity,
    image:
      "https://images.unsplash.com/photo-1638202993928-7d113b8a3c4b?auto=format&fit=crop&w=1200&q=85",
    meta: "04 / CONTINUITY",
  },
];

function Services() {
  const [active, setActive] = useState(0);

  const current = services[active];
  const Icon = current.icon;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f4f5f3] text-[#142027]"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-12%] top-[15%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.055] blur-[140px]" />

        <div className="absolute bottom-[-15%] left-[-10%] h-[450px] w-[450px] rounded-full bg-blue-500/[0.035] blur-[130px]" />
      </div>

      {/* Architectural lines */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.045]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#142027]" />
        <div className="absolute left-[32%] top-0 h-full w-px bg-[#142027]" />
        <div className="absolute left-[68%] top-0 h-full w-px bg-[#142027]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[#142027]" />

        <div className="absolute left-0 top-[20%] h-px w-full bg-[#142027]" />
        <div className="absolute left-0 top-[80%] h-px w-full bg-[#142027]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#1687a7]">
              <span className="h-2 w-2 rounded-full bg-[#1687a7]" />
              SERVICES / 05
            </div>

            <p className="mt-8 max-w-xs text-xs leading-6 text-[#899397]">
              Clinical services designed to make cardiovascular care more
              focused, understandable, and continuous.
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-medium leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Care that
              <br />
              <span className="text-[#1687a7]">moves with you.</span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#59666c] sm:text-base">
              From your first consultation through ongoing follow-up, every
              service is connected to the bigger picture of your heart health.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            SERVICE EXPLORER
        ====================================================== */}

        <div className="mt-20 grid gap-6 lg:grid-cols-[0.62fr_1.38fr]">
          {/* =================================================
              SERVICE LIST
          ================================================== */}

          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[9px] font-semibold tracking-[0.25em] text-[#899397]">
                SELECT A SERVICE
              </span>

              <span className="font-mono text-[9px] text-[#a1a8aa]">
                {String(active + 1).padStart(2, "0")} / 04
              </span>
            </div>

            <div className="border-t border-[#142027]/10">
              {services.map((service, index) => {
                const isActive = index === active;
                const ServiceIcon = service.icon;

                return (
                  <motion.button
                    key={service.id}
                    onClick={() => setActive(index)}
                    whileHover={{
                      x: 6,
                    }}
                    className={`group relative flex w-full items-center gap-5 border-b border-[#142027]/10 py-7 text-left transition-all duration-500 ${
                      isActive
                        ? "bg-[#e6eeee] px-5"
                        : "px-0 hover:bg-white/60"
                    }`}
                  >
                    {/* Active line */}

                    <span
                      className={`absolute bottom-0 left-0 top-0 w-[2px] transition-all duration-500 ${
                        isActive ? "bg-[#1687a7]" : "bg-transparent"
                      }`}
                    />

                    {/* Number */}

                    <span
                      className={`font-mono text-[10px] ${
                        isActive ? "text-[#1687a7]" : "text-[#a1a8aa]"
                      }`}
                    >
                      {service.id}
                    </span>

                    {/* Icon */}

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? "border-[#1687a7]/30 bg-[#1687a7]/10 text-[#1687a7]"
                          : "border-[#142027]/10 text-[#899397] group-hover:border-[#1687a7]/20 group-hover:text-[#1687a7]"
                      }`}
                    >
                      <ServiceIcon
                        size={15}
                        strokeWidth={1.4}
                      />
                    </div>

                    {/* Name */}

                    <div className="min-w-0">
                      <p
                        className={`text-sm font-medium transition-colors ${
                          isActive
                            ? "text-[#142027]"
                            : "text-[#69757a] group-hover:text-[#142027]"
                        }`}
                      >
                        {service.title}
                      </p>

                      <p
                        className={`mt-1 text-[8px] font-semibold tracking-[0.22em] ${
                          isActive
                            ? "text-[#1687a7]"
                            : "text-[#a1a8aa]"
                        }`}
                      >
                        {service.label}
                      </p>
                    </div>

                    {/* Arrow */}

                    <ArrowUpRight
                      size={15}
                      className={`ml-auto shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-[#1687a7]"
                          : "-translate-x-2 text-transparent group-hover:translate-x-0 group-hover:text-[#899397]"
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Small note */}

            <div className="mt-8 flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1687a7]" />

              <p className="max-w-xs text-[10px] leading-5 text-[#899397]">
                Services shown are for demonstration purposes. Actual clinical
                services should reflect the clinician's verified scope of
                practice.
              </p>
            </div>
          </div>

          {/* =================================================
              FEATURED SERVICE
          ================================================== */}

          <div className="relative min-h-[600px] overflow-hidden bg-[#0a1822]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="absolute inset-0"
              >
                {/* Image */}

                <motion.img
                  initial={{
                    scale: 1.08,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  src={current.image}
                  alt={current.title}
                  className="h-full w-full object-cover opacity-55"
                />

                {/* Image overlays */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#07131d] via-[#07131d]/40 to-[#07131d]/10" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#07131d]/70 via-transparent to-transparent" />

                {/* Decorative cyan glow */}

                <div className="absolute right-[15%] top-[20%] h-40 w-40 rounded-full bg-cyan-300/10 blur-[80px]" />
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                TOP META
            ================================================== */}

            <div className="absolute left-6 right-6 top-6 z-10 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/40">
                NEXA / SERVICE SYSTEM
              </span>

              <span className="font-mono text-[9px] text-white/40">
                {current.meta}
              </span>
            </div>

            {/* =================================================
                IMAGE MARKER
            ================================================== */}

            <motion.div
              key={`marker-${active}`}
              initial={{
                scale: 0.5,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="absolute right-[12%] top-[34%] z-10 hidden h-20 w-20 items-center justify-center rounded-full border border-cyan-300/40 bg-[#07131d]/30 backdrop-blur-md sm:flex"
            >
              <div className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]" />

              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-4 rounded-full border border-cyan-300/30"
              />
            </motion.div>

            {/* =================================================
                BOTTOM CONTENT
            ================================================== */}

            <div className="absolute bottom-0 left-0 right-0 z-10 p-7 sm:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    duration: 0.4,
                  }}
                >
                  {/* Label */}

                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-cyan-300" />

                    <span className="text-[9px] font-semibold tracking-[0.25em] text-cyan-300">
                      {current.label}
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="max-w-3xl text-3xl font-medium leading-[1.02] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                    {current.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
                    {current.description}
                  </p>

                  {/* CTA */}

                  <motion.a
                    href="#appointment"
                    whileHover={{
                      x: 5,
                    }}
                    className="group mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300"
                  >
                    Request consultation

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/30 transition-all duration-300 group-hover:bg-cyan-300 group-hover:text-[#07131d]">
                      <ArrowUpRight size={14} />
                    </span>
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress */}

            <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-white/10">
              <motion.div
                className="h-full bg-cyan-300"
                animate={{
                  width: `${((active + 1) / services.length) * 100}%`,
                }}
                transition={{
                  duration: 0.5,
                }}
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM SERVICE STATEMENT
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
          className="mt-20 grid gap-8 border-t border-[#142027]/10 pt-8 sm:grid-cols-[1fr_auto]"
        >
          <p className="max-w-2xl text-sm leading-7 text-[#69757a]">
            Every service is part of a larger care journey — helping turn
            individual appointments into a more connected approach to
            cardiovascular health.
          </p>

          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#899397]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1687a7]" />
            Clinical care / NEXA
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;