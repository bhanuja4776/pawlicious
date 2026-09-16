"use client";

import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";
import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export default function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <section className="bg-white pb-14 pt-32 lg:pb-20 lg:pt-40">
      <div className="container-shell">
        <ScrollReveal>
          <p className="eyebrow text-coral-dark">{eyebrow}</p>
        </ScrollReveal>
        <AnimatedText
          as="h1"
          text={title}
          className="mt-3 max-w-3xl font-display text-[clamp(2.5rem,6vw,4.25rem)] font-medium leading-[1.02] text-ink text-balance"
        />
        {children && (
          <ScrollReveal delay={0.15} className="mt-5 max-w-xl text-lg text-ink-soft">
            {children}
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
