import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const inputClass =
  "w-full rounded-2xl border border-[#dce3e5] bg-white px-5 py-4 text-[15px] text-[#102a43] outline-none transition placeholder:text-[#91a0a8] focus:border-[#1787a6] focus:ring-4 focus:ring-[#1787a6]/10";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-[#f1f4f3] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
    >
      {/* Background architecture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-0 h-full w-px bg-[#102a43]/[0.05]" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-[#102a43]/[0.05]" />
        <div className="absolute right-[12%] top-0 h-full w-px bg-[#102a43]/[0.05]" />

        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#73d8e5]/20 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-[#b5d9e0]/20 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1787a6]" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1787a6]">
                Appointment
              </span>
            </div>

            <h2 className="max-w-xl text-5xl font-medium tracking-[-0.055em] text-[#102a43] md:text-6xl lg:text-7xl">
              Start with a
              <br />
              <span className="text-[#1787a6]">conversation.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-lg leading-8 text-[#526775] lg:justify-self-end"
          >
            Tell us a little about what you are looking for. Our team will
            review your request and help coordinate the next appropriate step
            in your care.
          </motion.p>
        </div>

        {/* Main booking area */}
        <div className="mt-16 grid overflow-hidden rounded-[32px] border border-[#d8e0e1] bg-white shadow-[0_30px_100px_rgba(16,42,67,0.08)] lg:grid-cols-[0.72fr_1.28fr]">
          {/* Left information panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden bg-[#102a43] p-8 text-white md:p-10 lg:p-12"
          >
            <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute bottom-[-140px] left-[-100px] h-80 w-80 rounded-full border border-white/10" />

            <div className="relative z-10 flex h-full flex-col">
              <div>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                  <CalendarDays size={22} strokeWidth={1.7} />
                </div>

                <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#78d6e4]">
                  NEXA Care
                </p>

                <h3 className="max-w-sm text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                  A simpler way to begin.
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
                  Your first conversation is designed to understand your
                  needs, answer questions, and determine what comes next.
                </p>
              </div>

              <div className="mt-auto pt-14">
                <div className="space-y-5">
                  <InfoItem
                    icon={<Clock3 size={18} />}
                    title="Typical response"
                    text="Within one business day"
                  />

                  <InfoItem
                    icon={<MapPin size={18} />}
                    title="Clinic"
                    text="Gulshan, Dhaka"
                  />

                  <InfoItem
                    icon={<ShieldCheck size={18} />}
                    title="Your information"
                    text="Handled with care"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="p-7 md:p-10 lg:p-12"
          >
            {submitted ? (
              <SuccessState onReset={() => setSubmitted(false)} />
            ) : (
              <>
                <div className="mb-10 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1787a6]">
                      Request a consultation
                    </p>

                    <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em] text-[#102a43] md:text-3xl">
                      Tell us how we can help.
                    </h3>
                  </div>

                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1f5f5] text-[#1787a6] sm:flex">
                    <UserRound size={19} strokeWidth={1.7} />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Full name">
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Phone number">
                      <input
                        required
                        type="tel"
                        placeholder="+880 1XXX-XXXXXX"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Email address">
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Preferred date">
                      <input
                        required
                        type="date"
                        className={inputClass}
                      />
                    </Field>

                    <div className="md:col-span-2">
                      <Field label="What would you like help with?">
                        <select required className={inputClass} defaultValue="">
                          <option value="" disabled>
                            Select an area
                          </option>
                          <option>Cardiology consultation</option>
                          <option>Cardiovascular assessment</option>
                          <option>Heart health & prevention</option>
                          <option>Ongoing cardiovascular care</option>
                          <option>I'm not sure yet</option>
                        </select>
                      </Field>
                    </div>

                    <div className="md:col-span-2">
                      <Field label="Additional information">
                        <textarea
                          rows="4"
                          placeholder="Anything you'd like our team to know..."
                          className={`${inputClass} resize-none`}
                        />
                      </Field>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-5 border-t border-[#e5eaeb] pt-7 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-md text-xs leading-5 text-[#7b8a91]">
                      Please do not include sensitive medical information.
                      This form is not intended for urgent or emergency
                      medical concerns.
                    </p>

                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#1787a6] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(23,135,166,0.2)] transition hover:bg-[#116f89]"
                    >
                      Request consultation
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </motion.button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>

        {/* Bottom reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-7 flex flex-col gap-4 text-xs uppercase tracking-[0.16em] text-[#819097] md:flex-row md:items-center md:justify-between"
        >
          <span>01 — Consultation request</span>

          <span className="hidden h-px flex-1 bg-[#102a43]/10 md:block" />

          <span>02 — Team review</span>

          <span className="hidden h-px flex-1 bg-[#102a43]/10 md:block" />

          <span>03 — Appointment coordination</span>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2.5 block text-sm font-medium text-[#344b5c]">
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoItem({ icon, title, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#78d6e4]">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="mt-0.5 text-xs text-white/50">{text}</p>
      </div>
    </div>
  );
}

function SuccessState({ onReset }) {
  return (
    <div className="flex min-h-[620px] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e7f6f7] text-[#1787a6]"
      >
        <Check size={34} strokeWidth={1.8} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#1787a6]">
          Request received
        </p>

        <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[#102a43] md:text-4xl">
          We’ll be in touch.
        </h3>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#687982]">
          Your consultation request has been recorded for this demo. A real
          implementation can connect this form to email, a CRM, or a booking
          system.
        </p>

        <button
          onClick={onReset}
          className="mt-8 rounded-full border border-[#d8e0e1] px-6 py-3 text-sm font-medium text-[#102a43] transition hover:bg-[#f5f7f6]"
        >
          Submit another request
        </button>
      </motion.div>
    </div>
  );
}