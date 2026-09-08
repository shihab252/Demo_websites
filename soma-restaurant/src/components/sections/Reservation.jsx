import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, X } from "lucide-react";

const times = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Reservation() {
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 2,
    name: "",
    phone: "",
    email: "",
    request: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="reserve"
      className="relative overflow-hidden bg-[#f3efe7] text-[#0b0b0a]"
    >
      {/* Decorative background number */}
      <div className="pointer-events-none absolute -right-8 top-20 select-none font-display text-[30vw] leading-none text-black/[0.025]">
        07
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <span className="font-mono text-xs tracking-[0.3em] text-black/45">
              07
            </span>

            <span className="h-px w-10 bg-black/20" />

            <span className="text-xs uppercase tracking-[0.25em] text-black/55">
              Reservations
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <h2 className="font-display text-[17vw] leading-[0.78] tracking-[-0.055em] sm:text-[13vw] lg:text-[9.5vw]">
              Make it
              <br />
              <i>a moment.</i>
            </h2>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="mt-16 h-px origin-left bg-black/15 lg:mt-24"
        />

        {/* Reservation content */}
        <div className="mt-12 grid gap-16 lg:grid-cols-[1.4fr_0.6fr] lg:gap-24">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.8 }}
            className="space-y-14"
          >
            {/* Booking parameters */}
            <div>
              <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-black/45">
                Choose your evening
              </p>

              <div className="grid gap-8 sm:grid-cols-3">
                {/* Date */}
                <div className="group border-b border-black/20 pb-4">
                  <label className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-black/45">
                    Date
                  </label>

                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={(e) => updateField("date", e.target.value)}
                    className="w-full cursor-pointer bg-transparent text-base outline-none"
                  />
                </div>

                {/* Time */}
                <div className="group border-b border-black/20 pb-4">
                  <label className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-black/45">
                    Time
                  </label>

                  <div className="relative">
                    <select
                      required
                      value={form.time}
                      onChange={(e) => updateField("time", e.target.value)}
                      className="w-full cursor-pointer bg-transparent pr-8 text-base outline-none"
                    >
                      <option value="">Select time</option>

                      {times.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="group border-b border-black/20 pb-4">
                  <label className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-black/45">
                    Guests
                  </label>

                  <div className="relative">
                    <select
                      value={form.guests}
                      onChange={(e) =>
                        updateField("guests", Number(e.target.value))
                      }
                      className="w-full cursor-pointer bg-transparent pr-8 text-base outline-none"
                    >
                      {guestOptions.map((number) => (
                        <option key={number} value={number}>
                          {number} {number === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Guest details */}
            <div>
              <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-black/45">
                Your details
              </p>

              <div className="grid gap-8 sm:grid-cols-2">
                <Field
                  label="Name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(value) => updateField("name", value)}
                  placeholder="Your name"
                />

                <Field
                  label="Phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(value) => updateField("phone", value)}
                  placeholder="+880"
                />

                <Field
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(value) => updateField("email", value)}
                  placeholder="you@example.com"
                />

                <Field
                  label="Special request"
                  type="text"
                  value={form.request}
                  onChange={(value) => updateField("request", value)}
                  placeholder="Optional"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col gap-6 border-t border-black/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-xs leading-6 text-black/50">
                Your request is not confirmed until our team contacts you.
                Please mention allergies or dietary requirements in your
                request.
              </p>

              <button
                type="submit"
                className="group flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-[#0b0b0a] text-[#f3efe7] transition-transform duration-500 hover:scale-105 sm:h-32 sm:w-32"
              >
                <span className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.18em]">
                  Reserve
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </button>
            </div>
          </motion.form>

          {/* Booking summary */}
          <motion.aside
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="border-t border-black/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/45">
              Your evening
            </p>

            <div className="mt-10">
              <p className="font-display text-5xl leading-none sm:text-6xl">
                SŌMA
              </p>

              <p className="mt-4 text-sm text-black/50">
                Modern Japanese dining
                <br />
                Gulshan, Dhaka
              </p>
            </div>

            <div className="mt-14 space-y-5 border-t border-black/10 pt-7 text-sm">
              <SummaryRow
                label="Date"
                value={form.date || "Choose a date"}
              />

              <SummaryRow
                label="Time"
                value={form.time || "Choose a time"}
              />

              <SummaryRow
                label="Guests"
                value={`${form.guests} ${
                  form.guests === 1 ? "guest" : "guests"
                }`}
              />
            </div>

            <div className="mt-14 border-t border-black/10 pt-7">
              <p className="text-[10px] uppercase tracking-[0.25em] text-black/45">
                Reservations
              </p>

              <a
                href="tel:+8801XXXXXXXXX"
                className="mt-4 block text-sm transition-opacity hover:opacity-50"
              >
                +880 1XXX-XXXXXX
              </a>

              <a
                href="mailto:reservations@soma.example"
                className="mt-2 block text-sm transition-opacity hover:opacity-50"
              >
                reservations@soma.example
              </a>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Confirmation */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 px-5 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="relative w-full max-w-lg bg-[#f3efe7] p-8 text-[#0b0b0a] sm:p-12"
            >
              <button
                onClick={() => setSubmitted(false)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-black/15 transition-colors hover:bg-black hover:text-white"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b98b5b]">
                <Check size={20} />
              </div>

              <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-black/45">
                Request received
              </p>

              <h3 className="mt-5 font-display text-5xl leading-[0.9] sm:text-6xl">
                See you
                <br />
                <i>at SŌMA.</i>
              </h3>

              <p className="mt-7 max-w-sm text-sm leading-7 text-black/55">
                We've received your reservation request. Our team will
                contact you to confirm the table.
              </p>

              <div className="mt-8 border-t border-black/10 pt-6 text-sm">
                <div className="flex justify-between py-2">
                  <span className="text-black/45">Date</span>
                  <span>{form.date}</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-black/45">Time</span>
                  <span>{form.time}</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-black/45">Guests</span>
                  <span>{form.guests}</span>
                </div>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 w-full bg-[#0b0b0a] py-4 text-xs uppercase tracking-[0.2em] text-[#f3efe7] transition-opacity hover:opacity-80"
              >
                Continue exploring
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({
  label,
  type,
  required = false,
  value,
  onChange,
  placeholder,
}) {
  return (
    <label className="block border-b border-black/20 pb-4">
      <span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-black/45">
        {label}
      </span>

      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-base outline-none placeholder:text-black/25"
      />
    </label>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-5">
      <span className="text-black/40">{label}</span>

      <span className="text-right">{value}</span>
    </div>
  );
}