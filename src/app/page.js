import CustomCursor from "./components/CustomCursor/CustomCursor.js";
import Hero from "./components/HeroPage/Hero.js";
import StandardLayout from "./components/StandardLayout/StandardLayout.js";

export default function HomePage() {
  return (
    <StandardLayout>
      <Hero />
      {/* <CustomCursor /> */}
    </StandardLayout>
  );
}
