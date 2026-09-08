import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, MoveDown } from "lucide-react";

const moments = [
  {
    number: "01",
    title: "THE ROOM",
    subtitle: "静かな空間",
    text: "A room designed to slow the evening down. Warm timber, quiet shadows and carefully considered light create an atmosphere where conversation comes naturally.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "02",
    title: "THE TABLE",
    subtitle: "食卓",
    text: "Every detail at the table has a purpose. Handmade ceramics, seasonal flowers and dishes arriving at their own rhythm turn dinner into a ritual.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "03",
    title: "THE NIGHT",
    subtitle: "夜",
    text: "As the room grows darker, the experience becomes slower. One course, one conversation, one moment at a time.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=90",
  },
];

function ExperienceSlide({ moment, index, progress }) {
  /*
    Each slide owns a portion of the overall scroll.

    Example for 3 slides:

    Slide 1 → 0.00 - 0.33
    Slide 2 → 0.33 - 0.66
    Slide 3 → 0.66 - 1.00
  */

  const start = index / moments.length;
  const middle = start + 0.16;
  const end = start + 0.32;

  const opacity = useTransform(
    progress,
    [
      start,
      start + 0.05,
      middle,
      end - 0.05,
      end,
    ],
    [0, 1, 1, 1, 0]
  );

  const imageX = useTransform(
    progress,
    [start, middle, end],
    [index % 2 === 0 ? "-14%" : "14%", "0%", index % 2 === 0 ? "10%" : "-10%"]
  );

  const textX = useTransform(
    progress,
    [start, middle, end],
    [index % 2 === 0 ? "14%" : "-14%", "0%", index % 2 === 0 ? "-10%" : "10%"]
  );

  const imageScale = useTransform(
    progress,
    [start, middle, end],
    [1.08, 1, 1.05]
  );

  const imageY = useTransform(
    progress,
    [start, middle, end],
    ["4%", "0%", "-3%"]
  );

  return (
    <motion.div
      style={{
        opacity,
        pointerEvents: "none",
      }}
      className="absolute inset-0"
    >
      <div className="mx-auto grid h-full max-w-[1500px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12">
        {/* =================================================
            IMAGE
        ================================================== */}

        <motion.div
          style={{
            x: imageX,
            order: index % 2 === 0 ? 1 : 2,
          }}
          className="relative mx-auto w-full max-w-[620px] lg:mx-0"
        >
          <div className="relative aspect-[0.86] overflow-hidden bg-[#171614]">
            <motion.img
              src={moment.image}
              alt={moment.title}
              style={{
                scale: imageScale,
                y: imageY,
              }}
              className="absolute -inset-[8%] h-[116%] w-[116%] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/10" />

            {/* image number */}

            <div className="absolute left-6 top-6">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/50">
                SŌMA / {moment.number}
              </span>
            </div>

            {/* image caption */}

            <div className="absolute bottom-6 left-6">
              <span className="font-display text-[19px] italic text-[#b98b5b]">
                {moment.subtitle}
              </span>
            </div>
          </div>

          {/* small decorative line */}

          <div className="mt-5 flex items-center gap-4">
            <span className="h-px w-12 bg-[#b98b5b]" />

            <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
              SŌMA experience
            </span>
          </div>
        </motion.div>

        {/* =================================================
            TEXT
        ================================================== */}

        <motion.div
          style={{
            x: textX,
            order: index % 2 === 0 ? 2 : 1,
          }}
          className={`max-w-[540px] ${
            index % 2 === 0
              ? "lg:justify-self-end"
              : "lg:justify-self-start"
          }`}
        >
          {/* number */}

          <div className="flex items-center gap-4">
            <span className="font-display text-[22px] italic text-[#b98b5b]">
              {moment.number}
            </span>

            <span className="h-px w-8 bg-white/15" />

            <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
              The experience
            </span>
          </div>

          {/* title */}

          <h3 className="mt-8 font-display text-[clamp(65px,8vw,120px)] leading-[0.76] tracking-[-0.06em]">
            {moment.title}
          </h3>

          {/* Japanese */}

          <div className="mt-8">
            <span className="font-display text-[22px] italic text-[#b98b5b]">
              {moment.subtitle}
            </span>
          </div>

          {/* description */}

          <p className="mt-7 max-w-[430px] text-[12px] leading-7 text-white/40 sm:text-[13px]">
            {moment.text}
          </p>

          {/* detail */}

          <div className="mt-10 border-t border-white/10 pt-5">
            <div className="flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-[0.23em] text-white/20">
                A moment at SŌMA
              </span>

              <span className="font-display text-[18px] italic text-white/20">
                {moment.number}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.4,
  });

  const introY = useTransform(
    progress,
    [0, 0.12],
    ["0%", "-20%"]
  );

  const introOpacity = useTransform(
    progress,
    [0, 0.12],
    [1, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-[#11100e] text-[#f3efe7]"
    >
      {/* =====================================================
          INTRO
      ====================================================== */}

      <div className="relative h-[100vh] min-h-[650px]">
        <motion.div
          style={{
            y: introY,
            opacity: introOpacity,
          }}
          className="absolute inset-0 flex items-center"
        >
          <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="flex items-center gap-4 border-b border-white/10 pb-5">
              <span className="h-px w-10 bg-[#b98b5b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                04 / The Experience
              </span>

              <span className="ml-auto font-display text-[22px] italic text-[#b98b5b]">
                夜
              </span>
            </div>

            <div className="mt-20 grid items-end gap-12 lg:grid-cols-[1.4fr_0.6fr]">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display text-[clamp(75px,13vw,190px)] leading-[0.68] tracking-[-0.065em]"
                >
                  MORE THAN
                  <br />
                  <span className="italic text-[#b98b5b]">
                    DINNER.
                  </span>
                </motion.h2>
              </div>

              <div className="max-w-[380px]">
                <p className="text-[12px] leading-7 text-white/40 sm:text-[13px]">
                  SŌMA is designed as an experience rather
                  than simply a place to eat. From the first
                  step inside to the final course, every detail
                  is considered.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <MoveDown
                    size={14}
                    strokeWidth={1}
                    className="text-[#b98b5b]"
                  />

                  <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                    Scroll to experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL STORY
      ====================================================== */}

      <div className="relative h-[300vh]">
        {/* Sticky viewport */}

        <div className="sticky top-0 h-screen min-h-[650px] overflow-hidden">
          {/* subtle background */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-20%] top-[25%] h-[600px] w-[600px] rounded-full bg-[#b98b5b]/[0.035] blur-[150px]" />

            <div className="absolute right-[-20%] bottom-[10%] h-[550px] w-[550px] rounded-full bg-white/[0.015] blur-[150px]" />
          </div>

          {/* giant background typography */}

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="font-display whitespace-nowrap text-[24vw] leading-none tracking-[-0.08em] text-white/[0.018]">
              SŌMA
            </span>
          </div>

          {/* slides */}

          <div className="absolute inset-0">
            {moments.map((moment, index) => (
              <ExperienceSlide
                key={moment.number}
                moment={moment}
                index={index}
                progress={progress}
              />
            ))}
          </div>

          {/* =================================================
              SCROLL PROGRESS
          ================================================== */}

          <div className="absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 sm:flex lg:right-10">
            <span className="text-[8px] uppercase tracking-[0.25em] text-white/20 [writing-mode:vertical-rl]">
              Experience
            </span>

            <div className="relative h-32 w-px bg-white/10">
              <motion.div
                style={{
                  scaleY: progress,
                  transformOrigin: "top",
                }}
                className="absolute left-0 top-0 h-full w-px bg-[#b98b5b]"
              />
            </div>

            <span className="font-display text-[16px] italic text-[#b98b5b]">
              04
            </span>
          </div>

          {/* mobile progress */}

          <div className="absolute bottom-6 left-5 right-5 z-30 sm:hidden">
            <div className="h-px bg-white/10">
              <motion.div
                style={{
                  scaleX: progress,
                  transformOrigin: "left",
                }}
                className="h-px w-full bg-[#b98b5b]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <div className="relative overflow-hidden border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                An evening at SŌMA
              </span>

              <h3 className="mt-7 max-w-[850px] font-display text-[clamp(58px,8vw,120px)] leading-[0.78] tracking-[-0.055em]">
                COME FOR
                <br />
                <span className="italic text-[#b98b5b]">
                  THE FOOD.
                </span>
                <br />
                STAY FOR
                <br />
                THE MOMENT.
              </h3>
            </div>

            <motion.a
              href="#reserve"
              whileHover={{
                y: -5,
              }}
              className="group flex h-[155px] w-[155px] items-center justify-center rounded-full border border-[#b98b5b]/40 transition-colors duration-500 hover:bg-[#b98b5b] hover:text-[#11100e] sm:h-[180px] sm:w-[180px]"
            >
              <span className="text-center text-[9px] font-semibold uppercase tracking-[0.2em]">
                Reserve
                <br />
                your table
              </span>

              <ArrowUpRight
                size={15}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </div>
        </div>
      </div>

      {/* =====================================================
          FOOT
      ====================================================== */}

      <div className="flex items-center justify-between border-t border-white/10 px-5 py-5 sm:px-8 lg:px-12">
        <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
          SŌMA / MODERN JAPANESE DINING
        </span>

        <span className="font-display text-[20px] italic text-[#b98b5b]">
          04
        </span>

        <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
          Dhaka
        </span>
      </div>
    </section>
  );
}