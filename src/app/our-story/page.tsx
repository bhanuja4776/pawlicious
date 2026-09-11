import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import ScrollReveal from "@/components/ScrollReveal";
import MascotStories from "@/components/MascotStories";
import ReviewsPlaceholderStrip from "@/components/ReviewsPlaceholderStrip";
import VideoSection from "@/components/VideoSection";
import { EASE_OUT } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Our Story — Paw-a-licious",
  description:
    "Paw-a-licious is homemade dog food, gently cooked in small batches in Melbourne — real protein, real vegetables, made with love.",
};

const STORY_BLOCKS = [
  {
    image: "/assets/photos/storefront-scene.jpg",
    alt: "Paw-a-licious staged in front of a Melbourne shopfront window, street visible outside",
    eyebrow: "Made in Melbourne",
    title: "A local kitchen, not a factory line.",
    copy: "Paw-a-licious is made right here in Melbourne, in small batches — not on an industrial production line. That means more attention in every tub, and food that actually looks like something a dog would want to eat, because it is.",
    reverse: false,
  },
  {
    image: "/assets/photos/food-prep-tubs-1.jpg",
    alt: "Overhead shot of dozens of takeaway tubs filled with finished Paw-a-licious meals",
    eyebrow: "Small batches, on purpose",
    title: "We portion it fresh, in batches you can actually see.",
    copy: "Every batch is gently cooked with a real protein — chicken, beef, turkey or kangaroo — folded through sweet potato, pumpkin, broccoli, cauliflower, carrot, zucchini, mushroom and brown rice. Then it's portioned into tubs and frozen fresh, ready to deliver or collect.",
    reverse: true,
  },
  {
    image: "/assets/photos/lifestyle-setup-signage-3.jpg",
    alt: "Top-down white bowl of Paw-a-licious food finished with a dog-bone treat, on a wood table",
    eyebrow: "No fillers, no nasties",
    title: "If we wouldn't recognise it, it's not going in the bowl.",
    copy: "No fillers, no preservatives, no artificial colours or flavours — just real ingredients you can actually name. It's the same standard we'd want for our own food, applied to theirs.",
    reverse: false,
  },
];

export default function OurStoryPage() {
  return (
    <>
      <PageIntro eyebrow="Our story" title="Real food, made by hand, for the dogs we love.">
        Paw-a-licious began with one goal — give dogs the kind of food their
        people would actually recognise. Every recipe is still gently cooked
        in small batches, right here in Melbourne.
      </PageIntro>

      <section className="bg-cream py-4">
        <div className="container-shell flex flex-col gap-24 py-16 lg:gap-32 lg:py-24">
          {STORY_BLOCKS.map((block, index) => (
            <div
              key={block.title}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                block.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ScrollReveal
                variants={{
                  hidden: { opacity: 0, x: block.reverse ? 30 : -30 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
                }}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-media"
              >
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 44vw, 90vw"
                  className="object-cover"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="eyebrow text-coral-dark">{block.eyebrow}</p>
                <h2 className="mt-3 font-display text-[clamp(1.9rem,4.2vw,2.75rem)] font-medium leading-[1.05] text-ink text-balance">
                  {block.title}
                </h2>
                <p className="mt-5 max-w-md text-lg text-ink-soft">{block.copy}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <VideoSection
        src="/assets/videos/video-1.mp4"
        poster="/assets/photos/food-prep-tubs-2.jpg"
        eyebrow="Watch the goodness"
        headline="Small batches, cooked with real care."
        subtext="Real food, real love, real reactions — every recipe is prepared and portioned right here in Melbourne."
      />

      <MascotStories />

      <ReviewsPlaceholderStrip />

      <section className="bg-coral py-20 text-center text-cream-soft lg:py-24">
        <div className="container-shell">
          <ScrollReveal className="flex flex-col items-center gap-6">
            <h2 className="max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] font-medium text-balance">
              Ready to see what real food looks like?
            </h2>
            <Link href="/shop" className="btn bg-cream-soft text-coral hover:!bg-white">
              Shop Paw-a-licious
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
