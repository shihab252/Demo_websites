import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  ClipboardCheck,
  HeartPulse,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Cardiology Consultation",
    short: "A thorough conversation about your heart health.",
    description:
      "A comprehensive consultation to understand symptoms, medical history, cardiovascular risk factors, and the next appropriate steps.",
    icon: Stethoscope,
    details: ["Initial assessment", "Medical history review", "Care recommendations"],
  },
  {
    number: "02",
    title: "Heart Health Assessment",
    short: "A clearer picture of your cardiovascular health.",
    description:
      "A structured assessment focused on identifying cardiovascular risk factors and creating a practical plan for protecting your long-term heart health.",
    icon: HeartPulse,
    details: ["Risk evaluation", "Lifestyle review", "Follow-up planning"],
  },
  {
    number: "03",
    title: "Blood Pressure Management",
    short: "Practical support for healthier blood pressure.",
    description:
      "Ongoing guidance for understanding and managing blood pressure through appropriate clinical care, monitoring, and sustainable lifestyle changes.",
    icon: Activity,
    details: ["BP review", "Monitoring guidance", "Lifestyle support"],
  },
  {
    number: "04",
    title: "Follow-up Care",
    short: "Continuity when your care needs more time.",
    description:
      "Follow-up consultations to review progress, discuss changes, answer questions, and adjust the care plan when clinically appropriate.",
    icon: ClipboardCheck,
    details: ["Progress review", "Treatment discussion", "Ongoing guidance"],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#17211f] text-[#f5f4ef]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-48 top-1/3 h-[550px] w-[550px] rounded-full bg-[#52756d]/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[0.32fr_1fr]"
        >
          <div className="flex items-start gap-3">
            <span className="mt-2 h-px w-8 bg-[#b7d9cf]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b7d9cf]">
              Clinical Services
            </span>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6.5vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Care designed around
              <br />
              <span className="font-serif italic font-normal text-[#b7d9cf]">
                your needs.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 md:text-lg md:leading-8">
              From your first consultation to ongoing follow-up, every step
              is designed to make cardiovascular care clearer and more
              personal.
            </p>
          </div>
        </motion.div>

        {/* Services */}
        <div className="grid gap-14 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:pt-24">

          {/* Service list */}
          <div>
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = active === index;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  onMouseEnter={() => setActive(index)}
                  className="border-t border-white/10"
                >
                  <button
                    onClick={() => setActive(index)}
                    className="group flex w-full items-center gap-4 py-7 text-left md:py-9"
                  >
                    <span
                      className={`w-10 shrink-0 text-xs transition-colors duration-300 md:w-14 ${
                        isActive
                          ? "text-[#b7d9cf]"
                          : "text-white/25"
                      }`}
                    >
                      {service.number}
                    </span>

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? "border-[#b7d9cf]/30 bg-[#b7d9cf] text-[#17211f]"
                          : "border-white/10 text-white/30"
                      }`}
                    >
                      <Icon size={17} strokeWidth={1.7} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-xl font-medium tracking-[-0.03em] transition-all duration-500 md:text-3xl ${
                          isActive
                            ? "translate-x-1 text-white"
                            : "text-white/45"
                        }`}
                      >
                        {service.title}
                      </span>

                      <span
                        className={`mt-1 block text-xs transition-all duration-300 md:text-sm ${
                          isActive
                            ? "text-white/45"
                            : "text-white/20"
                        }`}
                      >
                        {service.short}
                      </span>
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                        isActive
                          ? "bg-[#b7d9cf] text-[#17211f]"
                          : "border border-white/10 text-white/25"
                      }`}
                    >
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </button>

                  {/* Mobile expanded content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="pb-7 pl-14 md:pl-[5.5rem]">
                          <p className="max-w-xl text-sm leading-6 text-white/50">
                            {service.description}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {service.details.map((detail) => (
                              <span
                                key={detail}
                                className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-white/35"
                              >
                                {detail}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            <div className="border-t border-white/10" />
          </div>

          {/* Desktop detail panel */}
          <div className="hidden lg:block">
            <div className="sticky top-32">

              <div className="relative min-h-[510px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#202c29] p-8">

                {/* Decorative number */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="pointer-events-none absolute -right-4 -top-10 text-[12rem] font-medium leading-none tracking-[-0.1em] text-white/[0.025]"
                  >
                    {services[active].number}
                  </motion.div>
                </AnimatePresence>

                {/* Glow */}
                <motion.div
                  animate={{
                    x: active * 35,
                    y: active * -20,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="pointer-events-none absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-[#52756d]/20 blur-[90px]"
                />

                {/* Icon */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{
                      opacity: 0,
                      scale: 0.75,
                      rotate: -10,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.1,
                      rotate: 8,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#b7d9cf] text-[#17211f]"
                  >
                    {(() => {
                      const Icon = services[active].icon;
                      return <Icon size={26} strokeWidth={1.5} />;
                    })()}
                  </motion.div>
                </AnimatePresence>

                {/* Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.4 }}
                    className="relative mt-20"
                  >
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#b7d9cf]">
                      Service {services[active].number}
                    </p>

                    <h3 className="mt-3 max-w-lg text-3xl font-medium leading-tight tracking-[-0.045em] text-white">
                      {services[active].title}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-6 text-white/50">
                      {services[active].description}
                    </p>

                    <div className="mt-7 space-y-3">
                      {services[active].details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-center gap-3 text-sm text-white/65"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#b7d9cf]" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom */}
                <div className="absolute bottom-7 left-8 right-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                    Patient-centered care
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                    Dhaka
                  </span>
                </div>
              </div>

              <p className="mt-5 px-1 text-[9px] uppercase tracking-[0.18em] text-white/25">
                Hover over a service to explore
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-white/10 pt-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-medium tracking-[-0.03em] text-white md:text-3xl">
                Not sure where to start?
              </p>

              <p className="mt-2 text-sm text-white/40">
                Begin with a consultation and let's understand your needs.
              </p>
            </div>

            <a
              href="#appointment"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#b7d9cf] px-6 py-3.5 text-sm font-medium text-[#17211f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Request an Appointment

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#17211f]/10 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}