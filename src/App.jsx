import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Contact />
    </main>
  );
}

export default App;
