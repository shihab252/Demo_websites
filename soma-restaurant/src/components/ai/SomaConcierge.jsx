import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  ChevronRight,
  Clock3,
  MapPin,
  MessageCircleMore,
  Send,
  Sparkles,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { GoogleGenAI } from "@google/genai";

/* =========================================================
   SŌMA QUICK ACTIONS
========================================================= */

const quickPrompts = [
  {
    label: "What should I order?",
    prompt:
      "Recommend a refined SŌMA dining experience for a first-time guest. Only mention menu information that is explicitly known.",
    icon: UtensilsCrossed,
  },
  {
    label: "Opening hours",
    prompt: "What are SŌMA's opening hours?",
    icon: Clock3,
  },
  {
    label: "Where is SŌMA?",
    prompt: "Where is SŌMA located?",
    icon: MapPin,
  },
];

/* =========================================================
   INITIAL MESSAGE
========================================================= */

const starterMessages = [
  {
    role: "assistant",
    content:
      "Good evening. I’m the SŌMA Concierge. I can help with the menu, dining experience, opening hours, location, and reservation guidance.",
  },
];

/* =========================================================
   RESTAURANT KNOWLEDGE
========================================================= */

const restaurantContext = `
You are SŌMA Concierge, the digital concierge for SŌMA.

RESTAURANT:
SŌMA — Modern Japanese Dining

LOCATION:
Road 12, Gulshan 1,
Dhaka 1212, Bangladesh

OPENING HOURS:
Sunday–Thursday: 12:00–23:00
Friday: 16:00–00:00
Saturday: 12:00–00:00

CONTACT:
Phone: +880 1XXX-XXXXXX
Email: reservations@soma.example
Instagram: @soma.dhaka

KNOWN MENU CATEGORIES:
- Signature
- Sushi
- Robata
- Desserts

KNOWN SIGNATURE EXAMPLE:
- Wagyu Tataki

RESERVATIONS:
Guests can submit a reservation request through the website.
A reservation is NOT confirmed until the SŌMA team contacts the guest.

IMPORTANT RULES:
- Never claim real-time table availability.
- Never claim that a reservation has been successfully booked.
- Never invent prices.
- Never invent dishes.
- Never invent ingredients.
- Never invent promotions.
- Never invent restaurant policies.
- Never invent opening hours.
- Never invent availability.
- If information is unknown, clearly say that the SŌMA team should confirm it.
- For allergies or dietary restrictions, tell guests to contact SŌMA directly and mention their requirements before dining.
- Never guarantee that a dish is allergen-free.
- Do not provide medical advice.
- Keep answers concise.
- Sound refined, warm, calm, and human.
- Avoid sounding like a generic customer-support bot.
- When appropriate, guide the guest toward the reservation section.
`;

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function SomaConcierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /* =======================================================
     GEMINI API KEY
  ======================================================= */

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  /* =======================================================
     GEMINI CLIENT
  ======================================================= */

  const ai = useMemo(() => {
    if (!apiKey) {
      console.error(
        "SŌMA Concierge: VITE_GEMINI_API_KEY is missing."
      );

      return null;
    }

    return new GoogleGenAI({
      apiKey,
    });
  }, [apiKey]);

  /* =======================================================
     DETECT CURRENT SECTION
  ======================================================= */

  useEffect(() => {
    const sectionIds = [
      "story",
      "menu",
      "experience",
      "gallery",
      "visit",
      "reserve",
    ];

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setCurrentSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    if (window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    }

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 350);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
    };
  }, [open]);

  /* =======================================================
     AUTO SCROLL CHAT
  ======================================================= */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, sending]);

  /* =======================================================
     CONTEXTUAL SUGGESTION
  ======================================================= */

  const contextualSuggestion = useMemo(() => {
    switch (currentSection) {
      case "menu":
        return {
          eyebrow: "Exploring the menu?",
          text:
            "Ask me to suggest a first-time SŌMA dining experience.",
          prompt:
            "I'm looking at the menu. What would you recommend for a first-time guest?",
        };

      case "experience":
        return {
          eyebrow: "Planning the evening?",
          text:
            "I can explain what the SŌMA dining experience is like.",
          prompt:
            "What kind of dining experience should I expect at SŌMA?",
        };

      case "visit":
        return {
          eyebrow: "Planning your visit?",
          text:
            "Ask about the location, opening hours, or contact details.",
          prompt:
            "Help me plan a visit to SŌMA.",
        };

      case "reserve":
        return {
          eyebrow: "Ready to reserve?",
          text:
            "I can explain how the SŌMA reservation process works.",
          prompt:
            "How does the SŌMA reservation process work?",
        };

      default:
        return {
          eyebrow: "Meet your concierge",
          text:
            "Ask about the menu, location, hours, or reservations.",
          prompt:
            "Tell me about SŌMA.",
        };
    }
  }, [currentSection]);

  /* =======================================================
     SEND MESSAGE
  ======================================================= */

  const sendMessage = async (customPrompt = null) => {
    const text = (
      customPrompt !== null ? customPrompt : input
    ).trim();

    if (!text || sending) return;

    setError("");
    setInput("");

    const userMessage = {
      role: "user",
      content: text,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedMessages);
    setSending(true);

    try {
      /* ---------------------------------------------------
         API KEY CHECK
      --------------------------------------------------- */

      if (!apiKey) {
        throw new Error(
          "VITE_GEMINI_API_KEY is missing. Check .env.local."
        );
      }

      if (!ai) {
        throw new Error(
          "Gemini client could not be initialized."
        );
      }

      /* ---------------------------------------------------
         BUILD CONVERSATION
      --------------------------------------------------- */

      const conversation = updatedMessages
        .map((message) => {
          const speaker =
            message.role === "user"
              ? "Guest"
              : "SŌMA Concierge";

          return `${speaker}: ${message.content}`;
        })
        .join("\n\n");

      console.log(
        "SŌMA Concierge → Sending request to Gemini..."
      );

      /* ---------------------------------------------------
         GEMINI REQUEST

         Google currently documents:
         @google/genai
         models.generateContent()
         gemini-3.7-flash
      --------------------------------------------------- */

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",

        contents: conversation,

        config: {
          systemInstruction: restaurantContext,

          maxOutputTokens: 500,

          thinkingConfig: {
            thinkingLevel: "low",
          },
        },
      });

      console.log(
        "SŌMA Concierge → Gemini response received."
      );

      /* ---------------------------------------------------
         READ RESPONSE
      --------------------------------------------------- */

      const reply = response?.text?.trim();

      if (!reply) {
        throw new Error(
          "Gemini returned an empty response."
        );
      }

      /* ---------------------------------------------------
         ADD ASSISTANT RESPONSE
      --------------------------------------------------- */

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: reply,
        },
      ]);
    } catch (err) {
      console.error(
        "SŌMA Concierge Gemini Error:",
        err
      );

      let readableError =
        "The concierge is temporarily unavailable. Please try again.";

      const errorMessage =
        err?.message?.toLowerCase?.() || "";

      /* ---------------------------------------------------
         FRIENDLY ERROR MESSAGES
      --------------------------------------------------- */

      if (
        errorMessage.includes("api key") ||
        errorMessage.includes("apikey")
      ) {
        readableError =
          "The SŌMA Concierge API key is missing or invalid.";
      } else if (
        errorMessage.includes("403") ||
        errorMessage.includes("permission")
      ) {
        readableError =
          "The Gemini API key was rejected. Please check the API key and its permissions.";
      } else if (
        errorMessage.includes("429") ||
        errorMessage.includes("quota") ||
        errorMessage.includes("rate")
      ) {
        readableError =
          "The Concierge has reached its current request limit. Please try again shortly.";
      } else if (
        errorMessage.includes("404") ||
        errorMessage.includes("not found")
      ) {
        readableError =
          "The selected Gemini model is unavailable for this API configuration.";
      } else if (
        errorMessage.includes("network") ||
        errorMessage.includes("fetch")
      ) {
        readableError =
          "The connection to the Concierge was interrupted. Please try again.";
      }

      setError(readableError);
    } finally {
      setSending(false);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  };

  /* =======================================================
     RESERVATION
  ======================================================= */

  const goToReservation = () => {
    setOpen(false);

    setTimeout(() => {
      document
        .getElementById("reserve")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 250);
  };

  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    sendMessage();
  };

  /* =======================================================
     UI
  ======================================================= */

  return (
    <>
      {/* ===================================================
          FLOATING BUTTON
      =================================================== */}

      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.4,
            }}
            className="fixed bottom-5 right-5 z-[120] flex items-center gap-3 sm:bottom-7 sm:right-7"
          >
            {/* Desktop label */}

            <motion.div
              initial={{
                opacity: 0,
                x: 12,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="hidden rounded-full border border-white/10 bg-[#11110f]/90 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#f3efe7]/65 shadow-2xl backdrop-blur-xl sm:block"
            >
              Ask SŌMA
            </motion.div>

            {/* Button */}

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open SŌMA Concierge"
              className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-[#b98b5b]/45 bg-[#11110f] text-[#f3efe7] shadow-[0_20px_70px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:scale-105 sm:h-16 sm:w-16"
            >
              <span className="absolute inset-0 rounded-full border border-[#b98b5b]/30 opacity-0 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100" />

              <Sparkles
                size={19}
                strokeWidth={1.5}
              />

              <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-[#11110f] bg-[#b98b5b]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================================================
          CHAT PANEL
      =================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[150]"
          >
            {/* Backdrop */}

            <motion.button
              type="button"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setOpen(false)}
              aria-label="Close concierge"
              className="absolute inset-0 bg-black/65 backdrop-blur-[3px]"
            />

            {/* Panel */}

            <motion.aside
              initial={{
                x: "105%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "105%",
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-0 right-0 top-0 flex w-full flex-col overflow-hidden bg-[#11110f] text-[#f3efe7] shadow-[-30px_0_100px_rgba(0,0,0,0.35)] sm:w-[440px] lg:w-[470px]"
            >
              {/* =================================================
                  HEADER
              ================================================= */}

              <div className="relative border-b border-white/10 px-5 pb-5 pt-5 sm:px-7 sm:pt-7">
                <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#b98b5b]/10 blur-3xl" />

                <div className="relative flex items-start justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <Sparkles
                        size={14}
                        className="text-[#b98b5b]"
                        strokeWidth={1.5}
                      />

                      <span className="text-[9px] uppercase tracking-[0.28em] text-[#b98b5b]">
                        Digital concierge
                      </span>
                    </div>

                    <h2 className="mt-3 font-display text-4xl leading-none tracking-[-0.03em]">
                      SŌMA
                      <i className="ml-2 text-[#b98b5b]">
                        Concierge
                      </i>
                    </h2>

                    <p className="mt-3 max-w-xs text-xs leading-5 text-[#f3efe7]/45">
                      Menu guidance, opening hours,
                      location and reservation assistance.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close SŌMA Concierge"
                    className="relative z-30 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 hover:bg-white hover:text-black"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* =================================================
                  CONTEXTUAL PROMPT
              ================================================= */}

              <div className="border-b border-white/10 px-5 py-4 sm:px-7">
                <button
                  type="button"
                  onClick={() =>
                    sendMessage(
                      contextualSuggestion.prompt
                    )
                  }
                  disabled={sending}
                  className="group w-full text-left disabled:opacity-50"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.25em] text-[#b98b5b]">
                        {contextualSuggestion.eyebrow}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/55">
                        {contextualSuggestion.text}
                      </p>
                    </div>

                    <ChevronRight
                      size={15}
                      className="shrink-0 text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>
                </button>
              </div>

              {/* =================================================
                  MESSAGES
              ================================================= */}

              <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
                <div className="space-y-5">
                  {messages.map((message, index) => {
                    const isAssistant =
                      message.role === "assistant";

                    return (
                      <motion.div
                        key={`${message.role}-${index}`}
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        className={`flex ${
                          isAssistant
                            ? "justify-start"
                            : "justify-end"
                        }`}
                      >
                        <div
                          className={`max-w-[88%] ${
                            isAssistant
                              ? "border border-white/10 bg-white/[0.035]"
                              : "bg-[#b98b5b] text-[#11110f]"
                          } px-4 py-3.5`}
                        >
                          {isAssistant && (
                            <div className="mb-2 flex items-center gap-2">
                              <Bot
                                size={12}
                                className="text-[#b98b5b]"
                                strokeWidth={1.6}
                              />

                              <span className="text-[8px] uppercase tracking-[0.23em] text-[#b98b5b]">
                                SŌMA
                              </span>
                            </div>
                          )}

                          <p
                            className={`whitespace-pre-wrap text-[13px] leading-6 ${
                              isAssistant
                                ? "text-white/72"
                                : "text-[#11110f]"
                            }`}
                          >
                            {message.content}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* =================================================
                      TYPING INDICATOR
                  ================================================= */}

                  {sending && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="flex justify-start"
                    >
                      <div className="border border-white/10 bg-white/[0.035] px-4 py-4">
                        <div className="mb-3 flex items-center gap-2">
                          <Sparkles
                            size={12}
                            className="text-[#b98b5b]"
                            strokeWidth={1.5}
                          />

                          <span className="text-[8px] uppercase tracking-[0.23em] text-[#b98b5b]">
                            Concierge is thinking
                          </span>
                        </div>

                        <div className="flex gap-1.5">
                          {[0, 1, 2].map((item) => (
                            <motion.span
                              key={item}
                              animate={{
                                opacity: [0.2, 1, 0.2],
                                y: [0, -3, 0],
                              }}
                              transition={{
                                duration: 1.1,
                                repeat: Infinity,
                                delay: item * 0.16,
                              }}
                              className="h-1.5 w-1.5 rounded-full bg-[#b98b5b]"
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* =================================================
                      ERROR
                  ================================================= */}

                  {error && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="border border-[#b98b5b]/25 bg-[#b98b5b]/[0.06] px-4 py-3"
                    >
                      <p className="text-xs leading-5 text-white/60">
                        {error}
                      </p>

                      <button
                        type="button"
                        onClick={() => {
                          setError("");
                          inputRef.current?.focus();
                        }}
                        className="mt-3 text-[9px] uppercase tracking-[0.2em] text-[#b98b5b] hover:text-white"
                      >
                        Try again
                      </button>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* =================================================
                  QUICK PROMPTS
              ================================================= */}

              {messages.length <= 2 && (
                <div className="border-t border-white/10 px-5 py-4 sm:px-7">
                  <p className="mb-3 text-[9px] uppercase tracking-[0.24em] text-white/30">
                    Suggested
                  </p>

                  <div className="space-y-2">
                    {quickPrompts.map((item) => {
                      const Icon = item.icon;

                      return (
                        <button
                          type="button"
                          key={item.label}
                          onClick={() =>
                            sendMessage(item.prompt)
                          }
                          disabled={sending}
                          className="group flex w-full items-center justify-between border border-white/10 px-3.5 py-3 text-left transition-colors duration-300 hover:border-[#b98b5b]/40 hover:bg-[#b98b5b]/[0.05] disabled:opacity-40"
                        >
                          <span className="flex items-center gap-3">
                            <Icon
                              size={14}
                              strokeWidth={1.4}
                              className="text-[#b98b5b]"
                            />

                            <span className="text-xs text-white/65">
                              {item.label}
                            </span>
                          </span>

                          <ArrowUpRight
                            size={13}
                            className="text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* =================================================
                  INPUT AREA
              ================================================= */}

              <div className="border-t border-white/10 bg-[#0d0d0c] px-5 py-4 sm:px-7">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={goToReservation}
                    className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-[#b98b5b]"
                  >
                    <CalendarDays
                      size={13}
                      strokeWidth={1.5}
                    />

                    Reserve a table

                    <ArrowUpRight
                      size={12}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>

                  <span className="text-[8px] uppercase tracking-[0.16em] text-white/20">
                    AI assisted
                  </span>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="flex items-end gap-2 border border-white/10 bg-white/[0.035] p-2 focus-within:border-[#b98b5b]/40"
                >
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(event) =>
                      setInput(event.target.value)
                    }
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" &&
                        !event.shiftKey &&
                        window.innerWidth >= 768
                      ) {
                        event.preventDefault();

                        sendMessage();
                      }
                    }}
                    rows={1}
                    disabled={sending}
                    placeholder={
                      sending
                        ? "Concierge is thinking..."
                        : "Ask SŌMA..."
                    }
                    className="max-h-28 min-h-[42px] flex-1 resize-none bg-transparent px-2 py-2.5 text-[13px] leading-5 text-white outline-none placeholder:text-white/25 disabled:opacity-50"
                  />

                  <button
                    type="submit"
                    disabled={!input.trim() || sending}
                    aria-label="Send message"
                    className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#b98b5b] text-[#11110f] transition-all hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-25"
                  >
                    <Send
                      size={15}
                      strokeWidth={1.6}
                    />
                  </button>
                </form>

                <div className="mt-3 flex items-start gap-2">
                  <MessageCircleMore
                    size={11}
                    className="mt-0.5 shrink-0 text-white/20"
                  />

                  <p className="text-[9px] leading-4 text-white/25">
                    AI-generated guidance may be imperfect.
                    Confirm allergies, availability, policies
                    and reservations directly with SŌMA.
                  </p>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}