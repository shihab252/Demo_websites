import HeroImage from "../assets/images/hero.jpeg";
import Blood_Web from "../assets/images/Blood_web.png";
import My_portfolio from "../assets/images/My_portfolio.png";
import youthbees from "../assets/images/Youth_bees.png";
export const projects = [
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
      "node.js",
      "Express"
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
    github: "https://github.com/shihab252/Blood_web_updated/tree/main",
    live: "https://blood-web-frontend.onrender.com/",
  },
];