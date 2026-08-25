"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { EASE_OUT } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-coral py-24 text-cream-soft lg:py-28">
      <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-teal-deeper/20 blur-3xl" />

      <div className="container-shell relative flex flex-col items-center gap-8 text-center">
        <ScrollReveal className="flex flex-col items-center gap-5">
          <span className="script-accent text-3xl text-cream-soft/90">because they deserve the best</span>
          <h2 className="max-w-3xl font-display text-[clamp(2.25rem,6vw,4.25rem)] font-medium leading-[1.02] text-balance">
            Fresh bowls, ready for your dog.
          </h2>
          <p className="max-w-xl text-lg text-cream-soft/90">
            Four real recipes, gently cooked in small batches and delivered
            fresh across Melbourne Metro — or picked up locally.
          </p>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.2 }}
        >
          <MagneticButton
            href="/shop"
            className="btn bg-cream-soft text-coral hover:!bg-white text-base shadow-lg"
          >
            Shop Paw-a-licious
          </MagneticButton>
        </motion.div>

        <div className="relative mt-4 h-14 w-14 overflow-hidden rounded-full ring-4 ring-cream-soft/70 sm:h-16 sm:w-16">
          <Image
            src="/assets/photos/badge-goodness-bowl.jpg"
            alt=""
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
