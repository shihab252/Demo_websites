import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Container from "../common/Container";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";

import { projects } from "../../data/projects";

// ============================================================
// ANIMATIONS
// ============================================================

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.97,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ============================================================
// PROJECT CARD
// ============================================================

function ProjectCard({ project, index }) {
  const featured = project.featured;

  return (
    <motion.article
      variants={cardVariants}
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-[2rem]
        border border-slate-200/70
        bg-white/70
        backdrop-blur-xl
        shadow-[0_20px_70px_-30px_rgba(15,23,42,0.22)]
        transition-all duration-500
        hover:-translate-y-2
        hover:border-slate-300
        hover:shadow-[0_35px_90px_-35px_rgba(15,23,42,0.30)]
      "
    >
      {/* ======================================================
          AMBIENT CARD GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          -right-28 -top-28
          h-72 w-72
          rounded-full
          bg-blue-400/10
          blur-3xl
          transition-all duration-700
          group-hover:scale-150
          group-hover:bg-blue-400/20
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-32 -left-24
          h-64 w-64
          rounded-full
          bg-cyan-400/5
          blur-3xl
          transition-all duration-700
          group-hover:scale-125
        "
      />

      {/* ======================================================
          PROJECT NUMBER
      ====================================================== */}

      <div className="absolute right-6 top-5 z-30">
        <span
          className="
            text-xs
            font-bold
            tracking-[0.2em]
            text-slate-400
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* ======================================================
          IMAGE
      ====================================================== */}

      <div className="relative z-10 overflow-hidden">
        <div
          className={`
            relative w-full overflow-hidden
            ${
              featured
                ? "aspect-[16/9]"
                : "aspect-[16/10]"
            }
          `}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="
              h-full
              w-full
              object-cover
              object-top
              transition-transform
              duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:scale-[1.07]
            "
          />

          {/* Image overlay */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-t
              from-slate-950/50
              via-slate-950/5
              to-transparent
              opacity-70
            "
          />

          {/* ==================================================
              MOVING LIGHT / SHINE
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute inset-y-0
              -left-[120%]
              w-1/2
              skew-x-[-20deg]
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              transition-all
              duration-1000
              group-hover:left-[130%]
            "
          />

          {/* ==================================================
              LIVE STATUS
          ================================================== */}

          <div
            className="
              absolute left-5 top-5
              flex items-center gap-2
              rounded-full
              border border-white/25
              bg-black/30
              px-3 py-1.5
              text-xs font-semibold
              text-white
              backdrop-blur-xl
            "
          >
            <span
              className="
                h-1.5 w-1.5
                animate-pulse
                rounded-full
                bg-emerald-400
                shadow-[0_0_12px_rgba(52,211,153,0.9)]
              "
            />

            Live
          </div>

          {/* ==================================================
              HOVER OPEN PROJECT
          ================================================== */}

          <div
            className="
              absolute inset-0
              flex items-center justify-center
              opacity-0
              transition-all duration-300
              group-hover:opacity-100
            "
          >
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex items-center gap-2
                rounded-full
                bg-white
                px-6 py-3
                text-sm font-bold
                text-slate-950
                shadow-2xl
              "
            >
              Open Project
              <ArrowUpRight size={17} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative z-10
          flex flex-1 flex-col
          p-6 md:p-7
        "
      >
        {/* Category */}
        <div className="mb-4 flex items-center gap-3">
          <Badge
            className="
              rounded-full
              border border-blue-200/70
              bg-blue-50/80
              px-3 py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-blue-700
              backdrop-blur-sm
            "
          >
            {project.category}
          </Badge>
        </div>

        {/* Title */}
        <h3
          className={`
            font-black
            tracking-tight
            text-slate-950
            ${
              featured
                ? "text-3xl md:text-4xl"
                : "text-2xl md:text-3xl"
            }
          `}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3
            text-sm
            leading-6
            text-slate-500
            md:text-[15px]
          "
        >
          {project.description}
        </p>

        {/* ==================================================
            TECHNOLOGIES
        ================================================== */}

        <div
          className="
            mt-5
            flex flex-wrap gap-2
          "
        >
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-lg
                border border-slate-200
                bg-white/80
                px-2.5 py-1.5
                text-[11px]
                font-semibold
                text-slate-500
                shadow-sm
                transition-all duration-300
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-600
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* ==================================================
            ACTIONS
        ================================================== */}

        <div
          className="
            mt-auto
            flex items-center gap-3
            pt-7
          "
        >
          {/* Live Demo */}
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              group/live
              inline-flex
              items-center gap-2
              rounded-xl
              bg-slate-950
              px-4 py-2.5
              text-sm font-semibold
              text-white
              transition-all duration-300
              hover:bg-blue-600
              hover:shadow-lg
              hover:shadow-blue-600/20
            "
          >
            Live Demo

            <ArrowUpRight
              size={16}
              className="
                transition-transform duration-300
                group-hover/live:-translate-y-0.5
                group-hover/live:translate-x-0.5
              "
            />
          </a>

          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center gap-2
              rounded-xl
              border border-slate-200
              bg-white/80
              px-4 py-2.5
              text-sm font-semibold
              text-slate-700
              backdrop-blur-sm
              transition-all duration-300
              hover:border-slate-300
              hover:bg-white
              hover:text-slate-950
            "
          >
            <FaGithub size={16} />

            Code
          </a>
        </div>
      </div>

      {/* ======================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div
        className="
          absolute bottom-0 left-0
          h-[2px] w-0
          bg-gradient-to-r
          from-blue-500
          via-purple-500
          to-cyan-400
          transition-all duration-700
          group-hover:w-full
        "
      />
    </motion.article>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-white
        py-28
        md:py-36
      "
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Large blue glow */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-10
            h-[520px]
            w-[520px]
            rounded-full
            bg-blue-400/10
            blur-[140px]
          "
        />

        {/* Purple glow */}
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            top-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-400/10
            blur-[140px]
          "
        />

        {/* Cyan glow */}
        <motion.div
          animate={{
            x: [0, 70, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-0
            left-[30%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-400/10
            blur-[130px]
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />
      </div>

      <Container>
        {/* ====================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <SectionTitle
            subtitle="Featured Projects"
            title="Things I've Built"
            description="A collection of carefully crafted projects showcasing my passion for Full Stack Development, Cyber Security, AI, and modern digital experiences."
            center
          />
        </motion.div>

        {/* ====================================================
            PROJECT COUNTER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="
            mx-auto
            mt-8
            flex
            w-fit
            items-center
            gap-2
            rounded-full
            border border-slate-200
            bg-white/70
            px-4 py-2
            text-xs font-semibold
            text-slate-500
            shadow-sm
            backdrop-blur-xl
          "
        >
          <Sparkles
            size={14}
            className="text-blue-500"
          />

          {projects.length} Projects
        </motion.div>

        {/* ====================================================
            RESPONSIVE PROJECT GRID
        ==================================================== */}

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.05,
          }}
          className="
            mt-16
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-12
            lg:gap-7
          "
        >
          {projects.map((project, index) => {
            /*
              DESKTOP GRID

              01 ──────────────── 02 ────────────────
                    large             large

              03 ─────── 04 ─────── 05
                normal     normal     normal

              06 ─────── 07 ─────── 08
                normal     normal     normal

              09 ────────────────────────────────────

              Mobile:
              1 column

              Tablet:
              2 columns

              Desktop:
              12-column responsive grid
            */

            let gridClass = "";

            // First two projects are larger
            if (index === 0 || index === 1) {
              gridClass = "lg:col-span-6";
            }

            // Last project creates a wide visual break
            else if (index === 8) {
              gridClass = "lg:col-span-12";
            }

            // Remaining projects
            else {
              gridClass = "lg:col-span-4";
            }

            return (
              <div
                key={project.id}
                className={`
                  min-w-0
                  ${gridClass}
                `}
              >
                <ProjectCard
                  project={project}
                  index={index}
                />
              </div>
            );
          })}
        </motion.div>

        {/* ====================================================
            GITHUB CTA
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-between
            gap-6
            rounded-[2rem]
            border border-slate-200
            bg-slate-50/80
            p-7
            backdrop-blur-xl
            md:flex-row
            md:p-8
          "
        >
          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-slate-400
              "
            >
              More on GitHub
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-black
                tracking-tight
                text-slate-950
              "
            >
              More projects, experiments & code.
            </h3>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              Explore more of my development work and experiments.
            </p>
          </div>

          <a
            href="https://github.com/shihab252/Demo_websites"
            target="_blank"
            rel="noreferrer"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-3
              rounded-xl
              bg-slate-950
              px-6 py-3.5
              text-sm font-bold
              text-white
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-blue-600
              hover:shadow-xl
              hover:shadow-blue-600/20
            "
          >
            <FaGithub size={18} />

            View GitHub

            <ExternalLink
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </motion.div>
      </Container>

      {/* ======================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-white
          via-white/40
          to-transparent
        "
      />
    </section>
  );
}