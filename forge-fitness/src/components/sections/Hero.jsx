import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const ATHLETE_IMAGE =
  "https://images.unsplash.com/photo-1709315957145-a4bad1feef28?auto=format&fit=crop&fm=jpg&q=90&w=1800";

export default function Hero() {
  const heroRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#080909] text-[#f5f5f0]"
    >
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#d7ff38]/5 blur-[130px]" />

        <div className="absolute right-[5%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#d7ff38]/8 blur-[150px]" />

        <div className="absolute bottom-[-200px] left-[40%] h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-[150px]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      {/* Giant background typography */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="pointer-events-none absolute left-[3vw] top-[19%] z-[1] select-none"
      >
        <div className="font-['Oswald'] text-[15vw] font-bold uppercase leading-[0.78] tracking-[-0.08em] text-white/[0.055]">
          TRAIN
        </div>

        <div className="ml-[7vw] font-['Oswald'] text-[15vw] font-bold uppercase leading-[0.78] tracking-[-0.08em] text-white/[0.07]">
          BEYOND
        </div>

        <div className="ml-[2vw] font-['Oswald'] text-[15vw] font-bold uppercase leading-[0.78] tracking-[-0.08em] text-white/[0.045]">
          LIMITS
        </div>
      </motion.div>

      {/* 3D neon ring */}
      <motion.div
        style={{
          x: useSpring(
            mouseX.get ? mouseX : 0,
            {
              stiffness: 60,
              damping: 20,
            }
          ),
        }}
        className="pointer-events-none absolute left-[53%] top-[46%] z-[2] hidden h-[38vw] w-[38vw] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-[#d7ff38]/60 shadow-[0_0_60px_rgba(215,255,56,0.12),inset_0_0_60px_rgba(215,255,56,0.05)] md:block"
      >
        <div className="absolute inset-[8%] rounded-full border border-[#d7ff38]/20" />

        <div className="absolute left-1/2 top-[-8px] h-4 w-4 -translate-x-1/2 rounded-full bg-[#d7ff38] shadow-[0_0_25px_#d7ff38]" />
      </motion.div>

      {/* Decorative orbit */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-[53%] top-[46%] z-[2] hidden h-[43vw] w-[43vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 md:block"
      />

      {/* Athlete image */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="absolute bottom-[-4%] left-[50%] z-[5] w-[75vw] max-w-[850px] -translate-x-1/2 md:left-[58%] md:w-[52vw] md:max-w-[780px]"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Green light behind athlete */}
          <div className="absolute left-1/2 top-[30%] h-[45%] w-[55%] -translate-x-1/2 rounded-full bg-[#d7ff38]/10 blur-[100px]" />

          <img
            src={ATHLETE_IMAGE}
            alt="Athlete lifting weights in a dark gym"
            className="relative z-[2] h-auto w-full object-contain"
            style={{
              filter:
                "contrast(1.08) brightness(0.86) saturate(0.82)",
              mixBlendMode: "normal",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 7%, black 87%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 7%, black 87%, transparent 100%)",
            }}
          />

          {/* Image glow */}
          <div className="absolute bottom-[12%] left-1/2 z-[1] h-[45%] w-[60%] -translate-x-1/2 rounded-full bg-[#d7ff38]/8 blur-[100px]" />
        </motion.div>
      </motion.div>

      {/* Foreground weight plate */}
      <motion.div
        style={{
          x: useSpring(mouseX, {
            stiffness: 40,
            damping: 18,
          }),
          y: useSpring(mouseY, {
            stiffness: 40,
            damping: 18,
          }),
        }}
        className="pointer-events-none absolute right-[5%] top-[39%] z-[8] hidden md:block"
      >
        <div className="relative h-[150px] w-[150px] rounded-full border-[16px] border-[#171918] bg-[#0b0c0c] shadow-[0_35px_80px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-[18px] rounded-full border border-white/10" />

          <div className="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#262927] bg-[#080909]" />

          <div className="absolute left-1/2 top-[12px] -translate-x-1/2 font-['Oswald'] text-[9px] tracking-[0.25em] text-white/20">
            FORGE
          </div>
        </div>
      </motion.div>

      {/* Left content */}
      <div className="relative z-[10] mx-auto flex min-h-screen max-w-[1500px] items-center px-6 pb-20 pt-32 md:px-12">
        <div className="max-w-[680px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-[1px] w-10 bg-[#d7ff38]" />

            <span className="font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d7ff38]">
              Performance Club / 01
            </span>
          </motion.div>

          {/* Main title */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-[3] font-['Oswald'] text-[18vw] font-bold uppercase leading-[0.72] tracking-[-0.07em] md:text-[11vw]"
            >
              Train
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-[6] ml-[7vw] font-['Oswald'] text-[18vw] font-bold uppercase leading-[0.72] tracking-[-0.07em] text-white md:text-[11vw]"
            >
              Beyond
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-[6] ml-[2vw] font-['Oswald'] text-[18vw] font-bold uppercase leading-[0.72] tracking-[-0.07em] text-[#d7ff38] md:text-[11vw]"
            >
              Limits.
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 max-w-[430px] font-['DM_Sans'] text-sm leading-7 text-white/55 md:ml-10"
          >
            A performance-driven training club built for people who
            refuse to stay where they started.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-5 md:ml-10"
          >
            <a
              href="#training"
              className="group flex items-center gap-4 bg-[#d7ff38] px-6 py-4 font-['DM_Sans'] text-xs font-bold uppercase tracking-[0.2em] text-[#080909] transition-transform duration-300 hover:scale-105"
            >
              Start Training

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </a>

            <span className="font-['DM_Sans'] text-xs uppercase tracking-[0.2em] text-white/35">
              Est. 2026
            </span>
          </motion.div>
        </div>
      </div>

      {/* Right information panel */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute right-6 top-1/2 z-[12] hidden w-[190px] -translate-y-1/2 border border-white/10 bg-black/30 p-5 backdrop-blur-xl lg:block"
      >
        <div className="mb-5 font-['DM_Sans'] text-[9px] uppercase tracking-[0.3em] text-white/30">
          The Forge Method
        </div>

        {[
          "Strength",
          "Focus",
          "Discipline",
          "Results",
        ].map((item, index) => (
          <div
            key={item}
            className="flex items-center justify-between border-t border-white/10 py-4"
          >
            <span className="font-['Oswald'] text-sm uppercase tracking-[0.12em] text-white/80">
              {item}
            </span>

            <span className="font-['DM_Sans'] text-[9px] text-[#d7ff38]">
              0{index + 1}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Bottom stats */}
      <div className="absolute bottom-0 left-0 right-0 z-[20] border-t border-white/10 bg-black/20 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-12">
          <div className="hidden items-center gap-10 md:flex">
            <div>
              <div className="font-['Oswald'] text-2xl">12K+</div>
              <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/30">
                Members
              </div>
            </div>

            <div>
              <div className="font-['Oswald'] text-2xl">48</div>
              <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/30">
                Coaches
              </div>
            </div>

            <div>
              <div className="font-['Oswald'] text-2xl">24/7</div>
              <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/30">
                Access
              </div>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/40">
            <ArrowDown size={14} className="animate-bounce text-[#d7ff38]" />
            Scroll to explore
          </div>
        </div>
      </div>

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 z-[30] opacity-[0.045]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
        }}
      />
    </section>
  );
}