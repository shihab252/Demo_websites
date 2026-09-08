import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const galleryItems = [
  {
    number: "01",
    title: "The Room",
    category: "Atmosphere",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "02",
    title: "At The Table",
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "03",
    title: "After Dark",
    category: "Evening",
    image:
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "04",
    title: "The Details",
    category: "Craft",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "05",
    title: "Seasonal",
    category: "Cuisine",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1800&q=90",
  },
];

function GalleryImage({ item, className = "", direction = "up" }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? ["-5%", "5%"] : ["5%", "-5%"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.06, 1, 1.05]
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative overflow-hidden bg-[#171614] ${className}`}
    >
      <motion.img
        src={item.image}
        alt={item.title}
        style={{ y, scale }}
        className="absolute -inset-[5%] h-[110%] w-[110%] object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />

      <div className="absolute left-5 top-5">
        <span className="text-[8px] uppercase tracking-[0.25em] text-white/50">
          {item.number}
        </span>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <div>
          <span className="font-display text-[16px] italic text-[#b98b5b]">
            {item.category}
          </span>

          <h3 className="mt-1 font-display text-[25px] leading-none text-white">
            {item.title}
          </h3>
        </div>

        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
          <ArrowUpRight size={12} />
        </span>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.4,
  });

  const giantTextX = useTransform(
    smoothProgress,
    [0, 1],
    ["2%", "-12%"]
  );

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative overflow-hidden bg-[#f3efe7] text-[#11100e]"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ x: giantTextX }}
          className="absolute left-[-5%] top-[20%] whitespace-nowrap font-display text-[22vw] leading-none tracking-[-0.08em] text-black/[0.035]"
        >
          SŌMA
        </motion.div>

        <div className="absolute right-[-10%] top-[45%] h-[450px] w-[450px] rounded-full bg-[#b98b5b]/[0.06] blur-[130px]" />
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pt-20 sm:px-8 sm:pt-28 lg:px-12 lg:pt-32">
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#b98b5b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/55">
              05 / Gallery
            </span>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.25em] text-black/30 sm:block">
            Moments at SŌMA
          </span>

          <span className="font-display text-[22px] italic text-[#b98b5b]">
            写
          </span>
        </div>
      </div>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-[clamp(70px,11vw,165px)] leading-[0.68] tracking-[-0.07em]"
            >
              MOMENTS
              <br />
              <span className="italic text-[#b98b5b]">
                AT SŌMA.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-[360px] text-[12px] leading-6 text-black/45 lg:ml-auto"
          >
            A collection of moments from our kitchen,
            dining room and the evenings that happen around
            the table.
          </motion.p>
        </div>
      </div>

      {/* =====================================================
          GALLERY
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32">
        {/* =================================================
            ROW 01
        ================================================== */}

        <div className="grid items-start gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <div className="lg:pt-20">
            <GalleryImage
              item={galleryItems[0]}
              direction="up"
              className="aspect-[0.82]"
            />
          </div>

          <div>
            <GalleryImage
              item={galleryItems[1]}
              direction="down"
              className="aspect-[1.25]"
            />

            <div className="mt-4 flex justify-between border-b border-black/10 pb-4">
              <span className="text-[8px] uppercase tracking-[0.22em] text-black/30">
                02 / Dining
              </span>

              <span className="font-display text-[16px] italic text-black/30">
                食卓
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            CENTER STATEMENT
        ================================================== */}

        <div className="relative flex items-center justify-center py-24 sm:py-28 lg:py-32">
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 max-w-[760px] text-center"
          >
            <span className="font-display text-[20px] italic text-[#b98b5b]">
              その瞬間
            </span>

            <h3 className="mt-5 font-display text-[clamp(45px,6vw,82px)] leading-[0.84] tracking-[-0.055em]">
              BEAUTY LIVES
              <br />
              <span className="italic text-black/30">
                IN THE DETAILS.
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-[400px] text-[11px] leading-6 text-black/35">
              From the glow of the dining room to the last
              detail on the plate, atmosphere is part of the
              meal.
            </p>
          </motion.div>

          <div className="absolute h-[260px] w-[260px] rounded-full border border-[#b98b5b]/15 sm:h-[340px] sm:w-[340px]" />
        </div>

        {/* =================================================
            ROW 02
        ================================================== */}

        <div className="grid items-start gap-6 lg:grid-cols-[1.28fr_0.72fr] lg:gap-12">
          <div>
            <GalleryImage
              item={galleryItems[2]}
              direction="up"
              className="aspect-[1.22]"
            />

            <div className="mt-4 flex justify-between border-b border-black/10 pb-4">
              <span className="text-[8px] uppercase tracking-[0.22em] text-black/30">
                03 / Evening
              </span>

              <span className="font-display text-[16px] italic text-black/30">
                夜
              </span>
            </div>
          </div>

          <div className="lg:pt-20">
            <GalleryImage
              item={galleryItems[3]}
              direction="down"
              className="aspect-[0.82]"
            />
          </div>
        </div>

        {/* =================================================
            ROW 03
        ================================================== */}

        <div className="mt-20 grid items-end gap-8 sm:mt-24 lg:mt-28 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <div className="order-2 lg:order-1 lg:pb-14">
            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="text-[8px] uppercase tracking-[0.25em] text-black/30">
                05 / Seasonal
              </span>

              <h3 className="mt-5 font-display text-[clamp(52px,6vw,88px)] leading-[0.8] tracking-[-0.055em]">
                MADE FOR
                <br />
                <span className="italic text-[#b98b5b]">
                  THE SEASON.
                </span>
              </h3>

              <p className="mt-6 max-w-[340px] text-[11px] leading-6 text-black/40">
                Our dishes change with the seasons, allowing
                the ingredients to tell us what comes next.
              </p>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <GalleryImage
              item={galleryItems[4]}
              direction="up"
              className="aspect-[1.15]"
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          MARQUEE
      ====================================================== */}

      <div className="overflow-hidden border-y border-black/10 py-6">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center"
        >
          {[0, 1].map((group) => (
            <div key={group} className="flex items-center">
              {[
                "DINING",
                "CRAFT",
                "SEASON",
                "ATMOSPHERE",
                "SŌMA",
              ].map((word) => (
                <div
                  key={`${group}-${word}`}
                  className="flex items-center"
                >
                  <span className="mx-7 font-display text-[34px] italic text-black/[0.12] sm:mx-10 sm:text-[46px]">
                    {word}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#b98b5b]" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* =====================================================
          CTA
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-black/30">
              Your evening awaits
            </span>

            <h3 className="mt-6 max-w-[800px] font-display text-[clamp(55px,7vw,105px)] leading-[0.78] tracking-[-0.055em]">
              MAKE A
              <br />
              <span className="italic text-[#b98b5b]">
                MOMENT.
              </span>
            </h3>
          </div>

          <motion.a
            href="#reserve"
            whileHover={{ y: -4 }}
            className="group flex h-[145px] w-[145px] shrink-0 items-center justify-center rounded-full border border-black/20 transition-colors duration-500 hover:bg-[#11100e] hover:text-[#f3efe7] sm:h-[165px] sm:w-[165px]"
          >
            <span className="text-center text-[8px] font-semibold uppercase tracking-[0.2em]">
              Reserve
              <br />
              your table
            </span>

            <ArrowUpRight
              size={14}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </div>
      </div>

      {/* =====================================================
          FOOT
      ====================================================== */}

      <div className="flex items-center justify-between border-t border-black/10 px-5 py-5 sm:px-8 lg:px-12">
        <span className="text-[8px] uppercase tracking-[0.25em] text-black/25">
          SŌMA / MODERN JAPANESE DINING
        </span>

        <span className="font-display text-[19px] italic text-[#b98b5b]">
          05
        </span>

        <span className="text-[8px] uppercase tracking-[0.25em] text-black/25">
          Dhaka
        </span>
      </div>
    </section>
  );
}