// ============================================================
// PROJECT IMAGES
// ============================================================

import HeroImage from "../assets/images/hero.jpeg";
import Blood_Web from "../assets/images/Blood_web.png";
import My_portfolio from "../assets/images/My_portfolio.png";
import youthbees from "../assets/images/Youth_bees.png";

import forgeImage from "../assets/images/forge.png";
import medoraImage from "../assets/images/medora.png";
import photographerImage from "../assets/images/photographer.png";
import somaImage from "../assets/images/soma.png";
import weddingImage from "../assets/images/wedding.png";


// ============================================================
// PROJECTS
// ============================================================

export const projects = [
  // ==========================================================
  // EXISTING PROJECTS
  // ==========================================================

  {
    id: 1,
    title: "My Portfolio Website",
    category: "Full Stack",
    description:
      "A premium portfolio website built with React, Tailwind CSS, and Framer Motion, showcasing my skills, projects, and achievements.",
    image: My_portfolio,
    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Node.js",
      "Express",
    ],
    github: "https://github.com/shihab252/Mywebsite",
    live: "https://portfolio-f71a.onrender.com/",
  },

  {
    id: 2,
    title: "Youth Bees Apptech",
    category: "Full Stack",
    description:
      "A comprehensive web application for Youth Bees Apptech, featuring user authentication, project management, and real-time collaboration tools.",
    image: youthbees,
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
    ],
    github: "https://github.com/shihab252/YouthBees_web_f",
    live: "https://youthbees-web-ywt3.onrender.com/",
  },

  {
    id: 3,
    title: "Blood Donation Platform",
    category: "MERN",
    description:
      "A complete blood donation management platform with donor search, blood request system and admin dashboard.",
    image: Blood_Web,
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Node.js",
      "Tailwind",
    ],
    github:
      "https://github.com/shihab252/Blood_web_updated/tree/main",
    live: "https://blood-web-frontend.onrender.com/",
  },


  // ==========================================================
  // NEW PROJECTS
  // ==========================================================

  {
    id: 4,
    title: "SŌMA",
    category: "Restaurant Experience",
    description:
      "A cinematic Japanese restaurant experience combining editorial design, interactive menus, reservations and an AI-powered concierge.",
    image: somaImage,
    technologies: [
      "React",
      "Vite",
      "Tailwind",
      "Framer Motion",
      "Gemini AI",
    ],
    github:
      "https://github.com/shihab252/Demo_websites",
    live:
      "https://soma-6mhf.onrender.com/",
    featured: true,
  },

  {
    id: 5,
    title: "FORGE",
    category: "Fitness Platform",
    description:
      "A high-performance fitness platform featuring training programs, facilities, coaches, memberships and an AI fitness assistant.",
    image: forgeImage,
    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Three.js",
      "Gemini AI",
    ],
    github:
      "https://github.com/shihab252/Demo_websites",
    live:
      "https://gym-website-demo-7xrd.onrender.com/",
    featured: true,
  },

  {
    id: 6,
    title: "MEDORA",
    category: "Healthcare",
    description:
      "A modern healthcare experience focused on patient services, medical information, appointments and AI-assisted healthcare interactions.",
    image: medoraImage,
    technologies: [
      "React",
      "Vite",
      "Tailwind",
      "Framer Motion",
      "Gemini AI",
    ],
    github:
      "https://github.com/shihab252/Demo_websites",
    live:
      "https://doctore-website-withai.onrender.com/",
  },

  {
    id: 7,
    title: "PHOTOGRAPHER",
    category: "Creative Portfolio",
    description:
      "A cinematic photographer portfolio built around large imagery, editorial typography, visual storytelling and immersive interactions.",
    image: photographerImage,
    technologies: [
      "React",
      "Vite",
      "Tailwind",
      "Framer Motion",
    ],
    github:
      "https://github.com/shihab252/Demo_websites",
    live:
      "https://demo-websites-10fr.onrender.com/",
  },

  {
    id: 8,
    title: "WEDDING",
    category: "Event Experience",
    description:
      "An elegant digital wedding experience bringing event information, guest-focused content and visual storytelling into one responsive experience.",
    image: weddingImage,
    technologies: [
      "React",
      "Vite",
      "Tailwind",
      "Framer Motion",
    ],
    github:
      "https://github.com/shihab252/Demo_websites",
    live:
      "https://wedding-demo-kkjr.vercel.app/",
  },

];