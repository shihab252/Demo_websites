import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  CircleHelp,
  MessageCircle,
} from "lucide-react";

const questions = [
  {
    number: "01",
    question: "What happens during the first consultation?",
    answer:
      "The first consultation is focused on understanding your concerns, reviewing relevant information, discussing your cardiovascular health, and deciding what the appropriate next steps may be.",
  },
  {
    number: "02",
    question: "Do I need a referral before booking?",
    answer:
      "A referral may not always be required, depending on the type of appointment and applicable clinic policies. The care team can clarify the requirements when coordinating your consultation.",
  },
  {
    number: "03",
    question: "What should I bring to my appointment?",
    answer:
      "Bring any relevant previous medical reports, medication information, test results, imaging reports, and a list of questions you would like to discuss. Only bring information that is relevant to your visit.",
  },
  {
    number: "04",
    question: "Can I use NEXA AI for medical advice?",
    answer:
      "NEXA AI is designed to provide general information about the clinic, services, appointments, and healthcare topics. It is not a doctor and should not be used for diagnosis, treatment decisions, or emergency medical advice.",
  },
  {
    number: "05",
    question: "How do I request an appointment?",
    answer:
      "You can submit a consultation request through the appointment form on this website. The clinic team can then review your request and coordinate an appropriate appointment time.",
  },
  {
    number: "06",
    question: "What if I have an urgent medical concern?",
    answer:
      "This website and NEXA AI are not intended for emergencies. If you are experiencing a potentially serious or life-threatening medical problem, seek immediate local emergency medical assistance rather than waiting for an online response.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  const currentQuestion = questions[active];

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f5f7f6] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
    >
      {/* Background structure */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-0 h-full w-px bg-[#102a43]/[0.045]" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-[#102a43]/[0.045]" />
        <div className="absolute right-[12%] top-0 h-full w-px bg-[#102a43]/[0.045]" />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-40 top-24 h-[480px] w-[480px] rounded-full border border-[#1787a6]/[0.06]"
        />

        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#9edce3]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* Header */}
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
                Questions
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl text-4xl font-medium leading-[0.96] tracking-[-0.055em] text-[#102a43] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Clear answers before
            <span className="text-[#1787a6]"> you begin.</span>
          </motion.h2>
        </div>

        {/* FAQ interface */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Question list */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-[28px] border border-[#dce4e3] bg-white p-3 shadow-[0_25px_80px_rgba(16,42,67,0.05)]"
          >
            {questions.map((item, index) => {
              const isActive = active === index;

              return (
                <button
                  key={item.number}
                  onClick={() => setActive(index)}
                  className={`group relative flex w-full items-center gap-5 rounded-[20px] px-5 py-5 text-left transition-all duration-300 md:px-6 ${
                    isActive
                      ? "bg-[#102a43] text-white"
                      : "text-[#102a43] hover:bg-[#f3f6f5]"
                  }`}
                >
                  <span
                    className={`shrink-0 text-xs font-semibold tracking-[0.15em] transition ${
                      isActive
                        ? "text-[#72d9e5]"
                        : "text-[#1787a6]"
                    }`}
                  >
                    {item.number}
                  </span>

                  <span className="flex-1 text-sm font-medium leading-6 md:text-[15px]">
                    {item.question}
                  </span>

                  <motion.span
                    animate={{
                      rotate: isActive ? -45 : 0,
                    }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${
                      isActive
                        ? "border-white/10 bg-white/10 text-[#72d9e5]"
                        : "border-[#dce4e3] text-[#7b8c94]"
                    }`}
                  >
                    <ArrowUpRight size={15} />
                  </motion.span>
                </button>
              );
            })}
          </motion.div>

          {/* Answer panel */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#102a43] p-8 text-white md:p-10 lg:p-12"
          >
            {/* Decorative circles */}
            <div className="pointer-events-none absolute right-[-130px] top-[-130px] h-[380px] w-[380px] rounded-full border border-white/[0.06]" />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute right-[-80px] top-[-80px] h-[280px] w-[280px] rounded-full border border-[#72d9e5]/10"
            />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#72d9e5]">
                  <CircleHelp size={23} strokeWidth={1.6} />
                </div>

                <span className="text-7xl font-medium tracking-[-0.08em] text-white/[0.06]">
                  {currentQuestion.number}
                </span>
              </div>

              <div className="mt-16">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#72d9e5]">
                  Answer
                </span>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion.number}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="mt-5 max-w-2xl text-2xl font-medium leading-tight tracking-[-0.035em] md:text-3xl">
                      {currentQuestion.question}
                    </h3>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
                      {currentQuestion.answer}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-auto pt-12">
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <MessageCircle
                      size={17}
                      className="text-[#72d9e5]"
                    />

                    <span className="text-xs uppercase tracking-[0.16em] text-white/35">
                      Need another answer?
                    </span>
                  </div>

                  <a
                    href="#appointment"
                    className="group flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#72d9e5]"
                  >
                    Talk to the team
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile-style secondary accordion */}
        <div className="mt-6 lg:hidden">
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#829097]">
            Tap a question above to explore
          </p>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-4 border-t border-[#102a43]/10 pt-6 text-xs leading-5 text-[#7d8c92] md:flex-row md:items-center md:justify-between"
        >
          <span>Information shown is for general educational purposes.</span>

          <span>
            NEXA AI can also help answer general questions about the clinic.
          </span>
        </motion.div>
      </div>
    </section>
  );
}