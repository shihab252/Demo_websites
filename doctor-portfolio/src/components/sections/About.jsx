import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  GraduationCap,
  HeartPulse,
  Stethoscope,
} from "lucide-react";

const credentials = [
  {
    year: "2012",
    title: "MBBS",
    subtitle: "Medical Degree",
  },
  {
    year: "2016",
    title: "FCPS",
    subtitle: "Cardiology",
  },
  {
    year: "2019",
    title: "Advanced Training",
    subtitle: "Interventional Cardiology",
  },
];

const approach = [
  "Evidence-based treatment",
  "Clear communication",
  "Personalized care plans",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#17211f] text-[#f5f4ef]"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#52756d]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#b7d9cf]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 border-b border-white/10 pb-16 lg:grid-cols-[0.32fr_1fr]"
        >
          <div className="flex items-start gap-3">
            <span className="mt-2 h-px w-8 bg-[#b7d9cf]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b7d9cf]">
              About the Doctor
            </span>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,6vw,6.4rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Medicine is more than
              <br />
              <span className="font-serif italic font-normal text-[#b7d9cf]">
                treating a condition.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 md:text-lg md:leading-8">
              It is about understanding the person behind the diagnosis,
              listening carefully, and building a treatment plan around the
              life they want to live.
            </p>
          </div>
        </motion.div>

        {/* DOCTOR PROFILE */}
        <div className="grid gap-16 pt-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:pt-24">

          {/* LEFT — Profile mark */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="relative flex aspect-square max-w-[390px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[#202c29]">

              {/* Decorative circles */}
              <div className="absolute h-[72%] w-[72%] rounded-full border border-white/10" />
              <div className="absolute h-[52%] w-[52%] rounded-full border border-[#b7d9cf]/15" />

              <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[#b7d9cf] text-[#17211f] shadow-2xl md:h-40 md:w-40">
                <span className="text-4xl font-medium tracking-[-0.06em] md:text-5xl">
                  AR
                </span>
              </div>

              {/* Decorative plus */}
              <div className="absolute right-[17%] top-[18%] text-[#b7d9cf]/50">
                <span className="text-2xl font-light">+</span>
              </div>

              <div className="absolute bottom-[18%] left-[17%] text-[#b7d9cf]/50">
                <HeartPulse size={20} />
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Consultant
                </span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Cardiology
                </span>
              </div>
            </div>

            {/* Floating experience */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -right-4 rounded-2xl border border-black/10 bg-[#f5f4ef] p-5 text-[#17211f] shadow-2xl sm:-right-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dceae5]">
                  <HeartPulse size={19} className="text-[#52756d]" />
                </div>

                <div>
                  <p className="text-2xl font-medium tracking-tight">
                    12+
                  </p>

                  <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#17211f]/45">
                    Years of Practice
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Large background number */}
            <div className="pointer-events-none absolute -left-5 top-8 hidden text-[7rem] font-medium leading-none tracking-[-0.08em] text-white/[0.04] md:block">
              01
            </div>
          </motion.div>

          {/* RIGHT — Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b7d9cf]">
                Dr. Ayaan Rahman
              </p>

              <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                A thoughtful approach to cardiovascular care.
              </h3>

              <div className="mt-7 space-y-5 text-base leading-7 text-white/55">
                <p>
                  Dr. Ayaan Rahman is a consultant cardiologist focused on
                  helping patients understand their cardiovascular health and
                  make informed decisions about their care.
                </p>

                <p>
                  His approach combines clinical experience with clear,
                  patient-first communication — because good healthcare should
                  never feel confusing or rushed.
                </p>
              </div>

              {/* Philosophy */}
              <div className="mt-10 border-y border-white/10 py-7">
                <div className="mb-5 flex items-center gap-3">
                  <Stethoscope
                    size={17}
                    className="text-[#b7d9cf]"
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Care Philosophy
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {approach.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm leading-5 text-white/75"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b7d9cf]/10 text-[#b7d9cf]">
                        <Check size={12} />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Credentials */}
              <div className="mt-10">

                <div className="mb-6 flex items-center gap-3">
                  <GraduationCap
                    size={17}
                    className="text-[#b7d9cf]"
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Education & Training
                  </span>
                </div>

                <div>
                  {credentials.map((credential, index) => (
                    <motion.div
                      key={credential.title}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="group grid grid-cols-[70px_1fr_auto] items-center border-t border-white/10 py-4"
                    >
                      <span className="text-xs text-white/35">
                        {credential.year}
                      </span>

                      <div>
                        <p className="text-sm font-medium text-white/90">
                          {credential.title}
                        </p>

                        <p className="mt-0.5 text-xs text-white/35">
                          {credential.subtitle}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#b7d9cf]"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="#appointment"
                whileHover={{ y: -2 }}
                className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-[#17211f]"
              >
                Discuss Your Care
                <ArrowUpRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-white/10 pt-10 md:mt-32"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-2xl text-2xl font-medium leading-tight tracking-[-0.03em] text-white/85 md:text-3xl">
              “The best care starts with a conversation.”
            </p>

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Patient-first · Evidence-based · Compassionate
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}