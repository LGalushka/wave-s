import { AdvantagesSection } from "./sections/AdvantagesSection";
import { HeroSection } from "./sections/HeroSection";
import { NewsSection } from "./sections/NewsSection";
import { PopularProduct } from "./sections/PopularProduct";

export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AdvantagesSection />
      <PopularProduct />
      <NewsSection />
    </div>
  );
};
