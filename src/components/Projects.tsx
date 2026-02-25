import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "E-Commerce Cohorts Dashboard",
    description:
      "Developed a real-time customer retention analytics dashboard using React and FastAPI with WebSocket integration. Optimized backend queries and data processing pipelines to improve response performance and scalability.",
    tech: ["React", "FastAPI", "WebSocket", "Analytics"],
    link: "https://github.com/damasvasree-nagaraj/E-Commerce-Cohorts-Dashboard",
  },
  {
    title: "Next-Gen Digi Health",
    description:
      "Built a secure telemedicine web platform enabling digital consultations, authentication workflows, and scalable frontend architecture with clean UI/UX design principles.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/damasvasree-nagaraj/Next-Gen-Digi-Health",
  },
  {
    title: "Cyber Range Scheduler",
    description:
      "Designed a real-time scheduling platform for cybersecurity labs using React, Node.js, and MongoDB, ensuring efficient resource allocation and conflict-free session management.",
    tech: ["React", "Node", "MongoDB"],
    link: "https://github.com/damasvasree-nagaraj/Cyber-Range-Scheduler",
  },
  {
    title: "CTC to In-Hand",
    description:
      "Engineered a salary breakdown calculator that computes in-hand salary, tax deductions, and compensation insights using dynamic financial logic.",
    tech: ["JavaScript"],
    link: "https://github.com/damasvasree-nagaraj/CTC-to-InHand",
  },
  {
    title: "Digi Health AI Chatbot",
    description:
      "Developed an ML-based healthcare chatbot leveraging trained classification models and REST API integration to provide symptom prediction and conversational assistance.",
    tech: ["Python", "Machine Learning"],
    link: "https://github.com/damasvasree-nagaraj/Digi-Health-AI-chatbot",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  /* SCROLL GLOW EFFECT */
  useEffect(() => {
    const line = document.querySelector(".timeline-line") as HTMLElement | null;

    const handleScroll = () => {
      if (!line) return;
      const rect = line.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        line.classList.add("active");
      } else {
        line.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="relative px-6 md:px-20 py-32">

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-24">
        Projects
      </h2>

      <div className="flex flex-col gap-28 relative">

        {/* CENTER LINE */}
        <div className="timeline-line absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px]" />

        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className="flex w-full items-center">

              {/* LEFT */}
              <div className={`w-1/2 ${isLeft ? "pr-12 text-right" : ""}`}>
                {isLeft && (
                  <ProjectCard
                    project={project}
                    setSelectedProject={setSelectedProject}
                  />
                )}
              </div>

              {/* GAP */}
              <div className="w-[2px]" />

              {/* RIGHT */}
              <div className={`w-1/2 ${!isLeft ? "pl-12" : ""}`}>
                {!isLeft && (
                  <ProjectCard
                    project={project}
                    setSelectedProject={setSelectedProject}
                  />
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* GITHUB BUTTON */}
      <div className="text-center mt-32">
        <a
          href="https://github.com/damasvasree-nagaraj"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-3 rounded-xl border border-cyan-500 hover:bg-cyan-500/10 transition"
        >
          View All Projects on GitHub →
        </a>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999] flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl w-full rounded-3xl p-10
                         bg-white dark:bg-[#0F172A]
                         border border-gray-200 dark:border-cyan-500/20
                         shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.tech.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-4 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-medium"
                >
                  View GitHub
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-xl border border-gray-300 dark:border-white/20"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}


/* PROJECT CARD */
function ProjectCard({ project, setSelectedProject }: any) {
  return (
    <motion.div
      onClick={() => setSelectedProject(project)}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative cursor-pointer block p-8 rounded-2xl
           bg-white/80 dark:bg-[#0F172A]/70 backdrop-blur-xl
           border border-gray-200 dark:border-cyan-500/20
           transition-all duration-300

           before:absolute before:inset-0 before:rounded-2xl
           before:bg-cyan-500/0 before:blur-2xl before:opacity-0
           before:transition before:duration-500

           hover:before:bg-cyan-500/30 hover:before:opacity-70
           hover:shadow-[0_0_60px_rgba(6,182,212,0.6)]
           hover:border-cyan-400/60"
    >
      <h3 className="text-xl font-semibold text-cyan-400 mb-3">
        {project.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech: string, i: number) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}