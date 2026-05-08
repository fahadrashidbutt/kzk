import Link from "next/link";
import "./final-cta.css";

const FinalCta = () => (
  <section className="fc-section">
    <div className="fc-container">
      <div className="fc-outer kzk-reveal">
        <div className="fc-card">
          <span className="fc-eyebrow">
            <span className="fc-eyebrow-line" />
            Available For New Project
            <span className="fc-eyebrow-line" />
          </span>
          <h2 className="fc-title">
            Interested in Working <br />
            with KZK Services?
          </h2>
          <p className="fc-text">
            Tell us about your goals — we&apos;ll come back with a roadmap,
            a timeline and a fixed quote within one business day.
          </p>
          <Link href="/contact-us" className="fc-btn">
            Schedule a Call
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCta;
