import { useEffect, useState } from "react";

import Hero from "./section/Hero";
import Projects from "./section/Projects";
import Achivements from "./section/Achivements";
import About from "./section/About";
import Skills from "./section/Skills";
import Contact from "./section/Contact";
import Navbar from "./layout/Navbar";
import Approach from "./section/Approach";

function App() {
  // 🌙 ALWAYS START IN DARK MODE
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      // 🌙 DARK MODE
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      // ☀️ LIGHT MODE
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <main>
        <Hero />
        <About />
        <Projects />
        <Achivements />
        <Skills />
        <Approach />
        <Contact />
      </main>
    </div>
  );
}

export default App;