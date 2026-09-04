import ScrollReveal from "@/components/ScrollReveal";
import { HeartIcon, HouseIcon, BowlIcon, PotIcon, DogFaceIcon } from "@/components/icons";

const ITEMS = [
  {
    Icon: BowlIcon,
    title: "Real ingredients you can see",
    copy: "We use real, wholefood ingredients you'd recognise in your own kitchen.",
  },
  {
    Icon: PotIcon,
    title: "Gently cooked for goodness",
    copy: "Slow cooked in small batches to lock in natural nutrients and flavour.",
  },
  {
    Icon: DogFaceIcon,
    title: "Irresistible taste dogs love",
    copy: "Delicious, wholesome recipes that even the fussiest eaters adore.",
  },
  {
    Icon: HeartIcon,
    title: "Goodness in every bowl",
    copy: "Balanced, nourishing meals made with love in every single batch.",
  },
];

export default function HomeIntroBanner() {
  return (
    <section className="bg-cream">
      <div className="bg-teal py-10">
        <div className="container-shell flex items-center justify-center gap-4 text-center">
          <HeartIcon className="h-7 w-7 shrink-0 text-cream-soft/80 sm:h-9 sm:w-9" />
          <p className="script-accent text-xl leading-[1.2] text-cream-soft sm:text-2xl">
            Made like you would{" "}
            <span className="underline decoration-coral-light decoration-2 underline-offset-4">
              at home
            </span>
            , with love.
          </p>
          <HouseIcon className="hidden h-9 w-9 shrink-0 text-cream-soft/50 sm:block" />
        </div>
      </div>

      <div className="container-shell py-14 lg:py-16">
        <ScrollReveal className="mx-auto flex max-w-xl flex-col divide-y divide-teal/15">
          {ITEMS.map(({ Icon, title, copy }) => (
            <div key={title} className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cream-soft">
                <Icon className="h-7 w-7 text-teal" />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-teal">{title}</p>
                <p className="mt-1 text-sm text-ink-soft">{copy}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
