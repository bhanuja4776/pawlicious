"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { SIZE_OPTIONS } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import QtyStepper from "@/components/QtyStepper";

export default function ProductCard({ product }: { product: Product }) {
  const [sizeIdx, setSizeIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const size = SIZE_OPTIONS[sizeIdx];
  const accentText = product.accent === "coral" ? "text-coral" : "text-teal-dark";
  const accentBg = product.accent === "coral" ? "bg-coral" : "bg-teal-dark";

  function handleAdd() {
    addItem(
      {
        slug: product.slug,
        name: product.name,
        protein: product.protein,
        image: product.heroImage,
        sizeLabel: size.label,
        grams: size.grams,
        price: size.price,
      },
      qty
    );
    setQty(1);
  }

  return (
    <div className="group flex flex-col">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[4/5] w-full overflow-hidden rounded-media bg-cream-deep"
      >
        <Image
          src={product.heroImage}
          alt={`${product.name} recipe — Paw-a-licious homemade dog food`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
          className="object-cover transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        {product.isFavourite && (
          <span className="absolute left-4 top-4 rounded-chip bg-coral px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-cream-soft">
            Fan favourite
          </span>
        )}
        <span
          className={`absolute right-4 top-4 rounded-chip ${accentBg} px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-cream-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        >
          {product.tagline}
        </span>
      </Link>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <Link href={`/shop/${product.slug}`}>
            <h3 className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-coral">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 text-sm text-ink-soft">{product.description}</p>
        </div>
        <span className={`font-display text-lg font-medium ${accentText} whitespace-nowrap`}>
          {formatPrice(size.price)}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {SIZE_OPTIONS.map((opt, i) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => setSizeIdx(i)}
            className={`rounded-chip border px-3 py-1.5 text-xs font-bold transition ${
              i === sizeIdx
                ? "border-ink bg-ink text-cream-soft"
                : "border-ink/20 text-ink-soft hover:border-ink/50"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <QtyStepper
          qty={qty}
          onIncrement={() => setQty((q) => Math.min(20, q + 1))}
          onDecrement={() => setQty((q) => Math.max(1, q - 1))}
          size="sm"
        />
        <button
          type="button"
          onClick={handleAdd}
          className="btn btn-coral flex-1 !py-2.5 !text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
