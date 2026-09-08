import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const storyImage =
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=90";

const detailImage =
  "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1200&q=90";

export default function Story() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const imageSectionRef = useRef(null);
  const bottomRef = useRef(null);

  const introInView = useInView(introRef, {
    once: true,
    amount: 0.25,
  });

  const imageInView = useInView(imageSectionRef, {
    once: true,
    amount: 0.15,
  });

  const bottomInView = useInView(bottomRef, {
    once: true,
    amount: 0.25,
  });

  /*
   * MAIN SECTION SCROLL PROGRESS
   */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /*
   * Smooth progress.
   */

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.25,
  });

  /*
   * Main image movement.
   */

  const imageY = useTransform(
    smoothProgress,
    [0, 1],
    ["-10%", "10%"]
  );

  const imageScale = useTransform(
    smoothProgress,
    [0, 1],
    [1.08, 1.18]
  );

  /*
   * Floating image moves at another speed.
   */

  const floatingY = useTransform(
    smoothProgress,
    [0, 1],
    ["18%", "-18%"]
  );

  const floatingRotate = useTransform(
    smoothProgress,
    [0, 1],
    [-3, 3]
  );

  /*
   * Giant Japanese character.
   */

  const kanjiY = useTransform(
    smoothProgress,
    [0, 1],
    ["-12%", "18%"]
  );

  const kanjiRotate = useTransform(
    smoothProgress,
    [0, 1],
    [-8, 8]
  );

  const kanjiOpacity = useTransform(
    smoothProgress,
    [0, 0.25, 0.8, 1],
    [0.04, 0.09, 0.07, 0.03]
  );

  /*
   * Intro text movement.
   */

  const introY = useTransform(
    smoothProgress,
    [0, 0.35],
    [40, -20]
  );

  /*
   * Horizontal scrolling statement.
   */

  const marqueeX = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "-28%"]
  );

  /*
   * Progress line.
   */

  const progressWidth = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative overflow-hidden bg-[#f3efe7] text-[#0b0b0a]"
    >
      {/* =========================================
          SCROLL PROGRESS
      ========================================== */}

      <div className="fixed left-0 top-0 z-[110] h-[2px] w-full pointer-events-none">
        <motion.div
          style={{ width: progressWidth }}
          className="h-full bg-[#b98b5b]"
        />
      </div>

      {/* =========================================
          GIANT BACKGROUND CHARACTER
      ========================================== */}

      <motion.div
        style={{
          y: kanjiY,
          rotate: kanjiRotate,
          opacity: kanjiOpacity,
        }}
        className="pointer-events-none absolute -right-[8%] top-[4%] select-none font-display text-[55vw] leading-none text-[#0b0b0a]"
      >
        食
      </motion.div>

      {/* =========================================
          SECTION HEADER
      ========================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pt-20 sm:px-8 sm:pt-28 lg:px-12 lg:pt-36">
        <div className="flex items-center justify-between border-b border-[#0b0b0a]/15 pb-5">
          <div className="flex items-center gap-4">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-px bg-[#b98b5b]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
              02 / The Philosophy
            </span>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#0b0b0a]/40 sm:block">
            Tradition / Season / Simplicity
          </span>

          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0b0b0a]/20"
          >
            <ArrowDown size={15} strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>

      {/* =========================================
          INTRODUCTION
      ========================================== */}

      <motion.div
        ref={introRef}
        style={{ y: introY }}
        className="relative z-10 mx-auto grid max-w-[1500px] gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.7fr_1.7fr] lg:gap-24 lg:px-12 lg:py-44"
      >
        {/* LEFT */}

        <div>
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={
              introInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
            }}
          >
            <div className="font-display text-[28px] italic text-[#b98b5b]">
              食
            </div>

            <p className="mt-5 max-w-[250px] text-[10px] uppercase leading-5 tracking-[0.2em] text-[#0b0b0a]/50">
              Food as a language.
              <br />
              Time as an ingredient.
              <br />
              Nature as inspiration.
            </p>
          </motion.div>
        </div>

        {/* RIGHT */}

        <div className="max-w-[1050px]">
          <div className="overflow-hidden">
            <motion.h2
              initial={{
                y: "110%",
              }}
              animate={
                introInView
                  ? {
                      y: "0%",
                    }
                  : {}
              }
              transition={{
                duration: 1.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-[clamp(58px,8.5vw,138px)] leading-[0.8] tracking-[-0.055em]"
            >
              We believe
              <br />
              <span className="italic text-[#b98b5b]">
                less
              </span>{" "}
              says more.
            </motion.h2>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={
              introInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.35,
              duration: 0.9,
            }}
            className="mt-10 flex flex-col gap-6 sm:ml-[18%] sm:flex-row sm:items-start sm:justify-between"
          >
            <p className="max-w-[570px] text-[14px] leading-7 text-[#0b0b0a]/65 sm:text-[15px]">
              SŌMA is an exploration of Japanese dining through
              a contemporary lens. We work with seasonal
              produce, open flame and precise technique —
              allowing each ingredient to remain recognizable,
              expressive and honest.
            </p>

            <span className="text-[9px] uppercase tracking-[0.22em] text-[#0b0b0a]/40">
              Est. 2026
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* =========================================
          SCROLL MARQUEE
      ========================================== */}

      <div className="relative z-10 overflow-hidden border-y border-[#0b0b0a]/10 py-7">
        <motion.div
          style={{ x: marqueeX }}
          className="flex w-max items-center gap-8 whitespace-nowrap"
        >
          {[
            "SEASONAL INGREDIENTS",
            "OPEN FLAME",
            "PRECISION",
            "SIMPLICITY",
            "SEASONAL INGREDIENTS",
            "OPEN FLAME",
            "PRECISION",
            "SIMPLICITY",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-8"
            >
              <span className="font-display text-[34px] italic tracking-[-0.02em] text-[#0b0b0a]/80 sm:text-[46px]">
                {item}
              </span>

              <span className="h-2 w-2 rounded-full bg-[#b98b5b]" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* =========================================
          IMAGE STORY
      ========================================== */}

      <div
        ref={imageSectionRef}
        className="relative z-10 mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="relative min-h-[700px] sm:min-h-[850px] lg:min-h-[950px]">
          {/* MAIN IMAGE FRAME */}

          <motion.div
            initial={{
              clipPath: "inset(100% 0 0 0)",
            }}
            animate={
              imageInView
                ? {
                    clipPath: "inset(0% 0 0 0)",
                  }
                : {}
            }
            transition={{
              duration: 1.4,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute left-0 top-0 h-[78%] w-[88%] overflow-hidden sm:h-[82%] sm:w-[76%] lg:h-[82%] lg:w-[68%]"
          >
            <motion.img
              src={storyImage}
              alt="SOMA Japanese cuisine"
              style={{
                y: imageY,
                scale: imageScale,
              }}
              className="h-[125%] w-full object-cover"
            />

            {/* IMAGE GRADIENT */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            {/* IMAGE LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                imageInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8"
            >
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/60">
                From the kitchen
              </span>

              <p className="mt-2 font-display text-[25px] italic">
                Season on the plate.
              </p>
            </motion.div>
          </motion.div>

          {/* =====================================
              VERTICAL LABEL
          ====================================== */}

          <div className="absolute right-0 top-[4%] hidden h-[320px] items-center justify-center lg:flex">
            <div
              className="text-[9px] uppercase tracking-[0.3em] text-[#0b0b0a]/40"
              style={{
                writingMode: "vertical-rl",
              }}
            >
              Ingredients / Fire / Season / Craft
            </div>
          </div>

          {/* =====================================
              FLOATING IMAGE
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 100,
            }}
            animate={
              imageInView
                ? {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.35,
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              y: floatingY,
              rotate: floatingRotate,
            }}
            className="absolute bottom-0 right-0 z-20 h-[300px] w-[58%] overflow-hidden border-[8px] border-[#f3efe7] sm:h-[400px] sm:w-[44%] sm:border-[10px] lg:h-[500px] lg:w-[35%]"
          >
            <img
              src={detailImage}
              alt="Japanese dining detail"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute bottom-5 left-5 text-white">
              <span className="text-[8px] uppercase tracking-[0.25em] text-white/60">
                Detail
              </span>

              <p className="mt-1 font-display text-[21px] italic">
                Nothing unnecessary.
              </p>
            </div>
          </motion.div>

          {/* =====================================
              LARGE STATEMENT
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={
              imageInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.65,
              duration: 0.9,
            }}
            className="absolute bottom-[10%] left-[5%] z-30 max-w-[340px] text-white lg:bottom-[12%] lg:max-w-[430px]"
          >
            <span className="mb-4 block text-[9px] uppercase tracking-[0.25em] text-white/55">
              Our Approach
            </span>

            <p className="font-display text-[34px] leading-[0.92] tracking-[-0.025em] sm:text-[45px] lg:text-[55px]">
              Nothing on the plate
              <br />
              without a reason.
            </p>
          </motion.div>

          {/* =====================================
              DECORATIVE NUMBER
          ====================================== */}

          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={
              imageInView
                ? {
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              delay: 1,
              duration: 0.7,
            }}
            className="absolute bottom-[4%] left-0 font-display text-[90px] leading-none text-[#0b0b0a]/10 sm:text-[130px]"
          >
            02
          </motion.span>
        </div>
      </div>

      {/* =========================================
          BOTTOM PHILOSOPHY
      ========================================== */}

      <div
        ref={bottomRef}
        className="relative z-10 mx-auto max-w-[1500px] px-5 pb-28 sm:px-8 sm:pb-36 lg:px-12 lg:pb-48"
      >
        <div className="grid gap-12 border-t border-[#0b0b0a]/15 pt-16 lg:grid-cols-[0.7fr_1.5fr] lg:gap-24 lg:pt-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={
              bottomInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
            }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0b0b0a]/45">
              A slower way to dine
            </span>

            <div className="mt-7 h-px w-20 bg-[#b98b5b]" />
          </motion.div>

          <div>
            <div className="overflow-hidden">
              <motion.p
                initial={{
                  y: "105%",
                }}
                animate={
                  bottomInView
                    ? {
                        y: "0%",
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display text-[38px] leading-[0.96] tracking-[-0.035em] sm:text-[52px] lg:text-[68px]"
              >
                The menu changes with
                <span className="italic text-[#b98b5b]">
                  {" "}the world outside.
                </span>
              </motion.p>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={
                bottomInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
            >
              <p className="max-w-[470px] text-[13px] leading-6 text-[#0b0b0a]/55">
                Our kitchen follows the rhythm of the seasons.
                Produce arrives when it is at its best, and the
                menu evolves around it rather than forcing it
                into a fixed formula.
              </p>

              <a
                href="#menu"
                className="group flex w-fit items-center gap-4 border-b border-[#0b0b0a]/30 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
              >
                Discover the menu

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================
          FINAL MARQUEE
      ========================================== */}

      <div className="relative overflow-hidden border-t border-[#0b0b0a]/10 py-5">
        <motion.div
          style={{
            x: useTransform(
              smoothProgress,
              [0, 1],
              ["-20%", "0%"]
            ),
          }}
          className="flex w-max items-center gap-7 whitespace-nowrap"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-7"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#0b0b0a]/35">
                SŌMA / MODERN JAPANESE DINING
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#b98b5b]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}