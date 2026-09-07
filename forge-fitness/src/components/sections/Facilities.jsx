import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Dumbbell,
  Zap,
  Wind,
} from "lucide-react";
import { useRef } from "react";

const facilities = [
  {
    number: "01",
    title: "IRON FLOOR",
    label: "FREE WEIGHTS",
    description:
      "A dedicated strength environment built around serious equipment, open movement and progressive training.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=90&w=1600",
    icon: Dumbbell,
  },
  {
    number: "02",
    title: "ENGINE ROOM",
    label: "CONDITIONING",
    description:
      "Push your cardiovascular limits with a complete conditioning zone designed for speed, stamina and output.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=90&w=1600",
    icon: Zap,
  },
  {
    number: "03",
    title: "RECOVERY",
    label: "RESET / REBUILD",
    description:
      "The work does not stop when the session ends. Recover properly, reset your body and return stronger.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=90&w=1600",
    icon: Wind,
  },
];

export default function Facilities() {
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
     MAIN MOTION
  --------------------------------------------------------- */

  const imageX = useTransform(
    progress,
    [0, 0.45, 1],
    [100, 0, -80]
  );

  const imageScale = useTransform(
    progress,
    [0, 0.45, 1],
    [0.88, 1, 0.92]
  );

  const imageRotate = useTransform(
    progress,
    [0, 0.5, 1],
    [2, 0, -2]
  );

  const titleY = useTransform(
    progress,
    [0, 0.5, 1],
    [90, 0, -90]
  );

  const titleX = useTransform(
    progress,
    [0, 0.5, 1],
    [-40, 0, 40]
  );

  const titleOpacity = useTransform(
    progress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  const panelY = useTransform(
    progress,
    [0, 0.5, 1],
    [80, 0, -60]
  );

  const panelOpacity = useTransform(
    progress,
    [0, 0.12, 0.82, 1],
    [0, 1, 1, 0]
  );

  const specsY = useTransform(
    progress,
    [0, 0.5, 1],
    [100, 0, -80]
  );

  const ringRotate = useTransform(
    progress,
    [0, 1],
    [0, 260]
  );

  const backgroundX = useTransform(
    progress,
    [0, 0.5, 1],
    [0, -50, -100]
  );

  return (
    <section
      ref={sectionRef}
      id="facilities"
      className="relative h-[220vh] overflow-hidden bg-[#080909] text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="absolute inset-0">

          {/* subtle industrial grid */}

          <motion.div
            style={{ x: backgroundX }}
            className="absolute inset-0 opacity-[0.035]"
          >
            <div
              className="absolute inset-[-10%]"
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
          </motion.div>

          {/* structural lines */}

          <div className="absolute left-[14%] top-0 h-full w-px bg-white/[0.05]" />

          <div className="absolute left-[42%] top-0 h-full w-px bg-white/[0.035]" />

          <div className="absolute left-[76%] top-0 h-full w-px bg-white/[0.04]" />

          {/* lime atmospheric glow */}

          <motion.div
            style={{
              scale: useTransform(
                progress,
                [0, 0.5, 1],
                [0.8, 1.15, 0.8]
              ),
              x: useTransform(
                progress,
                [0, 1],
                [-80, 100]
              ),
            }}
            className="absolute left-[50%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#d7ff38]/[0.035] blur-[160px]"
          />

          {/* dark vignette */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.72)_100%)]" />

        </div>

        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div className="absolute left-6 top-24 z-50 md:left-12">

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#d7ff38]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#d7ff38]">
              05 / Facilities
            </span>

          </div>

        </div>

        {/* =====================================================
            GIANT BACKGROUND TEXT
        ====================================================== */}

        <motion.div
          style={{
            x: imageX,
            opacity: useTransform(
              progress,
              [0, 0.2, 0.8, 1],
              [0, 1, 1, 0]
            ),
          }}
          className="pointer-events-none absolute left-[-3vw] top-[11%] z-[1] whitespace-nowrap"
        >
          <span className="font-['Oswald'] text-[20vw] font-bold uppercase leading-none tracking-[-0.08em] text-white/[0.035]">
            FACILITY
          </span>
        </motion.div>

        {/* =====================================================
            LEFT TITLE
        ====================================================== */}

        <motion.div
          style={{
            y: titleY,
            x: titleX,
            opacity: titleOpacity,
          }}
          className="absolute left-6 top-[24%] z-20 max-w-[600px] md:left-[8%]"
        >

          <div className="mb-6 text-[8px] font-bold uppercase tracking-[0.3em] text-white/30">
            Built for the work
          </div>

          <h2 className="font-['Oswald'] text-[17vw] font-bold uppercase leading-[0.78] tracking-[-0.075em] sm:text-[14vw] md:text-[9.5vw]">

            THE

            <br />

            <span className="text-[#d7ff38]">
              RIGHT
            </span>

            <br />

            SPACE.

          </h2>

          <div className="mt-7 max-w-[310px] border-l border-[#d7ff38]/40 pl-4 text-[11px] leading-5 text-white/35">
            Every zone is designed around one idea:
            remove distractions and make the work impossible
            to ignore.
          </div>

        </motion.div>

        {/* =====================================================
            MAIN FACILITY IMAGE
        ====================================================== */}

        <motion.div
          style={{
            x: imageX,
            scale: imageScale,
            rotate: imageRotate,
          }}
          className="absolute right-[5%] top-[14%] z-10 w-[43vw] min-w-[290px] max-w-[620px] md:right-[8%]"
        >

          <div className="relative">

            {/* image shadow */}

            <div className="absolute inset-[10%] translate-y-16 bg-black/90 blur-[70px]" />

            {/* image */}

            <div className="relative aspect-[4/5] overflow-hidden border border-white/15">

              <img
                src={facilities[0].image}
                alt="FORGE strength training facility"
                className="h-full w-full object-cover"
                style={{
                  filter:
                    "brightness(.55) contrast(1.15) saturate(.65)",
                }}
              />

              {/* cinematic overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30" />

              {/* lime bottom line */}

              <div className="absolute bottom-0 left-0 h-1 w-full bg-[#d7ff38]" />

              {/* corner markers */}

              <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-[#d7ff38]/70" />

              <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-[#d7ff38]/70" />

              {/* top metadata */}

              <div className="absolute left-6 top-6">

                <div className="text-[7px] uppercase tracking-[0.3em] text-white/40">
                  FORGE / FACILITY
                </div>

                <div className="mt-1 font-['Oswald'] text-sm uppercase text-[#d7ff38]">
                  01
                </div>

              </div>

              {/* image information */}

              <div className="absolute bottom-7 left-7">

                <div className="mb-2 text-[8px] uppercase tracking-[0.3em] text-[#d7ff38]">
                  FORGE / FACILITY 01
                </div>

                <div className="font-['Oswald'] text-3xl font-bold uppercase">
                  Iron Floor
                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            FLOATING FACILITY PANEL
        ====================================================== */}

        <motion.div
          style={{
            y: panelY,
            opacity: panelOpacity,
          }}
          className="absolute bottom-[13%] left-6 z-30 w-[calc(100%-3rem)] max-w-[380px] md:left-[8%]"
        >

          <div className="border border-white/10 bg-black/55 p-6 backdrop-blur-xl md:p-7">

            <div className="mb-6 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7ff38]/30">

                  <Dumbbell
                    size={15}
                    className="text-[#d7ff38]"
                  />

                </div>

                <div>

                  <div className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                    Zone 01
                  </div>

                  <div className="mt-1 font-['Oswald'] text-lg font-bold uppercase">
                    Iron Floor
                  </div>

                </div>

              </div>

              <span className="font-['Oswald'] text-2xl text-white/20">
                01
              </span>

            </div>

            <p className="text-sm leading-6 text-white/40">
              Everything you need for serious strength work.
              Open space, premium equipment and enough room
              to train without compromise.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[8px] font-bold uppercase tracking-[0.25em] text-[#d7ff38]">

              Explore zone

              <ArrowUpRight size={13} />

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            RIGHT SIDE SPECIFICATIONS
        ====================================================== */}

        <motion.div
          style={{
            y: specsY,
            opacity: useTransform(
              progress,
              [0, 0.18, 0.82, 1],
              [0, 1, 1, 0]
            ),
          }}
          className="absolute right-6 top-[23%] z-30 hidden w-[190px] lg:block"
        >

          <div className="border-l border-white/10 pl-5">

            <div className="mb-7 text-[8px] uppercase tracking-[0.3em] text-white/25">
              Facility Standard
            </div>

            <Spec
              title="Free Weights"
              value="24+"
            />

            <Spec
              title="Training Zones"
              value="06"
            />

            <Spec
              title="Open Floor"
              value="01"
            />

            <Spec
              title="Recovery"
              value="24H"
            />

          </div>

        </motion.div>

        {/* =====================================================
            ROTATING RING
        ====================================================== */}

        <motion.div
          style={{
            rotate: ringRotate,
            scale: useTransform(
              progress,
              [0, 0.5, 1],
              [0.7, 1, 0.8]
            ),
          }}
          className="pointer-events-none absolute right-[32%] top-[55%] z-[5] hidden h-[170px] w-[170px] rounded-full border border-[#d7ff38]/20 md:block"
        >

          <div className="absolute inset-4 rounded-full border border-white/[0.06]" />

          <div className="absolute inset-10 rounded-full border border-[#d7ff38]/10" />

          <div className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#d7ff38] shadow-[0_0_20px_#d7ff38]" />

        </motion.div>

        {/* =====================================================
            BOTTOM LABEL
        ====================================================== */}

        <div className="absolute bottom-10 right-6 z-40 md:right-12">

          <div className="flex items-center gap-4">

            <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/25 md:block">
              Equipment / Space / Recovery
            </span>

            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"
            >
              <ArrowDown
                size={14}
                className="text-[#d7ff38]"
              />
            </motion.div>

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

/* ============================================================
   SPEC
============================================================ */

function Spec({ title, value }) {
  return (
    <div className="border-t border-white/[0.08] py-4">

      <div className="flex items-end justify-between">

        <span className="text-[8px] uppercase tracking-[0.2em] text-white/30">
          {title}
        </span>

        <span className="font-['Oswald'] text-xl text-white">
          {value}
        </span>

      </div>

    </div>
  );
}