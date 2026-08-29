import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ProductGrid from "@/components/ProductGrid";
import FeatureBanner from "@/components/FeatureBanner";

export const metadata: Metadata = {
  title: "Shop All Recipes — Paw-a-licious",
  description:
    "Shop all four Paw-a-licious homemade dog food recipes — Chicken, Beef, Turkey and Kangaroo. 500g $18.95 or 750g $24.95, delivered fresh across Melbourne Metro.",
};

export default function ShopPage() {
  return (
    <>
      <PageIntro eyebrow="Shop the full range" title="Four recipes. Every one homemade.">
        Every recipe is built the same honest way — real protein, real
        veggies, brown rice, gently cooked in small batches. Pick a flavour,
        pick a size, and get it delivered fresh.
      </PageIntro>

      <section className="bg-cream pb-16 pt-4 lg:pb-20">
        <div className="container-shell">
          <ProductGrid withFilters />
        </div>
      </section>

      <FeatureBanner />
    </>
  );
}
