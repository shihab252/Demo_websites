import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Clock3,
  MapPin,
} from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f4ef]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-[#b7d9cf]/35 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[350px] w-[350px] rounded-full bg-[#d7e4dd]/40 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-36">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#52756d]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#52756d]">
                Consultant Cardiologist
              </span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-3xl text-[clamp(3.6rem,8vw,7.6rem)] font-medium leading-[0.88] tracking-[-0.065em] text-[#17211f]">
              Care that
              <br />
              <span className="font-serif italic font-normal text-[#52756d]">
                puts you first.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-[#17211f]/60 md:text-lg md:leading-8">
              Compassionate, evidence-based cardiovascular care focused on
              understanding you, your health, and the life you want to live.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo("#appointment")}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#17211f] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Request an Appointment
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight size={14} />
                </span>
              </button>

              <button
                onClick={() => scrollTo("#specialties")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#17211f]/15 px-6 py-3.5 text-sm font-medium text-[#17211f] transition-all duration-300 hover:bg-[#17211f] hover:text-white"
              >
                Explore Specialties
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-[#17211f]/10 py-5">
              <div className="border-r border-[#17211f]/10 pr-4">
                <div className="text-2xl font-medium tracking-tight md:text-3xl">
                  12+
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#17211f]/45">
                  Years Experience
                </div>
              </div>

              <div className="border-r border-[#17211f]/10 px-4">
                <div className="text-2xl font-medium tracking-tight md:text-3xl">
                  15K+
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#17211f]/45">
                  Consultations
                </div>
              </div>

              <div className="pl-4">
                <div className="text-2xl font-medium tracking-tight md:text-3xl">
                  24/7
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#17211f]/45">
                  Care Support
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
          >
            {/* Image frame */}
            <div className="relative aspect-[0.82] overflow-hidden rounded-[2rem] bg-[#dfe5df]">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85"
                alt="Doctor portrait"
                className="h-full w-full object-cover object-center grayscale-[15%]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101917]/50 via-transparent to-transparent" />

              {/* Floating label */}
              <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-4 py-2 backdrop-blur-md">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                  Cardiology · Dhaka
                </span>
              </div>

              {/* Bottom information */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-2xl border border-white/20 bg-[#17211f]/75 p-5 backdrop-blur-xl">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                        Dr. Ayaan Rahman
                      </p>

                      <p className="mt-1 text-xl font-medium tracking-tight text-white">
                        Consultant Cardiologist
                      </p>
                    </div>

                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b7d9cf] text-[#17211f] sm:flex">
                      <Award size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating detail card */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -left-4 hidden rounded-2xl border border-[#17211f]/10 bg-white p-4 shadow-xl sm:block md:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7efeb]">
                  <Clock3 size={17} className="text-[#52756d]" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#17211f]/40">
                    Clinic Hours
                  </p>

                  <p className="mt-0.5 text-sm font-medium">
                    Mon — Thu · 9AM — 6PM
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Location badge */}
            <div className="absolute -right-3 top-1/3 hidden items-center gap-2 rounded-full border border-[#17211f]/10 bg-white px-4 py-2.5 shadow-lg md:flex">
              <MapPin size={14} className="text-[#52756d]" />
              <span className="text-xs font-medium">Gulshan, Dhaka</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#17211f]/40 md:flex"
      >
        Scroll to explore
        <ArrowDown size={14} />
      </motion.button>
    </section>
  );
}