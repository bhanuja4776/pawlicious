"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function OrderSuccessBanner() {
  const [show, setShow] = useState(false);
  const { clearCart } = useCart();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("order") === "success") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(true);
      clearCart();
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [clearCart]);

  if (!show) return null;

  return (
    <div className="bg-coral px-4 py-4 text-center text-sm font-bold text-cream-soft sm:text-base">
      🎉 Thank you! Your order is confirmed — we&apos;ll be in touch to arrange delivery or pickup.
    </div>
  );
}
