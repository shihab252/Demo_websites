import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

const hours = [
  { day: "Monday", time: "9:00 AM — 6:00 PM" },
  { day: "Tuesday", time: "9:00 AM — 6:00 PM" },
  { day: "Wednesday", time: "9:00 AM — 6:00 PM" },
  { day: "Thursday", time: "9:00 AM — 6:00 PM" },
  { day: "Friday", time: "By appointment" },
];

export default function Clinic() {
  return (
    <section
      id="contact"
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
              Visit the Clinic
            </span>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6.5vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Find us in the
              <br />
              <span className="font-serif italic font-normal text-[#52756d]">
                heart of Dhaka.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#17211f]/50 md:text-lg md:leading-8">
              Conveniently located in Gulshan, our clinic provides a calm and
              professional environment for consultations and follow-up care.
            </p>
          </div>
        </motion.div>

        {/* Main */}
        <div className="grid gap-8 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:pt-24">

          {/* Map visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-[#dce5df]"
          >
            {/* Map background */}
            <div className="absolute inset-0 opacity-50">
              <div className="absolute left-[10%] top-[12%] h-px w-[80%] rotate-[12deg] bg-[#17211f]/10" />
              <div className="absolute left-[-5%] top-[34%] h-px w-[110%] -rotate-[8deg] bg-[#17211f]/10" />
              <div className="absolute left-[5%] top-[58%] h-px w-[90%] rotate-[4deg] bg-[#17211f]/10" />
              <div className="absolute left-[20%] top-[76%] h-px w-[75%] -rotate-[14deg] bg-[#17211f]/10" />

              <div className="absolute left-[25%] top-[-10%] h-[120%] w-px rotate-[18deg] bg-[#17211f]/10" />
              <div className="absolute left-[50%] top-[-10%] h-[120%] w-px -rotate-[9deg] bg-[#17211f]/10" />
              <div className="absolute left-[72%] top-[-10%] h-[120%] w-px rotate-[12deg] bg-[#17211f]/10" />

              <div className="absolute left-[13%] top-[22%] h-32 w-32 rounded-full border border-[#17211f]/10" />
              <div className="absolute bottom-[15%] right-[13%] h-44 w-44 rounded-full border border-[#17211f]/10" />
            </div>

            {/* Roads */}
            <div className="absolute left-[-10%] top-[48%] h-[3px] w-[120%] rotate-[18deg] bg-white/70" />
            <div className="absolute left-[42%] top-[-15%] h-[130%] w-[3px] rotate-[25deg] bg-white/70" />

            {/* Location pulse */}
            <motion.div
              animate={{
                scale: [1, 1.7, 1],
                opacity: [0.25, 0, 0.25],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#52756d]"
            />

            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#f5f4ef] bg-[#17211f] text-[#b7d9cf] shadow-xl">
              <MapPin size={22} />
            </div>

            {/* Map label */}
            <div className="absolute left-5 top-5 rounded-full border border-[#17211f]/10 bg-[#f5f4ef]/85 px-4 py-2.5 backdrop-blur-md">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                Gulshan · Dhaka
              </span>
            </div>

            {/* Address overlay */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-[#17211f]/90 p-5 text-white backdrop-blur-xl md:left-7 md:right-auto md:w-[360px]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#b7d9cf]">
                Clinic Address
              </p>

              <p className="mt-2 text-lg font-medium tracking-[-0.025em]">
                Gulshan Medical Centre
              </p>

              <p className="mt-1 text-sm leading-6 text-white/45">
                Road 12, Gulshan 1
                <br />
                Dhaka 1212, Bangladesh
              </p>

              <a
                href="#"
                onClick={(event) => event.preventDefault()}
                className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#b7d9cf]"
              >
                Get directions
                <ArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            {/* Contact */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#52756d]">
                Contact
              </p>

              <div className="mt-6 border-t border-[#17211f]/10">
                <a
                  href="tel:+8801000000000"
                  className="group flex items-center gap-4 border-b border-[#17211f]/10 py-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dceae5] text-[#52756d]">
                    <Phone size={16} />
                  </span>

                  <div className="flex-1">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#17211f]/30">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      +880 1XXX-XXXXXX
                    </p>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-[#17211f]/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="mailto:appointments@example.com"
                  className="group flex items-center gap-4 border-b border-[#17211f]/10 py-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dceae5] text-[#52756d]">
                    <Mail size={16} />
                  </span>

                  <div className="flex-1">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#17211f]/30">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      appointments@example.com
                    </p>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-[#17211f]/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-12">
              <div className="flex items-center gap-3">
                <Clock3 size={16} className="text-[#52756d]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#52756d]">
                  Clinic Hours
                </p>
              </div>

              <div className="mt-6">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between border-t border-[#17211f]/10 py-3.5 text-sm"
                  >
                    <span className="text-[#17211f]/55">
                      {item.day}
                    </span>

                    <span className="font-medium">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-[1.5rem] bg-[#17211f] p-6 text-white md:p-7">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#b7d9cf]">
                Plan your visit
              </p>

              <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em]">
                Ready to book a consultation?
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                Request an appointment and our team will help coordinate your
                visit.
              </p>

              <a
                href="#appointment"
                className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#b7d9cf] px-5 py-3 text-sm font-medium text-[#17211f] transition-all duration-300 hover:bg-white"
              >
                Request Appointment

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#17211f]/10 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight size={13} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}