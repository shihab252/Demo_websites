import { ArrowUpRight } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Training", href: "#training" },
  { label: "Programs", href: "#programs" },
  { label: "Facilities", href: "#facilities" },
  { label: "Coaches", href: "#coaches" },
  { label: "Membership", href: "#membership" },
];

export default function Footer() {
  const scrollTo = (href) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#090909] text-[#f4f4f0]">

      {/* =====================================================
          GIANT BRAND
      ===================================================== */}

      <section className="border-t border-white/10 px-5 pb-10 pt-20 sm:px-8 md:px-12 md:pt-28 lg:px-16">
        <div className="mx-auto max-w-[1600px]">

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            {/* Giant Logo */}

            <div>
              <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.35em] text-[#d7ff38]">
                Performance Club / Dhaka
              </p>

              <h2 className="select-none font-['Oswald'] text-[28vw] font-semibold uppercase leading-[0.7] tracking-[-0.075em] sm:text-[25vw] md:text-[22vw] lg:text-[18vw]">
                FORGE
              </h2>
            </div>

            {/* Description */}

            <div className="max-w-xs lg:pb-5">
              <p className="text-sm leading-7 text-white/35">
                A training environment built around strength, discipline,
                performance and people who refuse to stay average.
              </p>

              <button
                onClick={() => scrollTo("#contact")}
                className="group mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7ff38]"
              >
                Start Training

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          NAVIGATION AREA
      ===================================================== */}

      <section className="border-t border-white/10 px-5 py-10 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-12 sm:grid-cols-2 lg:grid-cols-[0.8fr_1.5fr_0.7fr]">

          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">

              <div className="flex h-8 w-8 items-center justify-center bg-[#d7ff38] text-xs font-black text-[#090909]">
                F
              </div>

              <span className="font-['Oswald'] text-xl font-semibold tracking-[0.08em]">
                FORGE
              </span>

            </div>

            <p className="mt-5 max-w-xs text-xs leading-6 text-white/25">
              Train hard.
              <br />
              Move better.
              <br />
              Become harder to break.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
              Explore
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">

              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="group flex w-fit items-center gap-2 text-left text-xs uppercase tracking-[0.12em] text-white/45 transition-colors duration-200 hover:text-white"
                >
                  {link.label}

                  <ArrowUpRight
                    size={11}
                    strokeWidth={1.8}
                    className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </button>
              ))}

            </div>
          </div>

          {/* Contact */}

          <div>
            <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
              Contact
            </p>

            <div className="space-y-3 text-xs leading-5 text-white/45">

              <p>
                Gulshan Performance District
              </p>

              <p>
                Dhaka, Bangladesh
              </p>

              <p>
                +880 1XXX-XXXXXX
              </p>

              <p className="break-all">
                hello@forgefitness.example
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          SOCIAL / COPYRIGHT
      ===================================================== */}

      <section className="border-t border-white/10 px-5 py-7 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

          {/* Social */}

          <div className="flex items-center gap-3">

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/35 transition-all duration-200 hover:border-[#d7ff38] hover:text-[#d7ff38]"
            >
              <FaInstagram size={15} />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/35 transition-all duration-200 hover:border-[#d7ff38] hover:text-[#d7ff38]"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/35 transition-all duration-200 hover:border-[#d7ff38] hover:text-[#d7ff38]"
            >
              <FaYoutube size={16} />
            </a>

          </div>

          {/* Copyright */}

          <div className="flex flex-col gap-2 text-[9px] font-bold uppercase tracking-[0.25em] text-white/20 sm:flex-row sm:items-center sm:gap-8">

            <span>
              © 2026 FORGE
            </span>

            <span>
              All Rights Reserved
            </span>

            <span>
              Built For Performance
            </span>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-white/10 px-5 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">

        {/* Decorative circles */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7ff38]/10 sm:h-[450px] sm:w-[450px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7ff38]/5 sm:h-[260px] sm:w-[260px]" />

        <div className="relative mx-auto max-w-[1600px]">

          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#d7ff38]">
                No shortcuts.
              </p>

              <h3 className="font-['Oswald'] text-5xl uppercase leading-[0.88] tracking-[-0.03em] sm:text-7xl md:text-8xl">
                Earn
                <br />

                <span className="text-white/15">
                  Your Strength.
                </span>
              </h3>

            </div>

            <div className="max-w-xs text-sm leading-7 text-white/30">
              <p>
                Train with intention.
                <br />
                Recover with purpose.
                <br />
                Show up again tomorrow.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL LIME BAR
      ===================================================== */}

      <div className="h-2 w-full bg-[#d7ff38]" />

    </footer>
  );
}