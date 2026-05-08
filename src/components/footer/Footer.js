import Link from "next/link";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="kzk-footer">
      <div className="kzk-footer-bg">
        <div className="kzk-footer-orb kzk-footer-orb-1" />
        <div className="kzk-footer-orb kzk-footer-orb-2" />
        <div className="kzk-footer-grid" />
      </div>

      <div className="kzk-footer-main">
        <div className="kzk-footer-col kzk-footer-brand">
          <h3 className="kzk-footer-tagline-head">
            KZK Services is here to design <br />
            <span className="kzk-footer-grad">a website that grows your brand.</span>
          </h3>
          <p className="kzk-footer-tagline">
            Market your business in the online world and bring real audiences
            to your site. Our team is specialized in digital marketing, SEO,
            web and app development.
          </p>
        </div>

        <div className="kzk-footer-col">
          <h4 className="kzk-footer-heading">Information</h4>
          <ul className="kzk-footer-contact">
            <li>
              <span className="kzk-footer-icon">◉</span>
              <span>1519 Hopewell Ave, Essex, MD 21221</span>
            </li>
            <li>
              <span className="kzk-footer-icon">✉</span>
              <a href="mailto:sales@kzkservices.com">sales@kzkservices.com</a>
            </li>
            <li>
              <span className="kzk-footer-icon">◷</span>
              <span>Mon – Sat · 9:00 AM – 6:00 PM</span>
            </li>
            <li>
              <span className="kzk-footer-icon">☎</span>
              <a href="tel:+14435298897">(443) 529-8897</a>
            </li>
          </ul>
        </div>

        <div className="kzk-footer-col">
          <h4 className="kzk-footer-heading">Company</h4>
          <ul className="kzk-footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="/portfolio">Our Portfolio</Link></li>
            <li><Link href="/google-my-business">Google My Business</Link></li>
            <li><Link href="/pay-now">Pay Now</Link></li>
          </ul>
        </div>

        <div className="kzk-footer-col">
          <h4 className="kzk-footer-heading">Services</h4>
          <ul className="kzk-footer-links">
            <li><Link href="/services/seo">SEO</Link></li>
            <li><Link href="/services/digital-marketing">Digital Marketing</Link></li>
            <li><Link href="/services/web-development">Web Development</Link></li>
            <li><Link href="/services/app-development">App Development</Link></li>
            <li><Link href="/services/designing">Designing</Link></li>
            <li><Link href="/services/content-marketing">Content Marketing</Link></li>
            <li><Link href="/services/google-adwords">Google AdWords</Link></li>
          </ul>
        </div>
      </div>

      <div className="kzk-footer-call">
        <div className="kzk-footer-call-inner">
          <span className="kzk-footer-call-label">Follow KZK Services</span>
          <div className="kzk-footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=100084707501999"
              aria-label="KZK Services on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/kzk-services-4447aa213"
              aria-label="KZK Services on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://g.page/r/CdwKc0FrR6tdEAE"
              aria-label="KZK Services on Google Business Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="kzk-footer-bigtype">
        <span className="kzk-footer-bigtype-text">
          KZK<span className="kzk-footer-bigtype-x">×</span>SERVICES
        </span>
      </div>

      <div className="kzk-footer-bottom">
        <p>© {year} KZK Services · All Rights Reserved</p>
        <div className="kzk-footer-bottom-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span>·</span>
          <Link href="/terms-conditions">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
