import LegalPageLayout from "../components/LegalPageLayout";
import { CONTACT } from "../constants";

const PrivacyPolicyPage = () => {
  return (
    <LegalPageLayout title="Privacy Policy" updated="September 2026">
      <p>
        This Privacy Policy explains how FreshPick ("FreshPick", "we", "us")
        handles information in connection with this website and our juice,
        shawarma and toast branches in Kampala. We keep this simple: we
        collect only what you choose to give us, and we use it only to serve
        you.
      </p>

      <h2>Information We Collect</h2>
      <p>We do not require accounts, and this website does not use cookies, analytics or tracking scripts. The only information we receive is what you choose to share with us, for example when you:</p>
      <ul>
        <li>Call or message us on WhatsApp to place an order or ask a question</li>
        <li>Fill in the contact form on this site with your name, phone number or email, and a message</li>
        <li>Select a branch when reaching out to us</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We use the details you share only to respond to your enquiry, take
        your order, or direct you to the FreshPick branch nearest you. We do
        not sell, rent or share your information with third parties for
        marketing purposes.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        This site embeds Google Maps so you can see our branch locations.
        When a map loads or you interact with it, Google may set its own
        cookies and collect data under Google's own privacy policy. If you
        contact us on WhatsApp, that conversation is also subject to
        WhatsApp's privacy policy, as it is a service operated by WhatsApp
        (Meta), not by FreshPick.
      </p>

      <h2>Online Payments</h2>
      <p>
        FreshPick does not process payments through this website. Orders are
        paid for in person at a branch or arranged directly by phone or
        WhatsApp, so we never collect card, mobile money or other payment
        details through this site.
      </p>

      <h2>Data Retention</h2>
      <p>
        We keep the contact details you share with us only for as long as
        needed to respond to your enquiry or order, and do not use them for
        any other purpose.
      </p>

      <h2>Your Choices</h2>
      <p>
        You can contact us at any time to ask what information we hold about
        you or to ask us to delete it, using the details below.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        This website is not directed at children, and we do not knowingly
        collect information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy from time to time as FreshPick grows. Any
        changes will be posted on this page with an updated date.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about this policy? Reach us on{" "}
        <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a> or{" "}
        <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </p>
    </LegalPageLayout>
  );
};

export default PrivacyPolicyPage;
