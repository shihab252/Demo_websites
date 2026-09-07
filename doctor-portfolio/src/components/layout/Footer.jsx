import {
  ArrowUpRight,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Specialties", href: "#specialties" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0d1211] px-5 pb-7 pt-16 text-[#f5f4ef] md:px-8 md:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.4fr_0.7fr_0.9fr] md:gap-16">
          {/* Brand */}
          <div>
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex items-center gap-3"
              aria-label="Back to top"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b7d9cf] text-sm font-semibold text-[#17211f] transition-transform duration-300 group-hover:scale-105">
                AR
              </span>

              <div className="text-left">
                <div className="text-sm font-medium">
                  Dr. Ayaan Rahman
                </div>

                <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Consultant Cardiologist
                </div>
              </div>
            </button>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
              Compassionate, evidence-based cardiovascular care with a focus
              on prevention, clarity, and long-term wellbeing.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-2">
              <a
                href="#"
                onClick={(event) => event.preventDefault()}
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                onClick={(event) => event.preventDefault()}
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b7d9cf]">
              Explore
            </p>

            <div className="mt-6 flex flex-col items-start gap-4">
              {footerLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Clinic Contact */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b7d9cf]">
              Clinic
            </p>

            <div className="mt-6 space-y-5">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-white/35"
                />

                <p className="text-sm leading-6 text-white/50">
                  Gulshan Medical Centre
                  <br />
                  Road 12, Gulshan 1
                  <br />
                  Dhaka 1212, Bangladesh
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+8801000000000"
                className="flex items-center gap-3 text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                <Phone size={15} />
                +880 1XXX-XXXXXX
              </a>

              {/* Email */}
              <a
                href="mailto:appointments@example.com"
                className="flex items-center gap-3 text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                <Mail size={15} />
                appointments@example.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 py-7 text-[11px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          {/* Healthcare statement */}
          <div className="flex items-center gap-2">
            <HeartPulse size={13} />
            <span>Focused on better heart health.</span>
          </div>

          {/* Copyright / Legal */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>© 2026 Dr. Ayaan Rahman</span>

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              className="transition-colors duration-300 hover:text-white/60"
            >
              Privacy
            </a>

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              className="transition-colors duration-300 hover:text-white/60"
            >
              Terms
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-2 transition-colors duration-300 hover:text-white/60"
          >
            Back to top

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}