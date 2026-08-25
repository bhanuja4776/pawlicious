"use client";

import { cn } from "@/lib/utils";

type QtyStepperProps = {
  qty: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
  size?: "sm" | "md";
};

export default function QtyStepper({
  qty,
  onIncrement,
  onDecrement,
  min = 1,
  max = 20,
  size = "md",
}: QtyStepperProps) {
  const dims = size === "sm" ? "h-9 w-9 text-sm" : "h-11 w-11 text-base";

  return (
    <div className="inline-flex items-center rounded-chip border border-ink/15 bg-cream-soft">
      <button
        type="button"
        aria-label="Decrease quantity"
        className={cn(
          dims,
          "flex items-center justify-center rounded-full font-bold text-ink transition hover:text-coral disabled:opacity-30"
        )}
        onClick={onDecrement}
        disabled={qty <= min}
      >
        −
      </button>
      <span
        className={cn(
          "min-w-[1.75rem] text-center font-display font-medium",
          size === "sm" ? "text-sm" : "text-base"
        )}
        aria-live="polite"
      >
        {qty}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        className={cn(
          dims,
          "flex items-center justify-center rounded-full font-bold text-ink transition hover:text-coral disabled:opacity-30"
        )}
        onClick={onIncrement}
        disabled={qty >= max}
      >
        +
      </button>
    </div>
  );
}
