import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WelcomeSection = () => {
  useGSAP(() => {
    gsap.from(".welcome-reveal", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".welcome-section",
        start: "top 75%",
      },
    });
  });

  return (
    <section className="welcome-section bg-white">
      <div className="container mx-auto md:px-10 px-5 py-20 md:py-24 text-center">
        <span className="menu-kicker welcome-reveal">Welcome</span>
        <h2 className="menu-title mt-3 welcome-reveal">Welcome to FreshPick</h2>
        <p className="font-paragraph text-lg mt-5 text-[#123b1b99] max-w-2xl mx-auto welcome-reveal">
          FreshPick brings together refreshing fruit juices and tasty food in
          one convenient place. Whether you're looking for a cold, fruity
          drink, a filling shawarma or a simple toast, FreshPick gives you an
          easy choice for a quick break, a meal with friends or a refreshing
          pick-me-up.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
