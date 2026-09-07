import { useEffect, useMemo, useState } from "react";
import "./App.css";

/* =========================================================
   PHOTOGRAPHY DATA
========================================================= */

const projects = [
  {
    id: 1,
    title: "Silent Form",
    category: "Fashion",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: 2,
    title: "Nocturne",
    category: "Portrait",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: 3,
    title: "After Light",
    category: "Editorial",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: 4,
    title: "Still / Moving",
    category: "Portrait",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: 5,
    title: "Soft Geometry",
    category: "Fashion",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: 6,
    title: "Urban Silence",
    category: "Editorial",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: 7,
    title: "Natural State",
    category: "Portrait",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: 8,
    title: "Modern Objects",
    category: "Commercial",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=90",
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All",
  "Portrait",
  "Fashion",
  "Editorial",
  "Commercial",
];

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  /* -------------------------------------------------------
     Load saved theme
  ------------------------------------------------------- */

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("photographer-theme");

    if (
      savedTheme === "dark" ||
      savedTheme === "light"
    ) {
      setTheme(savedTheme);
    }
  }, []);

  /* -------------------------------------------------------
     Apply theme
  ------------------------------------------------------- */

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    localStorage.setItem(
      "photographer-theme",
      theme
    );
  }, [theme]);

  /* -------------------------------------------------------
     Filter projects
  ------------------------------------------------------- */

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === activeCategory
    );
  }, [activeCategory]);

  /* -------------------------------------------------------
     Navigation
  ------------------------------------------------------- */

  const goTo = (id) => {
    setMenuOpen(false);

    const element =
      document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* -------------------------------------------------------
     Theme toggle
  ------------------------------------------------------- */

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark"
        ? "light"
        : "dark"
    );
  };

  return (
    <div className="site">

      {/* =================================================
          NAVIGATION
      ================================================= */}

      <header className="navbar">

        <button
          className="logo"
          onClick={() => goTo("home")}
        >
          ELIAS NOIR
        </button>

        <nav className="nav-links">
          <button onClick={() => goTo("home")}>
            Home
          </button>

          <button onClick={() => goTo("work")}>
            Work
          </button>

          <button onClick={() => goTo("about")}>
            About
          </button>

          <button onClick={() => goTo("contact")}>
            Contact
          </button>
        </nav>

        <div className="nav-right">

          <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span>
              {theme === "dark"
                ? "☼"
                : "◐"}
            </span>

            {theme === "dark"
              ? "LIGHT"
              : "DARK"}
          </button>

          <button
            className={`menu-button ${
              menuOpen ? "open" : ""
            }`}
            onClick={() =>
              setMenuOpen((value) => !value)
            }
            aria-label="Open navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>

        </div>
      </header>

      {/* =================================================
          MOBILE MENU
      ================================================= */}

      <div
        className={`mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >
        <button onClick={() => goTo("home")}>
          Home
        </button>

        <button onClick={() => goTo("work")}>
          Work
        </button>

        <button onClick={() => goTo("about")}>
          About
        </button>

        <button onClick={() => goTo("contact")}>
          Contact
        </button>
      </div>

      {/* =================================================
          HERO
      ================================================= */}

      <section
        id="home"
        className="hero"
      >

        <div className="hero-image">
          <img
            src={projects[0].image}
            alt="Fashion photography"
          />

          <div className="hero-overlay" />
        </div>

        <div className="hero-content">

          <p className="eyebrow">
            PHOTOGRAPHER · VISUAL ARTIST
          </p>

          <h1>
            Elias
            <br />
            <span>Noir</span>
          </h1>

          <p className="hero-text">
            Portrait, fashion and editorial
            photography focused on people,
            atmosphere and honest moments.
          </p>

          <button
            className="hero-link"
            onClick={() => goTo("work")}
          >
            Explore the work
            <span>↓</span>
          </button>

        </div>

        <div className="hero-footer">
          <span>BASED IN DHAKA</span>
          <span>AVAILABLE WORLDWIDE</span>
        </div>

      </section>

      {/* =================================================
          INTRO
      ================================================= */}

      <section className="intro section">

        <div className="container">

          <div className="section-label">
            <span>01</span>
            INTRODUCTION
          </div>

          <div className="intro-grid">

            <h2>
              Photographs
              <br />
              <span>with a point of view.</span>
            </h2>

            <div className="intro-copy">

              <p>
                I create visual stories for
                people, brands and publications.
                My work combines natural
                moments with a considered
                approach to light, composition
                and emotion.
              </p>

              <button
                className="text-link"
                onClick={() => goTo("about")}
              >
                More about me
                <span>↗</span>
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          WORK
      ================================================= */}

      <section
        id="work"
        className="work section"
      >

        <div className="container">

          <div className="work-heading">

            <div>
              <div className="section-label">
                <span>02</span>
                SELECTED WORK
              </div>

              <h2>
                Recent
                <br />
                <span>projects.</span>
              </h2>
            </div>

            <p>
              A selection of portrait,
              fashion, editorial and
              commercial photography.
            </p>

          </div>

          {/* CATEGORY FILTER */}

          <div className="filters">

            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>
            ))}

          </div>

          {/* PROJECT GRID */}

          <div className="work-grid">

            {filteredProjects.map(
              (project, index) => (
                <article
                  className={`work-card ${
                    index % 3 === 1
                      ? "tall"
                      : ""
                  }`}
                  key={project.id}
                >

                  <div className="work-image">

                    <img
                      src={project.image}
                      alt={project.title}
                      loading={
                        index < 2
                          ? "eager"
                          : "lazy"
                      }
                    />

                    <div className="image-overlay">
                      <span>
                        View project
                      </span>

                      <span>↗</span>
                    </div>

                  </div>

                  <div className="work-info">

                    <div>
                      <h3>
                        {project.title}
                      </h3>

                      <p>
                        {project.category}
                      </p>
                    </div>

                    <span>
                      {project.year}
                    </span>

                  </div>

                </article>
              )
            )}

          </div>

        </div>

      </section>

      {/* =================================================
          SERVICES
      ================================================= */}

      <section className="services section">

        <div className="container">

          <div className="section-label">
            <span>03</span>
            SERVICES
          </div>

          <div className="services-grid">

            <div className="services-intro">
              <h2>
                What I
                <br />
                <span>photograph.</span>
              </h2>

              <p>
                Available for individual
                commissions, brand campaigns,
                editorials and creative
                collaborations.
              </p>
            </div>

            <div className="services-list">

              <div className="service">
                <span>01</span>

                <div>
                  <h3>Portraits</h3>

                  <p>
                    Personal portraits,
                    artist profiles and
                    professional imagery.
                  </p>
                </div>
              </div>

              <div className="service">
                <span>02</span>

                <div>
                  <h3>Fashion</h3>

                  <p>
                    Lookbooks, campaigns,
                    model tests and
                    fashion stories.
                  </p>
                </div>
              </div>

              <div className="service">
                <span>03</span>

                <div>
                  <h3>Editorial</h3>

                  <p>
                    Visual stories for
                    magazines, publications
                    and independent projects.
                  </p>
                </div>
              </div>

              <div className="service">
                <span>04</span>

                <div>
                  <h3>Commercial</h3>

                  <p>
                    Campaign photography
                    created around a brand's
                    visual identity.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          ABOUT
      ================================================= */}

      <section
        id="about"
        className="about section"
      >

        <div className="container">

          <div className="section-label">
            <span>04</span>
            ABOUT
          </div>

          <div className="about-grid">

            <div className="about-image">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=90"
                alt="Elias Noir"
                loading="lazy"
              />

            </div>

            <div className="about-content">

              <h2>
                Behind
                <br />
                the
                <br />
                <span>camera.</span>
              </h2>

              <p>
                I'm Elias, a photographer
                interested in the relationship
                between people, places and
                light.
              </p>

              <p>
                My approach is simple:
                understand the person or idea,
                create an environment where
                something genuine can happen,
                and photograph it honestly.
              </p>

              <div className="about-details">

                <div>
                  <strong>08+</strong>
                  <span>
                    YEARS EXPERIENCE
                  </span>
                </div>

                <div>
                  <strong>120+</strong>
                  <span>
                    PROJECTS
                  </span>
                </div>

                <div>
                  <strong>18</strong>
                  <span>
                    COUNTRIES
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          CONTACT
      ================================================= */}

      <section
        id="contact"
        className="contact section"
      >

        <div className="container">

          <div className="section-label">
            <span>05</span>
            CONTACT
          </div>

          <div className="contact-main">

            <p className="contact-small">
              HAVE A PROJECT IN MIND?
            </p>

            <h2>
              Let's create
              <br />
              something
              <br />
              <span>meaningful.</span>
            </h2>

            <a
              href="mailto:hello@eliasnoir.com"
              className="email-link"
            >
              hello@eliasnoir.com
              <span>↗</span>
            </a>

          </div>

          {/* FOOTER */}

          <footer className="footer">

            <div>
              <strong>
                ELIAS NOIR
              </strong>

              <span>
                PHOTOGRAPHER / VISUAL ARTIST
              </span>
            </div>

            <div className="footer-links">

              <a href="#home">
                Instagram
              </a>

              <a href="#home">
                Behance
              </a>

              <a href="#home">
                LinkedIn
              </a>

            </div>

            <div>
              <span>
                © 2026 Elias Noir
              </span>
            </div>

          </footer>

        </div>

      </section>

    </div>
  );
}