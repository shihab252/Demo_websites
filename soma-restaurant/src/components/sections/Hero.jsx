import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2200&q=90";

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.04, 1.18]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "13%"]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-18%"]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.72, 1],
    [1, 1, 0]
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-10%"]
  );

  const lineScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0]
  );

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      document.documentElement.style.setProperty(
        "--soma-mouse-x",
        `${x}`
      );

      document.documentElement.style.setProperty(
        "--soma-mouse-y",
        `${y}`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[115vh] min-h-[720px] overflow-hidden bg-[#0b0b0a]"
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <motion.div
        style={{
          scale: imageScale,
          y: imageY,
        }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="SŌMA modern Japanese dining"
          className="h-full w-full object-cover"
        />

        {/* cinematic darkening */}

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-[#0b0b0a]" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/10 to-black/25" />
      </motion.div>

      {/* =====================================================
          GRAIN
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E\")",
        }}
      />

      {/* =====================================================
          TOP META
      ====================================================== */}

      <motion.div
        style={{
          opacity: contentOpacity,
        }}
        className="absolute left-5 right-5 top-28 z-10 flex items-center justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12"
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#b98b5b]" />

          <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-white/60 sm:text-[9px]">
            01 / SŌMA
          </span>
        </div>

        <span className="hidden text-[8px] uppercase tracking-[0.25em] text-white/45 sm:block">
          Gulshan 1 / Dhaka
        </span>
      </motion.div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="absolute inset-x-5 top-[42%] z-10 -translate-y-1/2 sm:inset-x-8 lg:inset-x-12"
      >
        <div className="relative mx-auto max-w-[1500px]">
          {/* small eyebrow */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-7 flex items-center gap-3 sm:mb-9"
          >
            <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/55 sm:text-[9px]">
              Modern Japanese Dining
            </span>

            <span className="h-1 w-1 rounded-full bg-[#b98b5b]" />
          </motion.div>

          {/* TITLE */}

          <motion.div style={{ y: titleY }}>
            <motion.h1
              initial={{
                opacity: 0,
                y: 90,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-[clamp(92px,19vw,285px)] leading-[0.68] tracking-[-0.085em]"
            >
              SŌMA
            </motion.h1>
          </motion.div>

          {/* SUBTEXT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-9 flex flex-col gap-8 sm:mt-12 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-[390px] text-[11px] leading-6 text-white/60 sm:text-[12px] sm:leading-7">
              A contemporary Japanese dining experience shaped
              by season, restraint and the quiet beauty of
              simplicity.
            </p>

            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="group flex items-center gap-3 border-b border-white/30 pb-2 text-[8px] font-semibold uppercase tracking-[0.25em] transition-colors hover:border-[#b98b5b] hover:text-[#b98b5b]"
              >
                Explore menu

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.2}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("reserve")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#b98b5b] text-[#0b0b0a] transition-transform duration-500 hover:scale-105 sm:flex"
              >
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.2}
                />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          SIDE LABEL
      ====================================================== */}

      <motion.div
        style={{
          opacity: contentOpacity,
        }}
        className="absolute bottom-[18%] right-5 z-10 hidden lg:block"
      >
        <div className="flex items-center gap-4">
          <div className="writing-mode-vertical rotate-180 text-[8px] uppercase tracking-[0.35em] text-white/35">
            Seasonal / Contemporary / Japanese
          </div>

          <motion.div
            style={{
              rotate:
                "calc(var(--soma-mouse-x, 0) * 2deg)",
            }}
            className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-black/10 backdrop-blur-sm"
          >
            <span className="font-display text-[27px] italic text-[#b98b5b]">
              食
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM INFORMATION
      ====================================================== */}

      <motion.div
        style={{
          opacity: contentOpacity,
        }}
        className="absolute bottom-7 left-5 right-5 z-10 sm:left-8 sm:right-8 lg:left-12 lg:right-12"
      >
        <div className="mx-auto flex max-w-[1500px] items-end justify-between">
          <div className="flex items-center gap-4">
            <motion.div
              style={{
                scaleX: lineScale,
                transformOrigin: "left",
              }}
              className="h-px w-14 bg-white/40 sm:w-20"
            />

            <span className="text-[7px] uppercase tracking-[0.25em] text-white/40 sm:text-[8px]">
              Scroll to explore
            </span>

            <ArrowDown
              size={12}
              strokeWidth={1}
              className="animate-bounce text-[#b98b5b]"
            />
          </div>

          <span className="text-[7px] uppercase tracking-[0.25em] text-white/30 sm:text-[8px]">
            23° 48′ N / 90° 24′ E
          </span>
        </div>
      </motion.div>

      {/* =====================================================
          ENTRANCE REVEAL
      ====================================================== */}

      <motion.div
        initial={{
          scaleY: 1,
        }}
        animate={{
          scaleY: 0,
        }}
        transition={{
          duration: 1.2,
          delay: 0.05,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          transformOrigin: "top",
        }}
        className="absolute inset-0 z-[20] bg-[#0b0b0a]"
      />
    </section>
  );
}