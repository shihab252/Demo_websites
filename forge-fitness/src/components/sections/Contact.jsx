import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock3,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const goals = [
  "Build Strength",
  "Build Muscle",
  "Improve Conditioning",
  "Athletic Performance",
  "General Fitness",
];

const memberships = ["BASE", "FORGE", "ELITE"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    membership: "FORGE",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090909] text-[#f4f4f0]"
    >
      {/* =========================================================
          TOP TRANSITION
      ========================================================= */}

      <div className="h-px w-full bg-white/10" />

      {/* =========================================================
          INTRO
      ========================================================= */}

      <div className="relative px-5 pb-16 pt-24 sm:px-8 md:px-12 md:pb-24 md:pt-32 lg:px-16">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#d7ff38]/8 blur-[140px]" />

        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#d7ff38]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d7ff38]">
              06 / Start Training
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.4fr] lg:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl font-['Oswald'] text-[18vw] font-semibold uppercase leading-[0.78] tracking-[-0.06em] sm:text-[15vw] lg:text-[11vw]"
            >
              Ready
              <br />
              <span className="text-[#d7ff38]">To Forge?</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-sm lg:pb-3"
            >
              <p className="text-sm leading-7 text-white/50 sm:text-base">
                Stop waiting for the right moment. Build strength, discipline
                and momentum inside a training environment designed to make
                you better.
              </p>

              <div className="mt-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/30">
                <span className="h-px w-10 bg-white/20" />
                Your next chapter starts here
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================
          FORM AREA
      ========================================================= */}

      <div className="relative px-5 pb-24 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1.05fr_0.55fr]">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="relative border-t border-white/15 pt-8"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
                  {/* Name */}
                  <div className="group">
                    <label className="mb-3 block text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">
                      Your Name
                    </label>

                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full border-b border-white/15 bg-transparent py-3 text-lg outline-none transition placeholder:text-white/15 focus:border-[#d7ff38]"
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label className="mb-3 block text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">
                      Email Address
                    </label>

                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border-b border-white/15 bg-transparent py-3 text-lg outline-none transition placeholder:text-white/15 focus:border-[#d7ff38]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="group">
                    <label className="mb-3 block text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">
                      Phone
                    </label>

                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX-XXXXXX"
                      className="w-full border-b border-white/15 bg-transparent py-3 text-lg outline-none transition placeholder:text-white/15 focus:border-[#d7ff38]"
                    />
                  </div>

                  {/* Goal */}
                  <div>
                    <label className="mb-3 block text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">
                      Training Goal
                    </label>

                    <select
                      required
                      name="goal"
                      value={form.goal}
                      onChange={handleChange}
                      className="w-full border-b border-white/15 bg-[#090909] py-3 text-lg text-white outline-none transition focus:border-[#d7ff38]"
                    >
                      <option value="" disabled>
                        Select your goal
                      </option>

                      {goals.map((goal) => (
                        <option key={goal} value={goal}>
                          {goal}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Membership */}
                <div className="mt-12">
                  <label className="mb-5 block text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">
                    Preferred Membership
                  </label>

                  <div className="flex flex-wrap gap-3">
                    {memberships.map((membership) => {
                      const active = form.membership === membership;

                      return (
                        <button
                          type="button"
                          key={membership}
                          onClick={() =>
                            setForm({
                              ...form,
                              membership,
                            })
                          }
                          className={`group flex items-center gap-3 border px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition ${
                            active
                              ? "border-[#d7ff38] bg-[#d7ff38] text-[#090909]"
                              : "border-white/15 text-white/45 hover:border-white/40 hover:text-white"
                          }`}
                        >
                          {active && <Check size={13} strokeWidth={3} />}

                          {membership}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[10px] leading-5 text-white/25">
                    By submitting this form, you agree to be contacted by the
                    FORGE team about membership and training options.
                  </p>

                  <button
                    type="submit"
                    className="group flex min-h-[64px] items-center justify-between gap-12 bg-[#d7ff38] px-6 py-4 text-left text-[#090909] transition hover:bg-[#e3ff72] sm:min-w-[250px]"
                  >
                    <span>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.3em]">
                        Take The First Step
                      </span>

                      <span className="mt-1 block font-['Oswald'] text-2xl uppercase">
                        Start Training
                      </span>
                    </span>

                    <ArrowUpRight
                      size={24}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[430px] flex-col justify-center"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#d7ff38] text-[#090909]">
                  <Check size={25} strokeWidth={3} />
                </div>

                <div className="font-['Oswald'] text-6xl uppercase leading-[0.9] sm:text-8xl">
                  You're
                  <br />
                  <span className="text-[#d7ff38]">In.</span>
                </div>

                <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
                  Thanks, {form.name || "athlete"}. The FORGE team will contact
                  you soon with the next steps for your {form.membership} plan.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 w-fit border-b border-[#d7ff38] pb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7ff38]"
                >
                  Send another request
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* =====================================================
              CONTACT INFO
          ===================================================== */}

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <div className="border-t border-white/15 pt-8">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">
                Visit FORGE
              </span>

              <div className="mt-10 space-y-10">
                {/* Location */}
                <div className="flex gap-5">
                  <MapPin
                    size={18}
                    strokeWidth={1.5}
                    className="mt-1 text-[#d7ff38]"
                  />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                      Location
                    </p>

                    <p className="mt-3 text-sm leading-6 text-white/65">
                      Gulshan Performance District
                      <br />
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-5">
                  <Clock3
                    size={18}
                    strokeWidth={1.5}
                    className="mt-1 text-[#d7ff38]"
                  />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                      Opening Hours
                    </p>

                    <p className="mt-3 text-sm leading-6 text-white/65">
                      Mon — Sat
                      <br />
                      06:00 — 23:00
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5">
                  <Phone
                    size={18}
                    strokeWidth={1.5}
                    className="mt-1 text-[#d7ff38]"
                  />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                      Phone
                    </p>

                    <p className="mt-3 text-sm text-white/65">
                      +880 1XXX-XXXXXX
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5">
                  <Mail
                    size={18}
                    strokeWidth={1.5}
                    className="mt-1 text-[#d7ff38]"
                  />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                      Email
                    </p>

                    <p className="mt-3 break-all text-sm text-white/65">
                      hello@forgefitness.example
                    </p>
                  </div>
                </div>
              </div>

              {/* Number */}
              <div className="mt-20 border-t border-white/10 pt-6">
                <div className="flex items-end justify-between">
                  <span className="font-['Oswald'] text-[7rem] leading-none text-white/[0.04]">
                    06
                  </span>

                  <span className="pb-2 text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
                    Make The Move
                  </span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* =========================================================
          FINAL STATEMENT
      ========================================================= */}

      <div className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7ff38]/10" />

        <div className="relative mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#d7ff38]">
                No shortcuts.
              </p>

              <h3 className="max-w-4xl font-['Oswald'] text-5xl uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
                Earn
                <br />
                <span className="text-white/20">Your Strength.</span>
              </h3>
            </div>

            <div className="max-w-xs text-sm leading-7 text-white/35">
              <p>
                Train with intention. Recover with purpose. Show up again
                tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom lime strip */}
      <div className="h-2 w-full bg-[#d7ff38]" />
    </section>
  );
}