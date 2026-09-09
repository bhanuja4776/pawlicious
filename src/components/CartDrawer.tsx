"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import QtyStepper from "@/components/QtyStepper";
import { EASE_OUT } from "@/lib/animations";

export default function CartDrawer() {
  const {
    lines,
    isOpen,
    closeCart,
    incrementQty,
    decrementQty,
    removeItem,
    subtotal,
    amountToFreeShipping,
    freeShippingProgress,
    lastAdded,
  } = useCart();

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!lastAdded || !isOpen) return;
    // Show the "added to cart" success state, then auto-dismiss it.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowSuccess(true);
    const t = setTimeout(() => setShowSuccess(false), 2600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastAdded]);

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink/45 backdrop-blur-[2px]"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
            role="dialog"
            aria-label="Shopping cart"
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream-soft shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
              <h2 className="font-display text-2xl font-medium text-ink">
                Your pup&apos;s order
              </h2>
              <button
                type="button"
                aria-label="Close cart"
                onClick={closeCart}
                className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-ink/5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <AnimatePresence>
              {showSuccess && lastAdded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mx-6 mt-4 flex items-center gap-3 rounded-card bg-teal-tint px-4 py-3 text-teal">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-cream-soft">
                      ✓
                    </span>
                    <p className="text-sm font-bold">
                      {lastAdded.name} ({lastAdded.sizeLabel}) added to your pup&apos;s order!
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <p className="font-display text-2xl text-ink-soft">
                  No bowls in here yet.
                </p>
                <p className="text-ink-soft">
                  Find your dog&apos;s favourite recipe and get it delivered fresh.
                </p>
                <Link href="/shop" onClick={closeCart} className="btn btn-coral mt-2">
                  Shop Paw-a-licious
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-5">
                  <div className="mb-6 rounded-card bg-cream px-4 py-4">
                    {amountToFreeShipping > 0 ? (
                      <p className="mb-2 text-sm font-bold text-ink">
                        Add {formatPrice(amountToFreeShipping)} more for{" "}
                        <span className="text-coral">free delivery</span>
                      </p>
                    ) : (
                      <p className="mb-2 text-sm font-bold text-teal">
                        You&apos;ve unlocked free delivery! 🎉
                      </p>
                    )}
                    <div className="h-2 w-full overflow-hidden rounded-chip bg-ink/10">
                      <motion.div
                        className="h-full rounded-chip bg-coral"
                        animate={{ width: `${freeShippingProgress}%` }}
                        transition={{ duration: 0.5, ease: EASE_OUT }}
                      />
                    </div>
                  </div>

                  <ul className="flex flex-col gap-5">
                    {lines.map((line) => (
                      <li key={`${line.slug}-${line.grams}`} className="flex gap-4">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-tight bg-cream">
                          <Image
                            src={line.image}
                            alt={line.name}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="font-display text-base font-medium text-ink">
                                {line.name}
                              </p>
                              <p className="text-xs font-bold uppercase tracking-wide text-ink-faint">
                                {line.sizeLabel}
                              </p>
                            </div>
                            <button
                              type="button"
                              aria-label={`Remove ${line.name} ${line.sizeLabel}`}
                              onClick={() => removeItem(line.slug, line.grams)}
                              className="text-xs font-bold text-ink-faint underline underline-offset-2 hover:text-coral"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <QtyStepper
                              size="sm"
                              qty={line.qty}
                              onIncrement={() => incrementQty(line.slug, line.grams)}
                              onDecrement={() => decrementQty(line.slug, line.grams)}
                            />
                            <span className="font-display text-sm font-medium text-ink">
                              {formatPrice(line.price * line.qty)}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-ink/10 px-6 py-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-body font-bold text-ink-soft">Subtotal</span>
                    <span className="font-display text-xl font-medium text-ink">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <p className="mb-4 text-xs text-ink-faint">
                    Shipping &amp; taxes calculated at checkout. Melbourne Metro delivery $14.95, free over $250.
                  </p>
                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="btn btn-coral w-full"
                  >
                    Checkout
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
