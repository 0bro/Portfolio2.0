import './Hero.css';
import Showcase from './HeroShowcase/HeroShowcase';

// TODO: Add the Arrow Down suggesting to scroll

export default function Hero(params) {
  return (
    <div id="Hero">
      <div id="HeroContainer">
        <div id="HeroWordsContainer">
          <h1 id="HeroHead">Full Stack Developer</h1>
          <p id="HeroPara">
            Accomplished Full Stack Developer with 3+ years of experience
            building high-quality, scalable applications and services. <br />
            <br />
            Specializing in OOP principles, scalable architecture, test first
            development, supporting CI/CD pipelines, and AWS Cloud Services.
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
