"use client";
import { useState } from "react";
import "../../assets/css/inner-pages.css";
import "./contact.css";

const services = [
  "Web Development",
  "App Development",
  "SEO",
  "Digital Marketing",
  "Designing",
  "Google My Business",
  "Other",
];

// All form submissions across the site are delivered to this email.
const CONTACT_EMAIL = "hunainbutt1100@gmail.com";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: services[0],
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError("");

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone || "—",
            company: form.company || "—",
            service: form.service,
            budget: form.budget || "Not specified",
            message: form.message,
            _subject: `New project inquiry from ${form.name}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === "true" || data.success === true)) {
        setSubmitted(true);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setError(
        "Sorry — we couldn't send your message right now. Please try again, or email us directly at sales@kzkservices.com."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="ip-page">
      {/* HERO */}
      <section className="ip-hero">
        <div className="ip-hero-bg">
          <div className="ip-orb ip-orb-1" />
          <div className="ip-orb ip-orb-2" />
          <div className="ip-orb ip-orb-3" />
          <div className="ip-hero-grid" />
        </div>
        <div className="ip-hero-content">
          <span className="ip-badge">Get in Touch</span>
          <h1 className="ip-title">
            Let&apos;s build something <span className="ip-grad">remarkable</span>
          </h1>
          <p className="ip-subtitle">
            Tell us about your project. We typically respond within one
            business day with next steps and a discovery call.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="contact-grid">
            {/* INFO */}
            <aside className="contact-info">
              <h2 className="contact-info-title">Reach us directly</h2>
              <p className="contact-info-text">
                Prefer email or a quick call? Use any of the channels below
                and we&apos;ll get back to you fast.
              </p>

              <ul className="contact-info-list">
                <li>
                  <span className="contact-info-icon">✉</span>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <a href="mailto:sales@kzkservices.com">sales@kzkservices.com</a>
                  </div>
                </li>
                <li>
                  <span className="contact-info-icon">☎</span>
                  <div>
                    <div className="contact-info-label">Phone</div>
                    <a href="tel:+14435298897">(443) 529-8897</a>
                  </div>
                </li>
                <li>
                  <span className="contact-info-icon">◉</span>
                  <div>
                    <div className="contact-info-label">Office</div>
                    <span>1519 Hopewell Ave, Essex, MD 21221</span>
                  </div>
                </li>
                <li>
                  <span className="contact-info-icon">◷</span>
                  <div>
                    <div className="contact-info-label">Hours</div>
                    <span>Mon – Sat · 9:00 AM – 6:00 PM</span>
                  </div>
                </li>
              </ul>

              <div className="contact-info-card">
                <div className="contact-info-card-eyebrow">Response time</div>
                <div className="contact-info-card-big">&lt; 24 hrs</div>
                <p className="contact-info-card-text">
                  Average response time on weekdays. For urgent requests,
                  please mention &quot;urgent&quot; in the subject.
                </p>
              </div>
            </aside>

            {/* FORM */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">✓</div>
                  <h3 className="contact-success-title">Thanks, {form.name || "friend"}!</h3>
                  <p className="contact-success-text">
                    Your message is on its way. We&apos;ll be in touch at{" "}
                    <strong>{form.email || "your email"}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    className="ip-btn-secondary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={onSubmit}>
                  <div className="contact-form-row">
                    <label className="contact-field">
                      <span>Full name *</span>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Jane Doe"
                      />
                    </label>
                    <label className="contact-field">
                      <span>Email *</span>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={update("email")}
                        placeholder="jane@company.com"
                      />
                    </label>
                  </div>
                  <div className="contact-form-row">
                    <label className="contact-field">
                      <span>Phone</span>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="+1 (555) 555-5555"
                      />
                    </label>
                    <label className="contact-field">
                      <span>Company</span>
                      <input
                        type="text"
                        value={form.company}
                        onChange={update("company")}
                        placeholder="Acme Inc."
                      />
                    </label>
                  </div>
                  <div className="contact-form-row">
                    <label className="contact-field">
                      <span>Service of interest *</span>
                      <select required value={form.service} onChange={update("service")}>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="contact-field">
                      <span>Project budget</span>
                      <select value={form.budget} onChange={update("budget")}>
                        <option value="">Select range</option>
                        <option>Under $5K</option>
                        <option>$5K – $15K</option>
                        <option>$15K – $50K</option>
                        <option>$50K+</option>
                      </select>
                    </label>
                  </div>
                  <label className="contact-field">
                    <span>Project details *</span>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us about your goals, timelines, and anything else worth knowing."
                    />
                  </label>
                  {error && (
                    <div className="contact-error" role="alert">
                      {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    className="ip-btn-primary contact-submit"
                    disabled={sending}
                    aria-busy={sending}
                  >
                    {sending ? "Sending…" : "Send Message"}
                    {!sending && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ip-section ip-section-alt">
        <div className="ip-container">
          <div className="ip-section-head">
            <span className="ip-section-tag">FAQ</span>
            <h2 className="ip-section-title">
              Frequently <span className="ip-grad">asked questions</span>
            </h2>
          </div>
          <div className="ip-faq">
            {[
              {
                q: "How long does a typical project take?",
                a: "Most websites ship in 4–8 weeks. Larger app builds run 8–16 weeks. We give you an honest timeline up front and stick to it.",
              },
              {
                q: "Do you work with small businesses or just enterprises?",
                a: "Both. We have packages tailored for early-stage founders as well as full retainers for larger orgs.",
              },
              {
                q: "What does the engagement look like?",
                a: "Discovery call → proposal → kickoff → weekly demos → launch → optional retainer. You'll have a single point of contact throughout.",
              },
              {
                q: "Do you offer ongoing support after launch?",
                a: "Yes. We offer monthly care plans covering hosting, updates, performance monitoring and small enhancements.",
              },
            ].map((f, i) => (
              <details key={i} className="ip-faq-item">
                <summary className="ip-faq-summary">
                  {f.q}
                  <span className="ip-faq-icon">+</span>
                </summary>
                <p className="ip-faq-answer">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
