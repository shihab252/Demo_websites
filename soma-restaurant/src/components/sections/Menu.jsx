import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const menuData = {
  Signature: [
    {
      id: "01",
      name: "Wagyu Tataki",
      description: "A5 wagyu · smoked ponzu · young herbs",
      price: "৳2,850",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85",
      tag: "Chef's signature",
    },
    {
      id: "02",
      name: "Seasonal Sashimi",
      description: "Daily selection · daikon · citrus · shiso",
      price: "৳2,450",
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1400&q=85",
      tag: "Seasonal",
    },
    {
      id: "03",
      name: "Miso Black Cod",
      description: "White miso · sansho · pickled cucumber",
      price: "৳2,200",
      image:
        "https://images.unsplash.com/photo-1580959375944-abd7e991f971?auto=format&fit=crop&w=1400&q=85",
      tag: "SŌMA classic",
    },
    {
      id: "04",
      name: "A5 Wagyu",
      description: "Japanese A5 · charcoal · wasabi · sea salt",
      price: "৳4,800",
      image:
        "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1400&q=85",
      tag: "Premium",
    },
  ],

  Sushi: [
    {
      id: "01",
      name: "Bluefin Akami",
      description: "Bluefin tuna · aged soy · wasabi",
      price: "৳1,650",
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1400&q=85",
      tag: "Sushi",
    },
    {
      id: "02",
      name: "Salmon Aburi",
      description: "Scottish salmon · yuzu kosho · ikura",
      price: "৳1,450",
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1400&q=85",
      tag: "Aburi",
    },
    {
      id: "03",
      name: "Hamachi",
      description: "Yellowtail · ponzu · jalapeño · shiso",
      price: "৳1,550",
      image:
        "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1400&q=85",
      tag: "Seasonal",
    },
    {
      id: "04",
      name: "SŌMA Selection",
      description: "Chef's selection of today's finest pieces",
      price: "৳3,200",
      image:
        "https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=1400&q=85",
      tag: "Omakase",
    },
  ],

  Robata: [
    {
      id: "01",
      name: "Charcoal Chicken",
      description: "Free-range chicken · tare · spring onion",
      price: "৳1,350",
      image:
        "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1400&q=85",
      tag: "Robata",
    },
    {
      id: "02",
      name: "Miso Eggplant",
      description: "Japanese eggplant · red miso · sesame",
      price: "৳850",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85",
      tag: "Vegetarian",
    },
    {
      id: "03",
      name: "King Prawn",
      description: "Charcoal prawn · fermented chilli · lime",
      price: "৳1,850",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=85",
      tag: "Robata",
    },
    {
      id: "04",
      name: "Wagyu Skewer",
      description: "A5 wagyu · tare glaze · Japanese mustard",
      price: "৳2,400",
      image:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1400&q=85",
      tag: "Premium",
    },
  ],

  Desserts: [
    {
      id: "01",
      name: "Matcha Tiramisu",
      description: "Ceremonial matcha · mascarpone · cocoa",
      price: "৳750",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1400&q=85",
      tag: "Dessert",
    },
    {
      id: "02",
      name: "Yuzu Cheesecake",
      description: "Yuzu curd · cream cheese · sesame",
      price: "৳700",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1400&q=85",
      tag: "Dessert",
    },
    {
      id: "03",
      name: "Black Sesame Ice Cream",
      description: "Roasted black sesame · kinako · mochi",
      price: "৳650",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1400&q=85",
      tag: "Seasonal",
    },
  ],
};

const categories = Object.keys(menuData);

function DishRow({ dish, index, active, onActivate }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const element = rowRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onActivate(dish);
        }
      },
      {
        threshold: 0.55,
        rootMargin: "-15% 0px -25% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [dish, onActivate]);

  return (
    <motion.article
      ref={rowRef}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => onActivate(dish)}
      className="group relative border-t border-[#d8d0c3] py-7 md:py-9"
    >
      <div
        className={`absolute left-0 top-0 h-full w-[2px] origin-top transition-transform duration-500 ${
          active ? "scale-y-100 bg-[#b98b5b]" : "scale-y-0 bg-transparent"
        }`}
      />

      <div className="grid grid-cols-[44px_1fr_auto] gap-4 pl-4 md:grid-cols-[70px_1fr_auto] md:gap-8 md:pl-7">
        <div
          className={`pt-1 text-[11px] tracking-[0.22em] transition-colors duration-500 ${
            active ? "text-[#b98b5b]" : "text-[#8c877e]"
          }`}
        >
          {dish.id}
        </div>

        <div>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3
              className={`font-display text-[30px] leading-none tracking-[-0.025em] transition-all duration-500 md:text-[42px] ${
                active
                  ? "translate-x-1 text-[#171614]"
                  : "text-[#393631]"
              }`}
            >
              {dish.name}
            </h3>

            <span
              className={`text-[9px] uppercase tracking-[0.2em] transition-opacity duration-500 ${
                active ? "opacity-100" : "opacity-0"
              }`}
            >
              {dish.tag}
            </span>
          </div>

          <p className="mt-3 max-w-[520px] text-[12px] leading-6 tracking-[0.02em] text-[#777169] md:text-[13px]">
            {dish.description}
          </p>
        </div>

        <div
          className={`pt-1 text-right font-display text-[22px] transition-transform duration-500 md:text-[27px] ${
            active ? "translate-x-0" : "translate-x-1"
          }`}
        >
          {dish.price}
        </div>
      </div>
    </motion.article>
  );
}

export default function Menu() {
  const sectionRef = useRef(null);
  const [category, setCategory] = useState("Signature");
  const [activeDish, setActiveDish] = useState(menuData.Signature[0]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  const dishes = menuData[category];

  const handleCategoryChange = (nextCategory) => {
    setCategory(nextCategory);
    setActiveDish(menuData[nextCategory][0]);
  };

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="relative overflow-hidden bg-[#f3efe7] text-[#171614]"
    >
      {/* HEADER */}
      <div className="mx-auto max-w-[1500px] px-6 pb-16 pt-28 sm:px-10 md:pb-24 md:pt-36 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[180px_1fr]">
          <div className="flex items-start gap-3 text-[10px] uppercase tracking-[0.28em] text-[#777169]">
            <span className="text-[#b98b5b]">03</span>
            <span>Menu</span>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[950px] font-display text-[clamp(58px,8vw,132px)] leading-[0.82] tracking-[-0.06em]"
            >
              Our kitchen
              <br />
              follows the season.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 max-w-[510px] text-[12px] leading-6 tracking-[0.02em] text-[#777169] md:ml-[15%]"
            >
              A quiet expression of contemporary Japanese dining. We work
              with the season, letting exceptional ingredients speak with
              restraint and precision.
            </motion.div>
          </div>
        </div>
      </div>

      {/* CATEGORY NAV */}
      <div className="border-y border-[#d8d0c3]">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 overflow-x-auto px-6 py-5 sm:px-10 lg:px-16">
          <div className="flex min-w-max items-center gap-7 md:gap-10">
            {categories.map((item) => {
              const selected = item === category;

              return (
                <button
                  key={item}
                  onClick={() => handleCategoryChange(item)}
                  className="group relative py-1 text-[10px] uppercase tracking-[0.24em] outline-none"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      selected
                        ? "text-[#171614]"
                        : "text-[#999188] group-hover:text-[#171614]"
                    }`}
                  >
                    {item}
                  </span>

                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#b98b5b] transition-all duration-500 ${
                      selected ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <span className="hidden whitespace-nowrap text-[9px] uppercase tracking-[0.24em] text-[#aaa39a] md:block">
            Seasonal selection
          </span>
        </div>
      </div>

      {/* MENU CONTENT */}
      <div className="mx-auto max-w-[1500px] px-6 py-16 sm:px-10 md:py-24 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* LEFT — DISHES */}
          <div>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-[0.28em] text-[#b98b5b]">
                  03 / 01
                </span>

                <h3 className="mt-2 font-display text-[42px] leading-none md:text-[54px]">
                  {category}
                </h3>
              </div>

              <span className="pb-1 text-[9px] uppercase tracking-[0.2em] text-[#999188]">
                {String(dishes.length).padStart(2, "0")} dishes
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {dishes.map((dish, index) => (
                  <DishRow
                    key={`${category}-${dish.id}`}
                    dish={dish}
                    index={index}
                    active={activeDish?.name === dish.name}
                    onActivate={setActiveDish}
                  />
                ))}

                <div className="border-t border-[#d8d0c3]" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — STICKY IMAGE */}
          <div className="relative hidden lg:block">
            <div className="sticky top-28">
              <div className="relative h-[720px] overflow-hidden bg-[#ded8ce]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDish?.name}
                    initial={{
                      opacity: 0,
                      clipPath: "inset(0 0 100% 0)",
                    }}
                    animate={{
                      opacity: 1,
                      clipPath: "inset(0 0 0% 0)",
                    }}
                    exit={{
                      opacity: 0,
                      clipPath: "inset(100% 0 0 0)",
                    }}
                    transition={{
                      duration: 0.85,
                      ease: [0.77, 0, 0.175, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <motion.img
                      src={activeDish?.image}
                      alt={activeDish?.name}
                      style={{
                        y: imageY,
                        scale: imageScale,
                      }}
                      className="h-[112%] w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/10" />
                  </motion.div>
                </AnimatePresence>

                {/* IMAGE LABEL */}
                <div className="absolute left-6 top-6 flex items-center gap-3 text-white">
                  <span className="h-px w-8 bg-white/70" />

                  <span className="text-[9px] uppercase tracking-[0.24em]">
                    {activeDish?.tag}
                  </span>
                </div>

                {/* IMAGE BOTTOM INFO */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="border-t border-white/30 pt-5 text-white">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.25em] text-white/65">
                          {activeDish?.id} / SŌMA
                        </div>

                        <h4 className="mt-2 font-display text-[42px] leading-none">
                          {activeDish?.name}
                        </h4>
                      </div>

                      <div className="font-display text-[25px]">
                        {activeDish?.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SMALL IMAGE CAPTION */}
              <div className="mt-5 flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-[#999188]">
                <span>Selected from the season</span>
                <span>Dhaka · Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE FEATURE IMAGE */}
        <div className="mt-12 lg:hidden">
          <div className="relative h-[480px] overflow-hidden bg-[#ded8ce] sm:h-[600px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeDish?.name}
                src={activeDish?.image}
                alt={activeDish?.name}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                  clipPath: "inset(0 0 100% 0)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  clipPath: "inset(0 0 0% 0)",
                }}
                exit={{
                  opacity: 0,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.77, 0, 0.175, 1],
                }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <div className="border-t border-white/30 pt-5 text-white">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.25em] text-white/65">
                      {activeDish?.id} / SŌMA
                    </div>

                    <h4 className="mt-2 font-display text-[36px] leading-none sm:text-[46px]">
                      {activeDish?.name}
                    </h4>
                  </div>

                  <div className="font-display text-[21px]">
                    {activeDish?.price}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FULL MENU CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-[#d8d0c3] pt-10 sm:flex-row"
        >
          <div className="max-w-[390px] text-center text-[11px] leading-5 tracking-[0.02em] text-[#777169] sm:text-left">
            Our menu changes with the market. For the most current selection,
            please speak with our team when you visit.
          </div>

          <a
            href="#reserve"
            className="group flex items-center gap-4 border-b border-[#171614] pb-3 text-[10px] uppercase tracking-[0.25em]"
          >
            <span>Reserve a table</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#171614] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#171614] group-hover:text-[#f3efe7]">
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </span>
          </a>
        </motion.div>
      </div>

      {/* BOTTOM STATEMENT */}
      <div className="border-t border-[#d8d0c3]">
        <div className="mx-auto max-w-[1500px] px-6 py-16 sm:px-10 md:py-24 lg:px-16">
          <div className="grid gap-8 md:grid-cols-[180px_1fr]">
            <div className="text-[9px] uppercase tracking-[0.28em] text-[#b98b5b]">
              03 / 02
            </div>

            <p className="max-w-[900px] font-display text-[clamp(36px,5vw,76px)] leading-[0.95] tracking-[-0.035em] text-[#3a3732]">
              Less on the plate.
              <br />
              More in the moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}