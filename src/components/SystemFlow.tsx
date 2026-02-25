import { motion } from "framer-motion";

const flow = [
  "User Interface (React)",
  "Backend API (Node / FastAPI)",
  "ML Engine (Python Models)",
  "Cloud Deployment (AWS / Vercel)",
];

export default function SystemFlow() {
  return (
    <section className="relative px-6 md:px-20 pt-32 pb-24 overflow-hidden">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-24"
      >
        AI System Architecture
      </motion.h2>

      {/* CENTER PIPELINE LINE */}
      <div className="absolute left-1/2 -translate-x-1/2 top-40 bottom-0 w-[4px] timeline-line">
        <div className="pipeline-dot" />
      </div>

      {/* FLOW ITEMS */}
      <div className="flex flex-col gap-24 relative z-10">

        {flow.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className="flex items-center w-full">

              {/* LEFT SIDE */}
              <div className={`flex-1 ${isLeft ? "pr-8 text-right" : ""}`}>
                {isLeft && <FlowCard text={item} direction="left" />}
              </div>

              {/* CENTER SPACE */}
              <div className="w-[40px]" />

              {/* RIGHT SIDE */}
              <div className={`flex-1 ${!isLeft ? "pl-8" : ""}`}>
                {!isLeft && <FlowCard text={item} direction="right" />}
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function FlowCard({ text, direction }: { text: string; direction: "left" | "right" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -120 : 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        relative inline-block px-10 py-6 rounded-2xl
        bg-white/80 dark:bg-[#0F172A]/80
        backdrop-blur-xl
        border border-gray-200 dark:border-cyan-500/20
        hover:shadow-[0_0_60px_rgba(6,182,212,0.55)]
        transition-all duration-500
      "
    >
      {/* CARD GLOW LAYER */}
      <div
        className="
          absolute inset-0 opacity-0 hover:opacity-100
          bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20
          blur-2xl transition
        "
      />

      {/* TEXT */}
      <h3 className="text-lg md:text-xl font-semibold text-cyan-400 relative z-10 whitespace-nowrap">
        {text}
      </h3>
    </motion.div>
  );
}