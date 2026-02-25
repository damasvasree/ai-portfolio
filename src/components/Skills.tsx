import { motion } from "framer-motion";

import ParticlesBg from "./effects/ParticlesBg";
import NeuralLines from "./effects/NeuralLines";
const skills = [
  {
    title: "AI / GenAI",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "LLMs",
      "GenAI",
      "Prompt Engineering",
    ],
  },
  {
    title: "Programming",
    items: ["Python", "JavaScript", "Java", "C++", "C"],
  },
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "FastAPI"],
  },
  {
    title: "Database",
    items: ["MongoDB", "Pandas", "Data Processing"],
  },
  {
    title: "Cloud & Tools",
    items: ["Git", "GitHub", "Docker", "AWS", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-20 py-32">

  <ParticlesBg />
  <NeuralLines />
  

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-24"
      >
        Skills
      </motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

        {skills.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="
              relative p-10 rounded-2xl overflow-hidden
              bg-white/80 dark:bg-[#0F172A]/80
              backdrop-blur-xl
              border border-gray-200 dark:border-cyan-500/20
              transition-all duration-500
            "
          >

            {/* GLOW LAYER */}
            <div className="
              absolute inset-0 opacity-0 hover:opacity-100
              bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10
              blur-2xl transition
            " />

            <h3 className="text-xl font-semibold text-cyan-400 mb-6 relative z-10">
              {category.title}
            </h3>
            <div className="mt-6 mb-8 space-y-4">
  {category.items.map((skill: string, i: number) => (
    <div key={i}>
      <div className="text-xs text-gray-400 mb-1">{skill}</div>

      <div className="h-2 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
          style={{
            width: `${Math.floor(Math.random() * 40) + 60}%`,
          }}
        />
      </div>
    </div>
  ))}
</div>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-3 relative z-10">
              {category.items.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.05,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.08,
                  }}
                  className="
                    px-4 py-2 text-sm rounded-full
                    bg-cyan-500/10
                    text-cyan-400
                    border border-cyan-400/20
                    hover:bg-cyan-500/20
                    hover:shadow-[0_0_18px_rgba(6,182,212,0.6)]
                    transition
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}