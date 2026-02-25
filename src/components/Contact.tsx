import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 blur-3xl pointer-events-none" />

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-6"
      >
        Contact
      </motion.h2>

      {/* SUBTITLE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-16 space-y-2"
      >
        <p className="text-gray-400">
          Let’s build intelligent AI systems together.
        </p>

        <p className="text-cyan-400 font-medium">
          Open to internship opportunities and AI-focused engineering roles.
        </p>
      </motion.div>

      {/* MAIN CARD WRAPPER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto relative"
      >

        {/* ANIMATED BORDER */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 blur-xl opacity-30 animate-pulse" />

        {/* GLASS CARD */}
        <div className="
          relative p-12 rounded-3xl
          bg-white/70 dark:bg-[#0F172A]/70
          backdrop-blur-2xl
          border border-gray-200 dark:border-cyan-500/20
          shadow-2xl
        ">

          {/* HEADER */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
              Let’s Connect 🚀
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              Open for AI, Cloud, and Software Engineering opportunities,
              collaborations, and innovative projects.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-6">

            <motion.a
              whileHover={{ scale: 1.06 }}
              href="mailto:damasvasree@gmail.com?subject=Opportunity%20Regarding%20Your%20Portfolio&body=Hello%20Damasvasree,%0D%0A%0D%0AI%20came%20across%20your%20portfolio..."
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_rgba(6,182,212,0.8)]"
            >
              Email Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.06 }}
              href="https://github.com/damasvasree-nagaraj"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-xl border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
            >
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.06 }}
              href="https://www.linkedin.com/in/damasvasree"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
            >
              LinkedIn
            </motion.a>

          </div>

          {/* CONTACT DETAILS */}
          <div className="mt-12 text-center text-sm text-gray-500 space-y-2">
            <p><span className="text-cyan-400">Email:</span> damasvasree@gmail.com</p>
            <p><span className="text-cyan-400">LinkedIn:</span> linkedin.com/in/damasvasree</p>
            <p><span className="text-cyan-400">Location:</span> India</p>
          </div>

        </div>
      </motion.div>

    </section>
  );
}