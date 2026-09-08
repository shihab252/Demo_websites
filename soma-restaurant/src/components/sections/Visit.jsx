import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import {
  MapPin,
  Phone,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

export default function Visit() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.4,
  });

  const imageY = useTransform(
    progress,
    [0, 1],
    ["-7%", "7%"]
  );

  const imageScale = useTransform(
    progress,
    [0, 0.5, 1],
    [1.08, 1, 1.06]
  );

  return (
    <section
      ref={sectionRef}
      id="visit"
      className="relative overflow-hidden bg-[#11100e] text-[#f3efe7]"
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-5 pt-20 sm:px-8 sm:pt-28 lg:px-12 lg:pt-32">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#b98b5b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
              06 / Visit SŌMA
            </span>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.25em] text-white/25 sm:block">
            Find your way
          </span>

          <span className="font-display text-[23px] italic text-[#b98b5b]">
            場
          </span>
        </div>
      </div>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.95,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-[clamp(72px,11vw,165px)] leading-[0.68] tracking-[-0.07em]"
            >
              FIND
              <br />

              <span className="italic text-[#b98b5b]">
                SŌMA.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="max-w-[370px] text-[12px] leading-7 text-white/40 lg:ml-auto"
          >
            In the heart of Dhaka, SŌMA brings modern
            Japanese dining into a warm, intimate setting.
            Come early, stay late.
          </motion.p>
        </div>
      </div>

      {/* =====================================================
          LOCATION CONTENT
      ====================================================== */}

      <div className="mx-auto grid max-w-[1500px] gap-8 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-12 lg:pb-32">
        {/* =================================================
            IMAGE / MAP VISUAL
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative aspect-[1.2] overflow-hidden bg-[#191816]"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=90"
            alt="SOMA restaurant interior"
            style={{
              y: imageY,
              scale: imageScale,
            }}
            className="absolute -inset-[7%] h-[114%] w-[114%] object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />

          {/* Fake map grid */}

          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent 49%, rgba(255,255,255,.15) 50%, transparent 51%), linear-gradient(0deg, transparent 49%, rgba(255,255,255,.12) 50%, transparent 51%)",
              backgroundSize: "120px 120px",
            }}
          />

          {/* Location pin */}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#b98b5b]/60 bg-[#11100e]/70 backdrop-blur-md">
              <MapPin
                size={20}
                strokeWidth={1.3}
                className="text-[#b98b5b]"
              />

              <span className="absolute inset-[-14px] rounded-full border border-[#b98b5b]/20" />

              <span className="absolute inset-[-28px] rounded-full border border-[#b98b5b]/10" />
            </div>
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div>
              <span className="text-[8px] uppercase tracking-[0.25em] text-white/50">
                Location
              </span>

              <p className="mt-2 font-display text-[25px]">
                Gulshan 1
              </p>
            </div>

            <span className="font-display text-[18px] italic text-[#b98b5b]">
              場所
            </span>
          </div>
        </motion.div>

        {/* =================================================
            DETAILS
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="flex flex-col justify-between border-t border-white/10 lg:border-t-0"
        >
          {/* ADDRESS */}

          <div className="border-b border-white/10 py-8 lg:pt-0">
            <div className="flex items-start gap-5">
              <MapPin
                size={18}
                strokeWidth={1}
                className="mt-1 shrink-0 text-[#b98b5b]"
              />

              <div>
                <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                  Address
                </span>

                <p className="mt-4 max-w-[360px] font-display text-[28px] leading-[1] sm:text-[32px]">
                  Road 12,
                  <br />
                  Gulshan 1,
                  <br />
                  Dhaka 1212
                </p>

                <p className="mt-4 text-[10px] leading-5 text-white/30">
                  Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* HOURS */}

          <div className="border-b border-white/10 py-8">
            <div className="flex items-start gap-5">
              <Clock3
                size={18}
                strokeWidth={1}
                className="mt-1 shrink-0 text-[#b98b5b]"
              />

              <div className="w-full">
                <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                  Opening hours
                </span>

                <div className="mt-5 space-y-3 text-[11px]">
                  <div className="flex max-w-[360px] justify-between gap-4">
                    <span className="text-white/40">
                      Sunday — Thursday
                    </span>

                    <span className="text-white/70">
                      12:00 — 23:00
                    </span>
                  </div>

                  <div className="flex max-w-[360px] justify-between gap-4">
                    <span className="text-white/40">
                      Friday
                    </span>

                    <span className="text-white/70">
                      16:00 — 00:00
                    </span>
                  </div>

                  <div className="flex max-w-[360px] justify-between gap-4">
                    <span className="text-white/40">
                      Saturday
                    </span>

                    <span className="text-white/70">
                      12:00 — 00:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT */}

          <div className="py-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <a
                href="tel:+8801XXXXXXXXX"
                className="group"
              >
                <div className="flex items-center gap-4">
                  <Phone
                    size={16}
                    strokeWidth={1}
                    className="text-[#b98b5b]"
                  />

                  <span className="text-[8px] uppercase tracking-[0.22em] text-white/25">
                    Reservations
                  </span>
                </div>

                <p className="mt-4 font-display text-[23px] transition-colors group-hover:text-[#b98b5b]">
                  +880 1XXX-XXXXXX
                </p>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div className="flex items-center gap-4">
                  <FaInstagram
                    size={18}
                    className="text-[#b98b5b]"
                  />

                  <span className="text-[8px] uppercase tracking-[0.22em] text-white/25">
                    Follow SŌMA
                  </span>
                </div>

                <p className="mt-4 font-display text-[23px] transition-colors group-hover:text-[#b98b5b]">
                  @soma.dhaka
                </p>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          DIRECTIONS CTA
      ====================================================== */}

      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
              Getting here
            </span>

            <p className="mt-3 font-display text-[25px] sm:text-[30px]">
              Your table is waiting.
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Gulshan+1+Dhaka+Bangladesh"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-4 border-b border-[#b98b5b]/50 pb-2 text-[9px] font-semibold uppercase tracking-[0.22em]"
          >
            Open in Google Maps

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>

      {/* =====================================================
          RESERVATION CTA
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="relative overflow-hidden border border-white/10 bg-[#171614] px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
          <div className="pointer-events-none absolute right-[-5%] top-1/2 -translate-y-1/2 font-display text-[30vw] leading-none text-white/[0.02]">
            食
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                06 / Visit SŌMA
              </span>

              <h3 className="mt-6 font-display text-[clamp(50px,7vw,95px)] leading-[0.8] tracking-[-0.055em]">
                COME FIND
                <br />

                <span className="italic text-[#b98b5b]">
                  YOUR TABLE.
                </span>
              </h3>
            </div>

            <a
              href="#reserve"
              className="group flex h-[135px] w-[135px] shrink-0 items-center justify-center rounded-full border border-[#b98b5b]/50 transition-all duration-500 hover:bg-[#b98b5b] hover:text-[#11100e] sm:h-[160px] sm:w-[160px]"
            >
              <span className="text-center text-[8px] font-semibold uppercase tracking-[0.2em]">
                Reserve
                <br />
                a table
              </span>

              <ArrowUpRight
                size={14}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
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

        <span className="font-display text-[19px] italic text-[#b98b5b]">
          06
        </span>

        <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
          Dhaka
        </span>
      </div>
    </section>
  );
}