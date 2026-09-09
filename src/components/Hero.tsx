"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/animations";
import MagneticButton from "@/components/MagneticButton";
import { HeartIcon, LeafIcon, PotIcon, PawIcon } from "@/components/icons";

const TRUST_ITEMS = [
  { Icon: HeartIcon, label: "Made with real ingredients" },
  { Icon: LeafIcon, label: "No preservatives or additives" },
  { Icon: PotIcon, label: "Gently cooked for nutrition" },
  { Icon: PawIcon, label: "Made in Australia" },
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
    <section className="relative overflow-hidden bg-white lg:h-dvh">
      <div className="grid gap-5 px-6 pb-10 pt-20 sm:gap-6 sm:px-10 sm:pt-24 lg:h-dvh lg:content-center lg:gap-x-0 lg:gap-y-6 lg:grid-cols-2 lg:px-14 lg:pb-0 lg:pt-28 xl:px-20">
        <div className="relative z-10 order-1 flex flex-col gap-3 sm:gap-4 lg:order-none lg:col-start-1 lg:gap-4">
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
        </div>

        <motion.div
          {...fadeUp(0.15)}
          className="relative order-2 -mx-6 aspect-[4/3] w-[calc(100%+3rem)] overflow-hidden sm:-mx-10 sm:w-[calc(100%+5rem)] sm:aspect-[16/10] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:aspect-auto lg:h-full lg:w-full"
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

        <div className="relative z-10 order-3 flex flex-col gap-3 sm:gap-4 lg:order-none lg:col-start-1 lg:gap-4">
          <motion.p
            {...fadeUp(0.2)}
            className="max-w-md text-balance text-sm text-ink-soft sm:text-base md:text-lg"
          >
            Wholesome, gently cooked fresh dog food made with real ingredients
            your dog will love — because they deserve the very best.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-3">
            <MagneticButton href="/shop" className="btn btn-teal text-sm uppercase tracking-wide md:text-base">
              Shop Now
              <PawIcon className="h-4 w-4 shrink-0" />
            </MagneticButton>
            <Link
              href="/our-story"
              className="btn btn-outline !border-teal !text-teal hover:!bg-teal hover:!text-cream-soft text-sm uppercase tracking-wide md:text-base"
            >
              Our Story
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-1 grid grid-cols-4 gap-2"
          >
            {TRUST_ITEMS.map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 text-center sm:gap-2">
                <Icon className="h-6 w-6 shrink-0 text-teal sm:h-8 sm:w-8" />
                <span className="text-[0.6rem] font-bold uppercase leading-tight tracking-wide text-ink-soft sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
