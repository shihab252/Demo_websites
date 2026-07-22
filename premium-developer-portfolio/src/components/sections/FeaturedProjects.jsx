import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Container from "../common/Container";
import Button from "../common/Button";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";

import { projects } from "../../data/projects";

const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function FeaturedProjects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <section id="projects" className="relative overflow-hidden py-32">
      {/* Animated Background (Kept exactly as requested) */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/15 blur-[140px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_70%)]" />
      </div>

      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionTitle
            subtitle="Featured Projects"
            title="Things I've Built"
            description="A collection of carefully crafted projects showcasing my passion for Full Stack Development, Cyber Security, and Machine Learning."
            center
          />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-32 space-y-32 lg:space-y-48"
        >
          {projects.map((project, index) => {
            // Reverses the layout for even items to create an alternating zig-zag pattern
            const isReversed = index % 2 !== 0;

            return (
              <motion.article
                key={project.id}
                variants={projectVariants}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
                className={`group relative flex flex-col items-center gap-10 lg:gap-16 ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Subtle Hover Torch Effect bound to the individual article */}
                <motion.div
                  animate={{
                    left: mousePosition.x - 200,
                    top: mousePosition.y - 200,
                  }}
                  transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
                  className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-blue-300/15 blur-[100px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
                />

                {/* 1. Interactive Media Side (60% width on Desktop) */}
                <div className="relative z-10 w-full lg:w-[60%]">
                  <div className="relative rounded-[2rem] border border-white/60 bg-white/40 p-2 shadow-2xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-500 hover:shadow-blue-900/5 hover:-translate-y-1">
                    <div className="overflow-hidden rounded-3xl border border-slate-200/50 bg-slate-50">
                      
                      {/* Minimalist Browser Header */}
                      <div className="flex items-center gap-2 border-b border-slate-200/60 bg-white/60 px-4 py-3 backdrop-blur-md">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90 shadow-sm" />
                          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90 shadow-sm" />
                          <span className="h-2.5 w-2.5 rounded-full bg-green-400/90 shadow-sm" />
                        </div>
                        <div className="mx-auto h-2 w-24 rounded-full bg-slate-200/80" />
                      </div>

                      {/* Image Container with Reveal Overlay */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        
                        {/* Glass Overlay on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-slate-900/40 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl transition-transform duration-300 hover:scale-105"
                          >
                            Live Preview <ExternalLink size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Typography & Information Side (40% width on Desktop) */}
                <div className="relative z-10 w-full flex flex-col justify-center lg:w-[40%]">
                  {/* Decorative Background Number */}
                  <span className={`pointer-events-none absolute -top-14 text-[140px] font-black leading-none text-slate-900/[0.03] select-none ${isReversed ? "-right-8" : "-left-8"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative space-y-6">
                    <div className="flex items-center gap-4">
                      <Badge className="rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                      <span className="text-sm font-semibold text-emerald-600 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </span>
                    </div>

                    <h3 className="text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
                      {project.title}
                    </h3>

                    <p className="text-lg leading-relaxed text-slate-600">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2.5 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-200 bg-white/60 px-3.5 py-1.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-blue-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-6">
                      <Button
                        className="group flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-4 font-medium text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/30"
                        onClick={() => window.open(project.live, "_blank")}
                      >
                        Launch App
                        <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Button>

                      <Button
                        variant="outline"
                        className="group flex items-center gap-2 rounded-xl border-slate-300 bg-white/50 px-6 py-4 font-medium text-slate-700 backdrop-blur-sm transition-all hover:bg-white hover:text-slate-900"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <FaGithub size={18} className="transition-transform duration-300 group-hover:scale-110" /> 
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

              </motion.article>
            );
          })}
        </motion.div>
      </Container>

      {/* Ambient Floor Linear Mask */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  );
}