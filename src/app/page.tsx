import Link from "next/link";
import Hero from "@/components/Hero";
import HomeIntroBanner from "@/components/HomeIntroBanner";
import ProductGrid from "@/components/ProductGrid";
import ScrollReveal from "@/components/ScrollReveal";
import { PawIcon } from "@/components/icons";

function Squiggle({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 60 10"
      className={`h-2.5 w-10 text-teal ${flip ? "-scale-x-100" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <path d="M1 8c4-7 8 7 12 0s8-7 12 0 8 7 12 0 8-7 12 0" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <HomeIntroBanner />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-shell">
          <ScrollReveal className="flex flex-col items-center gap-2 text-center">
            <div className="mb-1 flex items-center gap-2">
              <Squiggle />
              <PawIcon className="h-4 w-4 shrink-0 text-teal" />
              <Squiggle flip />
            </div>
            <h2 className="flex items-center gap-3 font-display text-[clamp(1.6rem,3.5vw,2.25rem)] font-bold text-ink">
              <span className="text-coral">♡</span>
              Our Fresh Dog Food Range
              <span className="text-coral">♡</span>
            </h2>
            <p className="text-sm text-ink-soft sm:text-base">
              Wholesome, gently cooked recipes packed with real ingredients and love.
            </p>
            <span className="mt-2 h-0.5 w-16 bg-coral" />
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
