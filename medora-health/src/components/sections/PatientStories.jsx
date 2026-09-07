import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const stories = [
  {
    id: "01",
    name: "A clearer path forward",
    person: "Sample patient story",
    category: "HEART HEALTH",
    quote:
      "I finally understood what I needed to focus on. The process felt organized, calm, and much easier to navigate.",
    detail:
      "A sample story showing how clear communication and structured follow-up can make a healthcare experience feel more connected.",
    stat: "01",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "02",
    name: "Care that feels connected",
    person: "Sample patient story",
    category: "PREVENTION",
    quote:
      "Instead of feeling overwhelmed by information, I had a simple plan and knew what the next step was.",
    detail:
      "A sample story illustrating the value of coordinated cardiovascular care and practical guidance.",
    stat: "02",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "03",
    name: "Confidence through clarity",
    person: "Sample patient story",
    category: "CARDIOLOGY",
    quote:
      "The biggest difference was being able to ask questions and leave with a better understanding of my care.",
    detail:
      "A sample story focused on communication, education, and a more understandable patient journey.",
    stat: "03",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function PatientStories() {
  const [active, setActive] = useState(0);

  const story = stories[active];

  const nextStory = () => {
    setActive((current) => (current + 1) % stories.length);
  };

  const previousStory = () => {
    setActive(
      (current) => (current - 1 + stories.length) % stories.length
    );
  };

  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-[#102a43] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-0 h-full w-px bg-white/[0.06]" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-white/[0.06]" />
        <div className="absolute right-[10%] top-0 h-full w-px bg-white/[0.06]" />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-white/[0.05]"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-24 top-36 h-[340px] w-[340px] rounded-full border border-[#72d9e5]/10"
        />

        <div className="absolute bottom-[-200px] left-[-120px] h-[500px] w-[500px] rounded-full bg-[#1685a4]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* Top heading */}
        <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#72d9e5]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#72d9e5]">
                Patient stories
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl text-4xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Healthcare should feel
            <span className="text-[#72d9e5]"> human.</span>
          </motion.h2>
        </div>

        {/* Story navigation */}
        <div className="mt-16 flex flex-col gap-6 border-y border-white/10 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2">
            {stories.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActive(index)}
                className="group flex items-center gap-3 px-2 py-2"
                aria-label={`View patient story ${index + 1}`}
              >
                <span
                  className={`text-xs font-medium transition ${
                    active === index
                      ? "text-[#72d9e5]"
                      : "text-white/30 group-hover:text-white/60"
                  }`}
                >
                  {item.id}
                </span>

                <span
                  className={`h-px transition-all duration-500 ${
                    active === index
                      ? "w-14 bg-[#72d9e5]"
                      : "w-5 bg-white/20 group-hover:w-8"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="mr-3 text-xs uppercase tracking-[0.2em] text-white/30">
              Explore stories
            </span>

            <button
              onClick={previousStory}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-white/30 hover:bg-white/5"
              aria-label="Previous story"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextStory}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-white/30 hover:bg-white/5"
              aria-label="Next story"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Story */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Image */}
          <div className="relative min-h-[430px] overflow-hidden rounded-[28px] bg-white/5 md:min-h-[540px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={story.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <img
                  src={story.image}
                  alt=""
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102a43]/70 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Image label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                  {story.category}
                </p>

                <p className="mt-2 text-sm text-white/80">
                  {story.person}
                </p>
              </div>

              <span className="text-6xl font-medium tracking-[-0.08em] text-white/20">
                {story.stat}
              </span>
            </div>
          </div>

          {/* Quote */}
          <div className="relative lg:pl-10">
            <Quote
              size={48}
              strokeWidth={1}
              className="mb-8 text-[#72d9e5]/50"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#72d9e5]">
                  {story.category}
                </p>

                <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                  {story.name}
                </h3>

                <blockquote className="mt-8 max-w-2xl text-2xl font-light leading-[1.45] tracking-[-0.025em] text-white/90 md:text-3xl lg:text-[2.15rem]">
                  “{story.quote}”
                </blockquote>

                <p className="mt-8 max-w-xl text-sm leading-7 text-white/45">
                  {story.detail}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <a
                    href="#appointment"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#102a43] transition hover:bg-[#72d9e5]"
                  >
                    Start your journey

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                  <span className="text-xs uppercase tracking-[0.18em] text-white/30">
                    Sample content
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3"
        >
          <div>
            <span className="text-4xl font-medium tracking-[-0.05em]">
              01
            </span>

            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/35">
              Listen first
            </p>
          </div>

          <div>
            <span className="text-4xl font-medium tracking-[-0.05em]">
              02
            </span>

            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/35">
              Explain clearly
            </p>
          </div>

          <div>
            <span className="text-4xl font-medium tracking-[-0.05em]">
              03
            </span>

            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/35">
              Keep moving forward
            </p>
          </div>
        </motion.div>

        {/* Demo disclaimer */}
        <p className="mt-10 text-center text-[11px] leading-5 text-white/25">
          Patient stories shown here are fictional demo content for this
          website concept and should be replaced with verified testimonials
          and appropriate permissions before production use.
        </p>
      </div>
    </section>
  );
}