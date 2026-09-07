import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  GraduationCap,
  MapPin,
  Stethoscope,
} from "lucide-react";

const credentials = [
  {
    year: "2012",
    title: "Medical Degree",
    description:
      "Completed medical training with a focus on clinical medicine and patient-centered care.",
    icon: GraduationCap,
  },
  {
    year: "2016",
    title: "Cardiology Training",
    description:
      "Advanced postgraduate training in cardiovascular medicine and diagnostic evaluation.",
    icon: Stethoscope,
  },
  {
    year: "2019",
    title: "Consultant Cardiologist",
    description:
      "Began independent consultant practice focused on comprehensive cardiovascular care.",
    icon: Award,
  },
];

function About() {
  return (
    <section
      id="doctor"
      className="relative overflow-hidden bg-[#f4f3ef] text-[#142027]"
    >
      {/* Background grid */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.045]">
        <div className="absolute left-[10%] top-0 h-full w-px bg-[#142027]" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-[#142027]" />
        <div className="absolute left-[90%] top-0 h-full w-px bg-[#142027]" />

        <div className="absolute left-0 top-[25%] h-px w-full bg-[#142027]" />
        <div className="absolute left-0 top-[75%] h-px w-full bg-[#142027]" />
      </div>

      {/* Ambient glow */}

      <div className="pointer-events-none absolute left-[-10%] top-[30%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        {/* Section label */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-center justify-between"
        >
          <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#1687a7]">
            <span className="h-2 w-2 rounded-full bg-[#1687a7]" />
            THE CLINICIAN / 04
          </div>

          <span className="hidden font-mono text-[10px] text-[#899397] sm:block">
            NEXA / PROFILE
          </span>
        </motion.div>

        {/* Main composition */}

        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* =================================================
              LEFT PORTRAIT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Oversized background text */}

            <div className="pointer-events-none absolute -left-8 top-[12%] z-0 hidden select-none text-[7rem] font-semibold leading-[0.8] tracking-[-0.08em] text-[#142027]/[0.045] xl:block">
              DR.
              <br />
              AYAAN
            </div>

            {/* Portrait frame */}

            <div className="relative z-10 ml-auto max-w-[540px]">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#d8dcda]">
                <motion.img
                  initial={{
                    scale: 1.08,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=90"
                  alt="Dr. Ayaan Rahman"
                  className="h-full w-full object-cover"
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#08141e]/35 via-transparent to-transparent" />

                {/* Image label */}

                <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

                  <span className="text-[9px] font-medium tracking-[0.25em]">
                    CONSULTANT CARDIOLOGIST
                  </span>
                </div>

                {/* Corner marker */}

                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/30 text-white">
                  <ArrowUpRight size={15} />
                </div>
              </div>

              {/* Location */}

              <div className="mt-5 flex items-center justify-between border-t border-[#142027]/10 pt-4">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#69757a]">
                  <MapPin size={12} />
                  Dhaka, Bangladesh
                </div>

                <span className="font-mono text-[10px] text-[#899397]">
                  NEXA / 04
                </span>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT INFORMATION
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
          >
            {/* Eyebrow */}

            <p className="text-[10px] font-semibold tracking-[0.3em] text-[#1687a7]">
              DR. AYAAN RAHMAN
            </p>

            {/* Heading */}

            <h2 className="mt-6 max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Medicine should feel
              <br />
              <span className="text-[#1687a7]">understandable.</span>
            </h2>

            {/* Description */}

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#59666c] sm:text-base">
              Dr. Ayaan Rahman is a consultant cardiologist focused on making
              cardiovascular care clearer, more personal, and easier to
              navigate.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#59666c] sm:text-base">
              His approach combines careful clinical assessment with clear
              communication, helping patients understand what their results
              mean and what their next steps can be.
            </p>

            {/* Stats */}

            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-[#142027]/10">
              <div className="py-6">
                <p className="text-3xl font-medium tracking-[-0.04em]">
                  12+
                </p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#899397]">
                  Years
                </p>
              </div>

              <div className="border-x border-[#142027]/10 px-5 py-6">
                <p className="text-3xl font-medium tracking-[-0.04em]">
                  4
                </p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#899397]">
                  Care areas
                </p>
              </div>

              <div className="py-6 pl-5">
                <p className="text-3xl font-medium tracking-[-0.04em]">
                  01
                </p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#899397]">
                  Approach
                </p>
              </div>
            </div>

            {/* Credentials */}

            <div className="mt-12">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[10px] font-semibold tracking-[0.25em] text-[#899397]">
                  PROFESSIONAL JOURNEY
                </p>

                <span className="font-mono text-[9px] text-[#a1a8aa]">
                  2012 — PRESENT
                </span>
              </div>

              <div className="border-t border-[#142027]/10">
                {credentials.map((item, index) => {
                  const CredentialIcon = item.icon;

                  return (
                    <motion.div
                      key={item.year}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="group grid grid-cols-[60px_32px_1fr] items-start border-b border-[#142027]/10 py-5"
                    >
                      {/* Year */}

                      <span className="font-mono text-[10px] text-[#899397]">
                        {item.year}
                      </span>

                      {/* Icon */}

                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#142027]/10 transition-colors group-hover:border-[#1687a7]/40 group-hover:bg-[#1687a7]/5">
                        <CredentialIcon
                          size={12}
                          strokeWidth={1.5}
                          className="text-[#1687a7]"
                        />
                      </div>

                      {/* Content */}

                      <div className="pl-3">
                        <h3 className="text-sm font-medium text-[#17232b]">
                          {item.title}
                        </h3>

                        <p className="mt-1 max-w-md text-xs leading-6 text-[#69757a]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}

            <motion.a
              href="#appointment"
              whileHover={{
                x: 5,
              }}
              className="group mt-10 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1687a7]"
            >
              Meet the clinician

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1687a7]/30 transition-all duration-300 group-hover:bg-[#1687a7] group-hover:text-white">
                <ArrowUpRight size={15} />
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-24 border-t border-[#142027]/10 pt-8"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-xs leading-6 text-[#899397]">
              Sample clinician profile for demonstration purposes. Replace
              credentials, biography, and professional information with
              verified details before publishing.
            </p>

            <div className="font-mono text-[9px] tracking-[0.2em] text-[#a1a8aa]">
              NEXA HEALTH / CLINICAL PROFILE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;