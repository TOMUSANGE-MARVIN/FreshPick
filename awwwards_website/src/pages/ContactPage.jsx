import FooterSection from "../sections/FooterSection";

const ContactPage = () => {
  return (
    <>
      <section className="contact-hero">
        <div className="container mx-auto md:px-10 px-5 pt-36 md:pt-48 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="menu-kicker">Get In Touch</span>
              <h1 className="about-title mt-4">Let's Talk Juice</h1>
              <p className="font-paragraph text-lg mt-6 text-[#123b1b99] max-w-lg">
                Got a question, a delivery request, or just want to say hi?
                Send us a message and we'll get back to you.
              </p>

              <div className="contact-info-list">
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
                    <p className="font-paragraph text-[#123b1b99]">Ggaba Rd, Kampala</p>
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
                    <p className="font-bold uppercase text-sm tracking-wide">Order Delivery</p>
                    <p className="font-paragraph text-[#123b1b99]">
                      Message us on Instagram or TikTok for same-day delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <label className="contact-label">
                Name
                <input type="text" placeholder="Your name" className="contact-input" />
              </label>

              <label className="contact-label">
                Email
                <input type="email" placeholder="you@example.com" className="contact-input" />
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

      <FooterSection />
    </>
  );
};

export default ContactPage;
