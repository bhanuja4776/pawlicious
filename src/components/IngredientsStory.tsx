"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { SHARED_INGREDIENTS } from "@/lib/products";
import { EASE_OUT, staggerContainer, staggerItem } from "@/lib/animations";

export default function IngredientsStory() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="container-shell grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <ScrollReveal>
          <p className="eyebrow text-teal">Real, visible ingredients</p>
          <h2 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.02] text-ink text-balance">
            You can name every single thing in the bowl.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-ink-soft">
            No mystery meals, no ingredient lists you need a dictionary for.
            Every Paw-a-licious recipe starts with a real protein and a full
            garden of veggies — nothing hiding behind a label.
          </p>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer(0.05)}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {SHARED_INGREDIENTS.map((ing) => (
              <motion.li
                key={ing}
                variants={staggerItem}
                className="rounded-chip border border-teal/25 bg-teal-tint px-4 py-2 text-sm font-bold text-teal-dark"
              >
                {ing}
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-2 text-sm font-bold text-ink-soft">
            <span>No fillers</span>
            <span>No preservatives</span>
            <span>No artificial colours or flavours</span>
          </div>

          <Link href="/ingredients" className="btn btn-teal mt-9 inline-flex">
            See every ingredient
          </Link>
        </ScrollReveal>

        <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-media sm:col-span-1 sm:aspect-[4/5]"
          >
            <Image
              src="/assets/photos/ingredients-flatlay-2.jpg"
              alt="Overhead flatlay of pumpkin, mushrooms, broccoli, cauliflower, carrot and zucchini around bowls of finished Paw-a-licious food"
              fill
              sizes="(min-width: 1024px) 30vw, 90vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.12 }}
            className="relative mt-8 aspect-[4/5] overflow-hidden rounded-media sm:mt-16"
          >
            <Image
              src="/assets/photos/lifestyle-setup-signage-1.jpg"
              alt="Paw-a-licious styled table scene with product tubs, ceramic bowls and fresh vegetables"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
