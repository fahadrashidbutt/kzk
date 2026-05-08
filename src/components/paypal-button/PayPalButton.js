"use client";
import { useEffect, useRef } from "react";

const PayPalButton = ({ hostedButtonId }) => {
  const renderedRef = useRef(false);
  const containerId = `paypal-container-${hostedButtonId}`;

  useEffect(() => {
    let interval;
    let cancelled = false;

    const tryRender = () => {
      if (cancelled || renderedRef.current) return true;
      if (typeof window === "undefined") return false;
      if (!window.paypal || !window.paypal.HostedButtons) return false;
      try {
        window.paypal
          .HostedButtons({ hostedButtonId })
          .render(`#${containerId}`);
        renderedRef.current = true;
        return true;
      } catch (e) {
        console.error("PayPal render error", e);
        return false;
      }
    };

    if (!tryRender()) {
      interval = setInterval(() => {
        if (tryRender()) clearInterval(interval);
      }, 250);
    }

    return () => {
      cancelled = true;
      if (interval) clearInterval(interval);
    };
  }, [hostedButtonId, containerId]);

  return <div id={containerId} className="pay-paypal-target" />;
};

export default PayPalButton;
