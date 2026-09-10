import LegalPageLayout from "../components/LegalPageLayout";
import { CONTACT } from "../constants";

const TermsOfServicePage = () => {
  return (
    <LegalPageLayout title="Terms of Service" updated="September 2026">
      <p>
        These terms apply when you use this website. By browsing it, you
        agree to them. If you have any questions, contact us using the
        details at the bottom of this page.
      </p>

      <h2>About FreshPick</h2>
      <p>
        FreshPick is a fresh-food brand serving juices, shawarma and toast
        from four branches in Kampala: KIU, JB Mall, Soya and Bunga.
      </p>

      <h2>Use of This Website</h2>
      <p>
        This website is provided for informational purposes — to show our
        menu, branch locations and contact details. We do not currently take
        orders or payments through this website; orders are placed and paid
        for in person at a branch, or arranged directly by phone or
        WhatsApp.
      </p>

      <h2>Pricing &amp; Availability</h2>
      <p>
        Prices and items shown on this site are indicative and may change
        without notice. Please confirm current pricing and availability with
        your branch before ordering.
      </p>

      <h2>Nutritional Information</h2>
      <p>
        Descriptions of our juices and their ingredients are general in
        nature and are not medical or nutritional advice. If you have
        allergies or specific dietary needs, please let our staff know
        before ordering.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        The FreshPick name, logo, and the text, images and design on this
        website belong to FreshPick unless otherwise noted, and may not be
        reproduced without our permission.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        This site links to and embeds third-party services, including
        Google Maps and WhatsApp. Your use of those services is governed by
        their own terms and privacy policies, not ours.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        This website is provided "as is". While we try to keep it accurate
        and up to date, we don't guarantee that every detail — including
        prices, hours or availability — is current at all times, and we are
        not liable for decisions made based solely on this website without
        confirming with a branch.
      </p>

      <h2>Governing Law</h2>
      <p>These terms are governed by the laws of Uganda.</p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these terms from time to time as FreshPick grows. Any
        changes will be posted on this page with an updated date.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about these terms? Reach us on{" "}
        <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a> or{" "}
        <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </p>
    </LegalPageLayout>
  );
};

export default TermsOfServicePage;
