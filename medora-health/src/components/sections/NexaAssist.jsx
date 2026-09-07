import { useEffect, useRef, useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  CalendarDays,
  Clock3,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const SYSTEM_INSTRUCTION = `
You are NEXA AI, the AI assistant for NEXA Health.

NEXA Health is a fictional premium cardiovascular clinic in Dhaka,
Bangladesh.

Your purpose is to help website visitors with:

- General health education
- General cardiovascular information
- Explaining medical terminology
- NEXA Health services
- Clinic information
- Appointment information
- Preparing for a medical consultation

IMPORTANT MEDICAL SAFETY RULES:

You are an AI assistant, NOT a doctor.

Never:
- Diagnose a person.
- Tell someone they definitely have a disease.
- Prescribe medication.
- Tell someone to start, stop, or change medication.
- Create personalized treatment plans.
- Interpret personal medical test results as a diagnosis.
- Pretend that you examined the user.
- Pretend that you can access medical records.

You may explain general health concepts in simple language.

For personal medical concerns, recommend speaking with a qualified
healthcare professional.

EMERGENCY SAFETY:

If the user describes potentially serious symptoms such as:

- severe chest pain
- difficulty breathing
- fainting
- loss of consciousness
- signs of stroke
- severe allergic reaction
- sudden severe weakness
- another potentially life-threatening situation

do not attempt to diagnose them.

Tell them clearly that NEXA AI cannot handle emergencies and that they
should seek emergency medical care immediately or contact their local
emergency service.

PRIVACY:

Do not ask users to provide unnecessary sensitive medical information.

Do not request:
- passwords
- payment information
- identification numbers
- unnecessary private medical information

NEXA HEALTH INFORMATION:

Clinic:
NEXA Health

Location:
Gulshan, Dhaka, Bangladesh

Hours:
Monday–Thursday: 9:00 AM–6:00 PM
Friday: By appointment

Services:
- Cardiology consultation
- Cardiovascular assessment
- Heart health and prevention
- Cardiovascular risk management
- Ongoing cardiovascular follow-up

If someone wants to book an appointment, tell them they can use the
appointment form on the website.

STYLE:

Be professional, calm, friendly, and concise.

Use simple language.

Avoid unnecessary medical jargon.

Do not overwhelm visitors with unnecessarily long answers.

You can answer general questions beyond NEXA Health, but always stay
within the medical safety rules above.

If a question is completely unrelated to health or NEXA Health,
politely explain that you are designed primarily for NEXA and general
health information.
`;

const quickQuestions = [
  {
    icon: CalendarDays,
    label: "Book an appointment",
    message: "How can I book an appointment?",
  },
  {
    icon: Clock3,
    label: "Clinic hours",
    message: "What are your clinic hours?",
  },
  {
    icon: Stethoscope,
    label: "What do you treat?",
    message:
      "What conditions and health concerns does NEXA help with?",
  },
];

function NexaAssist() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi, I'm NEXA AI. I can help with general health questions, cardiovascular information, or anything about the NEXA clinic.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 250);

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const sendMessage = async (messageText) => {
    const text = messageText.trim();

    if (!text || isTyping) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    const conversation = [...messages, userMessage];

    setMessages(conversation);
    setInput("");
    setIsTyping(true);

    try {
      const contents = conversation.map((message) => ({
        role: message.role === "assistant" ? "model" : "user",
        parts: [
          {
            text: message.content,
          },
        ],
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.4,
          maxOutputTokens: 500,
        },
      });

      const answer =
        response.text?.trim() ||
        "I'm sorry, I couldn't generate a response right now.";

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: answer,
        },
      ]);
    } catch (error) {
      console.error("NEXA AI error:", error);

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    sendMessage(input);
  };

  const handleQuickQuestion = (question) => {
    sendMessage(question);
  };

  return (
    <>
      {/* =========================================================
          FLOATING AI BUTTON
      ========================================================= */}

      <div className="fixed bottom-6 right-6 z-[90] sm:bottom-8 sm:right-8">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                y: 20,
              }}
              className="relative"
            >
              {/* Pulsing ring */}

              <motion.div
                animate={{
                  scale: [1, 1.18, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full border border-cyan-400"
              />

              {/* Button */}

              <motion.button
                type="button"
                aria-label="Open NEXA AI"
                onClick={() => setIsOpen(true)}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/15 bg-[#081722]/95 shadow-2xl shadow-black/30 backdrop-blur-xl"
              >
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/[0.08]">
                  <Sparkles
                    size={21}
                    strokeWidth={1.5}
                    className="text-cyan-300"
                  />

                  <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                </div>

                {/* Tooltip */}

                <span className="pointer-events-none absolute right-[84px] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#102a43] opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 sm:block">
                  Ask NEXA AI
                </span>
              </motion.button>

              {/* AI label */}

              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="text-[9px] font-semibold tracking-[0.15em] text-slate-500">
                  AI
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================================
          BACKDROP
      ========================================================= */}

      <AnimatePresence>
        {isOpen && (
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
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[80] bg-slate-900/20 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      {/* =========================================================
          CHAT PANEL
      ========================================================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 80,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed bottom-0 right-0 top-0 z-[100] flex w-full flex-col overflow-hidden border-l border-slate-200 bg-white text-[#102a43] shadow-2xl shadow-slate-900/20 sm:bottom-5 sm:right-5 sm:top-auto sm:h-[min(740px,calc(100vh-40px))] sm:w-[440px] sm:rounded-3xl"
          >
            {/* =====================================================
                HEADER
            ===================================================== */}

            <div className="relative overflow-hidden border-b border-slate-200 bg-white px-6 py-6">
              <div className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-cyan-400/[0.08] blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* AI avatar */}

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50">
                    <Sparkles
                      size={21}
                      strokeWidth={1.5}
                      className="text-cyan-600"
                    />

                    <span className="absolute right-0.5 top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold tracking-[-0.02em] text-[#102a43]">
                        NEXA AI
                      </h3>

                      <span className="rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-cyan-700">
                        AI
                      </span>
                    </div>

                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                      Health assistant
                    </p>
                  </div>
                </div>

                {/* Close */}

                <button
                  type="button"
                  aria-label="Close NEXA AI"
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-[#102a43]"
                >
                  <X
                    size={18}
                    strokeWidth={1.6}
                  />
                </button>
              </div>
            </div>

            {/* =====================================================
                CONVERSATION
            ===================================================== */}

            <div className="flex-1 overflow-y-auto bg-white px-5 py-7 sm:px-6">
              {/* Date separator */}

              <div className="mb-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-100" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                  NEXA AI
                </span>

                <div className="h-px flex-1 bg-slate-100" />
              </div>

              <div className="space-y-6">
                <AnimatePresence initial={false}>
                  {messages.map((message) => {
                    const isUser = message.role === "user";

                    return (
                      <motion.div
                        key={message.id}
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className={`flex ${
                          isUser
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`flex max-w-[88%] gap-3 ${
                            isUser ? "flex-row-reverse" : ""
                          }`}
                        >
                          {/* AI avatar */}

                          {!isUser && (
                            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50">
                              <Bot
                                size={15}
                                strokeWidth={1.5}
                                className="text-cyan-600"
                              />
                            </div>
                          )}

                          <div>
                            {/* Message */}

                            <div
                              className={`rounded-2xl px-5 py-4 text-[15px] leading-7 ${
                                isUser
                                  ? "rounded-br-md bg-cyan-500 text-white"
                                  : "rounded-bl-md border border-slate-200 bg-slate-50 text-[#243b53]"
                              }`}
                            >
                              {message.content}
                            </div>

                            {/* Sender */}

                            <p
                              className={`mt-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-300 ${
                                isUser ? "text-right" : ""
                              }`}
                            >
                              {isUser ? "You" : "NEXA AI"}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {/* =================================================
                    TYPING INDICATOR
                ================================================= */}

                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="flex gap-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50">
                        <Bot
                          size={15}
                          strokeWidth={1.5}
                          className="text-cyan-600"
                        />
                      </div>

                      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-slate-200 bg-slate-50 px-5 py-4">
                        {[0, 1, 2].map((item) => (
                          <motion.span
                            key={item}
                            animate={{
                              y: [0, -4, 0],
                              opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: item * 0.12,
                            }}
                            className="h-1.5 w-1.5 rounded-full bg-cyan-500"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* =====================================================
                QUICK QUESTIONS
            ===================================================== */}

            <div className="border-t border-slate-200 bg-white px-5 py-4 sm:px-6">
              <div className="mb-3 flex items-center gap-2">
                <MessageCircle
                  size={12}
                  className="text-slate-400"
                />

                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  QUICK QUESTIONS
                </span>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1">
                {quickQuestions.map((question) => {
                  const QuestionIcon = question.icon;

                  return (
                    <button
                      key={question.label}
                      type="button"
                      disabled={isTyping}
                      onClick={() =>
                        handleQuickQuestion(question.message)
                      }
                      className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-[10px] font-medium text-slate-600 transition-all hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <QuestionIcon size={12} />

                      {question.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =====================================================
                INPUT
            ===================================================== */}

            <form
              onSubmit={handleSubmit}
              className="border-t border-slate-200 bg-white p-4 sm:p-5"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 transition-colors focus-within:border-cyan-300 focus-within:bg-white">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  disabled={isTyping}
                  placeholder="Ask NEXA anything..."
                  className="min-w-0 flex-1 bg-transparent px-2 py-3 text-[15px] text-[#102a43] outline-none placeholder:text-slate-400"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  aria-label="Send message"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white transition-all hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <Send
                    size={16}
                    strokeWidth={1.8}
                  />
                </button>
              </div>

              {/* Disclaimer */}

              <div className="mt-3 flex items-start gap-2 px-1">
                <ShieldCheck
                  size={13}
                  className="mt-0.5 shrink-0 text-slate-400"
                />

                <p className="text-[9px] leading-4 text-slate-400">
                  NEXA AI provides general information and is not a
                  substitute for professional medical advice. For
                  emergencies, contact local emergency services.
                </p>
              </div>
            </form>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default NexaAssist;