import Script from "next/script";
import "../../assets/css/inner-pages.css";
import "./pay-now.css";
import FinalCta from "../../components/final-cta/FinalCta";
import PayPalButton from "../../components/paypal-button/PayPalButton";

export const metadata = {
  title: "Pay Now | KZK Services",
  description:
    "Pay your KZK Services invoice securely online. We accept Visa, Mastercard, Maestro, American Express, PayPal and Venmo.",
};

const features = [
  {
    title: "Bank-level Security",
    text: "256-bit SSL encryption end-to-end. Card data is tokenised by Stripe and never touches our servers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Instant Confirmation",
    text: "Receipts arrive in seconds and your project moves forward the same business day — no delays, no follow-ups.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: "Flexible Methods",
    text: "Choose Stripe for cards and digital wallets, or PayPal for PayPal, Venmo and bank transfers — whichever suits you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="13" rx="2" />
        <path d="M2 10h20" />
        <circle cx="17" cy="15" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    text: "Questions about your invoice? Reach our billing team Mon–Sat, 9am–6pm — we'll have an answer the same day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12c0 4.97-4.03 9-9 9-1.5 0-2.93-.37-4.18-1.02L3 21l1.02-4.82A9 9 0 1 1 21 12z" />
      </svg>
    ),
  },
];

const Page = () => {
  return (
    <main className="ip-page pay-page">
      <Script
        src="https://js.stripe.com/v3/buy-button.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.paypal.com/sdk/js?client-id=BAABawrVdZCo1kqver7uflmrDL6Vl4bpxcS7NmQooYssIRHlN30hx0_21uXsJYPRlE_sZNd-FvQDizyRL8&components=hosted-buttons&enable-funding=venmo&currency=USD"
        strategy="afterInteractive"
      />

      {/* HERO */}
      <section className="ip-hero">
        <div className="ip-hero-bg">
          <div className="ip-orb ip-orb-1" />
          <div className="ip-orb ip-orb-2" />
          <div className="ip-orb ip-orb-3" />
          <div className="ip-hero-grid" />
        </div>
        <div className="ip-hero-content">
          <span className="ip-badge">Pay Now</span>
          <h1 className="ip-title">
            Effortless payments — <br />
            <span className="ip-grad">elevate your business</span> with KZK
            Services
          </h1>
          <p className="ip-subtitle">
            Settle your invoice in seconds with the method that works best for
            you. We accept Visa, Mastercard, Maestro, American Express, PayPal
            and Venmo through encrypted, industry-trusted checkouts — so you
            can focus on growing your business.
          </p>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="ip-section-head">
            <span className="ip-section-tag">Choose Your Method</span>
            <h2 className="ip-section-title">
              Two ways to <span className="ip-grad">settle your invoice</span>
            </h2>
            <p className="ip-section-text">
              Pick whichever you prefer. Both checkouts are encrypted, instant
              and powered by the world&apos;s most trusted payment providers.
            </p>
          </div>

          <div className="pay-grid">
            {/* STRIPE */}
            <div className="pay-card pay-card-stripe">
              <div className="pay-card-head">
                <div className="pay-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="3" />
                    <path d="M2 10h20" />
                    <path d="M6 15h4" />
                  </svg>
                </div>
                <span className="pay-card-eyebrow">Cards & Wallets</span>
              </div>
              <h3 className="pay-card-title">Pay with Card</h3>
              <p className="pay-card-text">
                Use any major debit or credit card via our Stripe checkout.
                Apple Pay and Google Pay are supported on compatible devices —
                no account required.
              </p>

              <div className="pay-stripe-wrap">
                <stripe-buy-button
                  buy-button-id="buy_btn_1SnJhVJEsQA2bcxNUa8aQc58"
                  publishable-key="pk_live_51Shh3VJEsQA2bcxNFvMzjbHC1LBef6g26OgbCOcI1ltPV3EyC8PQ02pMwvtilfHRQqiMVtRBXvP9PKq8Mis50oJQ00XWO2cx2d"
                ></stripe-buy-button>
              </div>

              <div className="pay-card-methods">
                <span>Visa</span>
                <span>Mastercard</span>
                <span>Maestro</span>
                <span>American Express</span>
                <span>Apple Pay</span>
                <span>Google Pay</span>
              </div>
            </div>

            {/* PAYPAL */}
            <div className="pay-card pay-card-paypal">
              <div className="pay-card-head">
                <div className="pay-card-icon pay-card-icon-pp" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.5 21h2.4l.6-3.7h2.3c3.4 0 5.8-1.8 6.4-5 .3-1.6-.1-2.9-1-3.8-.9-1-2.4-1.5-4.3-1.5H8.5L6.5 21h1zM10 8h2.8c1.1 0 1.9.3 2.4.8.4.5.6 1.2.4 2.1-.4 2-1.7 2.9-4 2.9h-2L10 8z" />
                    <path d="M5.5 18h2.4l.6-3.7h2.3c3.4 0 5.8-1.8 6.4-5 .1-.4.1-.8.1-1.1-.4-.2-.9-.4-1.4-.5-.6-.1-1.2-.2-2-.2H8.5L6.5 18h-1z" opacity=".55" />
                  </svg>
                </div>
                <span className="pay-card-eyebrow">PayPal & Venmo</span>
              </div>
              <h3 className="pay-card-title">Pay with PayPal</h3>
              <p className="pay-card-text">
                Pay directly from your PayPal balance, linked bank account or
                Venmo wallet. Buyer protection and 1-tap checkout included on
                every transaction.
              </p>

              <div className="pay-paypal-wrap">
                <PayPalButton hostedButtonId="A8H8S8R3RGJ82" />
              </div>

              <div className="pay-card-methods">
                <span>PayPal</span>
                <span>Venmo</span>
                <span>Bank Transfer</span>
                <span>PayPal Credit</span>
              </div>
            </div>
          </div>

          <div className="pay-trust-row">
            <div className="pay-trust">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              256-bit SSL encrypted checkout — powered by Stripe & PayPal
            </div>
          </div>

          <p className="pay-help">
            Need a custom invoice or have a question?{" "}
            <a href="/contact-us">Get in touch with our team</a>.
          </p>
        </div>
      </section>

      {/* WHY PAY WITH US */}
      <section className="ip-section ip-section-alt">
        <div className="ip-container">
          <div className="ip-section-head">
            <span className="ip-section-tag">Trusted Checkout</span>
            <h2 className="ip-section-title">
              Why pay with <span className="ip-grad">KZK Services</span>
            </h2>
            <p className="ip-section-text">
              Every transaction is engineered to be fast, transparent and
              completely worry-free.
            </p>
          </div>

          <div className="pay-features">
            {features.map((f) => (
              <div key={f.title} className="pay-feature">
                <div className="pay-feature-icon" aria-hidden="true">
                  {f.icon}
                </div>
                <h3 className="pay-feature-title">{f.title}</h3>
                <p className="pay-feature-text">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
};

export default Page;
