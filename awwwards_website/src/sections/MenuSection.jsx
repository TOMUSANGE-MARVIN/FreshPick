import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { flavorlists } from "../constants";
import JuiceCard from "../components/JuiceCard";

const MenuSection = () => {
  useGSAP(() => {
    gsap.from(".menu-card", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".menu-card-grid",
        start: "top 85%",
      },
    });
  });

  return (
    <section id="menu" className="menu-section">
      <div className="container mx-auto md:px-10 px-5 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="menu-kicker">The Lineup</span>
          <h2 className="menu-title mt-3">Our Juices</h2>
          <p className="font-paragraph text-lg mt-4 text-[#123b1b99]">
            Pressed fresh every morning. Pick your favorite and we'll have it
            ready for you.
          </p>
        </div>

        <div className="menu-card-grid grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
          {flavorlists.map((item, index) => (
            <JuiceCard
              key={item.name}
              item={item}
              badge={index === 3 ? "Customer Favorite" : null}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
