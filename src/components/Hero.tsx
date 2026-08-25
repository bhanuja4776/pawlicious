"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/animations";
import AnimatedText from "@/components/AnimatedText";

const TRUST_ITEMS = [
  { label: "100% natural ingredients" },
  { label: "No preservatives" },
  { label: "Gently cooked" },
  { label: "Made in Australia" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: EASE_OUT, delay },
        };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-soft via-cream to-cream pb-16 pt-28 md:pt-32 lg:pb-24 lg:pt-40">
      {/* soft ambient shapes — organic, not paw-print clichés */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal-tint/70 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-coral-tint/60 blur-2xl"
      />

      <div className="container-shell hero-grid">
        <motion.p {...fadeUp(0)} className="hero-eyebrow script-accent text-3xl text-coral md:text-4xl">
          real food, real love
        </motion.p>

        <div className="hero-headline">
          <AnimatedText
            as="h1"
            text="Goodness in Every Bowl"
            className="font-display text-[clamp(2.75rem,9vw,5.2rem)] leading-[0.98] font-medium tracking-tight text-ink"
          />
        </div>

        <motion.p
          {...fadeUp(0.25)}
          className="hero-subtext max-w-md text-balance text-lg text-ink-soft md:text-xl"
        >
          Fresh. Real. Made with love. Homemade dog food, gently cooked in
          small batches right here in Melbourne — because they deserve the
          best.
        </motion.p>

        <motion.div {...fadeUp(0.35)} className="hero-image relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-media shadow-[0_30px_60px_-20px_rgba(18,59,66,0.35)] lg:max-w-none">
            <Image
              src="/assets/photos/bowl-topdown-bone.jpg"
              alt="A bowl of Paw-a-licious homemade dog food topped with a bone treat"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, (min-width: 640px) 60vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-4 h-32 w-28 overflow-hidden rounded-media border-4 border-cream-soft shadow-xl sm:h-40 sm:w-36 md:-left-10">
            <Image
              src="/assets/photos/dog-hoodie-waiting.jpg"
              alt="Mitso's fellow taste-tester in a blue hoodie, waiting eagerly for his bowl"
              fill
              sizes="180px"
              className="object-cover"
            />
          </div>

          {!reduce && (
            <motion.div
              className="absolute -right-2 -top-6 h-24 w-24 overflow-hidden rounded-full ring-4 ring-cream-soft shadow-lg sm:h-28 sm:w-28 md:-right-6 animate-drift-a"
            >
              <Image
                src="/assets/photos/badge-goodness-bowl.jpg"
                alt="Paw-a-licious goodness-in-every-bowl badge featuring Mitso"
                fill
                sizes="112px"
                className="object-cover"
              />
            </motion.div>
          )}
        </motion.div>

        <motion.div {...fadeUp(0.45)} className="hero-cta flex flex-wrap items-center gap-4">
          <Link href="/shop" className="btn btn-coral text-base">
            Shop Paw-a-licious
          </Link>
          <Link href="/quiz" className="btn btn-outline text-base">
            Find your dog&apos;s match
          </Link>
        </motion.div>

        <motion.div
          {...fadeUp(0.55)}
          className="hero-trust flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/10 pt-6 text-sm font-bold text-ink-soft"
        >
          {TRUST_ITEMS.map((item) => (
            <span key={item.label} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              {item.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
