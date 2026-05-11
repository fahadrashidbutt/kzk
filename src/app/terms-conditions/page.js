import "../../assets/css/inner-pages.css";
import "../../assets/css/legal.css";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions for KZK Services — including our Refund Policy and the conditions under which alternative services are offered.",
};

export default function TermsConditions() {
  return (
    <main className="ip-page lp-page">
      {/* HERO */}
      <section className="lp-hero">
        <div className="ip-hero-bg">
          <div className="ip-orb ip-orb-1" />
          <div className="ip-orb ip-orb-2" />
          <div className="ip-orb ip-orb-3" />
          <div className="ip-hero-grid" />
        </div>
        <div className="lp-hero-content">
          <span className="lp-eyebrow">Legal</span>
          <h1 className="lp-title">Terms &amp; Conditions</h1>
          <p className="lp-meta">Last updated: May 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <article className="lp-content">
        <h2>Refund Policy</h2>
        <p>
          The following is the Refund Policy held by KZK Services for all its
          clients. No client is exempt from this policy and is liable for it,
          in case an application is made to KZK Services for refund.
        </p>

        <h2>No Refund</h2>
        <p>
          In an event when the client changes mind after work has been started
          on a project, or the client cancels the order after delivery has been
          made, the client shall be made no refund in any way. The client
          wishing to get a new project done will have to place an order for
          one, make its payment as demanded by KZK Services, and receive it
          accordingly.
        </p>

        <h2>Alternative Services Offered Without Any Charges</h2>
        <p>
          In case the client and the company are unable to identify the issue
          and figure out who might be at fault, KZK Services will make no
          refund of the payment but will offer alternative services without
          any charges. This rule, however, applies only to the situations
          where confusion regarding the fault of either party continues to
          prevail or when both the parties might be at fault.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these terms, the refund policy, or
          your engagement with KZK Services, please reach out to us at{" "}
          <a href="mailto:sales@kzkservices.com">sales@kzkservices.com</a> or
          call <a href="tel:+14435298897">(443) 529-8897</a>. Our team is
          available Monday to Saturday, 9:00 AM to 6:00 PM.
        </p>
      </article>
    </main>
  );
}
