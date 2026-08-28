import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { CONTACT } from "../constants";

const HeroSection = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src="/images/freshpick/hero-watermelon.jpg"
          alt="Freshly pressed FreshPick juice"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />

        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Nature's Juiciest Pick</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Pure Joy</h1>
            </div>
          </div>

          <h2>
            Fresh juices, delicious shawarma and satisfying toast — prepared
            to give you something refreshing and something worth coming back
            for.
          </h2>

          <div className="hero-cta-group">
            <a href={CONTACT.phoneHref} className="hero-button">
              Order Now
            </a>
            <a href="#menu" className="hero-button-secondary">
              Explore Our Menu
            </a>
          </div>

          <p className="hero-branch-strip">
            Find FreshPick at KIU &bull; JB Mall &bull; Soya &bull; Bunga
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
