import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const workouts = [
  {
    id: "01",
    name: "SQUAT",
    category: "STRENGTH",
    image:
      "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&q=90&w=1200",
    position: "left-[47%] top-[14%]",
    size: "w-[30vw]",
    rotate: "-6deg",
  },
  {
    id: "02",
    name: "DEADLIFT",
    category: "POWER",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=90&w=1200",
    position: "left-[54%] top-[10%]",
    size: "w-[29vw]",
    rotate: "5deg",
  },
  {
    id: "03",
    name: "DUMBBELL",
    category: "MUSCLE",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=90&w=1200",
    position: "left-[49%] top-[18%]",
    size: "w-[28vw]",
    rotate: "-4deg",
  },
  {
    id: "04",
    name: "CONDITION",
    category: "ENDURANCE",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=90&w=1200",
    position: "left-[55%] top-[13%]",
    size: "w-[30vw]",
    rotate: "7deg",
  },
  {
    id: "05",
    name: "KETTLEBELL",
    category: "CONTROL",
    image:
      "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?auto=format&fit=crop&q=90&w=1200",
    position: "left-[48%] top-[15%]",
    size: "w-[29vw]",
    rotate: "-7deg",
  },
];

export default function TrainingFloor() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.25,
  });

  /* ---------------- CAMERA ---------------- */

  const cameraScale = useTransform(
    progress,
    [0, 0.25, 0.5, 0.75, 1],
    [1, 1.03, 1.08, 1.04, 1]
  );

  const cameraX = useTransform(
    progress,
    [0, 0.5, 1],
    [0, -25, -60]
  );

  /* ---------------- GIANT TEXT ---------------- */

  const trainX = useTransform(
    progress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, -80, -180, -280, -400]
  );

  const trainRotate = useTransform(
    progress,
    [0, 1],
    [0, -4]
  );

  const limitsX = useTransform(
    progress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 100, 220, 350, 500]
  );

  /* ---------------- GREEN RING ---------------- */

  const ringScale = useTransform(
    progress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.55, 0.75, 1, 1.25, 1.65]
  );

  const ringRotate = useTransform(
    progress,
    [0, 1],
    [0, 180]
  );

  /* ---------------- WEIGHT PLATE ---------------- */

  const plateX = useTransform(
    progress,
    [0, 0.5, 1],
    [80, -40, -180]
  );

  const plateY = useTransform(
    progress,
    [0, 0.5, 1],
    [-30, 20, 120]
  );

  const plateRotate = useTransform(
    progress,
    [0, 1],
    [0, 360]
  );

  /* ---------------- LEFT COPY ---------------- */

  const copyY = useTransform(
    progress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, -20, -50, -20, 20]
  );

  const copyOpacity = useTransform(
    progress,
    [0, 0.12, 0.85, 1],
    [1, 1, 0.7, 0]
  );

  return (
    <section
      id="training"
      ref={sectionRef}
      className="relative h-[650vh] bg-[#080909]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <motion.div
          style={{
            scale: cameraScale,
            x: cameraX,
          }}
          className="absolute inset-[-5%]"
        >
          <div className="absolute inset-0 bg-[#090a0a]" />

          {/* architectural gym grid */}

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(255,255,255,.5) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  rgba(255,255,255,.5) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "110px 110px",
            }}
          />

          {/* industrial vertical lights */}

          <div className="absolute left-[20%] top-0 h-full w-px bg-white/[0.05]" />
          <div className="absolute left-[38%] top-0 h-full w-px bg-white/[0.04]" />
          <div className="absolute left-[70%] top-0 h-full w-px bg-white/[0.04]" />
          <div className="absolute right-[15%] top-0 h-full w-px bg-white/[0.05]" />

          {/* floor */}

          <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-black via-black/70 to-transparent" />

          <div
            className="absolute bottom-[12%] left-0 right-0 h-px bg-white/[0.08]"
          />

          {/* ambient light */}

          <div className="absolute left-[55%] top-[30%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d7ff38]/[0.045] blur-[140px]" />

          <div className="absolute right-[5%] top-[10%] h-[350px] w-[350px] rounded-full bg-white/[0.025] blur-[120px]" />
        </motion.div>

        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div className="absolute left-6 top-28 z-40 md:left-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#d7ff38]" />

            <span className="font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.35em] text-[#d7ff38]">
              03 / The Training Floor
            </span>
          </div>
        </div>

        {/* =====================================================
            GIANT BACKGROUND TYPOGRAPHY
        ====================================================== */}

        <motion.div
          style={{
            x: trainX,
            rotate: trainRotate,
          }}
          className="pointer-events-none absolute left-[-3vw] top-[20%] z-[2] whitespace-nowrap"
        >
          <span className="font-['Oswald'] text-[24vw] font-bold uppercase leading-none tracking-[-0.09em] text-white/[0.07]">
            TRAIN
          </span>
        </motion.div>

        <motion.div
          style={{
            x: limitsX,
          }}
          className="pointer-events-none absolute left-[-5vw] top-[58%] z-[2] whitespace-nowrap"
        >
          <span className="font-['Oswald'] text-[21vw] font-bold uppercase leading-none tracking-[-0.09em] text-[#d7ff38]/[0.07]">
            LIMITS
          </span>
        </motion.div>

        {/* =====================================================
            GREEN ORBIT
        ====================================================== */}

        <motion.div
          style={{
            scale: ringScale,
            rotate: ringRotate,
          }}
          className="pointer-events-none absolute left-[63%] top-[46%] z-[4] h-[30vw] w-[30vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7ff38]/60"
        >
          <div className="absolute inset-[7%] rounded-full border border-[#d7ff38]/20" />

          <div className="absolute inset-[17%] rounded-full border border-white/[0.08]" />

          <div className="absolute left-1/2 top-[-5px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#d7ff38] shadow-[0_0_25px_#d7ff38]" />
        </motion.div>

        {/* =====================================================
            EXERCISE IMAGES
        ====================================================== */}

        <div className="absolute inset-0 z-[10]">

          {/* IMAGE 01 */}

          <motion.div
            style={{
              opacity: useTransform(
                progress,
                [0, 0.08, 0.18, 0.25],
                [1, 1, 0.7, 0]
              ),
              x: useTransform(
                progress,
                [0, 0.25],
                [0, -180]
              ),
              y: useTransform(
                progress,
                [0, 0.25],
                [0, -80]
              ),
              scale: useTransform(
                progress,
                [0, 0.25],
                [1, 1.18]
              ),
              rotate: useTransform(
                progress,
                [0, 0.25],
                [-6, -12]
              ),
            }}
            className="absolute left-[47%] top-[17%] w-[31vw] min-w-[280px] max-w-[500px]"
          >
            <WorkoutImage
              src={workouts[0].image}
              number="01"
              label="SQUAT"
            />
          </motion.div>

          {/* IMAGE 02 */}

          <motion.div
            style={{
              opacity: useTransform(
                progress,
                [0.12, 0.25, 0.38, 0.48],
                [0, 1, 0.85, 0]
              ),
              x: useTransform(
                progress,
                [0.12, 0.48],
                [220, -100]
              ),
              y: useTransform(
                progress,
                [0.12, 0.48],
                [80, -50]
              ),
              scale: useTransform(
                progress,
                [0.12, 0.3, 0.48],
                [0.72, 1, 1.18]
              ),
              rotate: useTransform(
                progress,
                [0.12, 0.48],
                [8, -5]
              ),
            }}
            className="absolute left-[52%] top-[15%] w-[30vw] min-w-[280px] max-w-[490px]"
          >
            <WorkoutImage
              src={workouts[1].image}
              number="02"
              label="DEADLIFT"
            />
          </motion.div>

          {/* IMAGE 03 */}

          <motion.div
            style={{
              opacity: useTransform(
                progress,
                [0.33, 0.48, 0.62, 0.7],
                [0, 1, 0.8, 0]
              ),
              x: useTransform(
                progress,
                [0.33, 0.7],
                [-220, 130]
              ),
              y: useTransform(
                progress,
                [0.33, 0.7],
                [100, -60]
              ),
              scale: useTransform(
                progress,
                [0.33, 0.5, 0.7],
                [0.7, 1, 1.2]
              ),
              rotate: useTransform(
                progress,
                [0.33, 0.7],
                [-8, 6]
              ),
            }}
            className="absolute left-[48%] top-[20%] w-[29vw] min-w-[270px] max-w-[480px]"
          >
            <WorkoutImage
              src={workouts[2].image}
              number="03"
              label="DUMBBELL"
            />
          </motion.div>

          {/* IMAGE 04 */}

          <motion.div
            style={{
              opacity: useTransform(
                progress,
                [0.54, 0.7, 0.82, 0.88],
                [0, 1, 0.8, 0]
              ),
              x: useTransform(
                progress,
                [0.54, 0.88],
                [240, -130]
              ),
              y: useTransform(
                progress,
                [0.54, 0.88],
                [70, -80]
              ),
              scale: useTransform(
                progress,
                [0.54, 0.72, 0.88],
                [0.7, 1, 1.15]
              ),
              rotate: useTransform(
                progress,
                [0.54, 0.88],
                [9, -7]
              ),
            }}
            className="absolute left-[53%] top-[17%] w-[31vw] min-w-[280px] max-w-[500px]"
          >
            <WorkoutImage
              src={workouts[3].image}
              number="04"
              label="CONDITION"
            />
          </motion.div>

          {/* IMAGE 05 */}

          <motion.div
            style={{
              opacity: useTransform(
                progress,
                [0.73, 0.86, 1],
                [0, 1, 0]
              ),
              x: useTransform(
                progress,
                [0.73, 1],
                [-240, 60]
              ),
              y: useTransform(
                progress,
                [0.73, 1],
                [100, -100]
              ),
              scale: useTransform(
                progress,
                [0.73, 0.9, 1],
                [0.68, 1, 1.1]
              ),
              rotate: useTransform(
                progress,
                [0.73, 1],
                [-8, 3]
              ),
            }}
            className="absolute left-[49%] top-[15%] w-[30vw] min-w-[280px] max-w-[490px]"
          >
            <WorkoutImage
              src={workouts[4].image}
              number="05"
              label="KETTLEBELL"
            />
          </motion.div>
        </div>

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <motion.div
          style={{
            y: copyY,
            opacity: copyOpacity,
          }}
          className="absolute left-6 top-[38%] z-[30] max-w-[380px] md:left-12 md:max-w-[440px]"
        >
          <div className="mb-5 text-[9px] font-bold uppercase tracking-[0.35em] text-[#d7ff38]">
            Performance System
          </div>

          <h2 className="font-['Oswald'] text-[18vw] font-bold uppercase leading-[0.72] tracking-[-0.075em] text-white md:text-[10vw]">
            Train
            <br />
            <span className="text-[#d7ff38]">Different.</span>
          </h2>

          <p className="mt-8 max-w-[350px] text-sm leading-7 text-white/45">
            Strength. Power. Conditioning. Every movement has a
            purpose. Scroll through the systems that make up the
            FORGE training floor.
          </p>
        </motion.div>

        {/* =====================================================
            FLOATING WEIGHT
        ====================================================== */}

        <motion.div
          style={{
            x: plateX,
            y: plateY,
            rotate: plateRotate,
          }}
          className="pointer-events-none absolute right-[6%] top-[30%] z-[35] hidden md:block"
        >
          <div className="relative h-[180px] w-[180px] rounded-full border-[20px] border-[#171918] bg-[#080909] shadow-[0_50px_100px_rgba(0,0,0,.8)]">

            <div className="absolute inset-[20px] rounded-full border border-white/10" />

            <div className="absolute inset-[42px] rounded-full border border-white/[0.08]" />

            <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#292b29]" />

            <span className="absolute left-1/2 top-5 -translate-x-1/2 font-['Oswald'] text-[8px] tracking-[0.3em] text-white/20">
              FORGE
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT META
        ====================================================== */}

        <div className="absolute right-6 top-[43%] z-[30] hidden w-[170px] lg:block">
          <div className="border-l border-white/10 pl-5">
            <div className="mb-6 text-[8px] uppercase tracking-[0.3em] text-white/30">
              Training Systems
            </div>

            {[
              "Strength",
              "Power",
              "Muscle",
              "Conditioning",
              "Control",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between border-t border-white/[0.08] py-3"
              >
                <span className="font-['Oswald'] text-xs uppercase text-white/60">
                  {item}
                </span>

                <span className="text-[8px] text-[#d7ff38]">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

        <motion.div
          style={{
            opacity: useTransform(
              progress,
              [0, 0.12],
              [1, 0]
            ),
          }}
          className="absolute bottom-10 left-1/2 z-[40] flex -translate-x-1/2 flex-col items-center gap-3"
        >
          <span className="text-[8px] uppercase tracking-[0.35em] text-white/35">
            Scroll through the floor
          </span>

          <ArrowDown
            size={15}
            className="animate-bounce text-[#d7ff38]"
          />
        </motion.div>

        {/* =====================================================
            PROGRESS
        ====================================================== */}

        <div className="absolute bottom-0 left-0 right-0 z-[50] h-[2px] bg-white/10">
          <motion.div
            style={{
              scaleX: progress,
              transformOrigin: "left",
            }}
            className="h-full bg-[#d7ff38]"
          />
        </div>

        {/* =====================================================
            BOTTOM RIGHT
        ====================================================== */}

        <div className="absolute bottom-7 right-6 z-[40] hidden items-center gap-4 md:flex">
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
            05 Movement Systems
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
            <ArrowUpRight
              size={14}
              className="text-[#d7ff38]"
            />
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
      </div>
    </section>
  );
}

/* ============================================================
   WORKOUT IMAGE
============================================================ */

function WorkoutImage({ src, number, label }) {
  return (
    <div className="group relative">

      {/* shadow */}

      <div className="absolute inset-[8%] translate-y-8 rounded-full bg-black/70 blur-[50px]" />

      {/* image frame */}

      <div className="relative aspect-[4/5] overflow-hidden border border-white/15 bg-[#151716] shadow-[0_40px_100px_rgba(0,0,0,.7)]">

        <img
          src={src}
          alt={`${label} workout`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{
            filter:
              "brightness(.7) contrast(1.12) saturate(.72)",
          }}
        />

        {/* image gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        {/* lime edge */}

        <div className="absolute bottom-0 left-0 h-1 w-full bg-[#d7ff38]" />

        {/* number */}

        <div className="absolute left-5 top-5 font-['Oswald'] text-5xl font-bold text-white/20">
          {number}
        </div>

        {/* label */}

        <div className="absolute bottom-5 left-5">
          <div className="mb-1 text-[8px] uppercase tracking-[.3em] text-[#d7ff38]">
            Movement
          </div>

          <div className="font-['Oswald'] text-2xl font-bold uppercase tracking-tight text-white">
            {label}
          </div>
        </div>

        {/* corner */}

        <div className="absolute right-4 top-4 h-7 w-7 border-r border-t border-[#d7ff38]/60" />
      </div>
    </div>
  );
}