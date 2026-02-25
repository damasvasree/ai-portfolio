import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Damasvasree 
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-cyan-400 text-xl"
          >
            AI & Cloud Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl"
          >
            Building intelligent AI systems, cloud pipelines, and real-world ML products that scale.
          </motion.p>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.9 }}
             className="mt-8 flex gap-4"
            >
           <a
            href="#projects"
             className="bg-cyan-500 hover:bg-cyan-400 text-black px-7 py-3 rounded-xl font-medium transition shadow-lg shadow-cyan-500/30"
            >
              View Projects
            </a>

  <a
    href="/damasvasree_resume.pdf"
    download
    className="border border-cyan-500 px-7 py-3 rounded-xl hover:bg-cyan-500/10 transition"
  >
    Download Resume
  </a>
</motion.div>

</div>

<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative hidden md:flex flex-1 justify-center items-center"
>
  <motion.div
    whileHover={{ rotateX: 6, rotateY: -6 }}
    transition={{ type: "spring", stiffness: 120 }}
    className="
      relative group
      perspective-[1200px]
    "
  >
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="
        relative p-[3px] rounded-3xl
        bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500
        shadow-[0_0_70px_rgba(6,182,212,0.6)]
      "
    >
      {/* Glass Layer */}
      <div
        className="
          relative rounded-3xl overflow-hidden
          bg-white/30 dark:bg-[#0F172A]/40
          backdrop-blur-2xl
        "
      >
        {/* Spotlight effect */}
        <div
          className="
            absolute inset-0 opacity-0 group-hover:opacity-100
            bg-gradient-to-tr from-white/40 via-transparent to-transparent
            transition duration-500
          "
        />

        <img
          src="/profile.jpeg"
          alt="Damasvasree"
          className="w-72 h-[420px] object-cover rounded-3xl"
        />
      </div>
    </motion.div>
  </motion.div>
</motion.div>


      </div>
    </section>
  );
}