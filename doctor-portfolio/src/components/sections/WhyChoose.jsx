import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Brain,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const trustPoints = [
  {
    number: "01",
    title: "Experience",
    description:
      "More than a decade of clinical experience focused on cardiovascular health and patient care.",
    icon: BadgeCheck,
  },
  {
    number: "02",
    title: "Patient First",
    description:
      "Every consultation starts by listening carefully and understanding the person, not just the symptoms.",
    icon: HeartHandshake,
  },
  {
    number: "03",
    title: "Evidence Based",
    description:
      "Clinical decisions are guided by current medical knowledge, careful assessment, and individual needs.",
    icon: Brain,
  },
  {
    number: "04",
    title: "Continuity of Care",
    description:
      "Clear follow-up and ongoing communication help patients stay informed throughout their care journey.",
    icon: ShieldCheck,
  },
];

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "15K+", label: "Patient Consultations" },
  { value: "4", label: "Core Specialties" },
  { value: "1:1", label: "Personalized Care" },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#f5f4ef] text-[#17211f]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 border-b border-[#17211f]/10 pb-14 lg:grid-cols-[0.32fr_1fr]"
        >
          <div className="flex items-start gap-3">
            <span className="mt-2 h-px w-8 bg-[#52756d]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#52756d]">
              Why Patients Choose Us
            </span>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6.5vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Expertise you can
              <br />
              <span className="font-serif italic font-normal text-[#52756d]">
                feel confident in.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#17211f]/55 md:text-lg md:leading-8">
              Good healthcare is built on clinical expertise, honest
              communication, and a relationship where patients feel heard.
            </p>
          </div>
        </motion.div>

        {/* Trust points */}
        <div className="grid pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:pt-24">

          {/* Large statement */}
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
            <div className="relative overflow-hidden rounded-[2rem] bg-[#17211f] p-8 md:p-10 lg:sticky lg:top-32">

              {/* Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#52756d]/25 blur-[90px]" />

              <div className="relative">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b7d9cf]">
                  A different approach
                </span>

                <h3 className="mt-8 max-w-lg text-3xl font-medium leading-[1.05] tracking-[-0.045em] text-white md:text-5xl">
                  Healthcare should feel
                  <span className="font-serif italic font-normal text-[#b7d9cf]">
                    {" "}human.
                  </span>
                </h3>

                <p className="mt-7 max-w-md text-sm leading-6 text-white/45">
                  From the first conversation to follow-up care, the goal is
                  simple: make every step easier to understand and every
                  decision more informed.
                </p>

                {/* Signature-style mark */}
                <div className="mt-12 border-t border-white/10 pt-7">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-serif text-2xl italic text-white/80">
                        Dr. Ayaan Rahman
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/25">
                        Consultant Cardiologist
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b7d9cf]/20 text-[#b7d9cf]">
                      <HeartHandshake size={18} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* List */}
          <div className="mt-14 lg:mt-0">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group border-t border-[#17211f]/10 py-8 md:py-10"
                >
                  <div className="grid gap-6 md:grid-cols-[55px_1fr_auto] md:items-start">

                    <span className="text-xs font-medium text-[#52756d]">
                      {point.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-4">
                        <h3 className="text-2xl font-medium tracking-[-0.035em] md:text-3xl">
                          {point.title}
                        </h3>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dceae5] text-[#52756d] transition-transform duration-500 group-hover:rotate-6">
                          <Icon size={16} />
                        </span>
                      </div>

                      <p className="mt-4 max-w-xl text-sm leading-6 text-[#17211f]/50">
                        {point.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="hidden text-[#17211f]/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#52756d] md:block"
                    />
                  </div>
                </motion.div>
              );
            })}

            <div className="border-t border-[#17211f]/10" />
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-2 border-y border-[#17211f]/10 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-7 md:px-8 md:py-9 ${
                index !== stats.length - 1
                  ? "border-r border-[#17211f]/10"
                  : ""
              }`}
            >
              <p className="text-3xl font-medium tracking-[-0.05em] md:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#17211f]/35">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm leading-6 text-[#17211f]/45">
            Have questions about your cardiovascular health? Start with a
            conversation.
          </p>

          <a
            href="#appointment"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#17211f] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Book a Consultation

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowUpRight size={14} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}