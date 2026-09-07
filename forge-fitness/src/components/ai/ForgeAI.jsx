import { useEffect, useRef, useState } from "react";
import { GoogleGenAI } from "@google/genai";
import {
  Bot,
  Dumbbell,
  Send,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const quickPrompts = [
  {
    label: "Build me a workout",
    icon: Dumbbell,
  },
  {
    label: "Help me gain muscle",
    icon: Zap,
  },
  {
    label: "Improve my conditioning",
    icon: Sparkles,
  },
  {
    label: "What should I eat?",
    icon: Bot,
  },
];

const systemInstruction = `
You are FORGE AI, the digital training assistant for FORGE Performance Club in Dhaka, Bangladesh.

PERSONALITY:
- Confident
- Direct
- Professional
- Motivating but not cheesy
- Concise
- Speak like an experienced performance coach

FORGE PROGRAMS:

STRENGTH:
Build raw strength through structured resistance training and compound movements.

HYPERTROPHY:
Build muscle size using progressive resistance training and structured volume.

CONDITIONING:
Improve cardiovascular fitness, endurance and overall work capacity.

PERFORMANCE:
Develop athletic movement, power, speed, strength and conditioning.

YOU CAN HELP WITH:
- Workout structures
- Exercise explanations
- Strength training
- Muscle building
- Conditioning
- General fitness
- Recovery basics
- General nutrition guidance
- Choosing a FORGE training program
- Training consistency

WHEN NEEDED, ASK ABOUT:
- Training goal
- Experience level
- Training days per week
- Session duration
- Equipment availability

SAFETY:
You are not a doctor.
Do not diagnose injuries or medical conditions.
Do not prescribe medication.
Do not recommend dangerous extreme diets.

If someone describes chest pain, severe pain, difficulty breathing, fainting,
serious injury or another emergency, tell them to seek urgent medical attention.

For medical conditions, pregnancy, significant injuries or other health
concerns, recommend speaking with an appropriate healthcare professional
before exercising.

FORGE MEMBERSHIP:
FORGE has BASE, FORGE and ELITE membership options.
Do not invent exact availability or benefits beyond what is provided.
Tell users to contact the FORGE team for current membership details.

Never claim to access:
- Membership accounts
- Medical records
- Private information
- Gym attendance
- Personal health records

Keep answers practical and relatively concise.
`;

export default function ForgeAI() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "I'm FORGE AI. Tell me what you're training for.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /* =========================================================
     AUTO SCROLL
  ========================================================= */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  /* =========================================================
     FOCUS INPUT WHEN OPEN
  ========================================================= */

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 300);

    return () => clearTimeout(timer);
  }, [open]);

  /* =========================================================
     LOCK BODY SCROLL WHILE CHAT IS OPEN
  ========================================================= */

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  /* =========================================================
     GEMINI REQUEST
  ========================================================= */

  const askGemini = async (userMessage) => {
    const conversation = messages.map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [
        {
          text: message.text,
        },
      ],
    }));

    conversation.push({
      role: "user",
      parts: [
        {
          text: userMessage,
        },
      ],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",

      contents: conversation,

      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 700,
      },
    });

    return response.text;
  };

  /* =========================================================
     SEND MESSAGE
  ========================================================= */

  const sendMessage = async (messageOverride = null) => {
    const userMessage = (messageOverride ?? input).trim();

    if (!userMessage || loading) {
      return;
    }

    setInput("");

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setLoading(true);

    try {
      const response = await askGemini(userMessage);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text:
            response ||
            "I couldn't generate a response right now. Try again.",
        },
      ]);
    } catch (error) {
      console.error("FORGE AI:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text:
            "I couldn't connect to FORGE AI right now. Please check the Gemini API configuration and try again.",
        },
      ]);
    } finally {
      setLoading(false);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  /* =========================================================
     FORM
  ========================================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    sendMessage();
  };

  /* =========================================================
     KEYBOARD
  ========================================================= */

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      sendMessage();
    }
  };

  /* =========================================================
     CLOSE
  ========================================================= */

  const closeChat = () => {
    setOpen(false);
  };

  return (
    <>
      {/* =====================================================
          FLOATING FORGE AI BUTTON
      ===================================================== */}

      {!open && (
        <div className="fixed bottom-6 right-5 z-[9999] sm:bottom-8 sm:right-8">

          {/* Tooltip */}

          <div className="pointer-events-none absolute right-[78px] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#111]/95 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/60 shadow-2xl backdrop-blur-xl sm:block">
            Ask FORGE AI
          </div>

          {/* AI Button */}

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open FORGE AI"
            className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#d7ff38] text-[#090909] shadow-[0_0_45px_rgba(215,255,56,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_65px_rgba(215,255,56,0.35)]"
          >
            {/* Outer ring */}

            <span className="pointer-events-none absolute inset-[-7px] rounded-full border border-[#d7ff38]/30" />

            {/* Pulse */}

            <span className="pointer-events-none absolute inset-[-13px] animate-ping rounded-full border border-[#d7ff38]/10" />

            <Sparkles
              size={22}
              strokeWidth={2.2}
              className="transition-transform duration-500 group-hover:rotate-12"
            />

            {/* AI badge */}

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#090909] text-[7px] font-black text-[#d7ff38]">
              AI
            </span>
          </button>
        </div>
      )}

      {/* =====================================================
          CHAT EXPERIENCE
      ===================================================== */}

      {open && (
        <div className="fixed inset-0 z-[10000]">

          {/* =================================================
              BACKDROP
          ================================================= */}

          <button
            type="button"
            aria-label="Close FORGE AI"
            onClick={closeChat}
            className="absolute inset-0 z-0 cursor-default bg-black/65 backdrop-blur-[3px]"
          />

          {/* =================================================
              CHAT PANEL
          ================================================= */}

          <aside className="absolute right-0 top-0 z-10 flex h-full w-full max-w-[470px] flex-col overflow-hidden bg-[#0b0b0b] text-[#f4f4f0] shadow-[-30px_0_100px_rgba(0,0,0,0.6)]">

            {/* Lime top line */}

            <div className="absolute left-0 top-0 z-20 h-[3px] w-full bg-[#d7ff38]" />

            {/* =================================================
                HEADER
            ================================================= */}

            <header className="shrink-0 border-b border-white/10 px-5 py-5 sm:px-7">

              <div className="flex items-center justify-between">

                {/* Identity */}

                <div className="flex items-center gap-3">

                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d7ff38] text-[#090909]">
                    <Sparkles size={18} />

                    <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-[#0b0b0b] bg-[#d7ff38]" />
                  </div>

                  <div>
                    <p className="font-['Oswald'] text-xl uppercase tracking-wide">
                      FORGE AI
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d7ff38]" />

                      <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
                        Training Intelligence
                      </span>
                    </div>
                  </div>

                </div>

                {/* CLOSE BUTTON */}

                <button
                  type="button"
                  onClick={closeChat}
                  aria-label="Close FORGE AI"
                  className="relative z-30 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#111] text-white/50 transition-all duration-200 hover:border-[#d7ff38]/50 hover:bg-[#d7ff38] hover:text-[#090909]"
                >
                  <X size={19} strokeWidth={2} />
                </button>

              </div>
            </header>

            {/* =================================================
                MESSAGE AREA
            ================================================= */}

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-7">

              {/* Intro */}

              {messages.length === 1 && (
                <div className="mb-8">

                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d7ff38]">
                    Your Digital Coach
                  </p>

                  <h2 className="mt-3 font-['Oswald'] text-5xl uppercase leading-[0.85] tracking-[-0.03em]">
                    Train
                    <br />

                    <span className="text-white/15">
                      Smarter.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-sm text-xs leading-6 text-white/40">
                    Ask about workouts, strength, muscle building,
                    conditioning, recovery or which FORGE program fits
                    your goal.
                  </p>

                </div>
              )}

              {/* Quick Questions */}

              {messages.length === 1 && (
                <div className="mb-9 grid grid-cols-2 gap-2">

                  {quickPrompts.map((prompt) => {
                    const Icon = prompt.icon;

                    return (
                      <button
                        key={prompt.label}
                        type="button"
                        onClick={() => sendMessage(prompt.label)}
                        disabled={loading}
                        className="group flex min-h-[82px] flex-col justify-between border border-white/10 bg-white/[0.025] p-3.5 text-left transition-all duration-200 hover:border-[#d7ff38]/40 hover:bg-[#d7ff38]/5 disabled:pointer-events-none disabled:opacity-30"
                      >
                        <Icon
                          size={16}
                          strokeWidth={1.5}
                          className="text-[#d7ff38]"
                        />

                        <span className="text-[9px] font-bold uppercase leading-4 tracking-[0.08em] text-white/45 transition-colors group-hover:text-white">
                          {prompt.label}
                        </span>
                      </button>
                    );
                  })}

                </div>
              )}

              {/* Messages */}

              <div className="space-y-5">

                {messages.map((message, index) => {
                  const isUser = message.role === "user";

                  return (
                    <div
                      key={`${message.role}-${index}`}
                      className={`flex ${
                        isUser ? "justify-end" : "justify-start"
                      }`}
                    >

                      <div
                        className={`max-w-[90%] ${
                          isUser
                            ? "bg-[#d7ff38] text-[#090909]"
                            : "border border-white/10 bg-white/[0.035] text-white/70"
                        }`}
                      >

                        {!isUser && (
                          <div className="border-b border-white/10 px-4 py-2">
                            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#d7ff38]">
                              FORGE AI
                            </span>
                          </div>
                        )}

                        <div className="whitespace-pre-wrap px-4 py-3 text-xs leading-6">
                          {message.text}
                        </div>

                      </div>
                    </div>
                  );
                })}

                {/* Loading */}

                {loading && (
                  <div className="flex justify-start">

                    <div className="border border-white/10 bg-white/[0.035] px-4 py-4">

                      <div className="flex items-center gap-1.5">

                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#d7ff38]" />

                        <span
                          className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#d7ff38]"
                          style={{
                            animationDelay: "120ms",
                          }}
                        />

                        <span
                          className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#d7ff38]"
                          style={{
                            animationDelay: "240ms",
                          }}
                        />

                      </div>

                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />

              </div>
            </div>

            {/* =================================================
                INPUT
            ================================================= */}

            <div className="shrink-0 border-t border-white/10 bg-[#0b0b0b] p-4 sm:p-5">

              <form onSubmit={handleSubmit}>

                <div className="relative border border-white/10 bg-white/[0.025] transition-colors focus-within:border-[#d7ff38]/50">

                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={loading}
                    rows={2}
                    placeholder={
                      loading
                        ? "FORGE AI is thinking..."
                        : "Ask FORGE AI..."
                    }
                    className="w-full resize-none bg-transparent px-4 pb-12 pt-4 text-xs leading-6 text-white outline-none placeholder:text-white/20 disabled:opacity-50"
                  />

                  <button
                    type="submit"
                    disabled={!input.trim() || loading}
                    aria-label="Send message"
                    className="absolute bottom-2.5 right-2.5 flex h-9 w-9 items-center justify-center bg-[#d7ff38] text-[#090909] transition-all hover:bg-[#e5ff7c] disabled:pointer-events-none disabled:opacity-20"
                  >
                    <Send size={15} strokeWidth={2} />
                  </button>

                </div>

              </form>

              <div className="mt-3 flex items-start gap-2">

                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-white/20" />

                <p className="text-[8px] leading-4 text-white/20">
                  FORGE AI provides general fitness information and is not a
                  substitute for professional medical advice.
                </p>

              </div>
            </div>

          </aside>
        </div>
      )}
    </>
  );
}