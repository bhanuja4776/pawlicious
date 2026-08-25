"use client";

import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";

export default function BrandStatement() {
  return (
    <section className="bg-cream py-14 lg:py-20">
      <div className="container-shell text-center">
        <AnimatedText
          as="h2"
          text="Real ingredients. Real Melbourne kitchen. Real love."
          className="mx-auto max-w-4xl justify-center font-display text-[clamp(1.6rem,4vw,2.75rem)] font-medium leading-[1.15] text-ink text-balance"
        />
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-lg script-accent text-2xl text-coral">
            because they deserve the best
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
