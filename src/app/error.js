"use client";
import { useEffect, useRef } from "react";

export default function Error({ error, reset }) {
  const retriedRef = useRef(false);

  useEffect(() => {
    // First error on this mount: silently retry once. Catches stale RSC
    // prefetch / first-compile flakes that resolve on a fresh fetch (the
    // same thing the user got by hitting "Reload"). Real errors still
    // surface — they'll come back after the retry and we render the UI.
    if (!retriedRef.current) {
      retriedRef.current = true;
      const t = setTimeout(() => reset(), 80);
      return () => clearTimeout(t);
    }
  }, [reset, error]);

  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 20px 80px",
        background: "var(--bg-base)",
      }}
    >
      <div style={{ textAlign: "center", color: "#fff", maxWidth: 480 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 18,
            background: "rgba(24, 161, 215, 0.12)",
            border: "1px solid rgba(24, 161, 215, 0.3)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#3eb5e0",
            marginBottom: 22,
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h2 style={{ fontSize: "2rem", margin: "0 0 14px", letterSpacing: "-0.5px" }}>
          Something went wrong
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            margin: "0 0 28px",
            lineHeight: 1.6,
          }}
        >
          We hit a snag loading this page. Please try again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            padding: "12px 28px",
            background: "linear-gradient(135deg, #18a1d7, #0e7eb3)",
            color: "#fff",
            border: "none",
            borderRadius: 12,
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 14,
            letterSpacing: 0.4,
            boxShadow: "0 12px 28px rgba(24, 161, 215, 0.35)",
          }}
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
