import ScrollReveal from "@/components/ScrollReveal";

const FEATURES = [
  "Real ingredients you can see",
  "Irresistible taste dogs love",
  "Goodness in every bowl",
  "Cooked fresh in small batches",
  "Made in Australia with love",
];

export default function FeatureBanner() {
  return (
    <section className="bg-teal py-8">
      <div className="container-shell">
        <ScrollReveal className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
          {FEATURES.map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 text-sm font-bold text-cream-soft sm:text-base"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral-light" />
              {item}
            </span>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
