// src/App.jsx
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactFooter from "./components/ContactFooter";

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-zinc-950 text-gray-900 dark:text-gray-200 font-sans transition-colors duration-300 min-h-screen">
        <Navbar />

        <main className="pt-24">
          {/* Hero / Home Section */}
          <Hero />

          {/* Portfolio Sections */}
          <About />
          <Skills />
          <Projects />
          <Testimonials />
        </main>

        <ContactFooter />
      </div>
    </ThemeProvider>
  );
};

export default App;