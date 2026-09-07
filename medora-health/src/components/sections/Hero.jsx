import { useEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function Hero() {
  const heroRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 45,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 45,
    damping: 20,
  });

  const imageX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const smallImageX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [8, -8]
  );

  const smallImageY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [6, -6]
  );

  const headingX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [4, -4]
  );

  const headingY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [3, -3]
  );

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#f5f7f6] text-[#10212d]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Vertical architectural lines */}

        <div className="absolute left-[6%] top-0 h-full w-px bg-[#10212d]/[0.055]" />

        <div className="absolute left-[50%] top-0 h-full w-px bg-[#10212d]/[0.035]" />

        <div className="absolute right-[7%] top-0 h-full w-px bg-[#10212d]/[0.055]" />

        {/* Ambient light */}

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[38%] top-[5%] h-[500px] w-[500px] rounded-full bg-[#ccecf5] blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-20%] right-[5%] h-[400px] w-[400px] rounded-full bg-[#dbe8fa] blur-[120px]"
        />
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative mx-auto min-h-[calc(100vh-80px)] max-w-[1500px] px-6 pb-20 pt-24 md:px-10 lg:px-14">
        <div className="relative min-h-[calc(100vh-170px)]">
          {/* =================================================
              SECTION NUMBER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="absolute left-0 top-[10%] hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold text-[#1677ff]">
                01
              </span>

              <span className="h-px w-8 bg-[#10212d]/15" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#10212d]/35">
                Cardiology
              </span>
            </div>
          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <motion.div
            style={{
              x: headingX,
              y: headingY,
            }}
            className="absolute left-0 top-[17%] z-20 w-full"
          >
            {/* First line */}

            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="font-['Manrope'] text-[clamp(3.8rem,9vw,9.5rem)] font-medium leading-[0.82] tracking-[-0.085em]"
              >
                Cardiovascular
              </motion.h1>
            </div>

            {/* Second line */}

            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.39,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="ml-[7%] font-['Manrope'] text-[clamp(3.8rem,9vw,9.5rem)] font-light leading-[0.82] tracking-[-0.085em] text-[#63727c]"
              >
                care,
              </motion.h1>
            </div>

            {/* Third line */}

            <div className="flex items-end gap-5 overflow-hidden">
              <motion.h1
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.48,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="ml-[14%] font-['Manrope'] text-[clamp(3.8rem,9vw,9.5rem)] font-medium leading-[0.82] tracking-[-0.085em]"
              >
                rethought.
              </motion.h1>

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: 75,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-3 hidden h-[5px] bg-[#1677ff] md:block"
              />
            </div>
          </motion.div>

          {/* =================================================
              MAIN DOCTOR IMAGE
          ================================================= */}

          <motion.div
            style={{
              x: imageX,
              y: imageY,
            }}
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.4,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute right-[1%] top-[7%] h-[62vh] min-h-[460px] w-[44%] overflow-hidden md:right-[5%] md:w-[41%] lg:top-[9%] lg:h-[67vh] lg:w-[36%]"
          >
            {/* Blue reveal */}

            <motion.div
              initial={{
                scaleY: 1,
              }}
              animate={{
                scaleY: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{
                transformOrigin: "bottom",
              }}
              className="absolute inset-0 z-20 bg-[#1677ff]"
            />

            {/* Doctor image */}

            <motion.img
              initial={{
                scale: 1.15,
              }}
              animate={{
                scale: [1.15, 1.03, 1.07],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=90"
              alt="Dr. Ayaan Rahman"
              className="h-full w-full object-cover object-center"
            />

            {/* Gradient */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#07131d]/55 via-transparent to-transparent" />

            {/* Image label */}

            <div className="absolute left-5 top-5 z-10">
              <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/55">
                Practice / 01
              </span>
            </div>

            {/* Doctor information */}

            <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/50">
                  Consultant Cardiologist
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Dr. Ayaan Rahman
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center border border-white/20 bg-black/10 backdrop-blur-sm">
                <ArrowDownRight
                  size={14}
                  className="text-white"
                />
              </div>
            </div>
          </motion.div>

          {/* =================================================
              SMALL SECONDARY IMAGE
          ================================================= */}

          <motion.div
            style={{
              x: smallImageX,
              y: smallImageY,
            }}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.95,
            }}
            className="absolute bottom-[14%] left-[7%] z-30 hidden h-[175px] w-[130px] overflow-hidden border-[7px] border-[#f5f7f6] shadow-[0_20px_50px_rgba(16,33,45,0.14)] md:block"
          >
            <motion.img
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=85"
              alt="Medical consultation"
              className="h-full w-full object-cover grayscale"
            />
          </motion.div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

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
              delay: 0.95,
            }}
            className="absolute bottom-[18%] left-0 z-30 max-w-[300px] lg:left-[5%]"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-[#1677ff]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#10212d]/35">
                A clearer approach
              </span>
            </div>

            <p className="text-sm leading-6 text-[#10212d]/50">
              Specialist cardiovascular medicine built around
              thoughtful diagnosis, prevention, and long-term
              relationships.
            </p>
          </motion.div>

          {/* =================================================
              EXPERIENCE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
            className="absolute bottom-[17%] right-0 z-30 hidden lg:block"
          >
            <div className="border-l border-[#10212d]/15 pl-5">
              <p className="font-['Manrope'] text-4xl font-semibold tracking-[-0.07em]">
                12+
              </p>

              <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#10212d]/35">
                Years experience
              </p>
            </div>
          </motion.div>

          {/* =================================================
              CTA
          ================================================= */}

          <motion.button
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.1,
            }}
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => scrollTo("#appointment")}
            className="group absolute bottom-[5%] left-[14%] z-40 flex items-center gap-4 bg-[#1677ff] px-5 py-4 text-white shadow-[0_15px_40px_rgba(22,119,255,0.18)]"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.15em]">
              Request consultation
            </span>

            <span className="flex h-7 w-7 items-center justify-center bg-white/15">
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </motion.button>

          {/* =================================================
              ROTATING DETAIL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 1.1,
            }}
            className="absolute right-[42%] top-[4%] z-30 hidden md:block"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#10212d]/10"
            >
              <Plus
                size={15}
                strokeWidth={1}
                className="text-[#1677ff]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM INFORMATION STRIP
      ===================================================== */}

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
          delay: 1.3,
        }}
        className="relative border-t border-[#10212d]/10 bg-[#eef2f1]"
      >
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 md:grid-cols-4">
          <div className="border-r border-[#10212d]/10 px-6 py-5 md:px-10">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#10212d]/30">
              Experience
            </p>

            <p className="mt-1 text-sm font-semibold">
              12+ years
            </p>
          </div>

          <div className="border-r border-[#10212d]/10 px-6 py-5 md:px-10">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#10212d]/30">
              Consultations
            </p>

            <p className="mt-1 text-sm font-semibold">
              15,000+
            </p>
          </div>

          <div className="border-r border-[#10212d]/10 px-6 py-5 md:px-10">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#10212d]/30">
              Location
            </p>

            <p className="mt-1 text-sm font-semibold">
              Gulshan, Dhaka
            </p>
          </div>

          <button
            onClick={() => scrollTo("#care")}
            className="group flex items-center justify-between px-6 py-5 text-left md:px-10"
          >
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#10212d]/30">
                Continue
              </p>

              <p className="mt-1 text-sm font-semibold">
                Explore the practice
              </p>
            </div>

            <motion.div
              animate={{
                x: [0, 4, 0],
                y: [0, 4, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="flex h-8 w-8 items-center justify-center border border-[#10212d]/10 transition-colors group-hover:border-[#1677ff]"
            >
              <ArrowDownRight size={13} />
            </motion.div>
          </button>
        </div>
      </motion.div>
    </section>
  );
}