import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { branches, CONTACT } from "../constants";
import FooterSection from "../sections/FooterSection";

const ContactPage = () => {
  useGSAP(() => {
    gsap.from(".contact-fade", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".contact-hero",
        start: "top 70%",
      },
    });

    gsap.from(".branch-info-card", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".branch-info-grid",
        start: "top 85%",
      },
    });
  });

  return (
    <>
      <section className="contact-hero">
        <div className="container mx-auto md:px-10 px-5 pt-36 md:pt-48 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="menu-kicker contact-fade">Get In Touch</span>
              <h1 className="about-title mt-4 contact-fade">
                Visit or Contact FreshPick
              </h1>
              <p className="font-paragraph text-lg mt-6 text-[#123b1b99] max-w-lg contact-fade">
                Have a question, want to place an order or looking for your
                nearest FreshPick? Get in touch with the branch that works
                best for you.
              </p>

              <div className="contact-info-list contact-fade">
                <div className="contact-info-item">
                  <svg viewBox="0 0 24 24" fill="none" className="size-5">
                    <path
                      d="M12 21c-4.5-2.5-8-6.2-8-10.5A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 8 6.5C20 14.8 16.5 18.5 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  <div>
                    <p className="font-bold uppercase text-sm tracking-wide">Visit Us</p>
                    <p className="font-paragraph text-[#123b1b99]">
                      KIU &bull; JB Mall &bull; Soya &bull; Bunga, Kampala
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <svg viewBox="0 0 24 24" fill="none" className="size-5">
                    <path
                      d="M3 7l9 6 9-6M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <p className="font-bold uppercase text-sm tracking-wide">Call or WhatsApp</p>
                    <a
                      href={CONTACT.phoneHref}
                      className="font-paragraph text-[#123b1b99] hover:text-light-brown transition-colors"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <label className="contact-label">
                Full Name
                <input type="text" placeholder="Your name" className="contact-input" />
              </label>

              <label className="contact-label">
                Phone / Email
                <input type="text" placeholder="How can we reach you?" className="contact-input" />
              </label>

              <label className="contact-label">
                Branch (optional)
                <select className="contact-input" defaultValue="">
                  <option value="" disabled>
                    Select a branch
                  </option>
                  {branches.map((branch) => (
                    <option key={branch.name} value={branch.name}>
                      {branch.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="contact-label">
                Message
                <textarea
                  rows="4"
                  placeholder="How can we help?"
                  className="contact-input resize-none"
                />
              </label>

              <button type="submit" className="nav-order-btn justify-center w-full mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-milk">
        <div className="container mx-auto md:px-10 px-5 py-20 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="menu-kicker">Branch Information</span>
            <h2 className="menu-title mt-3">Find Your Branch</h2>
            <p className="font-paragraph text-lg mt-4 text-[#123b1b99]">
              Open {CONTACT.hours}, {CONTACT.hoursDays}. Exact addresses are
              being confirmed — call us and we'll direct you straight away.
            </p>
          </div>

          <div className="branch-info-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch) => (
              <div key={branch.name} className="branch-info-card">
                <div className="branch-card-map">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      branch.mapQuery
                    )}&z=15&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map showing FreshPick ${branch.name} branch location`}
                  />
                </div>
                <div className="branch-card-body">
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

                  <dl className="branch-info-meta">
                    <div>
                      <dt>Hours</dt>
                      <dd>
                        {CONTACT.hours}
                        <br />
                        {CONTACT.hoursDays}
                      </dd>
                    </div>
                    <div>
                      <dt>Phone / WhatsApp</dt>
                      <dd>
                        <a href={CONTACT.phoneHref} className="hover:text-light-brown transition-colors">
                          {CONTACT.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                  </dl>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      branch.mapQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="branch-card-cta"
                  >
                    Get Directions
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container mx-auto md:px-10 px-5 py-20 md:py-28 text-center">
          <h2 className="about-cta-title !text-6xl md:!text-7xl">Ready to Order?</h2>
          <p className="font-paragraph text-lg mt-4 text-milk/80 max-w-xl mx-auto">
            Choose your nearest branch and contact FreshPick using the
            available phone or WhatsApp option.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href={CONTACT.phoneHref} className="nav-order-btn inline-flex">
              Call Now
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-order-btn inline-flex bg-white/15 hover:bg-white/25"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default ContactPage;
