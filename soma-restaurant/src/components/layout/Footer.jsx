import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#0b0b0a] text-[#f3efe7]"
    >
      {/* =====================================================
          SECTION HEADER
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-5 pt-24 sm:px-8 sm:pt-32 lg:px-12 lg:pt-40">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#b98b5b]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/45 sm:text-[10px]">
              08 / SŌMA
            </span>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.25em] text-white/20 sm:block">
            Modern Japanese Dining
          </span>

          <span className="font-display text-[24px] italic text-[#b98b5b]">
            終
          </span>
        </div>
      </div>

      {/* =====================================================
          GIANT FINAL STATEMENT
      ====================================================== */}

      <section className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="relative">
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2 className="relative z-10 font-display text-[clamp(78px,15vw,220px)] leading-[0.68] tracking-[-0.08em]">
              SEE
              <br />

              <span className="italic text-[#b98b5b]">
                YOU SOON.
              </span>
            </h2>
          </motion.div>

          {/* Background Japanese character */}

          <motion.div
            initial={{
              opacity: 0,
              rotate: -8,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pointer-events-none absolute right-[-2%] top-1/2 -translate-y-1/2 font-display text-[32vw] leading-none text-white/[0.025]"
          >
            食
          </motion.div>
        </div>

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-14 max-w-[470px] text-[12px] leading-7 text-white/35 sm:text-[14px] sm:leading-8"
        >
          A quiet room, seasonal ingredients and a table
          prepared for the people who matter.
        </motion.p>
      </section>

      {/* =====================================================
          RESERVATION CTA
      ====================================================== */}

      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
              Next evening
            </span>

            <p className="mt-4 font-display text-[30px] sm:text-[38px]">
              Your table is waiting.
            </p>
          </div>

          <a
            href="#reserve"
            className="group flex w-fit items-center gap-5 border-b border-[#b98b5b]/60 pb-3 text-[9px] font-semibold uppercase tracking-[0.25em] transition-colors hover:border-[#b98b5b]"
          >
            Reserve a table

            <ArrowUpRight
              size={16}
              strokeWidth={1.2}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>

      {/* =====================================================
          INFORMATION GRID
      ====================================================== */}

      <div className="mx-auto grid max-w-[1500px] border-b border-white/10 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {/* LOCATION */}

        <div className="border-b border-white/10 py-10 md:border-r md:pr-8 lg:border-b-0 lg:py-14 lg:pr-10">
          <div className="flex items-center gap-3">
            <MapPin
              size={15}
              strokeWidth={1.1}
              className="text-[#b98b5b]"
            />

            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Visit
            </span>
          </div>

          <p className="mt-7 font-display text-[23px] leading-[1.05] sm:text-[26px]">
            Road 12,
            <br />
            Gulshan 1,
            <br />
            Dhaka 1212
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Gulshan+1+Dhaka+Bangladesh"
            target="_blank"
            rel="noreferrer"
            className="group mt-7 inline-flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-[#b98b5b]"
          >
            Open directions

            <ArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* HOURS */}

        <div className="border-b border-white/10 py-10 md:border-r md:pl-8 lg:border-b-0 lg:py-14 lg:pl-10 lg:pr-10">
          <div className="flex items-center gap-3">
            <span className="h-[5px] w-[5px] rounded-full bg-[#b98b5b]" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Hours
            </span>
          </div>

          <div className="mt-7 space-y-4 text-[10px]">
            <div className="flex justify-between gap-5">
              <span className="text-white/35">
                Sun — Thu
              </span>

              <span className="text-white/65">
                12:00 — 23:00
              </span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-white/35">
                Friday
              </span>

              <span className="text-white/65">
                16:00 — 00:00
              </span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-white/35">
                Saturday
              </span>

              <span className="text-white/65">
                12:00 — 00:00
              </span>
            </div>
          </div>
        </div>

        {/* RESERVATIONS */}

        <div className="border-b border-white/10 py-10 md:border-r md:pl-8 lg:border-b-0 lg:py-14 lg:pl-10 lg:pr-10">
          <div className="flex items-center gap-3">
            <Phone
              size={15}
              strokeWidth={1.1}
              className="text-[#b98b5b]"
            />

            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Reservations
            </span>
          </div>

          <a
            href="tel:+8801XXXXXXXXX"
            className="mt-7 block font-display text-[24px] transition-colors hover:text-[#b98b5b] sm:text-[27px]"
          >
            +880 1XXX-XXXXXX
          </a>

          <a
            href="mailto:reservations@soma.example"
            className="mt-5 flex items-center gap-2 text-[9px] text-white/35 transition-colors hover:text-white"
          >
            <Mail
              size={12}
              strokeWidth={1.1}
            />

            reservations@soma.example
          </a>
        </div>

        {/* INSTAGRAM */}

        <div className="py-10 md:pl-8 lg:py-14 lg:pl-10">
          <div className="flex items-center gap-3">
            <FaInstagram
              size={15}
              className="text-[#b98b5b]"
            />

            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Follow
            </span>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group mt-7 inline-flex items-center gap-3 font-display text-[27px] transition-colors hover:text-[#b98b5b]"
          >
            @soma.dhaka

            <ArrowUpRight
              size={14}
              strokeWidth={1.2}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>

      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[1fr_2fr] lg:px-12">
        {/* BRAND */}

        <div>
          <div className="font-display text-[54px] leading-none tracking-[-0.05em] sm:text-[70px]">
            SŌMA
          </div>

          <p className="mt-5 max-w-[260px] text-[9px] uppercase leading-5 tracking-[0.18em] text-white/25">
            Modern Japanese dining
            <br />
            Dhaka, Bangladesh
          </p>
        </div>

        {/* LINK GROUPS */}

        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-4">
          {/* EXPLORE */}

          <div>
            <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
              Explore
            </span>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="#story"
                className="w-fit text-[10px] text-white/55 transition-colors hover:text-white"
              >
                Story
              </a>

              <a
                href="#menu"
                className="w-fit text-[10px] text-white/55 transition-colors hover:text-white"
              >
                Menu
              </a>

              <a
                href="#experience"
                className="w-fit text-[10px] text-white/55 transition-colors hover:text-white"
              >
                Experience
              </a>
            </div>
          </div>

          {/* DISCOVER */}

          <div>
            <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
              Discover
            </span>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="#gallery"
                className="w-fit text-[10px] text-white/55 transition-colors hover:text-white"
              >
                Gallery
              </a>

              <a
                href="#visit"
                className="w-fit text-[10px] text-white/55 transition-colors hover:text-white"
              >
                Visit
              </a>

              <a
                href="#reserve"
                className="w-fit text-[10px] text-white/55 transition-colors hover:text-white"
              >
                Reservation
              </a>
            </div>
          </div>

          {/* CONNECT */}

          <div>
            <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
              Connect
            </span>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-fit text-[10px] text-white/55 transition-colors hover:text-white"
              >
                Instagram
              </a>

              <a
                href="mailto:reservations@soma.example"
                className="w-fit text-[10px] text-white/55 transition-colors hover:text-white"
              >
                Email
              </a>

              <a
                href="tel:+8801XXXXXXXXX"
                className="w-fit text-[10px] text-white/55 transition-colors hover:text-white"
              >
                Call
              </a>
            </div>
          </div>

          {/* RESERVE */}

          <div>
            <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
              Table
            </span>

            <a
              href="#reserve"
              className="group mt-6 flex h-24 w-24 items-center justify-center rounded-full border border-[#b98b5b]/50 transition-all duration-500 hover:bg-[#b98b5b] hover:text-[#11100e] sm:h-28 sm:w-28"
            >
              <span className="text-center text-[8px] font-semibold uppercase tracking-[0.18em]">
                Reserve
                <br />
                now
              </span>

              <ArrowUpRight
                size={13}
                className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          GIANT SŌMA WORDMARK
      ====================================================== */}

      <div className="overflow-hidden border-t border-white/10">
        <motion.button
          type="button"
          onClick={scrollToTop}
          whileHover={{
            y: -5,
          }}
          transition={{
            duration: 0.35,
          }}
          className="group block w-full px-3 py-10 text-left sm:px-6 sm:py-14 lg:px-10 lg:py-16"
        >
          <div className="flex items-end justify-between">
            <span className="font-display text-[24vw] leading-[0.65] tracking-[-0.09em] text-white/[0.95]">
              SŌMA
            </span>

            <div className="mb-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:border-[#b98b5b] group-hover:text-[#b98b5b] sm:mb-4 sm:h-16 sm:w-16">
              <ArrowUpRight
                size={18}
                className="rotate-[-45deg] transition-transform duration-500 group-hover:rotate-0"
              />
            </div>
          </div>
        </motion.button>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="flex flex-col gap-5 border-t border-white/10 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span className="text-[8px] uppercase tracking-[0.22em] text-white/20">
          © 2026 SŌMA
        </span>

        <span className="text-[8px] uppercase tracking-[0.22em] text-white/20">
          Modern Japanese Dining / Dhaka
        </span>

        <span className="font-display text-[18px] italic text-[#b98b5b]">
          食
        </span>
      </div>

      {/* =====================================================
          FINAL COPPER LINE
      ====================================================== */}

      <div className="h-1 w-full bg-[#b98b5b]" />
    </footer>
  );
}