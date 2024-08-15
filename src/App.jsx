import React from "react";
import Hero from "./view/Hero";
import About from "./view/About";
import Tokenomics from "./view/Tokenomics";
import Contact from "./view/Contact";

const App = () => {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <About />
      <Tokenomics />
      <Contact />
    </main>
  );
};

export default App;
