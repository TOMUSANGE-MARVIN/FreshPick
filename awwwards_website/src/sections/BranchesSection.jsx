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
              <p className="branch-card-landmark">
                <svg viewBox="0 0 24 24" fill="none" className="size-4 shrink-0">
                  <path
                    d="M12 21c-4.5-2.5-8-6.2-8-10.5A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 8 6.5C20 14.8 16.5 18.5 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                {branch.landmark}
              </p>
              <p className="branch-card-desc">{branch.desc}</p>
              <div className="branch-card-links">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    branch.mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="branch-card-cta"
                >
                  View on Map
                  <svg viewBox="0 0 24 24" fill="none" className="size-4">
                    <path
                      d="M7 17 17 7M17 7H9M17 7v8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
