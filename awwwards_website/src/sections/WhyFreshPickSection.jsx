import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const features = [
  {
    title: "Fresh Choices",
    desc: "A menu built around refreshing drinks and enjoyable food.",
    icon: (
      <path
        d="M12 21c-4.5-2.5-8-6.2-8-10.5A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 8 6.5C20 14.8 16.5 18.5 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Something for Every Craving",
    desc: "Choose a juice, shawarma or toast depending on what you feel like having.",
    icon: (
      <path
        d="M4 12h16M4 12a8 8 0 1 1 16 0M4 12a8 8 0 0 0 16 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Convenient Locations",
    desc: "FreshPick has four branches: KIU, JB Mall, Soya and Bunga.",
    icon: (
      <path
        d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Made to Enjoy",
    desc: "A welcoming option for quick breaks, casual meals and refreshing moments.",
    icon: (
      <path
        d="M12 3v2M5.6 5.6l1.4 1.4M3 12h2M5.6 18.4l1.4-1.4M18.4 18.4l-1.4-1.4M21 12h-2M18.4 5.6 17 7M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
];

const WhyFreshPickSection = () => {
  useGSAP(() => {
    gsap.from(".why-card", {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".why-freshpick-section",
        start: "top 80%",
      },
    });
  });

  return (
    <section className="why-freshpick-section bg-white">
      <div className="container mx-auto md:px-10 px-5 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="menu-kicker">Why FreshPick</span>
          <h2 className="menu-title mt-3">Why Choose FreshPick</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="why-card">
              <svg viewBox="0 0 24 24" fill="none" className="why-card-icon">
                {f.icon}
              </svg>
              <h3 className="why-card-title">{f.title}</h3>
              <p className="why-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFreshPickSection;
