import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FooterSection from "../sections/FooterSection";

const LegalPageLayout = ({ title, updated, children }) => {
  useGSAP(() => {
    gsap.from(".legal-fade", {
      y: 24,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".legal-hero",
        start: "top 70%",
      },
    });
  });

  return (
    <>
      <section className="legal-hero about-hero">
        <div className="container mx-auto md:px-10 px-5 pt-36 md:pt-48 pb-14 md:pb-20">
          <span className="menu-kicker legal-fade">Legal</span>
          <h1 className="about-title mt-4 legal-fade">{title}</h1>
          <p className="font-paragraph text-sm mt-4 text-[#123b1b66] legal-fade">
            Last updated: {updated}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto md:px-10 px-5 pb-24 md:pb-28">
          <div className="legal-content max-w-3xl">{children}</div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default LegalPageLayout;
