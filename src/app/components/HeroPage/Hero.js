import "./Hero.css";
import Showcase from "./HeroShowcase/HeroShowcase";

// TODO: Add the Arrow Down suggesting to scroll

export default function Hero(params) {
  return (
    <div id="Hero">
      <div id="HeroContainer">
        <div id="HeroWordsContainer">
          <h1 id="HeroHead">Full Stack Developer</h1>
          <p id="HeroPara">
            Full Stack Developer with 3 years of experience in building
            high-quality applications and services, with a strong passion for
            improving the development experience. Adept at collaborating with
            others and thriving in challenging environments. Skilled in
            JavaScript, Node.js, React, and AWS Cloud Services
          </p>
          <button>VIEW RESUME</button>
        </div>
        <div id="showcaseContainer">
          <Showcase />
        </div>

      </div>
    </div>
  );
}
