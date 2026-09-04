import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import ScrollReveal from "@/components/ScrollReveal";
import VideoSection from "@/components/VideoSection";
import IngredientsShowcase from "@/components/IngredientsShowcase";
import { NASTIES_FREE } from "@/lib/products";

export const metadata: Metadata = {
  title: "Ingredients — Paw-a-licious",
  description:
    "Every Paw-a-licious recipe is built from real, visible ingredients — sweet potato, pumpkin, broccoli, cauliflower, carrot, zucchini, mushroom, brown rice, coconut oil, psyllium husk and a real protein. No fillers, no preservatives, no nasties.",
};

const PROTEINS = ["Chicken", "Beef", "Turkey", "Kangaroo"];

export default function IngredientsPage() {
  return (
    <>
      <PageIntro eyebrow="What's actually in the bowl" title="Every ingredient, out in the open.">
        No mystery blends. Every Paw-a-licious recipe is built the same
        honest way — a real protein, a full mix of real vegetables, brown
        rice, coconut oil and psyllium husk. That&apos;s it.
      </PageIntro>

      <section className="bg-cream py-4">
        <div className="container-shell grid grid-cols-1 gap-4 py-14 sm:grid-cols-3 lg:py-20">
          <ScrollReveal className="relative col-span-1 aspect-[4/5] overflow-hidden rounded-media sm:col-span-2 sm:row-span-2 sm:aspect-auto">
            <Image
              src="/assets/photos/ingredients-flatlay-1.jpg"
              alt="Overhead flatlay of pumpkin, mushrooms, broccoli, cauliflower, carrot and zucchini surrounding bowls of finished Paw-a-licious food"
              fill
              sizes="(min-width: 640px) 60vw, 90vw"
              className="object-cover"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="relative aspect-[4/5] overflow-hidden rounded-media">
            <Image
              src="/assets/photos/lifestyle-bowl-closeup.jpg"
              alt="Close-up of a Paw-a-licious bowl and tub, surrounded by fresh vegetables"
              fill
              sizes="(min-width: 640px) 30vw, 90vw"
              className="object-cover"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="relative aspect-[4/5] overflow-hidden rounded-media">
            <Image
              src="/assets/photos/ingredients-flatlay-2.jpg"
              alt="Second overhead flatlay of fresh vegetables around Paw-a-licious bowls"
              fill
              sizes="(min-width: 640px) 30vw, 90vw"
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      <IngredientsShowcase />

      <section className="bg-cream py-4">
        <div className="container-shell py-10 text-center">
          <ScrollReveal>
            <p className="eyebrow text-teal">Plus coconut oil and psyllium husk in every batch</p>
            <p className="mt-2 eyebrow text-coral-dark">and your dog&apos;s chosen protein</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {PROTEINS.map((p) => (
                <span
                  key={p}
                  className="rounded-chip bg-coral-tint px-5 py-2.5 font-display font-medium text-coral-dark"
                >
                  {p}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <VideoSection
        src="/assets/videos/video-2.mp4"
        poster="/assets/photos/lifestyle-bowl-closeup.jpg"
        eyebrow="Straight from the bowl"
        headline="This is what real food looks like at dinner time."
        subtext="Gently cooked, portioned fresh, and served the way dogs actually enjoy it."
        dark={false}
      />

      <section className="bg-teal-dark py-20 text-cream-soft lg:py-28">
        <div className="container-shell grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <p className="eyebrow text-coral-light">What you won&apos;t find</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] text-balance">
              No nasties. Ever.
            </h2>
            <ul className="mt-8 flex flex-col gap-4">
              {NASTIES_FREE.map((item) => (
                <li key={item} className="flex items-center gap-3 text-lg">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral text-sm font-bold text-cream-soft">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/shop" className="btn btn-coral mt-9 inline-flex">
              Shop Paw-a-licious
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="relative aspect-[4/5] w-full overflow-hidden rounded-media">
            <Image
              src="/assets/photos/lifestyle-setup-signage-2.jpg"
              alt="Paw-a-licious styled table scene with product tubs and fresh vegetables"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
