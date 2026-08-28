import HeroSection from "../sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import WelcomeSection from "../sections/WelcomeSection";
import MenuSection from "../sections/MenuSection";
import FoodTeaserSection from "../sections/FoodTeaserSection";
import WhyFreshPickSection from "../sections/WhyFreshPickSection";
import MessageSection from "../sections/MessageSection";
import FlavorSection from "../sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import BranchesSection from "../sections/BranchesSection";
import NutritionSection from "../sections/NutritionSection";
import BenefitSection from "../sections/BenefitSection";
import TestimonialSection from "../sections/TestimonialSection";
import FinalCtaSection from "../sections/FinalCtaSection";
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
        <WelcomeSection />
        <MenuSection />
        <FoodTeaserSection />
        <WhyFreshPickSection />
        <MessageSection />
        <FlavorSection />
        <BranchesSection />
        <NutritionSection />

        <div>
          <BenefitSection />
          <TestimonialSection />
        </div>

        <FinalCtaSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default HomePage;
