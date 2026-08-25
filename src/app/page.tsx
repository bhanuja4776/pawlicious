import Link from "next/link";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import ProductGrid from "@/components/ProductGrid";
import ProductShowcase from "@/components/ProductShowcase";
import VideoSection from "@/components/VideoSection";
import IngredientsStory from "@/components/IngredientsStory";
import BrandStory from "@/components/BrandStory";
import MascotStories from "@/components/MascotStories";
import ReviewsPlaceholderStrip from "@/components/ReviewsPlaceholderStrip";
import FinalCTA from "@/components/FinalCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />

      <BrandStatement />

      <section className="bg-cream py-20 lg:py-28">
        <div className="container-shell">
          <ScrollReveal className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-coral-dark">The full range</p>
              <h2 className="mt-2 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium text-ink text-balance">
                Four recipes, one happy dog
              </h2>
            </div>
            <Link href="/shop" className="link-underline shrink-0 font-bold text-ink">
              View all products →
            </Link>
          </ScrollReveal>
          <ProductGrid />
        </div>
      </section>

      <ProductShowcase />

      <VideoSection
        src="/assets/videos/video-1.mp4"
        poster="/assets/photos/food-prep-tubs-3.jpg"
        eyebrow="Watch the goodness"
        headline="Small batches, cooked with real care."
        subtext="Real food, real love, real reactions — every recipe is prepared and portioned right here in Melbourne."
      />

      <IngredientsStory />

      <BrandStory />

      <VideoSection
        src="/assets/videos/video-2.mp4"
        poster="/assets/photos/lifestyle-bowl-closeup.jpg"
        eyebrow="Straight from the bowl"
        headline="This is what real food looks like at dinner time."
        subtext="Gently cooked, portioned fresh, and served the way dogs actually enjoy it."
        dark={false}
      />

      <MascotStories />

      <ReviewsPlaceholderStrip />

      <FinalCTA />
    </>
  );
}
