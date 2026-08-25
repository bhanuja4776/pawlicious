"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedText from "@/components/AnimatedText";
import { EASE_OUT } from "@/lib/animations";

export default function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-teal-dark py-24 text-cream-soft lg:py-32">
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="eyebrow text-coral-light">Made in Melbourne, made small-batch</p>
            <AnimatedText
              as="h2"
              text="Homemade means we cooked it ourselves."
              className="mt-3 font-display text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.02] text-balance"
            />
            <ScrollReveal delay={0.15}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream-soft/85">
                Paw-a-licious started with a simple idea: dogs deserve real
                food, not something out of a bag that&apos;s been sitting on a
                shelf. So every recipe is gently cooked in small batches, with
                real protein and a full mix of vegetables — the same food
                you&apos;d be happy to see in your own kitchen.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream-soft/85">
                It&apos;s portioned, frozen fresh and made right here in
                Melbourne, ready to deliver across Melbourne Metro or pick up
                locally. Small batches mean more care in every tub — that&apos;s
                the whole point.
              </p>
            </ScrollReveal>
          </div>

          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-media shadow-[0_30px_70px_-20px_rgba(0,0,0,0.45)]"
            >
              <Image
                src="/assets/photos/storefront-scene.jpg"
                alt="Paw-a-licious staged in front of a Melbourne shopfront window"
                fill
                sizes="(min-width: 1024px) 34vw, 90vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.15 }}
              className="absolute -bottom-10 -left-6 h-40 w-40 overflow-hidden rounded-media border-4 border-teal-dark shadow-xl sm:h-48 sm:w-48 md:-left-12"
            >
              <Image
                src="/assets/photos/food-prep-tubs-2.jpg"
                alt="Rows of takeaway tubs filled with freshly prepared Paw-a-licious meals"
                fill
                sizes="200px"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
