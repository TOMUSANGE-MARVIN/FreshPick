import { Link } from "react-router-dom";
import FooterSection from "../sections/FooterSection";

const values = [
  { label: "Cold-pressed fresh", bg: "#3bb83d", color: "#ffffff" },
  { label: "100% Natural", bg: "#ffffff", color: "#123b1b" },
  { label: "Eco-friendly packaging", bg: "#ed1c24", color: "#ffffff" },
  { label: "No added sugar", bg: "#eaf7ec", color: "#123b1b" },
];

const AboutPage = () => {
  return (
    <>
      <section className="about-hero">
        <div className="container mx-auto md:px-10 px-5 pt-36 md:pt-48 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="menu-kicker">Our Story</span>
              <h1 className="about-title mt-4">Rooted in Fresh</h1>
              <p className="font-paragraph text-lg mt-6 text-[#123b1b99] max-w-lg">
                FreshPick started with one idea: juice should taste like the
                fruit it came from. Every cup is hand-picked, cold-pressed
                and served the same day from our spot on Ggaba Rd — no
                concentrates, no shortcuts, just pure joy in a cup.
              </p>
            </div>

            <div className="about-hero-img">
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
          <h2 className="menu-title text-center">What We Stand For</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {values.map((value) => (
              <div
                key={value.label}
                className="value-pill"
                style={{ backgroundColor: value.bg, color: value.color }}
              >
                {value.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container mx-auto md:px-10 px-5 py-24 md:py-32 text-center">
          <h2 className="about-cta-title">Come say hi</h2>
          <p className="font-paragraph text-lg mt-4 text-milk/80 max-w-xl mx-auto">
            Find us on Ggaba Rd, or get every flavor delivered straight to
            your door.
          </p>
          <Link to="/" className="nav-order-btn inline-flex mt-8">
            Order Fresh Juice
          </Link>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default AboutPage;
