import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

const faqs = [
  {
    question: "How do I request an appointment?",
    answer:
      "You can submit the appointment request form with your preferred date and a brief reason for your visit. The clinic team will review the request and contact you to confirm the appropriate appointment time.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "If applicable, bring previous medical reports, relevant test results, a list of current medications, and any questions you would like to discuss during the consultation.",
  },
  {
    question: "How long does a consultation take?",
    answer:
      "Consultation time can vary depending on your concerns and clinical needs. The goal is to allow enough time to understand your situation and discuss the appropriate next steps.",
  },
  {
    question: "Do I need a referral before booking?",
    answer:
      "Referral requirements can vary depending on the healthcare provider, insurance arrangement, or reason for consultation. Contact the clinic if you are unsure whether you need one.",
  },
  {
    question: "Can I book a follow-up consultation?",
    answer:
      "Yes. Follow-up appointments can be requested when ongoing monitoring or further discussion is appropriate.",
  },
  {
    question: "Can I use the appointment form for an emergency?",
    answer:
      "No. The appointment form is intended for routine appointment requests only. If you are experiencing a medical emergency, contact your local emergency service or seek immediate medical attention.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#17211f] text-[#f5f4ef]"
    >
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-[#52756d]/15 blur-[120px]" />

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
          className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[0.32fr_1fr]"
        >
          <div className="flex items-start gap-3">
            <span className="mt-2 h-px w-8 bg-[#b7d9cf]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b7d9cf]">
              Frequently Asked
            </span>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6.5vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Questions worth
              <br />
              <span className="font-serif italic font-normal text-[#b7d9cf]">
                asking.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 md:text-lg md:leading-8">
              A few helpful answers before your visit. If you cannot find what
              you are looking for, contact the clinic directly.
            </p>
          </div>
        </motion.div>

        {/* FAQ content */}
        <div className="grid gap-14 pt-16 lg:grid-cols-[0.42fr_1.58fr] lg:gap-24 lg:pt-24">

          {/* Side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b7d9cf]">
                Need more help?
              </p>

              <h3 className="mt-5 max-w-sm text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">
                We're happy to help you find the right next step.
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
                For appointment questions or general clinic information,
                reach out directly.
              </p>

              <a
                href="#appointment"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-white"
              >
                Contact the clinic

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b7d9cf] text-[#17211f] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <div className="mt-12 hidden border-t border-white/10 pt-5 lg:block">
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
                  Information for demonstration purposes
                </p>
              </div>
            </div>
          </motion.div>

          {/* Questions */}
          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="border-t border-white/10"
                >
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-5 py-6 text-left md:py-7"
                  >
                    <span
                      className={`text-[10px] font-medium transition-colors duration-300 ${
                        isOpen
                          ? "text-[#b7d9cf]"
                          : "text-white/25"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`flex-1 text-lg font-medium tracking-[-0.025em] transition-colors duration-300 md:text-2xl ${
                        isOpen
                          ? "text-white"
                          : "text-white/55 group-hover:text-white/80"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isOpen
                          ? "rotate-45 border-[#b7d9cf] bg-[#b7d9cf] text-[#17211f]"
                          : "border-white/10 text-white/30"
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-9 md:pb-8 md:pl-14">
                          <p className="max-w-2xl text-sm leading-7 text-white/45 md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            <div className="border-t border-white/10" />
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-t border-white/10 pt-6"
        >
          <p className="max-w-3xl text-[10px] leading-5 text-white/25">
            This website provides general informational content and is not a
            substitute for professional medical advice, diagnosis, or
            treatment. Information should be reviewed and customized by the
            healthcare professional before publication.
          </p>
        </motion.div>
      </div>
    </section>
  );
}