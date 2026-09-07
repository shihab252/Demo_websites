import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The consultation felt completely different from what I had experienced before. Everything was explained clearly, and I finally understood what I needed to focus on.",
    name: "Sample Patient",
    detail: "Cardiology Consultation",
  },
  {
    quote:
      "I appreciated how carefully my concerns were heard. The discussion was calm, detailed, and never felt rushed.",
    name: "Sample Patient",
    detail: "Heart Health Assessment",
  },
  {
    quote:
      "The follow-up process made it much easier to stay consistent with my health goals. I always knew what the next step was.",
    name: "Sample Patient",
    detail: "Follow-up Care",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) => (current + 1) % testimonials.length);
  };

  const previous = () => {
    setActive(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#f5f4ef] text-[#17211f]"
    >
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
              Patient Experience
            </span>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6.5vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Care that leaves
              <br />
              <span className="font-serif italic font-normal text-[#52756d]">
                an impression.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#17211f]/50 md:text-lg md:leading-8">
              A patient-centered approach means taking time to listen,
              explain, and make every consultation feel purposeful.
            </p>
          </div>
        </motion.div>

        {/* Testimonial */}
        <div className="grid gap-12 pt-16 lg:grid-cols-[0.3fr_1.7fr] lg:gap-20 lg:pt-24">

          {/* Index */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-start justify-between lg:block"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#52756d]">
                Selected feedback
              </p>

              <p className="mt-5 text-5xl font-medium tracking-[-0.07em] md:text-6xl">
                0{active + 1}
              </p>

              <p className="mt-1 text-xs text-[#17211f]/30">
                / 0{testimonials.length}
              </p>
            </div>

            {/* Controls */}
            <div className="mt-0 flex gap-2 lg:mt-14">
              <button
                onClick={previous}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#17211f]/10 transition-all duration-300 hover:bg-[#17211f] hover:text-white"
              >
                <ArrowLeft size={16} />
              </button>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#17211f]/10 transition-all duration-300 hover:bg-[#17211f] hover:text-white"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Quote area */}
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#17211f] p-7 md:min-h-[430px] md:p-12 lg:p-14">

            {/* Background quote mark */}
            <Quote
              size={180}
              strokeWidth={0.6}
              className="pointer-events-none absolute -right-5 -top-5 text-white/[0.025]"
            />

            {/* Glow */}
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#52756d]/20 blur-[90px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex h-full min-h-[300px] flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b7d9cf]">
                    Patient feedback example
                  </span>

                  <blockquote className="mt-8 max-w-4xl text-2xl font-medium leading-[1.2] tracking-[-0.04em] text-white md:text-4xl lg:text-[2.8rem]">
                    “{testimonial.quote}”
                  </blockquote>
                </div>

                <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-end">
                  <div>
                    <p className="text-sm font-medium text-white/85">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/30">
                      {testimonial.detail}
                    </p>
                  </div>

                  <div className="text-[9px] uppercase tracking-[0.18em] text-[#b7d9cf]/60">
                    Demo content
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 flex items-start gap-3"
        >
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#52756d]" />

          <p className="max-w-2xl text-[10px] leading-5 text-[#17211f]/35">
            Sample testimonials shown for demonstration purposes. Replace
            with verified patient feedback provided by the healthcare
            professional before publishing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}