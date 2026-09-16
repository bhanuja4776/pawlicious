"use client";

import ScrollReveal from "@/components/ScrollReveal";

const PLACEHOLDER_SLOTS = [1, 2, 3];

export default function ReviewsPlaceholderStrip() {
  return (
    <ScrollReveal className="border-y border-ink/10 bg-white py-10">
      <div className="container-shell">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-ink-faint">
          Template preview — real customer reviews go here
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PLACEHOLDER_SLOTS.map((slot) => (
            <div
              key={slot}
              className="rounded-card border border-dashed border-ink/20 bg-cream-soft/60 p-6 text-center"
            >
              <p className="mb-2 text-coral">★★★★★</p>
              <p className="text-sm italic text-ink-faint">
                &ldquo;Add your customer&apos;s story here.&rdquo;
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wide text-ink-faint">
                — placeholder
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
