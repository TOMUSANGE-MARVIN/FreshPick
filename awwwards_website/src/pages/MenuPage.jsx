import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { flavorlists, CONTACT } from "../constants";
import FooterSection from "../sections/FooterSection";

const MenuPage = () => {
  useGSAP(() => {
    gsap.from(".menu-page-card", {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".menu-page-grid",
        start: "top 85%",
      },
    });

    gsap.from(".food-placeholder-card", {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".food-placeholder-grid",
        start: "top 85%",
      },
    });
  });

  return (
    <>
      <section className="menu-page-hero">
        <div className="container mx-auto md:px-10 px-5 pt-36 md:pt-48 pb-16 md:pb-20 text-center">
          <span className="menu-kicker">The Full Lineup</span>
          <h1 className="menu-title mt-4">Pick Your FreshPick</h1>
          <p className="font-paragraph text-lg mt-4 text-[#123b1b99] max-w-xl mx-auto">
            Explore our fresh juices, satisfying shawarma and toast. Choose
            your favourite, discover something new and place your order.
          </p>
        </div>
      </section>

      <section id="juice" className="menu-section">
        <div className="container mx-auto md:px-10 px-5 pb-20 md:pb-24">
          <h2 className="menu-title mb-10">Fresh Juices</h2>

          <div className="menu-page-grid grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
            {flavorlists.map((item, index) => (
              <div key={item.name} className="menu-page-card menu-card">
                {index === 3 && (
                  <span className="menu-badge">Customer Favorite</span>
                )}

                <div className="menu-card-img">
                  <img src={item.img} alt={item.name} />
                  <div className="menu-card-img-fade" />
                  {item.price && (
                    <span className="menu-price-badge">
                      From UGX {item.price.small.toLocaleString()}
                    </span>
                  )}
                </div>

                <div className="menu-card-body">
                  <div>
                    <h3 className="menu-card-name">{item.name}</h3>
                    <p className="menu-card-desc">{item.desc}</p>
                  </div>

                  <div className="menu-card-footer">
                    {item.price ? (
                      <span className="menu-card-tag menu-card-price">
                        Large UGX {item.price.large.toLocaleString()} &middot;
                        Small UGX {item.price.small.toLocaleString()}
                      </span>
                    ) : (
                      <span className="menu-card-tag">Ask in-store</span>
                    )}

                    <a href={CONTACT.phoneHref} className="menu-order-btn">
                      Order
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="food" className="bg-milk">
        <div className="container mx-auto md:px-10 px-5 py-20 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="menu-kicker">Food</span>
            <h2 className="menu-title mt-3">Shawarma &amp; Toast</h2>
            <p className="font-paragraph text-lg mt-4 text-[#123b1b99]">
              Full shawarma and toast pricing is being finalized — call or
              WhatsApp us and we'll walk you through today's options.
            </p>
          </div>

          <div className="food-placeholder-grid grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="food-placeholder-card">
              <img
                src="/images/freshpick/packaging-box.jpg"
                alt="FreshPick shawarma packaging"
                className="rounded-2xl mb-5 w-full aspect-[4/3] object-cover"
              />
              <h3 className="food-placeholder-title">Shawarma</h3>
              <p className="food-placeholder-desc">
                A satisfying food option for customers looking for something
                filling.
              </p>
              <a href={CONTACT.phoneHref} className="nav-order-btn inline-flex mt-5">
                Order Now
              </a>
            </div>

            <div className="food-placeholder-card">
              <img
                src="/images/freshpick/packaging-takeaway.jpg"
                alt="FreshPick toast packaging"
                className="rounded-2xl mb-5 w-full aspect-[4/3] object-cover"
              />
              <h3 className="food-placeholder-title">Toast</h3>
              <p className="food-placeholder-desc">
                A simple, convenient choice for a quick bite.
              </p>
              <a href={CONTACT.phoneHref} className="nav-order-btn inline-flex mt-5">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default MenuPage;
