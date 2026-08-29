import ScrollReveal from "@/components/ScrollReveal";
import { HeartIcon, BowlIcon, DogFaceIcon } from "@/components/icons";

const ITEMS = [
  { Icon: BowlIcon, label: "Real ingredients you can see" },
  { Icon: DogFaceIcon, label: "Irresistible taste dogs love" },
  { Icon: HeartIcon, label: "Goodness in every bowl" },
];

export default function HomeIntroBanner() {
  return (
    <section className="bg-teal py-10">
      <div className="container-shell">
        <ScrollReveal className="grid grid-cols-1 items-center gap-8 divide-y divide-cream-soft/25 text-center sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:divide-x lg:text-left">
          <div className="flex items-center justify-center gap-4 pb-6 sm:pb-0 lg:justify-start lg:pr-8">
            <HeartIcon className="h-9 w-9 shrink-0 text-cream-soft" />
            <p className="script-accent max-w-[15ch] text-xl leading-[1.2] text-cream-soft sm:text-2xl">
              Made like you would{" "}
              <span className="underline decoration-coral-light decoration-2 underline-offset-4">
                at home
              </span>
              , with love.
            </p>
          </div>
          {ITEMS.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 pt-6 text-center sm:pt-0 lg:px-6"
            >
              <Icon className="h-8 w-8 shrink-0 text-cream-soft" />
              <span className="text-sm font-bold text-cream-soft">{label}</span>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
