import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-20 py-32">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
      >
        <p className="mb-6">
          I am an AI-focused full-stack developer passionate about building
          production-ready intelligent systems. I specialize in React, Node.js,
          and Python-based machine learning pipelines.
        </p>

        <p>
          My projects focus on scalable backend APIs, real-time data systems,
          and integrating ML models into practical applications. I aim to
          contribute to impactful engineering teams where technology solves
          real-world problems.
        </p>
      </motion.div>
    </section>
  );
}