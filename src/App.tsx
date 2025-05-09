import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [tab, setTab] = useState<string>("about");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-500 overflow-x-hidden">
      <Header tab={tab} setTab={setTab} theme={theme} setTheme={setTheme} />
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">
        <Hero theme={theme} />
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {tab === "about" && <About key="about" />}
            {tab === "education" && <Education key="education" />}
            {tab === "experience" && <Experience key="experience" />}
            {tab === "projects" && <Projects key="projects" />}
            {tab === "skills" && <Skills key="skills" />}
            {tab === "testimonials" && <Testimonials key="testimonials" />}
            {tab === "contact" && <Contact key="contact" />}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;