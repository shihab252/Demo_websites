import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Story", id: "story" },
  { label: "Menu", id: "menu" },
  { label: "Experience", id: "experience" },
  { label: "Gallery", id: "gallery" },
  { label: "Visit", id: "visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let current = "";

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top <= 140) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const scrollToTop = () => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN NAV
      ====================================================== */}

      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed left-0 right-0 top-0 z-[9000] transition-all duration-500 ${
          scrolled
            ? "px-3 pt-3 sm:px-5 sm:pt-4"
            : "px-4 pt-5 sm:px-7 sm:pt-7"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between transition-all duration-500 ${
            scrolled
              ? "border border-white/10 bg-[#0b0b0a]/85 px-4 py-3 backdrop-blur-xl sm:px-5"
              : "px-1"
          }`}
        >
          {/* LOGO */}

          <button
            type="button"
            onClick={scrollToTop}
            className="group relative flex items-center"
            aria-label="Back to top"
          >
            <span className="font-display text-[28px] leading-none tracking-[-0.04em] sm:text-[31px]">
              SŌMA
            </span>

            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#b98b5b] transition-all duration-500 group-hover:w-full" />
          </button>

          {/* DESKTOP LINKS */}

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className="group relative py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-white"
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#b98b5b] transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* RIGHT */}

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollTo("reserve")}
              className="group hidden items-center gap-3 border border-[#b98b5b]/50 px-5 py-3 text-[8px] font-semibold uppercase tracking-[0.22em] transition-all duration-400 hover:bg-[#b98b5b] hover:text-[#0b0b0a] sm:flex"
            >
              Reserve

              <ArrowUpRight
                size={13}
                strokeWidth={1.2}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            {/* MOBILE BUTTON */}

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center border border-white/15 bg-[#0b0b0a]/60 text-white backdrop-blur-md lg:hidden"
            >
              <Menu
                size={19}
                strokeWidth={1.2}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[#0b0b0a]"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex h-full flex-col"
            >
              {/* HEADER */}

              <div className="flex items-center justify-between px-5 py-6 sm:px-8">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="font-display text-[30px]"
                >
                  SŌMA
                </button>

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center border border-white/15"
                >
                  <X
                    size={19}
                    strokeWidth={1.2}
                  />
                </button>
              </div>

              {/* LINKS */}

              <div className="flex flex-1 flex-col justify-center px-5 sm:px-10">
                <div className="mb-10">
                  <span className="text-[8px] uppercase tracking-[0.28em] text-white/25">
                    Navigation
                  </span>
                </div>

                <nav className="flex flex-col">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      type="button"
                      onClick={() => scrollTo(item.id)}
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.08 + index * 0.06,
                        duration: 0.5,
                      }}
                      className="group flex items-center justify-between border-b border-white/10 py-5 text-left"
                    >
                      <span className="font-display text-[42px] leading-none sm:text-[55px]">
                        {item.label}
                      </span>

                      <ArrowUpRight
                        size={20}
                        strokeWidth={1}
                        className="text-[#b98b5b] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </motion.button>
                  ))}
                </nav>

                <motion.button
                  type="button"
                  onClick={() => scrollTo("reserve")}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.45,
                    duration: 0.6,
                  }}
                  className="mt-10 flex w-full items-center justify-between bg-[#b98b5b] px-5 py-5 text-[#0b0b0a]"
                >
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
                    Reserve a table
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.2}
                  />
                </motion.button>
              </div>

              {/* FOOTER */}

              <div className="flex items-center justify-between border-t border-white/10 px-5 py-5 sm:px-10">
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Modern Japanese Dining
                </span>

                <span className="font-display text-[20px] italic text-[#b98b5b]">
                  食
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}