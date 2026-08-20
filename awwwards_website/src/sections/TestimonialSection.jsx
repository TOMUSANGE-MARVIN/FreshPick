import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const TestimonialSection = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    if (isTablet) return;

    gsap.set(".testimonials-section", {
      marginTop: "-140vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
    })
      .to(
        ".testimonials-section .sec-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
        },
        "<"
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });

  return (
    <>
      <section className="testimonials-section hidden lg:block">
        <div className="absolute size-full flex flex-col items-center pt-[5vw]">
          <h1 className="text-black first-title">Our</h1>
          <h1 className="text-light-brown sec-title">Best</h1>
          <h1 className="text-black third-title">Sellers</h1>
        </div>

        <div className="pin-box">
          {cards.map((card, index) => (
            <div key={index} className={`vd-card ${card.translation} ${card.rotation}`}>
              <img
                src={card.img}
                alt={card.name}
                className="size-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-paragraph font-semibold">
                  {card.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section-mobile lg:hidden">
        <h2 className="best-sellers-title">Our Best Sellers</h2>

        <div className="grid grid-cols-2 gap-4 px-5 mt-8">
          {cards.map((card, index) => (
            <div key={index} className="best-seller-card-mobile">
              <img
                src={card.img}
                alt={card.name}
                className="size-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3">
                <p className="text-white font-paragraph text-sm font-semibold">
                  {card.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
