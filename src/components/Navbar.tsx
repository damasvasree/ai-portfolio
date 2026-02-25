import { motion } from "framer-motion";

export default function Navbar({ dark, setDark }: any) {
  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-white/60 dark:bg-[#0B0F19]/60"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Damasvasree
        </h1>

        <div className="flex gap-8 items-center text-sm">

          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>

          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-lg border border-cyan-500"
          >
            {dark ? "🌙" : "☀️"}
          </button>

        </div>
      </div>
    </motion.nav>
  );
}