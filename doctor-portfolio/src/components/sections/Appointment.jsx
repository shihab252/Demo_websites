import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const appointmentInfo = [
  {
    icon: CalendarDays,
    label: "Appointments",
    value: "By prior request",
  },
  {
    icon: Clock3,
    label: "Clinic Hours",
    value: "Mon — Thu · 9AM — 6PM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gulshan, Dhaka",
  },
];

export default function Appointment() {
  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-[#17211f] text-[#f5f4ef]"
    >
      <div className="pointer-events-none absolute -right-40 top-[-120px] h-[500px] w-[500px] rounded-full bg-[#52756d]/20 blur-[120px]" />

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
              Appointment
            </span>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6.5vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Let's start with a
              <br />
              <span className="font-serif italic font-normal text-[#b7d9cf]">
                conversation.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 md:text-lg md:leading-8">
              Tell us a little about what you'd like to discuss. Our team will
              review your request and help arrange an appropriate consultation.
            </p>
          </div>
        </motion.div>

        {/* Main */}
        <div className="grid gap-14 pt-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:pt-24">
          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b7d9cf]">
              Before your visit
            </p>

            <h3 className="mt-5 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">
              A simple first step toward better understanding your heart health.
            </h3>

            <p className="mt-6 max-w-md text-sm leading-6 text-white/45">
              Share your preferred appointment details and a brief reason for
              your visit. This form is for appointment requests only and is not
              intended for urgent medical concerns.
            </p>

            <div className="mt-10 border-y border-white/10">
              {appointmentInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 border-b border-white/10 py-5 last:border-b-0"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b7d9cf]/10 text-[#b7d9cf]">
                      <Icon size={16} strokeWidth={1.6} />
                    </div>

                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                        {item.label}
                      </p>

                      <p className="mt-1 text-sm text-white/70">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/45">
              <Phone size={15} className="text-[#b7d9cf]" />
              <span>+880 1XXX-XXXXXX</span>
            </div>

            <div className="mt-3 flex items-center gap-3 text-sm text-white/45">
              <Mail size={15} className="text-[#b7d9cf]" />
              <span>appointments@example.com</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="rounded-[2rem] border border-white/10 bg-[#202c29] p-6 md:p-8"
          >
            <form
              onSubmit={(event) => event.preventDefault()}
              className="space-y-7"
            >
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Full name"
                    className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#b7d9cf]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone number"
                    className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#b7d9cf]"
                  />
                </div>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#b7d9cf]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35"
                  >
                    Preferred date
                  </label>

                  <input
                    id="date"
                    type="date"
                    className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-sm text-white outline-none transition-colors [color-scheme:dark] focus:border-[#b7d9cf]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35"
                >
                  Reason for visit
                </label>

                <select
                  id="reason"
                  defaultValue=""
                  className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-sm text-white/70 outline-none transition-colors [color-scheme:dark] focus:border-[#b7d9cf]"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="consultation">General consultation</option>
                  <option value="heart-health">Heart health assessment</option>
                  <option value="blood-pressure">Blood pressure</option>
                  <option value="follow-up">Follow-up appointment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35"
                >
                  Additional information
                </label>

                <textarea
                  id="message"
                  rows="4"
                  placeholder="Briefly tell us what you'd like to discuss..."
                  className="mt-3 w-full resize-none border-b border-white/15 bg-transparent pb-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#b7d9cf]"
                />
              </div>

              <div className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-[10px] leading-5 text-white/25">
                  Please do not include sensitive medical information in this
                  form. For urgent concerns, contact your local emergency
                  service.
                </p>

                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#b7d9cf] px-6 py-3.5 text-sm font-medium text-[#17211f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Request Appointment

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#17211f]/10 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowUpRight size={14} />
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 border-t border-white/10 pt-6"
        >
          <div className="flex flex-col justify-between gap-3 text-[9px] uppercase tracking-[0.16em] text-white/20 sm:flex-row">
            <span>Appointment requests are subject to confirmation</span>
            <span>Not for emergency medical care</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}