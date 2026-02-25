import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-20 py-32">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-20"
      >
        Experience
      </motion.h2>

      {/* EXPERIENCE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
  relative group
  max-w-4xl mx-auto p-10 rounded-3xl
  bg-white/70 dark:bg-[#0F172A]/70
  backdrop-blur-xl
  border border-gray-200 dark:border-cyan-500/20
  shadow-xl
  transition-all duration-500

  before:absolute before:inset-0 before:rounded-3xl
  before:bg-cyan-500/0 before:blur-2xl before:opacity-0
  before:transition before:duration-500

  hover:before:bg-cyan-500/30 hover:before:opacity-70
  hover:shadow-[0_0_60px_rgba(6,182,212,0.6)]
  hover:border-cyan-400/60
"
      >
        <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
          UI/UX Intern — InternPE
        </h3>

        <p className="text-sm text-gray-500 mb-6">
          Feb 2026 – Mar 2026 · Remote
        </p>

        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li>• Designed user interfaces and improved UX flows</li>
          <li>• Worked on responsive layouts and accessibility</li>
          <li>• Built production-ready UI components</li>
          <li>• Collaborated on real-world product design decisions</li>
        </ul>
      </motion.div>
    </section>
  );
}