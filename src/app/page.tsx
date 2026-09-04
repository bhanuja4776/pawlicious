import Link from "next/link";
import Hero from "@/components/Hero";
import HomeIntroBanner from "@/components/HomeIntroBanner";
import ProductGrid from "@/components/ProductGrid";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />

      <HomeIntroBanner />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-shell">
          <ScrollReveal className="flex flex-col items-center gap-2 text-center">
            <h2 className="flex items-center gap-3 font-display text-[clamp(1.6rem,3.5vw,2.25rem)] font-bold text-ink">
              <span className="text-coral">♡</span>
              Our Fresh Dog Food Range
              <span className="text-coral">♡</span>
            </h2>
            <p className="text-sm text-ink-soft sm:text-base">
              Wholesome, gently cooked recipes packed with real ingredients and love.
            </p>
          </ScrollReveal>

          <div className="mt-10">
            <ProductGrid />
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/shop" className="btn btn-outline !border-ink !text-ink hover:!bg-ink hover:!text-cream-soft">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
