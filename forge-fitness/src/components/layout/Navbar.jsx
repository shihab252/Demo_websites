import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Training", href: "#training" },
  { label: "Coaches", href: "#coaches" },
  { label: "Membership", href: "#membership" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <div className="flex h-9 w-9 items-center justify-center bg-[#d7ff38] text-[#0a0a0a]">
              <span className="font-black text-lg">F</span>
            </div>

            <div>
              <div className="font-['Oswald'] text-xl font-bold tracking-[0.08em] text-white">
                FORGE
              </div>
              <div className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/40">
                Performance Club
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 transition hover:text-white"
              >
                {link.label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#d7ff38] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#membership"
              className="group flex items-center gap-3 bg-[#d7ff38] px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#0a0a0a] transition hover:bg-white"
            >
              Start Training
              <ArrowUpRight
                size={15}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center border border-white/10 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[78px] z-40 border-b border-white/10 bg-[#0a0a0a] lg:hidden"
          >
            <div className="px-5 py-7 sm:px-8">
              <div className="flex flex-col">
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="border-b border-white/10 py-5 font-['Oswald'] text-3xl uppercase tracking-wide text-white"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <a
                href="#membership"
                onClick={() => setOpen(false)}
                className="mt-6 flex items-center justify-between bg-[#d7ff38] px-5 py-4 text-xs font-black uppercase tracking-[0.15em] text-[#0a0a0a]"
              >
                Start Training
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}