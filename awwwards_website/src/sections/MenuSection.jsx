import { flavorlists } from "../constants";

const MenuSection = () => {
  return (
    <section id="menu" className="menu-section">
      <div className="container mx-auto md:px-10 px-5 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="menu-kicker">The Lineup</span>
          <h2 className="menu-title mt-3">Our Juices</h2>
          <p className="font-paragraph text-lg mt-4 text-[#123b1b99]">
            Six flavors, pressed fresh every morning. Pick your favorite and
            we'll have it ready for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
          {flavorlists.map((item, index) => (
            <div key={item.name} className="menu-card">
              {index === 3 && (
                <span className="menu-badge">Customer Favorite</span>
              )}

              <div className="menu-card-img">
                <img src={item.img} alt={item.name} />
                <div className="menu-card-img-fade" />
              </div>

              <div className="menu-card-body">
                <div>
                  <h3 className="menu-card-name">{item.name}</h3>
                  <p className="menu-card-desc">{item.desc}</p>
                </div>

                <div className="menu-card-footer">
                  <span className="menu-card-tag">
                    <svg viewBox="0 0 24 24" fill="none" className="size-4">
                      <path
                        d="M12 21c-4.5-2.5-8-6.2-8-10.5A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 8 6.5C20 14.8 16.5 18.5 12 21Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                    No added sugar
                  </span>

                  <a href="#footer" className="menu-order-btn">
                    Order
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
