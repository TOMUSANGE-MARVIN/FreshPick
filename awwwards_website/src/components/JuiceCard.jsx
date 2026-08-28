import { CONTACT } from "../constants";

const JuiceCard = ({ item, badge, className = "" }) => {
  return (
    <div className={`menu-card group ${className}`}>
      {badge && <span className="menu-badge">{badge}</span>}

      <div className="menu-card-img">
        <img src={item.img} alt={item.name} />
      </div>

      <div className="menu-card-scrim" />

      {item.price && (
        <span className="menu-price-badge">
          From UGX {item.price.small.toLocaleString()}
        </span>
      )}

      <div className="menu-card-info">
        <h3 className="menu-card-name">{item.name}</h3>

        <div className="menu-card-detail">
          <div>
            <p className="menu-card-desc">{item.desc}</p>

            <div className="menu-card-footer">
              {item.price ? (
                <span className="menu-card-tag menu-card-price">
                  Large UGX {item.price.large.toLocaleString()} &middot; Small
                  UGX {item.price.small.toLocaleString()}
                </span>
              ) : (
                <span className="menu-card-tag">Ask in-store</span>
              )}

              <a href={CONTACT.phoneHref} className="menu-order-btn">
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
      </div>
    </div>
  );
};

export default JuiceCard;
