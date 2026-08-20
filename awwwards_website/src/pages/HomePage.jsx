import HeroSection from "../sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MenuSection from "../sections/MenuSection";
import MessageSection from "../sections/MessageSection";
import FlavorSection from "../sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "../sections/NutritionSection";
import BenefitSection from "../sections/BenefitSection";
import TestimonialSection from "../sections/TestimonialSection";
import FooterSection from "../sections/FooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const HomePage = () => {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });

    return () => smoother.kill();
  });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <HeroSection />
        <MenuSection />
        <MessageSection />
        <FlavorSection />
        <NutritionSection />

        <div>
          <BenefitSection />
          <TestimonialSection />
        </div>

        <FooterSection />
      </div>
    </div>
  );
};

export default HomePage;
