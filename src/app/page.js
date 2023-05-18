import React from "react";
import AboutMe from "./components/AboutMe/AboutMe.js";
import CustomCursor from "./components/CustomCursor/CustomCursor.js";
import Hero from "./components/HeroPage/Hero.js";
import StandardLayout from "./components/StandardLayout/StandardLayout.js";

export default function HomePage() {
  return (
    <React.StrictMode>
      <StandardLayout>
        <Hero />
        <AboutMe />
      </StandardLayout>
    </React.StrictMode>
  );
}
