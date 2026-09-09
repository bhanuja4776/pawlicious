"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/animations";
import MagneticButton from "@/components/MagneticButton";
import { HeartIcon, LeafIcon, PotIcon, BowlIcon, PinIcon } from "@/components/icons";

const TRUST_ITEMS = [
  { Icon: BowlIcon, label: "Made with real ingredients" },
  { Icon: LeafIcon, label: "No preservatives or additives" },
  { Icon: PotIcon, label: "Gently cooked for nutrition" },
  { Icon: PinIcon, label: "Made in Australia" },
];

const HERO_PHOTO = {
  src: "/assets/photos/hero-mitso.jpg",
  alt: "Mitso, our head taste-tester, with a bowl of Paw-a-licious homemade dog food",
};

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: EASE_OUT, delay },
        };

  return (
    <section className="relative h-dvh overflow-hidden bg-white">
      <div className="grid h-dvh grid-rows-[auto_1fr] lg:grid-cols-2 lg:grid-rows-1">
        <div className="relative z-10 flex flex-col justify-start gap-2 overflow-hidden px-6 pb-3 pt-20 sm:gap-3 sm:px-10 sm:pb-5 sm:pt-24 lg:gap-4 lg:px-14 lg:pt-28 xl:px-20">
          <motion.p
            {...fadeUp(0)}
            className="text-xs font-bold uppercase tracking-[0.14em] text-ink sm:text-sm"
          >
            Fresh. Real. Made with love.
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display leading-[0.95] font-bold tracking-tight"
          >
            <span className="block uppercase text-[clamp(2.4rem,7vw,4.75rem)] tracking-tighter text-teal">
              Goodness
            </span>
            <span className="script-accent block text-[clamp(2.1rem,6vw,4rem)] leading-[1.1] text-coral">
              in Every Bowl ♡
            </span>
          </motion.h1>

          <motion.div
            {...fadeUp(0.18)}
            className="flex items-center gap-3 text-teal/50"
            aria-hidden
          >
            <span className="h-px w-10 bg-current" />
            <HeartIcon className="h-3 w-3 shrink-0 text-coral" />
            <span className="h-px w-10 bg-current" />
          </motion.div>

          <motion.p
            {...fadeUp(0.2)}
            className="max-w-md text-balance text-sm text-ink-soft sm:text-base md:text-lg"
          >
            Made in small batches with real, wholefood ingredients and gently
            cooked to lock in the natural goodness. No fillers, no shortcuts —
            just honest food made with <span className="font-bold text-coral">love</span>,
            for the ones who mean the world to us. ♡
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-3">
            <MagneticButton href="/shop" className="btn btn-teal text-sm md:text-base">
              Shop Now
            </MagneticButton>
            <Link
              href="/our-story"
              className="btn btn-outline !border-teal !text-teal hover:!bg-teal hover:!text-cream-soft text-sm md:text-base"
            >
              Our Story
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-1 grid grid-cols-4 gap-2 border-t border-ink/10 pt-4 sm:gap-3 sm:pt-5"
          >
            {TRUST_ITEMS.map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 text-center sm:gap-2">
                <span className="relative inline-flex">
                  <Icon className="h-5 w-5 shrink-0 text-teal sm:h-7 sm:w-7" />
                  <HeartIcon className="absolute -right-1.5 -top-1 h-2.5 w-2.5 text-coral sm:-right-2 sm:h-3 sm:w-3" />
                </span>
                <span className="text-[0.6rem] font-bold leading-tight text-ink-soft sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.15)}
          className="relative min-h-0 w-full overflow-hidden lg:h-full"
        >
          <Image
            src={HERO_PHOTO.src}
            alt={HERO_PHOTO.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[center_25%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
