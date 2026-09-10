import { Link } from "react-router-dom";
import { CONTACT } from "../constants";

const FooterSection = () => {
  return (
    <section id="footer" className="footer-section">
      <img
        src="/images/freshpick/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #PUREJOY
          </h1>
        </div>

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/tiktok.svg" alt="" />
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>FreshPick</p>
              <p className="text-sm opacity-70">
                Fresh juices, shawarma and toast — fresh choices for every
                craving.
              </p>
            </div>
            <div>
              <p>Order</p>
              <a
                href={CONTACT.phoneHref}
                className="block hover:text-light-brown transition-colors"
              >
                {CONTACT.phoneDisplay}
              </a>
              <p>KIU &bull; JB Mall &bull; Soya &bull; Bunga</p>
            </div>
            <div>
              <p>Company</p>
              <Link to="/menu" className="block hover:text-light-brown transition-colors">
                Menu
              </Link>
              <Link to="/about" className="block hover:text-light-brown transition-colors">
                About Us
              </Link>
              <Link to="/blog" className="block hover:text-light-brown transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block hover:text-light-brown transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Get Exclusive Early Access and Stay Informed About New
              Flavors, Offers, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          <p>Copyright © 2026 FreshPick - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
