import "./service-education.css";

// Generic "How It Works + Benefits" section used by every non-SEO service
// page. The SEO page has its own bespoke SERP-rank animation; every other
// service drops this section in via the ServiceTemplate `children` slot.
//
// Pass a `data` object shaped like:
//   {
//     title: "How Web Development Works",
//     titleAccent: "and Why It Matters",
//     lead: "...",
//     steps:  [ { title, text }, ... 4 items ],
//     benefitsTitle: "Six reasons web development is...",
//     benefitsTitleAccent: "the highest-leverage…",
//     benefits: [ { icon: ReactNode, title, text }, ... 6 items ],
//   }
//
// The animation is a vertical 4-stage timeline that adapts to the steps:
// a brand-cyan progress bar grows top→bottom, each stage circle fills as
// the progress reaches it, then the whole thing resets invisibly so the
// loop feels continuous. Pure CSS keyframes — no JS, no client boundary.

const ServiceEducation = ({ data }) => {
  const {
    eyebrow = "How It Works",
    title,
    titleAccent,
    lead,
    steps,
    benefitsEyebrow = "Why It Matters",
    benefitsTitle,
    benefitsTitleAccent,
    benefits,
  } = data;

  const visualStages = steps.slice(0, 4);

  return (
    <section className="svc-section svc-edu-section">
      <div className="svc-container">
        {/* Header */}
        <div className="svc-edu-head">
          <span className="svc-eyebrow" style={{ justifyContent: "center" }}>
            <span className="svc-eyebrow-dot" />
            {eyebrow}
          </span>
          <h2 className="svc-edu-title">
            {title}{" "}
            {titleAccent && <span className="svc-accent">{titleAccent}</span>}
          </h2>
          {lead && <p className="svc-edu-lead">{lead}</p>}
        </div>

        {/* Visual + steps */}
        <div className="svc-edu-grid">
          <div className="svc-edu-visual" aria-hidden="true">
            <svg
              className="svc-edu-anim"
              viewBox="0 0 360 340"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="A four-stage process flow animation"
            >
              <defs>
                <linearGradient id="svcEduGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#18a1d7" />
                  <stop offset="60%" stopColor="#3eb5e0" />
                  <stop offset="100%" stopColor="#7dd3ee" />
                </linearGradient>
                <pattern id="svcEduDots" width="22" height="22" patternUnits="userSpaceOnUse">
                  <circle cx="11" cy="11" r="0.8" fill="rgba(24,161,215,0.16)" />
                </pattern>
              </defs>

              {/* Background grid */}
              <rect width="360" height="340" fill="url(#svcEduDots)" />

              {/* Vertical track (dashed background) */}
              <line x1="60" y1="50" x2="60" y2="290" stroke="rgba(24,161,215,0.22)" strokeWidth="2" strokeDasharray="3 6" />

              {/* Progress bar that grows down through the stages */}
              <rect className="svc-edu-progress" x="58" y="50" width="4" rx="2" fill="url(#svcEduGrad)" />

              {/* Stages */}
              {visualStages.map((s, i) => {
                const y = 50 + i * 80;
                const label = (s.short || s.title || `Stage ${i + 1}`).slice(0, 26);
                return (
                  <g
                    key={i}
                    className={`svc-edu-stage svc-edu-stage--${i + 1}`}
                    transform={`translate(60, ${y})`}
                  >
                    {/* Outline circle (always visible) */}
                    <circle r="22" fill="rgba(13,19,32,0.92)" stroke="rgba(24,161,215,0.3)" strokeWidth="1.5" />
                    {/* Fill circle (animates in) */}
                    <circle className="svc-edu-stage-fill" r="22" fill="url(#svcEduGrad)" />
                    {/* Pulse ring */}
                    <circle className="svc-edu-stage-pulse" r="22" fill="none" stroke="url(#svcEduGrad)" strokeWidth="2" />
                    {/* Number */}
                    <text
                      y="5"
                      textAnchor="middle"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontSize="13"
                      fontWeight="800"
                      fill="#fff"
                    >
                      {`0${i + 1}`}
                    </text>
                    {/* Label card */}
                    <g transform="translate(46, 0)">
                      <rect
                        x="0"
                        y="-21"
                        width="244"
                        height="42"
                        rx="10"
                        fill="rgba(13,19,32,0.6)"
                        stroke="rgba(255,255,255,0.07)"
                      />
                      <text
                        x="20"
                        y="5"
                        fontFamily="system-ui, -apple-system, sans-serif"
                        fontSize="13"
                        fontWeight="700"
                        fill="rgba(255,255,255,0.92)"
                      >
                        {label}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* Final tick badge — appears when all 4 stages are lit */}
              <g className="svc-edu-finish" transform="translate(310, 50)">
                <circle r="14" fill="url(#svcEduGrad)" />
                <path
                  d="M-6 0 L-2 4 L6 -4"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </g>
            </svg>

            <div className="svc-edu-visual-caption">
              <span className="svc-edu-visual-pill">
                <span className="svc-edu-visual-dot" />
                Our 4-phase delivery cycle
              </span>
              <p>
                Every engagement follows the same four-phase pattern, refined
                across hundreds of projects. Watch the flow — then read the
                phase details at right.
              </p>
            </div>
          </div>

          <ol className="svc-edu-steps">
            {steps.map((s, i) => (
              <li key={s.title || i} className="svc-edu-step">
                <span className="svc-edu-step-num" aria-hidden="true">
                  {s.num || `0${i + 1}`}
                </span>
                <div className="svc-edu-step-body">
                  <h3 className="svc-edu-step-title">{s.title}</h3>
                  <p className="svc-edu-step-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Benefits */}
        <div className="svc-edu-benefits-head">
          <span className="svc-eyebrow" style={{ justifyContent: "center" }}>
            <span className="svc-eyebrow-dot" />
            {benefitsEyebrow}
          </span>
          <h3 className="svc-edu-benefits-title">
            {benefitsTitle}{" "}
            {benefitsTitleAccent && (
              <span className="svc-accent">{benefitsTitleAccent}</span>
            )}
          </h3>
        </div>

        <div className="svc-edu-benefits">
          {benefits.map((b) => (
            <div key={b.title} className="svc-edu-benefit">
              <span className="svc-edu-benefit-icon" aria-hidden="true">
                {b.icon}
              </span>
              <h4 className="svc-edu-benefit-title">{b.title}</h4>
              <p className="svc-edu-benefit-text">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceEducation;
