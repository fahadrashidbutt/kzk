"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const SCRIPT_SRC = "https://js.stripe.com/v3/buy-button.js";

const StripeBuyButton = ({ buyButtonId, publishableKey }) => {
  // Only render the custom element AFTER the Stripe script has registered
  // it. Rendering before that produces an unupgraded element that never
  // displays anything.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.customElements?.get("stripe-buy-button")) {
      setReady(true);
      return;
    }
    // Poll briefly in case the script loads outside of our onReady callback
    // (e.g. when next/script reuses an already-loaded source).
    const id = setInterval(() => {
      if (window.customElements?.get("stripe-buy-button")) {
        setReady(true);
        clearInterval(id);
      }
    }, 200);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Script
        src={SCRIPT_SRC}
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      />
      {ready && (
        <stripe-buy-button
          buy-button-id={buyButtonId}
          publishable-key={publishableKey}
        ></stripe-buy-button>
      )}
    </>
  );
};

export default StripeBuyButton;
