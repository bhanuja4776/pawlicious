import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const INGREDIENT_PHOTOS = [
  { src: "/assets/photos/ingredient-sweet-potato.jpg", label: "Sweet Potato" },
  { src: "/assets/photos/ingredient-pumpkin.jpg", label: "Pumpkin" },
  { src: "/assets/photos/ingredient-broccoli.jpg", label: "Broccoli" },
  { src: "/assets/photos/ingredient-cauliflower.jpg", label: "Cauliflower" },
  { src: "/assets/photos/ingredient-carrot.jpg", label: "Carrot" },
  { src: "/assets/photos/ingredient-zucchini.jpg", label: "Zucchini" },
  { src: "/assets/photos/ingredient-mushrooms.jpg", label: "Mushrooms" },
  { src: "/assets/photos/ingredient-brown-rice.jpg", label: "Brown Rice" },
];

export default function IngredientsShowcase() {
  return (
    <section className="bg-white py-4">
      <div className="container-shell py-14 lg:py-16">
        <div className="rounded-media bg-white px-4 py-10 sm:px-8 lg:px-12">
          <ScrollReveal className="text-center">
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.25rem)] font-bold text-teal">
              What&apos;s Inside Matters
            </h2>
            <p className="mt-2 text-sm text-ink-soft sm:text-base">
              We use real, whole ingredients – gently cooked to lock in the nutrients and flavour.
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={0.1}
            className="mt-8 grid grid-cols-4 gap-3 sm:gap-5 lg:grid-cols-8"
          >
            {INGREDIENT_PHOTOS.map((ing) => (
              <div key={ing.label} className="flex flex-col items-center gap-2 text-center">
                <div className="relative aspect-square w-full overflow-hidden rounded-card">
                  <Image
                    src={ing.src}
                    alt={ing.label}
                    fill
                    sizes="(min-width: 1024px) 12vw, 22vw"
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-wide text-ink">
                  {ing.label}
                </span>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="mt-8 text-center">
            <p className="script-accent text-lg text-coral sm:text-xl">
              ♡ No preservatives. No fillers. Just real food. Nothing artificial.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
