import Image from "next/image";
import { CONTACT, PICKUP_LOCATIONS, DELIVERY_FEE, FREE_SHIPPING_THRESHOLD } from "@/lib/utils";
import { TruckIcon, HouseIcon, PinIcon, HeartIcon } from "@/components/icons";

const COLUMNS = [
  {
    Icon: TruckIcon,
    title: "Delivery",
    lines: [`Melbourne Metro $${DELIVERY_FEE.toFixed(2)}`, `FREE delivery on orders over $${FREE_SHIPPING_THRESHOLD}`],
  },
  {
    Icon: HouseIcon,
    title: "Free pickup",
    lines: PICKUP_LOCATIONS.map((loc) => `${loc} (Victoria)`),
  },
  {
    Icon: PinIcon,
    title: "Victoria only",
    lines: ["Proudly delivering fresh across Melbourne Metro"],
  },
  {
    Icon: HeartIcon,
    title: "Made with love",
    lines: ["Small batches. Big love.", "Happy, healthy dogs."],
  },
];

export default function HomeFooter() {
  return (
    <footer>
      <div className="bg-[#edf2f5] py-10">
        <div className="container-shell grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
          {COLUMNS.map(({ Icon, title, lines }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-teal" />
              <div>
                <p className="font-display text-sm font-bold text-ink">{title}</p>
                {lines.map((line) => (
                  <p key={line} className="text-xs text-ink-soft">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <div className="relative hidden h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-teal/40 lg:block">
            <Image
              src="/assets/photos/footer-dog.jpg"
              alt="Mitso, Paw-a-licious's head taste-tester"
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-coral py-4">
        <div className="container-shell flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="script-accent text-lg text-cream-soft sm:text-xl">
            Because they&apos;re family. 🐾 Goodness in every bowl.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-soft/15 text-cream-soft transition hover:bg-cream-soft/25"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
              </svg>
            </a>
            <a
              href={CONTACT.instagramHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-soft/15 text-cream-soft transition hover:bg-cream-soft/25"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
