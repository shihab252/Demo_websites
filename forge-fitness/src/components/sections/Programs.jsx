import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";

const programs = [
  {
    number: "01",
    title: "STRENGTH",
    subtitle: "BUILD POWER",
    description:
      "Progressive training designed to build raw strength, stability and physical confidence.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=90&w=1400",
  },
  {
    number: "02",
    title: "HYPERTROPHY",
    subtitle: "BUILD MASS",
    description:
      "Structured resistance work focused on muscle development, control and progressive overload.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=90&w=1400",
  },
  {
    number: "03",
    title: "CONDITIONING",
    subtitle: "BUILD ENGINE",
    description:
      "High-output sessions combining endurance, speed and functional movement.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=90&w=1400",
  },
  {
    number: "04",
    title: "PERFORMANCE",
    subtitle: "BUILD CAPACITY",
    description:
      "Athletic training for people who want to move faster, stronger and more efficiently.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=90&w=1400",
  },
];

export default function Programs() {
  const [active, setActive] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  const imageX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const imageY = useTransform(smoothY, [-1, 1], [-18, 18]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 2);
    mouseY.set(y * 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-[#f0f0eb] text-[#0b0c0c]"
    >
      {/* =====================================================
          INTRO
      ====================================================== */}

      <div className="relative px-6 pb-20 pt-28 md:px-12 md:pb-28 md:pt-40">

        <div className="mb-16 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#0b0c0c]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.35em]">
              04 / Training Programs
            </span>

          </div>

          <span className="hidden text-[8px] uppercase tracking-[0.3em] text-black/35 md:block">
            Choose your system
          </span>

        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr]">

          <h2 className="font-['Oswald'] text-[18vw] font-bold uppercase leading-[0.75] tracking-[-0.08em] sm:text-[15vw] lg:text-[10vw]">

            TRAIN
            <br />

            WITH
            <br />

            <span className="text-[#89942d]">
              PURPOSE.
            </span>

          </h2>

          <div className="flex items-end">

            <p className="max-w-[400px] text-sm leading-7 text-black/50">
              No random workouts. No wasted sessions.
              Every FORGE program is built around a clear
              objective and a measurable path forward.
            </p>

          </div>

        </div>
      </div>

      {/* =====================================================
          PROGRAM SELECTOR
      ====================================================== */}

      <div className="border-t border-black/10">

        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">

          {/* =================================================
              LEFT LIST
          ================================================== */}

          <div className="border-r border-black/10">

            {programs.map((program, index) => {
              const isActive = active === index;

              return (
                <button
                  key={program.number}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="group relative flex w-full items-center border-b border-black/10 px-6 py-7 text-left transition-colors duration-500 md:px-12 md:py-9"
                >

                  {/* active background */}

                  <motion.div
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute inset-0 origin-left bg-[#d7ff38]"
                  />

                  <div className="relative z-10 flex w-full items-center">

                    {/* number */}

                    <span
                      className={`mr-6 w-8 font-['Oswald'] text-sm transition-colors duration-300 ${
                        isActive
                          ? "text-black"
                          : "text-black/25"
                      }`}
                    >
                      {program.number}
                    </span>

                    {/* title */}

                    <div className="flex-1">

                      <div
                        className={`font-['Oswald'] text-4xl font-bold uppercase leading-none tracking-[-0.04em] transition-transform duration-500 md:text-5xl ${
                          isActive
                            ? "translate-x-3"
                            : "group-hover:translate-x-2"
                        }`}
                      >
                        {program.title}
                      </div>

                      <div
                        className={`mt-2 text-[8px] font-bold uppercase tracking-[0.3em] transition-colors duration-300 ${
                          isActive
                            ? "text-black/50"
                            : "text-black/25"
                        }`}
                      >
                        {program.subtitle}
                      </div>

                    </div>

                    {/* icon */}

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? "rotate-0 border-black/30 bg-black text-white"
                          : "rotate-[-45deg] border-black/10 text-black/30"
                      }`}
                    >
                      <ArrowUpRight size={15} />
                    </div>

                  </div>
                </button>
              );
            })}

          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================== */}

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-[620px] overflow-hidden bg-[#111312] lg:min-h-[720px]"
          >

            {/* background image */}

            <motion.div
              style={{
                x: imageX,
                y: imageY,
              }}
              className="absolute inset-[-4%]"
            >

              {programs.map((program, index) => (
                <motion.img
                  key={program.image}
                  src={program.image}
                  alt={program.title}
                  initial={false}
                  animate={{
                    opacity: active === index ? 1 : 0,
                    scale: active === index ? 1 : 1.08,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    filter:
                      "brightness(.58) contrast(1.12) saturate(.65)",
                  }}
                />
              ))}

            </motion.div>

            {/* image gradient */}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30" />

            {/* =================================================
                GIANT NUMBER
            ================================================== */}

            <motion.div
              key={`number-${active}`}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="absolute right-5 top-2 md:right-10"
            >
              <span className="font-['Oswald'] text-[25vw] font-bold leading-none tracking-[-0.1em] text-white/[0.08]">
                {programs[active].number}
              </span>
            </motion.div>

            {/* =================================================
                CENTER CROSS
            ================================================== */}

            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2">

              <div className="absolute left-1/2 top-0 h-full w-px bg-[#d7ff38]/50" />

              <div className="absolute left-0 top-1/2 h-px w-full bg-[#d7ff38]/50" />

              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ff38]" />

            </div>

            {/* =================================================
                INFO
            ================================================== */}

            <motion.div
              key={`info-${active}`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.1,
              }}
              className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-12 md:right-12"
            >

              <div className="mb-4 flex items-center gap-3">

                <span className="h-px w-8 bg-[#d7ff38]" />

                <span className="text-[8px] uppercase tracking-[0.3em] text-[#d7ff38]">
                  FORGE SYSTEM
                </span>

              </div>

              <h3 className="font-['Oswald'] text-5xl font-bold uppercase leading-[0.85] tracking-[-0.05em] text-white md:text-7xl">

                {programs[active].title}

              </h3>

              <p className="mt-5 max-w-[420px] text-sm leading-6 text-white/50">
                {programs[active].description}
              </p>

              <div className="mt-7 flex items-center gap-4">

                <button className="flex items-center gap-3 bg-[#d7ff38] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-black transition-transform hover:scale-105">

                  Explore Program

                  <ArrowUpRight size={13} />

                </button>

                <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                  01 — 04
                </span>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM STATEMENT
      ====================================================== */}

      <div className="relative overflow-hidden border-t border-black/10 px-6 py-16 md:px-12 md:py-24">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <div className="font-['Oswald'] text-6xl font-bold tracking-[-0.05em]">
              04
            </div>

            <div className="mt-2 text-[8px] uppercase tracking-[0.3em] text-black/35">
              Training Systems
            </div>
          </div>

          <div>
            <div className="font-['Oswald'] text-6xl font-bold tracking-[-0.05em]">
              01
            </div>

            <div className="mt-2 text-[8px] uppercase tracking-[0.3em] text-black/35">
              Clear Objective
            </div>
          </div>

          <div>
            <div className="font-['Oswald'] text-6xl font-bold tracking-[-0.05em]">
              ∞
            </div>

            <div className="mt-2 text-[8px] uppercase tracking-[0.3em] text-black/35">
              Room To Progress
            </div>
          </div>

        </div>

      </div>

      {/* =====================================================
          GRAIN
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </section>
  );
}