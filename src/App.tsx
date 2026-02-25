import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import ParticlesBg from "./components/effects/ParticlesBg";
import CursorGlow from "./components/CursorGlow";
import AnimatedCursor from "react-animated-cursor";
import GithubHeatmap from "./components/GithubHeatmap";
import SystemFlow from "./components/SystemFlow";
import Chatbot from "./components/Chatbot";
import Certifications from "./components/Certifications";

export default function App() {
  const [dark, setDark] = useState(true);

  // 🌙 Dark / Light toggle logic
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  <div className="
bg-gradient-to-br
from-white via-slate-50 to-cyan-50
dark:from-[#020617] dark:via-[#020617] dark:to-[#020617]
text-gray-900 dark:text-white
"></div>

  return (
    <div className="bg-white dark:bg-[#0B0F19] text-black dark:text-white min-h-screen">

      {/* Effects */}
      <ParticlesBg />
      <CursorGlow />

      {/* Navbar (IMPORTANT — pass props) */}
      <Navbar dark={dark} setDark={setDark} />

      {/* Sections */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <SystemFlow />
      <Contact />
      <GithubHeatmap />
      <Chatbot />
      
      {/* Cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="0,255,255"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={2}
      />

    </div>
  );
}