import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, RoundedBox, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: "01",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
    title: "THE SILENT FORM",
    category: "FASHION",
    year: "2026",
  },
  {
    id: "02",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=85",
    title: "NOCTURNE",
    category: "PORTRAIT",
    year: "2026",
  },
  {
    id: "03",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85",
    title: "AFTER LIGHT",
    category: "EDITORIAL",
    year: "2025",
  },
  {
    id: "04",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85",
    title: "STILL / MOVING",
    category: "PORTRAIT",
    year: "2025",
  },
];

/* =========================================================
   3D PHOTO CARD
========================================================= */

function PhotoCard({ project, index, scrollProgress, mouse }) {
  const texture = useTexture(project.image);
  const group = useRef(null);

  const xPositions = [0, 1.7, -1.65, 1.1];
  const yPositions = [0, -0.45, 0.55, -0.35];

  const zSpacing = 6.5;

  useFrame((state, delta) => {
    if (!group.current) return;

    const progress = scrollProgress.current;

    /*
      Cards stay in fixed world positions.
      The camera moves through them.
    */

    const targetX = xPositions[index] ?? 0;
    const targetY = yPositions[index] ?? 0;
    const targetZ = -index * zSpacing;

    const smooth = Math.min(delta * 4, 1);

    group.current.position.x +=
      (targetX - group.current.position.x) * smooth;

    group.current.position.y +=
      (targetY - group.current.position.y) * smooth;

    group.current.position.z +=
      (targetZ - group.current.position.z) * smooth;

    /*
      Mouse parallax
    */

    const mouseX = mouse.current?.x ?? 0;
    const mouseY = mouse.current?.y ?? 0;

    const targetRotationY =
      mouseX * 0.1 + (index % 2 === 0 ? -0.035 : 0.035);

    const targetRotationX =
      -mouseY * 0.07;

    group.current.rotation.y +=
      (targetRotationY - group.current.rotation.y) *
      Math.min(delta * 3, 1);

    group.current.rotation.x +=
      (targetRotationX - group.current.rotation.x) *
      Math.min(delta * 3, 1);

    /*
      Slight scale change based on scroll
    */

    const cardProgress = index / (projects.length - 1);

    const distance = Math.abs(progress - cardProgress);

    const targetScale =
      0.82 - Math.min(distance * 0.12, 0.12);

    group.current.scale.x +=
      (targetScale - group.current.scale.x) * smooth;

    group.current.scale.y +=
      (targetScale - group.current.scale.y) * smooth;

    group.current.scale.z +=
      (targetScale - group.current.scale.z) * smooth;

    /*
      Small floating movement
    */

    const floating =
      Math.sin(state.clock.elapsedTime * 0.65 + index) * 0.025;

    group.current.position.y += floating * smooth;
  });

  return (
    <group ref={group}>
      {/* Outer frame */}
      <RoundedBox
        args={[2.72, 3.65, 0.12]}
        radius={0.09}
        smoothness={5}
      >
        <meshStandardMaterial
          color="#151515"
          roughness={0.38}
          metalness={0.08}
        />
      </RoundedBox>

      {/* Image */}
      <mesh position={[0, 0, 0.075]}>
        <planeGeometry args={[2.52, 3.43]} />

        <meshBasicMaterial
          map={texture}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   CAMERA
========================================================= */

function CameraWorld({ scrollProgress, mouse }) {
  useFrame((state, delta) => {
    const progress = scrollProgress.current;

    /*
      Camera travels through the photography sequence.
    */

    const targetZ = 7.5 - progress * 25;

    const mouseX = mouse.current?.x ?? 0;
    const mouseY = mouse.current?.y ?? 0;

    const targetX = mouseX * 0.22;
    const targetY =
      mouseY * 0.12 +
      Math.sin(state.clock.elapsedTime * 0.25) * 0.035;

    const smooth = Math.min(delta * 3, 1);

    state.camera.position.x +=
      (targetX - state.camera.position.x) * smooth;

    state.camera.position.y +=
      (targetY - state.camera.position.y) * smooth;

    state.camera.position.z +=
      (targetZ - state.camera.position.z) * smooth;

    state.camera.rotation.y +=
      (mouseX * 0.018 - state.camera.rotation.y) *
      Math.min(delta * 2, 1);

    state.camera.rotation.x +=
      (-mouseY * 0.012 - state.camera.rotation.x) *
      Math.min(delta * 2, 1);
  });

  return null;
}

/* =========================================================
   3D SCENE
========================================================= */

function PhotographyScene({ scrollProgress, mouse, theme }) {
  return (
    <Canvas
      camera={{
        position: [0, 0, 7.5],
        fov: 40,
        near: 0.1,
        far: 100,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <color
        attach="background"
        args={[
          theme === "light"
            ? "#e8e5df"
            : "#080808",
        ]}
      />

      <ambientLight
        intensity={theme === "light" ? 2.2 : 1.25}
      />

      <directionalLight
        position={[4, 6, 8]}
        intensity={theme === "light" ? 2.8 : 2}
      />

      <directionalLight
        position={[-4, -2, 5]}
        intensity={theme === "light" ? 1.1 : 0.7}
      />

      <Environment
        preset="studio"
        environmentIntensity={
          theme === "light" ? 0.45 : 0.25
        }
      />

      <CameraWorld
        scrollProgress={scrollProgress}
        mouse={mouse}
      />

      {projects.map((project, index) => (
        <PhotoCard
          key={project.id}
          project={project}
          index={index}
          scrollProgress={scrollProgress}
          mouse={mouse}
        />
      ))}
    </Canvas>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const heroCopyRef = useRef(null);

  const introRef = useRef(null);
  const workRef = useRef(null);
  const categoryRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollProgress = useRef(0);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  /* =======================================================
     THEME
  ======================================================= */

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("photography-theme");

    if (
      savedTheme === "light" ||
      savedTheme === "dark"
    ) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    localStorage.setItem(
      "photography-theme",
      theme
    );
  }, [theme]);

  /* =======================================================
     SMOOTH SCROLL + GSAP
  ======================================================= */

  useEffect(() => {
    if (!pageRef.current) return;

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    const updateScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", updateScroll);

    const ticker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      /* ---------------------------------------------------
         Initial entrance
      --------------------------------------------------- */

      gsap.fromTo(
        ".site-nav",
        {
          y: -30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".hero-kicker",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".hero-title-line",
        {
          yPercent: 110,
        },
        {
          yPercent: 0,
          duration: 1.25,
          delay: 0.2,
          stagger: 0.08,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        ".hero-bottom",
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
        }
      );

      /* ---------------------------------------------------
         Hero 3D scroll sequence
      --------------------------------------------------- */

      gsap.to(scrollProgress, {
        current: 1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=3600",
          scrub: 1.15,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* ---------------------------------------------------
         Hero text disappears during scroll
      --------------------------------------------------- */

      gsap.to(heroCopyRef.current, {
        opacity: 0,
        scale: 0.86,
        y: -70,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=1300",
          scrub: true,
        },
      });

      /* ---------------------------------------------------
         Section reveals
      --------------------------------------------------- */

      const revealElements = [
        introRef.current,
        workRef.current,
        categoryRef.current,
        aboutRef.current,
        contactRef.current,
      ];

      revealElements.forEach((element) => {
        if (!element) return;

        gsap.fromTo(
          element.querySelectorAll(
            ".reveal-item"
          ),
          {
            y: 55,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 78%",
              once: true,
            },
          }
        );
      });

      /* ---------------------------------------------------
         Project image reveal
      --------------------------------------------------- */

      gsap.utils
        .toArray(".project-image")
        .forEach((image) => {
          gsap.fromTo(
            image,
            {
              scale: 1.12,
            },
            {
              scale: 1,
              duration: 1.3,
              ease: "power3.out",
              scrollTrigger: {
                trigger: image,
                start: "top 88%",
                once: true,
              },
            }
          );
        });
    }, pageRef);

    /* =====================================================
       MOUSE
    ===================================================== */

    const handleMouseMove = (event) => {
      if (window.matchMedia("(pointer: coarse)").matches) {
        return;
      }

      mouse.current.x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      mouse.current.y =
        (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    /* =====================================================
       RESIZE
    ===================================================== */

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      lenis.off("scroll", updateScroll);

      gsap.ticker.remove(ticker);

      ctx.revert();

      lenis.destroy();
    };
  }, []);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const scrollToSection = (id) => {
    setMenuOpen(false);

    const element =
      document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main
      ref={pageRef}
      className={`site ${
        theme === "light"
          ? "theme-light"
          : "theme-dark"
      }`}
    >
      {/* =================================================
          NAVIGATION
      ================================================= */}

      <header className="site-nav">
        <button
          className="brand"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ELIAS NOIR
        </button>

        <nav className="desktop-nav">
          <button
            onClick={() =>
              scrollToSection("work")
            }
          >
            WORK
          </button>

          <button
            onClick={() =>
              scrollToSection("about")
            }
          >
            ABOUT
          </button>

          <button
            onClick={() =>
              scrollToSection("contact")
            }
          >
            CONTACT
          </button>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() =>
              setTheme((current) =>
                current === "dark"
                  ? "light"
                  : "dark"
              )
            }
            aria-label="Toggle color theme"
          >
            <span className="theme-icon">
              {theme === "dark" ? "☼" : "◐"}
            </span>

            <span>
              {theme === "dark"
                ? "LIGHT"
                : "DARK"}
            </span>
          </button>

          <button
            className={`menu-button ${
              menuOpen ? "active" : ""
            }`}
            onClick={() =>
              setMenuOpen((value) => !value)
            }
            aria-label="Toggle navigation menu"
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
          menuOpen ? "open" : ""
        }`}
      >
        <button
          onClick={() =>
            scrollToSection("work")
          }
        >
          WORK
        </button>

        <button
          onClick={() =>
            scrollToSection("about")
          }
        >
          ABOUT
        </button>

        <button
          onClick={() =>
            scrollToSection("contact")
          }
        >
          CONTACT
        </button>
      </div>

      {/* =================================================
          HERO
      ================================================= */}

      <section
        ref={heroRef}
        className="hero"
        id="home"
      >
        <div className="hero-scene">
          <PhotographyScene
            scrollProgress={scrollProgress}
            mouse={mouse}
            theme={theme}
          />
        </div>

        <div
          ref={heroCopyRef}
          className="hero-content"
        >
          <div className="hero-kicker">
            <span className="kicker-line" />
            <span>
              PHOTOGRAPHER / VISUAL ARTIST
            </span>
          </div>

          <h1 className="hero-title">
            <span className="title-mask">
              <span className="hero-title-line">
                VISUAL
              </span>
            </span>

            <span className="title-mask">
              <span className="hero-title-line">
                STORIES
              </span>
            </span>
          </h1>

          <div className="hero-description">
            <p>
              Fashion, portrait and editorial
              photography shaped by light,
              movement and atmosphere.
            </p>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-line">
            <span />
          </div>

          <span>01 — 04</span>
        </div>
      </section>

      {/* =================================================
          INTRO
      ================================================= */}

      <section
        ref={introRef}
        className="intro section"
      >
        <div className="container">
          <div className="section-number reveal-item">
            01 / INTRO
          </div>

          <div className="intro-content">
            <h2 className="reveal-item">
              IMAGES THAT
              <br />
              <span>STAY WITH YOU.</span>
            </h2>

            <div className="intro-copy reveal-item">
              <p>
                I create photographs with a
                focus on character, atmosphere
                and honest visual storytelling.
              </p>

              <p>
                Every frame begins with an
                observation and ends with a
                feeling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          WORK
      ================================================= */}

      <section
        ref={workRef}
        className="work section"
        id="work"
      >
        <div className="container">
          <div className="section-heading reveal-item">
            <div className="section-number">
              02 / SELECTED WORK
            </div>

            <p>
              A selection of recent portraits,
              fashion stories and editorial
              projects.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article
                className="project"
                key={project.id}
              >
                <div className="project-meta reveal-item">
                  <span>
                    {project.id}
                  </span>

                  <span>
                    {project.category}
                  </span>

                  <span>
                    {project.year}
                  </span>
                </div>

                <div className="project-image-wrap">
                  <img
                    className="project-image"
                    src={project.image}
                    alt={project.title}
                    loading={
                      index === 0
                        ? "eager"
                        : "lazy"
                    }
                  />
                </div>

                <div className="project-info reveal-item">
                  <h3>
                    {project.title}
                  </h3>

                  <span>
                    VIEW PROJECT ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          CATEGORIES
      ================================================= */}

      <section
        ref={categoryRef}
        className="categories section"
      >
        <div className="container">
          <div className="section-number reveal-item">
            03 / EXPERTISE
          </div>

          <div className="category-grid">
            {[
              "PORTRAIT",
              "FASHION",
              "EDITORIAL",
              "CAMPAIGNS",
              "CREATIVE DIRECTION",
            ].map((item, index) => (
              <div
                className="category-row reveal-item"
                key={item}
              >
                <span>
                  0{index + 1}
                </span>

                <h3>{item}</h3>

                <span className="arrow">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          ABOUT
      ================================================= */}

      <section
        ref={aboutRef}
        className="about section"
        id="about"
      >
        <div className="container">
          <div className="section-number reveal-item">
            04 / ABOUT
          </div>

          <div className="about-grid">
            <div className="about-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85"
                alt="Photographer portrait"
                loading="lazy"
              />
            </div>

            <div className="about-content">
              <h2 className="reveal-item">
                OBSERVE.
                <br />
                FRAME.
                <br />
                <span>CREATE.</span>
              </h2>

              <p className="reveal-item">
                Based between cities, studios
                and constantly changing light,
                I work with people and brands
                to create images that feel
                considered without losing their
                natural character.
              </p>

              <p className="reveal-item">
                Available for editorial,
                commercial, portrait and
                creative projects worldwide.
              </p>

              <div className="about-stats reveal-item">
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
        ref={contactRef}
        className="contact section"
        id="contact"
      >
        <div className="container">
          <div className="section-number reveal-item">
            05 / CONTACT
          </div>

          <div className="contact-content">
            <p className="contact-kicker reveal-item">
              HAVE A PROJECT IN MIND?
            </p>

            <h2 className="reveal-item">
              LET'S MAKE
              <br />
              SOMETHING
              <br />
              <span>MEMORABLE.</span>
            </h2>

            <a
              className="contact-email reveal-item"
              href="mailto:hello@eliasnoir.com"
            >
              hello@eliasnoir.com
              <span>↗</span>
            </a>
          </div>

          <footer className="footer reveal-item">
            <span>
              © 2026 ELIAS NOIR
            </span>

            <div className="footer-links">
              <a href="#home">
                INSTAGRAM
              </a>

              <a href="#home">
                BEHANCE
              </a>

              <a href="#home">
                LINKEDIN
              </a>
            </div>

            <span>
              DHAKA / WORLDWIDE
            </span>
          </footer>
        </div>
      </section>
    </main>
  );
}