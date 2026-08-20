import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <img
          src="/images/freshpick/store-2.jpg"
          alt="FreshPick, Ggaba Rd"
          className="size-full object-cover"
        />

        <div className="abs-center">
          <div className="bg-black/40 backdrop-blur-md rounded-full px-8 py-5 md:px-12 md:py-7 border border-white/30">
            <p className="text-white text-center font-paragraph md:text-lg font-semibold whitespace-nowrap">
              Fresh at Ggaba Rd, daily
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
