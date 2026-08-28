import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const FoodTeaserSection = () => {
  useGSAP(() => {
    gsap.from(".food-teaser-img", {
      x: -40,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".food-teaser-section",
        start: "top 75%",
      },
    });
    gsap.from(".food-teaser-copy > *", {
      x: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".food-teaser-section",
        start: "top 75%",
      },
    });
  });

  return (
    <section className="food-teaser-section bg-milk">
      <div className="container mx-auto md:px-10 px-5 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="food-teaser-img about-hero-img">
            <img
              src="/images/freshpick/packaging-takeaway.jpg"
              alt="FreshPick takeaway packaging"
            />
          </div>

          <div className="food-teaser-copy">
            <span className="menu-kicker">Food Section</span>
            <h2 className="menu-title mt-3">More Than Just Juice</h2>
            <p className="font-paragraph text-lg mt-5 text-[#123b1b99] max-w-lg">
              Craving something more filling? FreshPick also serves shawarma
              and toast — perfect for a quick meal, a snack or something to
              enjoy alongside your favourite juice.
            </p>
            <Link to="/menu#food" className="nav-order-btn inline-flex mt-8">
              Explore Food Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodTeaserSection;
