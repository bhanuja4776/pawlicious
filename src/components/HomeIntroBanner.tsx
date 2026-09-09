import { HeartIcon, BowlIcon, PotIcon, DogFaceIcon } from "@/components/icons";

const FEATURES = [
  {
    Icon: BowlIcon,
    title: "Real ingredients you can see",
    desc: "We use real, wholefood ingredients you'd recognise in your own kitchen.",
  },
  {
    Icon: PotIcon,
    title: "Gently cooked for goodness",
    desc: "Slow cooked in small batches to lock in natural nutrients and flavour.",
  },
  {
    Icon: DogFaceIcon,
    title: "Irresistible taste dogs love",
    desc: "Delicious, wholesome recipes that even the fussiest eaters adore.",
  },
  {
    Icon: HeartIcon,
    title: "Goodness in every bowl",
    desc: "Balanced, nourishing meals made with love in every single batch.",
  },
];

export default function HomeIntroBanner() {
  return (
    <>
      <section className="relative overflow-hidden bg-teal py-9 lg:py-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-2 -top-3 flex items-center gap-1.5"
        >
          <HeartIcon className="h-4 w-4 text-teal-light/60" />
          <HeartIcon className="h-5 w-5 text-coral-light/70" />
        </div>

        <div className="container-shell flex items-center justify-center gap-3">
          <HeartIcon className="h-7 w-7 shrink-0 text-cream-soft" />
          <p className="script-accent text-xl leading-[1.2] text-cream-soft sm:text-2xl">
            Made like you would{" "}
            <span className="underline decoration-coral-light decoration-2 underline-offset-4 text-coral-light">
              at home, with love.
            </span>
          </p>
        </div>
      </section>

      <section className="bg-cream-soft py-14 lg:py-20">
        <div className="container-shell relative">
          <div className="mx-auto max-w-2xl">
            {FEATURES.map(({ Icon, title, desc }, i) => (
              <div key={title}>
                <div className="flex items-start gap-5 py-5 sm:gap-6">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-cream shadow-sm">
                    <Icon className="h-7 w-7 text-teal" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-teal sm:text-xl">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft sm:text-base">{desc}</p>
                  </div>
                </div>
                {i < FEATURES.length - 1 && (
                  <div className="flex items-center justify-center">
                    <span className="h-px flex-1 bg-ink/10" />
                    <HeartIcon className="mx-3 h-3.5 w-3.5 shrink-0 text-coral" />
                    <span className="h-px flex-1 bg-ink/10" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <PawIconWatermark />
        </div>
      </section>
    </>
  );
}

function PawIconWatermark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="pointer-events-none absolute bottom-2 right-4 h-10 w-10 text-teal-light/50 sm:h-12 sm:w-12"
      fill="currentColor"
    >
      <ellipse cx="12" cy="16" rx="5" ry="4" />
      <ellipse cx="5.5" cy="9" rx="2" ry="2.5" />
      <ellipse cx="10.2" cy="5.5" rx="2" ry="2.5" />
      <ellipse cx="13.8" cy="5.5" rx="2" ry="2.5" />
      <ellipse cx="18.5" cy="9" rx="2" ry="2.5" />
    </svg>
  );
}
