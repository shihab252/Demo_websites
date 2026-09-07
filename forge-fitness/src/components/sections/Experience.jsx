import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, MoveDown } from "lucide-react";
import { useRef } from "react";

export default function Experience() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.25,
  });

  /* ---------------------------------------------------------
     MAIN IMAGE
  --------------------------------------------------------- */

  const imageY = useTransform(
    progress,
    [0, 0.5, 1],
    [100, 0, -100]
  );

  const imageScale = useTransform(
    progress,
    [0, 0.5, 1],
    [0.92, 1, 1.05]
  );

  const imageRotate = useTransform(
    progress,
    [0, 0.5, 1],
    [3, 0, -3]
  );

  /* ---------------------------------------------------------
     SECOND IMAGE
  --------------------------------------------------------- */

  const secondImageY = useTransform(
    progress,
    [0, 0.5, 1],
    [140, 0, -120]
  );

  const secondImageX = useTransform(
    progress,
    [0, 0.5, 1],
    [-40, 0, 40]
  );

  /* ---------------------------------------------------------
     TITLE
  --------------------------------------------------------- */

  const titleY = useTransform(
    progress,
    [0, 0.5, 1],
    [80, 0, -80]
  );

  const titleOpacity = useTransform(
    progress,
    [0, 0.12, 0.88, 1],
    [0, 1, 1, 0]
  );

  /* ---------------------------------------------------------
     BACKGROUND WORD
  --------------------------------------------------------- */

  const backgroundX = useTransform(
    progress,
    [0, 0.5, 1],
    [-40, 0, 40]
  );

  /* ---------------------------------------------------------
     ROTATING CIRCLE
  --------------------------------------------------------- */

  const circleRotate = useTransform(
    progress,
    [0, 1],
    [0, 180]
  );

  const circleScale = useTransform(
    progress,
    [0, 0.5, 1],
    [0.75, 1, 1.2]
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative h-[220vh] overflow-hidden bg-[#0a0b0b]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="absolute inset-0">

          {/* architectural grid */}

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
              backgroundSize: "100px 100px",
            }}
          />

          {/* vertical lines */}

          <div className="absolute left-[10%] top-0 h-full w-px bg-white/[0.05]" />
          <div className="absolute left-[30%] top-0 h-full w-px bg-white/[0.035]" />
          <div className="absolute left-[70%] top-0 h-full w-px bg-white/[0.04]" />
          <div className="absolute right-[10%] top-0 h-full w-px bg-white/[0.05]" />

          {/* ambient glow */}

          <div className="absolute left-[62%] top-[35%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d7ff38]/[0.035] blur-[150px]" />

          <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="absolute left-6 top-24 z-50 md:left-12">

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#d7ff38]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#d7ff38]">
              02 / The Experience
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
          className="pointer-events-none absolute left-[4vw] top-[14%] z-[1] whitespace-nowrap"
        >
          <span className="font-['Oswald'] text-[18vw] font-bold uppercase leading-none tracking-[-0.08em] text-white/[0.035]">
            EXPERIENCE
          </span>
        </motion.div>

        {/* =====================================================
            MAIN TITLE
        ====================================================== */}

        <motion.div
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
          className="absolute left-6 top-[25%] z-20 md:left-[8%]"
        >

          <div className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">
            Forget ordinary training
          </div>

          <h2 className="font-['Oswald'] text-[18vw] font-bold uppercase leading-[0.78] tracking-[-0.07em] text-white sm:text-[15vw] md:text-[11vw]">

            MORE

            <br />

            <span className="text-[#d7ff38]">
              THAN
            </span>

            <br />

            WORKOUT

          </h2>

        </motion.div>

        {/* =====================================================
            MAIN IMAGE
        ====================================================== */}

        <motion.div
          style={{
            y: imageY,
            scale: imageScale,
            rotate: imageRotate,
          }}
          className="absolute right-[5%] top-[16%] z-10 w-[42vw] min-w-[280px] max-w-[560px] sm:right-[7%] md:right-[9%]"
        >

          <div className="relative">

            {/* shadow */}

            <div className="absolute inset-[10%] translate-y-10 bg-black/80 blur-[60px]" />

            {/* frame */}

            <div className="relative aspect-[4/5] overflow-hidden border border-white/15 bg-[#151716]">

              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=90&w=1400"
                alt="Athlete training inside FORGE"
                className="h-full w-full object-cover"
                style={{
                  filter:
                    "brightness(.62) contrast(1.12) saturate(.7)",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

              <div className="absolute bottom-0 left-0 h-1 w-full bg-[#d7ff38]" />

              {/* image information */}

              <div className="absolute bottom-6 left-6 right-6">

                <div className="mb-2 text-[8px] uppercase tracking-[0.3em] text-[#d7ff38]">
                  FORGE / 001
                </div>

                <div className="font-['Oswald'] text-xl font-bold uppercase text-white sm:text-2xl">
                  Built Under Pressure
                </div>

              </div>

              <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-[#d7ff38]/70" />

            </div>
          </div>

        </motion.div>

        {/* =====================================================
            SECOND FLOATING IMAGE
        ====================================================== */}

        <motion.div
          style={{
            y: secondImageY,
            x: secondImageX,
          }}
          className="absolute bottom-[16%] right-[8%] z-30 hidden w-[18vw] max-w-[260px] lg:block"
        >

          <div className="relative rotate-[6deg]">

            <div className="absolute inset-0 translate-y-5 bg-black/70 blur-[35px]" />

            <div className="relative aspect-[3/4] overflow-hidden border border-white/20 bg-[#171918] p-2">

              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=90&w=900"
                alt="FORGE athlete training"
                className="h-full w-full object-cover"
                style={{
                  filter:
                    "brightness(.7) contrast(1.1) saturate(.65)",
                }}
              />

              <div className="absolute bottom-4 left-4">

                <div className="text-[7px] uppercase tracking-[0.3em] text-[#d7ff38]">
                  Mindset
                </div>

                <div className="mt-1 font-['Oswald'] text-xl font-bold uppercase text-white">
                  Discipline
                </div>

              </div>

            </div>
          </div>

        </motion.div>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

        <motion.div
          style={{
            opacity: titleOpacity,
          }}
          className="absolute bottom-[13%] left-6 z-30 w-[calc(100%-3rem)] max-w-[340px] md:left-[8%]"
        >

          <div className="mb-5 flex items-center gap-3">

            <span className="font-['Oswald'] text-sm text-[#d7ff38]">
              01
            </span>

            <span className="h-px w-12 bg-white/15" />

          </div>

          <p className="text-sm leading-7 text-white/45">
            A training environment built around intensity,
            consistency and progression. Every session is
            designed to move you closer to the person you
            want to become.
          </p>

        </motion.div>

        {/* =====================================================
            ROTATING CIRCLE
        ====================================================== */}

        <motion.div
          style={{
            rotate: circleRotate,
            scale: circleScale,
          }}
          className="pointer-events-none absolute right-[35%] top-[48%] z-[5] hidden h-[190px] w-[190px] rounded-full border border-[#d7ff38]/25 md:block"
        >

          <div className="absolute inset-4 rounded-full border border-white/[0.08]" />

          <div className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#d7ff38] shadow-[0_0_20px_#d7ff38]" />

          <div className="absolute inset-0 flex items-center justify-center">

            <span className="font-['Oswald'] text-[8px] uppercase tracking-[0.35em] text-white/30">
              FORGE / PERFORMANCE
            </span>

          </div>

        </motion.div>

        {/* =====================================================
            STATS
        ====================================================== */}

        <div className="absolute bottom-10 left-6 z-40 flex gap-8 md:left-auto md:right-[8%]">

          <Stat
            number="24/7"
            label="Mindset"
          />

          <Stat
            number="365"
            label="Days / Year"
          />

          <Stat
            number="01"
            label="Standard"
          />

        </div>

        {/* =====================================================
            SCROLL
        ====================================================== */}

        <div className="absolute bottom-10 left-1/2 z-40 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">

          <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
            Keep exploring
          </span>

          <MoveDown
            size={14}
            className="text-[#d7ff38]"
          />

        </div>

        {/* =====================================================
            TOP RIGHT
        ====================================================== */}

        <div className="absolute right-6 top-24 z-40 hidden md:block">

          <div className="flex items-center gap-3">

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
              Performance Culture
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
              <ArrowUpRight
                size={14}
                className="text-[#d7ff38]"
              />
            </div>

          </div>

        </div>

        {/* =====================================================
            GRAIN
        ====================================================== */}

        <div
          className="pointer-events-none absolute inset-0 z-[60] opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* bottom progress */}

        <motion.div
          style={{
            scaleX: progress,
            transformOrigin: "left",
          }}
          className="absolute bottom-0 left-0 z-[70] h-[2px] w-full bg-[#d7ff38]"
        />

      </div>
    </section>
  );
}

/* ============================================================
   STAT
============================================================ */

function Stat({ number, label }) {
  return (
    <div>
      <div className="font-['Oswald'] text-2xl font-bold text-white">
        {number}
      </div>

      <div className="mt-1 text-[7px] uppercase tracking-[0.25em] text-white/25">
        {label}
      </div>
    </div>
  );
}