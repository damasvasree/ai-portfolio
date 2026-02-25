import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([
    { sender: "bot", text: "Hi 👋 I’m Damasvasree’s AI assistant. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const knowledgeBase = {
    intro:
      "Damasvasree is an AI-focused full-stack developer building intelligent systems, cloud pipelines, and production-ready ML applications.",

    internship:
      "Yes! She is actively open to internship opportunities in AI, Cloud, and Software Engineering roles.",

    skills:
      "Her technical stack includes React, Node.js, FastAPI, Python, Machine Learning, MongoDB, Tailwind CSS, and Cloud deployment.",

    projects:
      "She has built real-time dashboards, telemedicine platforms, ML chatbots, scheduling systems, and analytics tools.",

    location:
      "She is based in India 🇮🇳 and available for remote collaboration.",

    experience:
      "She completed a UI/UX Internship at InternPE, focusing on user experience design and responsive interfaces.",

    education:
      "She is currently pursuing B.Tech in Artificial Intelligence and Data Science (2nd year).",

    schooling:
      "Her academic performance includes 93.4% in Grade 10 and 81.4% in Grade 12.",

      certification:
  "She completed the IBM Professional Machine Learning Certificate via Coursera, covering advanced ML concepts and deployment practices.",

    default:
      "You can ask about her skills, projects, internship availability, education, or experience 😊",
  };

  const detectIntent = (text: string) => {
    const lower = text.toLowerCase();

    if (/(who|about|introduce)/.test(lower)) return knowledgeBase.intro;
    if (/(intern|job|hire|opportunity)/.test(lower)) return knowledgeBase.internship;
    if (/(skill|stack|technology|tech)/.test(lower)) return knowledgeBase.skills;
    if (/(project|build|portfolio)/.test(lower)) return knowledgeBase.projects;
    if (/(where|location|based)/.test(lower)) return knowledgeBase.location;
    if (/(experience|internpe|ui\/ux)/.test(lower)) return knowledgeBase.experience;
    if (/(education|college|degree|btech)/.test(lower)) return knowledgeBase.education;
    if (/(school|10th|12th|grade)/.test(lower)) return knowledgeBase.schooling;
    if (/(certificate|certification|ibm|coursera)/.test(lower)) return knowledgeBase.certification;

    return knowledgeBase.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const reply = detectIntent(input);

    setTyping(true);
    setInput("");

    setTimeout(() => {
      typeMessage(reply);
    }, 600);
  };

  const typeMessage = (text: string) => {
    let i = 0;
    let current = "";

    const interval = setInterval(() => {
      current += text.charAt(i);
      i++;

      setMessages((prev) => {
        const last = prev[prev.length - 1];

        if (last?.sender === "bot" && last.typing) {
          return [
            ...prev.slice(0, -1),
            { sender: "bot", text: current, typing: true },
          ];
        } else {
          return [...prev, { sender: "bot", text: current, typing: true }];
        }
      });

      if (i >= text.length) {
        clearInterval(interval);
        setTyping(false);

        setMessages((prev) => {
          return [...prev.slice(0, -1), { sender: "bot", text }];
        });
      }
    }, 18);
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-cyan-500 text-black px-4 py-3 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition z-50"
      >
        💬 Ask about me
      </button>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-20 right-6 w-80 rounded-2xl p-4
                       bg-white dark:bg-[#0F172A]
                       border border-gray-200 dark:border-cyan-500/20
                       shadow-2xl z-50"
          >
            <div className="h-64 overflow-y-auto mb-3 space-y-2 text-sm">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-cyan-500 text-black text-right"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {typing && (
                <div className="text-gray-400 text-xs italic">
                  typing...
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask something..."
                className="flex-1 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-transparent"
              />
              <button
                onClick={handleSend}
                className="bg-cyan-500 px-3 rounded text-black"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}