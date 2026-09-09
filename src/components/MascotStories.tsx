"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { EASE_OUT } from "@/lib/animations";

const MASCOTS = [
  {
    name: "Mitso",
    role: "Head Taste-Tester",
    image: "/assets/photos/hero-mitso.jpg",
    blurb:
      "Our resident golden-haired supervisor. Mitso checks every recipe the same way — nose first, tail second, bowl licked clean third.",
  },
  {
    name: "The Hoodie Crew",
    role: "Snack Enthusiast",
    image: "/assets/photos/dog-hoodie-waiting.jpg",
    blurb:
      "One of our other regular taste-testers — always first to the kitchen, blue hoodie and all, the moment a fresh batch comes out.",
  },
  {
    name: "Paw-some",
    role: "Professional Napper",
    image: "/assets/photos/hero-pawsome.jpg",
    blurb:
      "Naps through most of the day, but somehow always wakes up the exact second a fresh tub gets opened. Never once missed a bowl.",
  },
];

export default function MascotStories() {
  return (
    <section className="bg-cream-soft py-24 lg:py-32">
      <div className="container-shell">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-coral-dark">Not customer reviews — the real critics</p>
          <h2 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-medium text-ink text-balance">
            Meet our taste-testers
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            We don&apos;t have a wall of star ratings — we have Mitso and
            friends, who show up every single time a fresh batch comes out of
            the kitchen.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {MASCOTS.map((mascot, i) => (
            <motion.div
              key={mascot.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-media bg-cream"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={mascot.image}
                  alt={mascot.name}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-7">
                <p className="script-accent text-2xl text-teal">{mascot.role}</p>
                <h3 className="mt-1 font-display text-3xl font-medium text-ink">
                  {mascot.name}
                </h3>
                <p className="mt-3 text-ink-soft">{mascot.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
