import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

export default function Clinic() {
  return (
    <section
      id="clinic"
      className="relative overflow-hidden bg-[#e9eeec] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
    >
      {/* Architectural grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-0 h-full w-px bg-[#102a43]/[0.05]" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-[#102a43]/[0.05]" />
        <div className="absolute right-[12%] top-0 h-full w-px bg-[#102a43]/[0.05]" />

        <div className="absolute left-0 top-[22%] h-px w-full bg-[#102a43]/[0.05]" />

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-[-120px] h-[430px] w-[430px] rounded-full bg-[#73d8e5]/15 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#1787a6]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1787a6]">
                The clinic
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-5xl text-4xl font-medium leading-[0.95] tracking-[-0.055em] text-[#102a43] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            A calm place for
            <span className="text-[#1787a6]"> better care.</span>
          </motion.h2>
        </div>

        {/* Main architecture */}
        <div className="mt-16 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Clinic visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="group relative min-h-[520px] overflow-hidden rounded-[30px] bg-[#102a43]"
          >
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=90"
              alt="Modern medical clinic interior"
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102a43] via-[#102a43]/20 to-transparent" />

            {/* Coordinates */}
            <div className="absolute left-7 top-7 flex items-center gap-3 rounded-full border border-white/15 bg-[#102a43]/50 px-4 py-2.5 backdrop-blur-md">
              <MapPin size={15} className="text-[#72d9e5]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/80">
                Gulshan, Dhaka
              </span>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#72d9e5]">
                    NEXA Health
                  </p>

                  <h3 className="mt-3 max-w-xl text-3xl font-medium tracking-[-0.04em] text-white md:text-4xl">
                    Gulshan Medical Centre
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                    Road 12, Gulshan 1
                    <br />
                    Dhaka 1212, Bangladesh
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Gulshan+Medical+Centre+Dhaka"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#102a43] transition hover:bg-[#72d9e5]"
                  aria-label="Open location in Google Maps"
                >
                  <Navigation
                    size={20}
                    className="transition-transform duration-300 group-hover:rotate-12"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right information */}
          <div className="grid gap-5">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[28px] border border-[#d4ddda] bg-white p-7 md:p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edf4f3] text-[#1787a6]">
                  <Clock3 size={20} strokeWidth={1.7} />
                </div>

                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a989d]">
                  Opening hours
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-medium tracking-[-0.035em] text-[#102a43]">
                When to visit
              </h3>

              <div className="mt-6 space-y-3">
                <HourRow day="Monday — Thursday" time="9:00 AM — 6:00 PM" />
                <HourRow day="Friday" time="By appointment" />
                <HourRow day="Saturday — Sunday" time="Closed" />
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-[28px] bg-[#102a43] p-7 text-white md:p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.08] text-[#72d9e5]">
                  <Phone size={20} strokeWidth={1.7} />
                </div>

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Contact
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-medium tracking-[-0.035em]">
                Speak with the team.
              </h3>

              <div className="mt-6 space-y-4">
                <a
                  href="tel:+8801000000000"
                  className="block border-b border-white/10 pb-4 text-sm text-white/65 transition hover:text-[#72d9e5]"
                >
                  +880 1XXX-XXXXXX
                </a>

                <a
                  href="mailto:appointments@example.com"
                  className="block text-sm text-white/65 transition hover:text-[#72d9e5]"
                >
                  appointments@example.com
                </a>
              </div>

              <a
                href="#appointment"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white"
              >
                Request an appointment

                <ArrowUpRight
                  size={17}
                  className="text-[#72d9e5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom location strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 flex flex-col gap-4 border-t border-[#102a43]/10 pt-6 text-xs uppercase tracking-[0.17em] text-[#7d8b90] md:flex-row md:items-center md:justify-between"
        >
          <span>Dhaka · Bangladesh</span>

          <span className="hidden h-px flex-1 bg-[#102a43]/10 md:block" />

          <span>Private consultation space</span>

          <span className="hidden h-px flex-1 bg-[#102a43]/10 md:block" />

          <span>By appointment</span>
        </motion.div>

        {/* Demo notice */}
        <p className="mt-8 text-center text-[11px] leading-5 text-[#8a969a]">
          Clinic details shown here are demo content and should be replaced
          with the verified address, opening hours, contact details, and
          approved imagery of the real practice.
        </p>
      </div>
    </section>
  );
}

function HourRow({ day, time }) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-[#e7ecea] pb-3 text-sm last:border-0 last:pb-0">
      <span className="text-[#68777e]">{day}</span>
      <span className="text-right font-medium text-[#102a43]">{time}</span>
    </div>
  );
}