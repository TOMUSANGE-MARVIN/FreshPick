import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { branches, CONTACT } from "../constants";

const BranchesSection = () => {
  useGSAP(() => {
    gsap.from(".branch-card", {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".branches-section",
        start: "top 80%",
      },
    });
  });

  return (
    <section id="branches" className="branches-section bg-milk">
      <div className="container mx-auto md:px-10 px-5 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="menu-kicker">Locations</span>
          <h2 className="menu-title mt-3">FreshPick Near You</h2>
          <p className="font-paragraph text-lg mt-4 text-[#123b1b99]">
            With four branches across Kampala, finding your nearest FreshPick
            is easy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch) => (
            <div key={branch.name} className="branch-card">
              <h3 className="branch-card-name">{branch.name}</h3>
              <p className="branch-card-desc">{branch.desc}</p>
              <a href={CONTACT.phoneHref} className="branch-card-cta">
                Call to Order
                <svg viewBox="0 0 24 24" fill="none" className="size-4">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
