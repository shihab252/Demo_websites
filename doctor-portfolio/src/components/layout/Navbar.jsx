import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Specialties", href: "#specialties" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-[#f5f4ef]/85 px-5 py-3 backdrop-blur-xl md:px-6">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#17211f] text-sm font-semibold text-[#f5f4ef]">
              AR
            </span>

            <span className="hidden text-sm font-medium tracking-tight sm:block">
              Dr. Ayaan Rahman
            </span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-[#17211f]/65 transition-colors hover:text-[#17211f]"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollToSection("#appointment")}
            className="hidden items-center gap-2 rounded-full bg-[#17211f] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] md:flex"
          >
            Book Appointment
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#17211f] text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed inset-x-4 top-[78px] z-40 rounded-3xl border border-black/10 bg-[#f5f4ef] p-5 shadow-xl md:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="border-b border-black/10 py-4 text-left text-base"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("#appointment")}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#17211f] px-5 py-3.5 text-sm font-medium text-white"
              >
                Book an Appointment
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}