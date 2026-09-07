import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";

const plans = [
  {
    id: "01",
    name: "BASE",
    subtitle: "START STRONG",
    price: "3,500",
    period: "/ MONTH",
    description:
      "Everything you need to build consistency, strength and momentum.",
    features: [
      "Full gym access",
      "All strength equipment",
      "Cardio & conditioning zones",
      "Locker access",
      "Member training app",
    ],
  },
  {
    id: "02",
    name: "FORGE",
    subtitle: "TRAIN SERIOUS",
    price: "5,500",
    period: "/ MONTH",
    description:
      "A complete performance membership for people ready to train with intent.",
    features: [
      "Everything in Base",
      "Unlimited group sessions",
      "Performance assessments",
      "Recovery zone access",
      "Monthly coach check-in",
    ],
    featured: true,
  },
  {
    id: "03",
    name: "ELITE",
    subtitle: "NO COMPROMISE",
    price: "9,500",
    period: "/ MONTH",
    description:
      "Maximum support, maximum access and a training system built around you.",
    features: [
      "Everything in Forge",
      "Personal coaching sessions",
      "Individual performance plan",
      "Priority recovery access",
      "Quarterly body assessment",
    ],
  },
];

export default function Membership() {
  const sectionRef = useRef(null);
  const [activePlan, setActivePlan] = useState(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.25,
  });

  /* =========================================================
     MOTION
  ========================================================= */

  const titleY = useTransform(
    progress,
    [0, 0.5, 1],
    [60, 0, -40]
  );

  const titleX = useTransform(
    progress,
    [0, 0.5, 1],
    [-20, 0, 20]
  );

  const titleOpacity = useTransform(
    progress,
    [0, 0.12, 0.88, 1],
    [0, 1, 1, 0]
  );

  const panelY = useTransform(
    progress,
    [0, 0.5, 1],
    [45, 0, -35]
  );

  const panelScale = useTransform(
    progress,
    [0, 0.5, 1],
    [0.97, 1, 0.98]
  );

  const backgroundX = useTransform(
    progress,
    [0, 1],
    [0, -60]
  );

  const glowScale = useTransform(
    progress,
    [0, 0.5, 1],
    [0.8, 1.1, 0.85]
  );

  const glowX = useTransform(
    progress,
    [0, 1],
    [-50, 70]
  );

  /* =========================================================
     CTA
  ========================================================= */

  const handleStartTraining = () => {
    const contact = document.getElementById("contact");

    if (contact) {
      contact.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="membership"
      className="
        relative
        h-screen
        min-h-[680px]
        overflow-hidden
        bg-[#d7ff38]
        text-[#090a09]
      "
    >
      <div className="relative h-full w-full overflow-hidden">

        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0">

          {/* Large background typography */}

          <motion.div
            style={{
              x: backgroundX,
            }}
            className="
              absolute
              left-[-5vw]
              top-[10%]
              hidden
              whitespace-nowrap
              sm:block
            "
          >
            <span
              className="
                font-['Oswald']
                text-[19vw]
                font-bold
                uppercase
                leading-none
                tracking-[-0.09em]
                text-black/[0.055]
              "
            >
              MEMBERSHIP
            </span>
          </motion.div>

          {/* Mobile background word */}

          <motion.div
            style={{
              x: backgroundX,
            }}
            className="
              absolute
              left-[-3%]
              top-[13%]
              whitespace-nowrap
              sm:hidden
            "
          >
            <span
              className="
                font-['Oswald']
                text-[27vw]
                font-bold
                uppercase
                leading-none
                tracking-[-0.09em]
                text-black/[0.05]
              "
            >
              FORGE
            </span>
          </motion.div>

          {/* Vertical structure */}

          <div className="absolute left-[10%] top-0 h-full w-px bg-black/[0.06]" />

          <div className="absolute left-1/2 top-0 h-full w-px bg-black/[0.04]" />

          <div className="absolute right-[10%] top-0 h-full w-px bg-black/[0.06]" />

          {/* Atmospheric glow */}

          <motion.div
            style={{
              scale: glowScale,
              x: glowX,
            }}
            className="
              absolute
              left-1/2
              top-[18%]
              h-[380px]
              w-[380px]
              -translate-x-1/2
              rounded-full
              bg-white/30
              blur-[120px]
              sm:h-[520px]
              sm:w-[520px]
            "
          />

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(0,0,0,.8) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  rgba(0,0,0,.8) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "90px 90px",
            }}
          />

          {/* Vignette */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(215,255,56,.25)_100%)]" />

        </div>

        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div
          className="
            absolute
            left-5
            top-20
            z-50
            sm:left-8
            sm:top-24
            md:left-12
          "
        >

          <div className="flex items-center gap-3">

            <span className="h-px w-6 bg-black/60 sm:w-8" />

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-black/70
                sm:text-[9px]
                sm:tracking-[0.35em]
              "
            >
              06 / Membership
            </span>

          </div>

        </div>

        {/* =====================================================
            TITLE
        ====================================================== */}

        <motion.div
          style={{
            y: titleY,
            x: titleX,
            opacity: titleOpacity,
          }}
          className="
            absolute
            left-5
            top-[16%]
            z-20
            w-[90%]
            sm:left-8
            sm:top-[17%]
            md:left-[7%]
          "
        >

          <div
            className="
              mb-3
              text-[7px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-black/45
              sm:mb-5
              sm:text-[8px]
              sm:tracking-[0.3em]
            "
          >
            Choose your level
          </div>

          <h2
            className="
              font-['Oswald']
              text-[16vw]
              font-bold
              uppercase
              leading-[0.77]
              tracking-[-0.075em]
              sm:text-[13vw]
              md:text-[9.2vw]
            "
          >
            TRAIN

            <br />

            <span className="text-white">
              WITHOUT
            </span>

            <br />

            LIMITS.
          </h2>

        </motion.div>

        {/* =====================================================
            MEMBERSHIP PANEL
        ====================================================== */}

        <motion.div
          style={{
            y: panelY,
            scale: panelScale,
          }}
          className="
            absolute
            left-4
            right-4
            top-[39%]
            z-30
            sm:left-auto
            sm:right-6
            sm:top-[28%]
            sm:w-[57%]
            sm:max-w-[650px]
            md:right-[7%]
            md:top-[20%]
            md:w-[54%]
          "
        >

          {/* Depth shadow */}

          <div
            className="
              absolute
              inset-0
              translate-x-2
              translate-y-2
              border
              border-black/10
              bg-black/10
              sm:translate-x-4
              sm:translate-y-4
            "
          />

          {/* Main panel */}

          <div
            className="
              relative
              border
              border-black/20
              bg-[#090a09]
              p-4
              text-white
              shadow-[0_25px_80px_rgba(0,0,0,.2)]
              sm:p-6
              md:p-8
            "
          >

            {/* =================================================
                PANEL HEADER
            ================================================== */}

            <div className="flex items-start justify-between gap-4">

              <div className="min-w-0">

                <div
                  className="
                    mb-2
                    flex
                    items-center
                    gap-2
                    sm:mb-3
                    sm:gap-3
                  "
                >

                  <span
                    className="
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[#d7ff38]
                      shadow-[0_0_12px_#d7ff38]
                      sm:h-2
                      sm:w-2
                    "
                  />

                  <span
                    className="
                      text-[6px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#d7ff38]
                      sm:text-[8px]
                      sm:tracking-[0.3em]
                    "
                  >
                    Recommended
                  </span>

                </div>

                <div
                  className="
                    font-['Oswald']
                    text-[12vw]
                    font-bold
                    uppercase
                    leading-none
                    tracking-[-0.04em]
                    sm:text-6xl
                    md:text-7xl
                  "
                >
                  {plans[activePlan].name}
                </div>

                <div
                  className="
                    mt-1
                    text-[6px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-white/30
                    sm:text-[8px]
                    sm:tracking-[0.3em]
                  "
                >
                  {plans[activePlan].subtitle}
                </div>

              </div>

              <div
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-white/10
                  sm:h-11
                  sm:w-11
                "
              >

                <Zap
                  size={14}
                  className="text-[#d7ff38] sm:h-[17px] sm:w-[17px]"
                />

              </div>

            </div>

            {/* =================================================
                PRICE
            ================================================== */}

            <div
              className="
                mt-5
                border-t
                border-white/10
                pt-4
                sm:mt-7
                sm:pt-6
              "
            >

              <div className="flex items-end gap-2">

                <span
                  className="
                    font-['Oswald']
                    text-[11vw]
                    font-bold
                    leading-none
                    tracking-[-0.04em]
                    sm:text-6xl
                    md:text-7xl
                  "
                >
                  ৳{plans[activePlan].price}
                </span>

                <span
                  className="
                    mb-1
                    text-[6px]
                    font-bold
                    tracking-[0.13em]
                    text-white/30
                    sm:mb-2
                    sm:text-[8px]
                    sm:tracking-[0.2em]
                  "
                >
                  {plans[activePlan].period}
                </span>

              </div>

              <p
                className="
                  mt-2
                  max-w-[430px]
                  text-[9px]
                  leading-4
                  text-white/40
                  sm:mt-3
                  sm:text-sm
                  sm:leading-6
                "
              >
                {plans[activePlan].description}
              </p>

            </div>

            {/* =================================================
                FEATURES
            ================================================== */}

            <div
              className="
                mt-3
                grid
                border-t
                border-white/10
                pt-2
                sm:mt-5
                sm:grid-cols-2
                sm:gap-x-5
                sm:pt-3
              "
            >

              {plans[activePlan].features.map((feature) => (
                <div
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-2
                    border-b
                    border-white/[0.06]
                    py-2
                    sm:gap-3
                    sm:py-2.5
                  "
                >

                  <div
                    className="
                      flex
                      h-3.5
                      w-3.5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#d7ff38]
                      text-black
                      sm:h-5
                      sm:w-5
                    "
                  >
                    <Check
                      size={8}
                      strokeWidth={3}
                      className="sm:h-[11px] sm:w-[11px]"
                    />
                  </div>

                  <span
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.04em]
                      text-white/55
                      sm:text-[9px]
                      sm:tracking-[0.08em]
                    "
                  >
                    {feature}
                  </span>

                </div>
              ))}

            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <button
              onClick={handleStartTraining}
              className="
                group
                mt-4
                flex
                w-full
                items-center
                justify-between
                bg-[#d7ff38]
                px-4
                py-3
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(0,0,0,.2)]
                sm:mt-5
                sm:px-5
                sm:py-4
              "
            >

              <span
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  sm:text-[9px]
                  sm:tracking-[0.25em]
                "
              >
                Start Training
              </span>

              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  sm:h-4
                  sm:w-4
                "
              />

            </button>

          </div>

        </motion.div>

        {/* =====================================================
            PLAN SELECTOR
        ====================================================== */}

        <div
          className="
            absolute
            bottom-[7%]
            left-4
            z-40
            sm:left-8
            md:left-[7%]
          "
        >

          <div
            className="
              mb-2
              text-[6px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-black/40
              sm:mb-3
              sm:text-[8px]
            "
          >
            Membership levels
          </div>

          <div className="flex border-l border-black/15">

            {plans.map((plan, index) => (
              <button
                key={plan.id}
                onClick={() => setActivePlan(index)}
                className={`
                  flex
                  h-9
                  w-[76px]
                  items-center
                  justify-center
                  border-b
                  border-black/10
                  px-2
                  transition-all
                  duration-300

                  sm:h-auto
                  sm:w-[110px]
                  sm:justify-between
                  sm:px-4
                  sm:py-3

                  md:w-[135px]

                  ${
                    activePlan === index
                      ? "bg-black text-[#d7ff38]"
                      : "text-black/50 hover:bg-black/[0.05] hover:text-black"
                  }
                `}
              >

                <div className="flex items-center gap-2">

                  <span className="hidden font-['Oswald'] text-xs sm:inline">
                    {plan.id}
                  </span>

                  <span
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      sm:text-[9px]
                      sm:tracking-[0.18em]
                    "
                  >
                    {plan.name}
                  </span>

                </div>

                <ArrowUpRight
                  size={11}
                  className={`
                    hidden
                    transition-all
                    duration-300
                    sm:block

                    ${
                      activePlan === index
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-1 opacity-0"
                    }
                  `}
                />

              </button>
            ))}

          </div>

        </div>

        {/* =====================================================
            24/7 ACCESS
        ====================================================== */}

        <div
          className="
            absolute
            bottom-[7%]
            right-5
            z-40
            sm:right-8
            md:right-[8%]
          "
        >

          <div className="text-right">

            <div
              className="
                font-['Oswald']
                text-2xl
                font-bold
                leading-none
                sm:text-4xl
                md:text-5xl
              "
            >
              24/7
            </div>

            <div
              className="
                mt-1
                text-[5px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-black/40
                sm:text-[7px]
                sm:tracking-[0.2em]
              "
            >
              Access
            </div>

          </div>

        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

        <div
          className="
            absolute
            bottom-2
            right-5
            z-50
            hidden
            sm:bottom-4
            sm:right-8
            md:right-12
            md:block
          "
        >

          <div className="flex items-center gap-3">

            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-black/40">
              Find your level
            </span>

            <motion.div
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20"
            >
              <ArrowDown size={13} />
            </motion.div>

          </div>

        </div>

        {/* =====================================================
            PROGRESS
        ====================================================== */}

        <motion.div
          style={{
            scaleX: progress,
            transformOrigin: "left",
          }}
          className="absolute bottom-0 left-0 z-50 h-[2px] w-full bg-black"
        />

        {/* =====================================================
            GRAIN
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[60]
            opacity-[0.025]
          "
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

      </div>
    </section>
  );
}