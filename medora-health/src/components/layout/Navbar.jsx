import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  {
    label: "Care",
    href: "#care",
  },
  {
    label: "Specialists",
    href: "#doctor",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "NEXA Assist",
    href: "#assistant",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (href) => {
    setOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-6">
        <nav className="mx-auto flex max-w-[1380px] items-center justify-between border border-[#102a43]/10 bg-white/90 px-4 py-3 shadow-[0_10px_40px_rgba(16,42,67,0.06)] backdrop-blur-2xl md:px-5">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center bg-[#102a43] text-[11px] font-bold tracking-tight text-white">
              NX
            </span>

            <div className="text-left">
              <div className="nexa-heading text-[14px] font-extrabold tracking-[-0.04em] text-[#102a43]">
                NEXA
              </div>

              <div className="nexa-mono hidden text-[8px] uppercase tracking-[0.12em] text-[#102a43]/40 sm:block">
                HEALTH SYSTEM
              </div>
            </div>
          </button>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="group flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold text-[#102a43]/50 transition-colors hover:text-[#102a43]"
              >
                {item.label}

                {item.label === "Care" && (
                  <ChevronDown
                    size={12}
                    className="opacity-40 transition-transform group-hover:translate-y-0.5"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="mr-2 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#26b67a] opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-[#26b67a]" />
              </span>

              <span className="nexa-mono text-[9px] uppercase tracking-[0.08em] text-[#102a43]/45">
                System online
              </span>
            </div>

            <button
              onClick={() => scrollTo("#appointment")}
              className="group flex items-center gap-3 bg-[#1677ff] px-4 py-2.5 text-[12px] font-bold text-white transition-all duration-300 hover:bg-[#0868ec] hover:shadow-[0_8px_25px_rgba(22,119,255,0.25)]"
            >
              Book a Visit

              <span className="flex h-5 w-5 items-center justify-center bg-white/15 transition-transform group-hover:translate-x-0.5">
                <ArrowUpRight size={12} />
              </span>
            </button>
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center bg-[#102a43] text-white md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            className="fixed inset-x-4 top-[76px] z-40 border border-[#102a43]/10 bg-white p-4 shadow-2xl md:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="border-b border-[#102a43]/8 px-3 py-4 text-left text-sm font-semibold text-[#102a43]/65 last:border-0"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => scrollTo("#appointment")}
                className="mt-4 flex items-center justify-center gap-2 bg-[#1677ff] px-5 py-3.5 text-sm font-bold text-white"
              >
                Book a Visit
                <ArrowUpRight size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}