import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { branches, CONTACT } from "../constants";
import FooterSection from "../sections/FooterSection";

const offers = [
  { title: "Fresh Juices", desc: "A variety of fruit-based drinks and blends." },
  { title: "Shawarma", desc: "A satisfying food option for customers looking for something filling." },
  { title: "Toast", desc: "A simple, convenient choice for a quick bite." },
];

const gallery = [
  "/images/freshpick/lifestyle-neon.jpg",
  "/images/freshpick/lifestyle-counter.jpg",
  "/images/freshpick/packaging-takeaway.jpg",
  "/images/freshpick/packaging-box.jpg",
];

const AboutPage = () => {
  useGSAP(() => {
    gsap.from(".about-fade", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".about-hero",
        start: "top 70%",
      },
    });

    gsap.from(".about-offer-card", {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".about-offer-grid",
        start: "top 80%",
      },
    });

    gsap.from(".about-gallery-img", {
      scale: 0.92,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".about-gallery-grid",
        start: "top 80%",
      },
    });

    gsap.from(".about-branch-item", {
      x: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".about-locations",
        start: "top 80%",
      },
    });
  });

  return (
    <>
      <section className="about-hero">
        <div className="container mx-auto md:px-10 px-5 pt-36 md:pt-48 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="menu-kicker about-fade">Our Story</span>
              <h1 className="about-title mt-4 about-fade">
                Fresh Food. Fresh Drinks. FreshPick.
              </h1>
              <p className="font-paragraph text-lg mt-6 text-[#123b1b99] max-w-lg about-fade">
                FreshPick is a fresh-food brand serving refreshing juices
                alongside tasty shawarma and toast. Our goal is simple: give
                customers a convenient place to enjoy something fresh,
                satisfying and easy to pick.
              </p>
            </div>

            <div className="about-hero-img about-fade">
              <img
                src="/images/freshpick/store-1.jpg"
                alt="Inside FreshPick, Ggaba Rd"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container mx-auto md:px-10 px-5 py-20 md:py-24">
          <h2 className="menu-title text-center">What We Offer</h2>

          <div className="about-offer-grid grid sm:grid-cols-3 gap-6 mt-12">
            {offers.map((offer) => (
              <div key={offer.title} className="about-offer-card menu-card">
                <div className="menu-card-body">
                  <h3 className="menu-card-name">{offer.title}</h3>
                  <p className="menu-card-desc">{offer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto md:px-10 px-5 py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="menu-kicker">Our Approach</span>
              <h2 className="about-title mt-4">Choice, Made Simple</h2>
              <p className="font-paragraph text-lg mt-5 text-[#123b1b99] max-w-lg">
                At FreshPick, the experience begins with choice. Some
                customers want a refreshing juice, while others want a
                filling bite. Our menu brings both together so customers can
                choose what suits the moment.
              </p>
            </div>

            <div className="about-gallery-grid grid grid-cols-2 gap-4">
              {gallery.map((src) => (
                <div
                  key={src}
                  className="about-gallery-img rounded-2xl overflow-hidden aspect-square"
                >
                  <img src={src} alt="FreshPick" className="size-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-locations about-values">
        <div className="container mx-auto md:px-10 px-5 py-20 md:py-24">
          <span className="menu-kicker">Locations</span>
          <h2 className="about-title mt-4">Four FreshPick Locations</h2>
          <p className="font-paragraph text-lg mt-5 text-[#123b1b99] max-w-2xl">
            FreshPick currently serves customers through four branches: KIU,
            JB Mall, Soya and Bunga. Each branch has its own address, opening
            hours and contact details — call us and we'll point you to the
            one nearest you.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {branches.map((branch) => (
              <span key={branch.name} className="about-branch-item value-pill" style={{ backgroundColor: "#ffffff", color: "#123b1b" }}>
                {branch.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container mx-auto md:px-10 px-5 py-24 md:py-32 text-center">
          <h2 className="about-cta-title">Come say hi</h2>
          <p className="font-paragraph text-lg mt-4 text-milk/80 max-w-xl mx-auto">
            Clear choices, enjoyable food and refreshing drinks in a
            welcoming environment — that's our promise.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href={CONTACT.phoneHref} className="nav-order-btn inline-flex">
              Order Now
            </a>
            <Link to="/menu" className="nav-order-btn inline-flex bg-white/15 hover:bg-white/25">
              View Menu
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default AboutPage;
