import { HeartIcon, BowlIcon, DogFaceIcon } from "@/components/icons";

const ITEMS = [
  { Icon: BowlIcon, label: "Real ingredients you can see" },
  { Icon: DogFaceIcon, label: "Irresistible taste dogs love" },
  { Icon: HeartIcon, label: "Goodness in every bowl" },
];

export default function HomeIntroBanner() {
  return (
    <section className="bg-teal py-8 lg:py-10">
      <div className="container-shell flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="flex items-center gap-3">
          <HeartIcon className="h-7 w-7 shrink-0 text-cream-soft" />
          <p className="script-accent text-xl leading-[1.2] text-cream-soft sm:text-2xl">
            Made like you would{" "}
            <span className="underline decoration-coral-light decoration-2 underline-offset-4">
              at home, with love.
            </span>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {ITEMS.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <Icon className="h-8 w-8 shrink-0 text-cream-soft" />
              <span className="max-w-[9rem] text-sm font-bold text-cream-soft">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
