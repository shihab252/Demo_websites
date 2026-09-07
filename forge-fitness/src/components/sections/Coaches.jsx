import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useRef, useState } from "react";

const coaches = [
  {
    number: "01",
    name: "MARCUS",
    surname: "REED",
    role: "STRENGTH / PERFORMANCE",
    experience: "12 YEARS",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=90&w=1200",
    statement: "BUILD THE FOUNDATION.",
  },
  {
    number: "02",
    name: "JORDAN",
    surname: "COLE",
    role: "CONDITIONING / ATHLETICS",
    experience: "09 YEARS",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=90&w=1200",
    statement: "RAISE YOUR CAPACITY.",
  },
  {
    number: "03",
    name: "ALEX",
    surname: "STONE",
    role: "MOVEMENT / MOBILITY",
    experience: "08 YEARS",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=90&w=1200",
    statement: "MOVE WITH INTENT.",
  },
];

export default function Coaches() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.25,
  });

  const imageY = useTransform(
    progress,
    [0, 0.5, 1],
    [120, 0, -120]
  );

  const backgroundX = useTransform(
    progress,
    [0, 0.5, 1],
    [-80, 0, 80]
  );

  const numberY = useTransform(
    progress,
    [0, 1],
    [100, -100]
  );

  return (
    <section
      ref={sectionRef}
      id="coaches"
      className="relative h-[180vh] overflow-hidden bg-[#101111] text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="absolute inset-0">

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(255,255,255,.8) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  rgba(255,255,255,.8) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "110px 110px",
            }}
          />

          <div className="absolute left-[12%] top-0 h-full w-px bg-white/[0.05]" />
          <div className="absolute left-[38%] top-0 h-full w-px bg-white/[0.035]" />
          <div className="absolute left-[72%] top-0 h-full w-px bg-white/[0.04]" />
          <div className="absolute right-[10%] top-0 h-full w-px bg-white/[0.05]" />

          <div className="absolute left-[55%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#d7ff38]/[0.03] blur-[150px]" />

        </div>

        {/* =====================================================
            SECTION LABEL
        ====================================================== */}

        <div className="absolute left-6 top-24 z-50 md:left-12">

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#d7ff38]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#d7ff38]">
              06 / Coaches
            </span>

          </div>

        </div>

        {/* =====================================================
            BACKGROUND WORD
        ====================================================== */}

        <motion.div
          style={{
            x: backgroundX,
          }}
          className="pointer-events-none absolute left-[-4vw] top-[12%] z-[1] whitespace-nowrap"
        >
          <span className="font-['Oswald'] text-[22vw] font-bold uppercase leading-none tracking-[-0.09em] text-white/[0.035]">
            COACHES
          </span>
        </motion.div>

        {/* =====================================================
            MAIN HEADING
        ====================================================== */}

        <div className="absolute left-6 top-[19%] z-20 md:left-[8%]">

          <div className="mb-5 text-[8px] uppercase tracking-[0.3em] text-white/25">
            The people behind the standard
          </div>

          <h2 className="font-['Oswald'] text-[17vw] font-bold uppercase leading-[0.76] tracking-[-0.075em] sm:text-[14vw] md:text-[10vw]">

            TRAIN

            <br />

            WITH

            <br />

            <span className="text-[#d7ff38]">
              PURPOSE.
            </span>

          </h2>

        </div>

        {/* =====================================================
            COACH IMAGE
        ====================================================== */}

        <motion.div
          style={{
            y: imageY,
          }}
          className="absolute right-[6%] top-[13%] z-10 w-[40vw] min-w-[280px] max-w-[560px] md:right-[9%]"
        >

          <div className="relative">

            <div className="absolute inset-[10%] translate-y-12 bg-black/80 blur-[65px]" />

            <div className="relative aspect-[4/5] overflow-hidden border border-white/15">

              {coaches.map((coach, index) => (
                <motion.img
                  key={coach.image}
                  src={coach.image}
                  alt={coach.name}
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

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

              <div className="absolute bottom-0 left-0 h-1 w-full bg-[#d7ff38]" />

              <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-[#d7ff38]/70" />

              <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-[#d7ff38]/70" />

              {/* coach info */}

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
                transition={{
                  duration: 0.5,
                }}
                className="absolute bottom-7 left-7"
              >

                <div className="mb-2 text-[8px] uppercase tracking-[0.3em] text-[#d7ff38]">
                  {coaches[active].role}
                </div>

                <div className="font-['Oswald'] text-4xl font-bold uppercase leading-[0.8] md:text-5xl">
                  {coaches[active].name}
                  <br />
                  {coaches[active].surname}
                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            COACH SELECTOR
        ====================================================== */}

        <div className="absolute bottom-[12%] left-6 z-30 w-[calc(100%-3rem)] max-w-[420px] md:left-[8%]">

          <div className="border-t border-white/10">

            {coaches.map((coach, index) => {
              const isActive = active === index;

              return (
                <button
                  key={coach.number}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="group relative flex w-full items-center border-b border-white/10 py-5 text-left"
                >

                  <motion.div
                    initial={false}
                    animate={{
                      width: isActive ? "100%" : "0%",
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="absolute bottom-0 left-0 h-px bg-[#d7ff38]"
                  />

                  <span
                    className={`mr-5 font-['Oswald'] text-sm ${
                      isActive
                        ? "text-[#d7ff38]"
                        : "text-white/20"
                    }`}
                  >
                    {coach.number}
                  </span>

                  <span
                    className={`flex-1 font-['Oswald'] text-xl uppercase transition-transform duration-500 ${
                      isActive
                        ? "translate-x-2 text-white"
                        : "text-white/40 group-hover:translate-x-1"
                    }`}
                  >
                    {coach.name} {coach.surname}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className={`transition-all duration-500 ${
                      isActive
                        ? "rotate-0 text-[#d7ff38]"
                        : "rotate-[-45deg] text-white/20"
                    }`}
                  />

                </button>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            RIGHT INFORMATION
        ====================================================== */}

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
          transition={{
            duration: 0.6,
          }}
          className="absolute bottom-[15%] right-[8%] z-30 hidden w-[230px] lg:block"
        >

          <div className="border-l border-white/10 pl-6">

            <div className="mb-7 text-[8px] uppercase tracking-[0.3em] text-white/25">
              Coaching Philosophy
            </div>

            <div className="font-['Oswald'] text-3xl font-bold uppercase leading-[0.9] text-white">
              {coaches[active].statement}
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">

              <div className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                Experience
              </div>

              <div className="mt-2 font-['Oswald'] text-2xl text-[#d7ff38]">
                {coaches[active].experience}
              </div>

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            LARGE NUMBER
        ====================================================== */}

        <motion.div
          style={{
            y: numberY,
          }}
          className="pointer-events-none absolute bottom-[-5%] right-[-1vw] z-[2]"
        >

          <span className="font-['Oswald'] text-[30vw] font-bold leading-none tracking-[-0.1em] text-white/[0.025]">
            {coaches[active].number}
          </span>

        </motion.div>

        {/* =====================================================
            TOP RIGHT
        ====================================================== */}

        <div className="absolute right-6 top-24 z-40 hidden md:block">

          <div className="flex items-center gap-3">

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
              Human performance
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
              <Plus
                size={14}
                className="text-[#d7ff38]"
              />
            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM RIGHT
        ====================================================== */}

        <div className="absolute bottom-8 right-6 z-40 hidden md:block">

          <div className="text-[8px] uppercase tracking-[0.3em] text-white/20">
            03 Coaches / 01 Standard
          </div>

        </div>

        {/* =====================================================
            PROGRESS
        ====================================================== */}

        <motion.div
          style={{
            scaleX: progress,
            transformOrigin: "left",
          }}
          className="absolute bottom-0 left-0 z-50 h-[2px] w-full bg-[#d7ff38]"
        />

        {/* =====================================================
            GRAIN
        ====================================================== */}

        <div
          className="pointer-events-none absolute inset-0 z-[60] opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

      </div>
    </section>
  );
}