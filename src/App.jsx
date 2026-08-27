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
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300">

      {/* NAVBAR */}
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* HERO - FULL WIDTH */}
      <Hero />

      {/* OTHER SECTIONS */}
      <main className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">

        <section className="pt-32">
          <About />
        </section>

        <section className="pt-32">
          <Projects />
        </section>

        <section className="pt-32">
          <Achivements />
        </section>

        <section className="pt-32">
          <Skills />
        </section>

        <section className="pt-32">
          <Approach />
        </section>

        <section
          id="contact"
          className="pt-32 pb-20"
        >
          <Contact />
        </section>

      </main>
    </div>
  );
}

export default App;