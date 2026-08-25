"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import QtyStepper from "@/components/QtyStepper";
import PageIntro from "@/components/PageIntro";

export default function CheckoutExperience() {
  const { lines, incrementQty, decrementQty, subtotal, deliveryFee, amountToFreeShipping } = useCart();
  const [placed, setPlaced] = useState(false);
  const shipping = lines.length === 0 || amountToFreeShipping <= 0 ? 0 : deliveryFee;
  const total = subtotal + shipping;

  return (
    <>
      <PageIntro eyebrow="Checkout" title="Your order summary">
        This is a design preview of checkout — no payment is processed here.
        For real orders, message us on Instagram or call {" "}
        <a href="tel:0412626627" className="link-underline font-bold">0412 626 627</a>.
      </PageIntro>

      <section className="bg-cream pb-24 pt-4 lg:pb-32">
        <div className="container-shell grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {lines.length === 0 ? (
              <div className="rounded-card bg-cream-soft p-10 text-center">
                <p className="font-display text-2xl text-ink">Your cart is empty.</p>
                <Link href="/shop" className="btn btn-coral mt-6 inline-flex">
                  Shop Paw-a-licious
                </Link>
              </div>
            ) : (
              <ul className="flex flex-col gap-6">
                {lines.map((line) => (
                  <li
                    key={`${line.slug}-${line.grams}`}
                    className="flex gap-4 rounded-card bg-cream-soft p-4"
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-tight">
                      <Image src={line.image} alt={line.name} fill sizes="96px" className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-display text-lg font-medium text-ink">{line.name}</p>
                        <p className="text-xs font-bold uppercase tracking-wide text-ink-faint">
                          {line.sizeLabel}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <QtyStepper
                          size="sm"
                          qty={line.qty}
                          onIncrement={() => incrementQty(line.slug, line.grams)}
                          onDecrement={() => decrementQty(line.slug, line.grams)}
                        />
                        <span className="font-display font-medium text-ink">
                          {formatPrice(line.price * line.qty)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="h-fit rounded-card bg-teal-tint p-7">
            <h2 className="font-display text-2xl font-medium text-teal-deeper">Order total</h2>
            <div className="mt-6 flex flex-col gap-3 text-teal-dark">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery (Melbourne Metro)</span>
                <span className="font-bold">{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              {amountToFreeShipping > 0 && lines.length > 0 && (
                <p className="text-xs">
                  Add {formatPrice(amountToFreeShipping)} more for free delivery.
                </p>
              )}
              <div className="mt-2 flex justify-between border-t border-teal-dark/20 pt-3 text-lg">
                <span className="font-bold">Total</span>
                <span className="font-display font-medium">{formatPrice(total)}</span>
              </div>
            </div>

            <button
              type="button"
              disabled={lines.length === 0}
              onClick={() => setPlaced(true)}
              className="btn btn-teal mt-7 w-full disabled:cursor-not-allowed disabled:opacity-50"
            >
              {placed ? "Order noted ✓" : "Place order (design preview)"}
            </button>
            {placed && (
              <p className="mt-4 text-sm text-teal-deeper">
                Thanks! This is a design preview, so nothing was actually
                ordered. Contact us on Instagram{" "}
                <a href="https://instagram.com/paw_a_licious_dogfood" className="link-underline font-bold" target="_blank" rel="noreferrer">
                  @paw_a_licious_dogfood
                </a>{" "}
                to place a real order.
              </p>
            )}
            <p className="mt-5 text-xs text-teal-dark/70">
              Free pickup available in Balwyn North and Templestowe Lower.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
