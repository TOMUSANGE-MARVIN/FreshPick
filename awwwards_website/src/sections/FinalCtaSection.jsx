import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CONTACT } from "../constants";

const FinalCtaSection = () => {
  useGSAP(() => {
    gsap.from(".final-cta-reveal", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".final-cta-section",
        start: "top 80%",
      },
    });
  });

  return (
    <section className="final-cta-section bg-[#123b1b]">
      <div className="container mx-auto md:px-10 px-5 py-24 md:py-32 text-center">
        <h2 className="about-cta-title final-cta-reveal">
          Ready for Your FreshPick?
        </h2>
        <p className="font-paragraph text-lg mt-4 text-milk/80 max-w-xl mx-auto final-cta-reveal">
          Pick your favourite juice, shawarma or toast and make your next
          break a FreshPick.
        </p>
        <a
          href={CONTACT.phoneHref}
          className="nav-order-btn inline-flex mt-8 final-cta-reveal"
        >
          Order Now
        </a>
      </div>
    </section>
  );
};

export default FinalCtaSection;
