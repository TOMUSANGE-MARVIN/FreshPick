import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advantages: <br />
            Explore the Key Benefits of Choosing FreshPick
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Cold-pressed fresh"}
              color={"#ffffff"}
              bg={"#3bb83d"}
              className={"first-title"}
              borderColor={"#123b1b"}
            />
            <ClipPathTitle
              title={"100% Natural"}
              color={"#123b1b"}
              bg={"#ffffff"}
              className={"second-title"}
              borderColor={"#123b1b"}
            />
            <ClipPathTitle
              title={"Eco-friendly packaging"}
              color={"#ffffff"}
              bg={"#ed1c24"}
              className={"third-title"}
              borderColor={"#123b1b"}
            />
            <ClipPathTitle
              title={"No added sugar"}
              color={"#123b1b"}
              bg={"#eaf7ec"}
              className={"fourth-title"}
              borderColor={"#123b1b"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p>And much more ...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenefitSection;