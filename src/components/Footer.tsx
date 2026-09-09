import Image from "next/image";
import Link from "next/link";
import { CONTACT, PICKUP_LOCATIONS, DELIVERY_FEE, FREE_SHIPPING_THRESHOLD } from "@/lib/utils";
import { HeartIcon, HouseIcon, BowlIcon, PawIcon, LeafIcon, PinIcon, GiftIcon } from "@/components/icons";

const EXPLORE_LINKS = [
  { href: "/", label: "Home", Icon: HouseIcon },
  { href: "/shop", label: "Shop", Icon: BowlIcon },
  { href: "/quiz", label: "Dog Quiz", Icon: PawIcon },
  { href: "/our-story", label: "Our Story", Icon: HeartIcon },
  { href: "/ingredients", label: "Ingredients", Icon: LeafIcon },
];

const DELIVERY_LINES = [
  { Icon: PinIcon, text: `Melbourne Metro delivery — $${DELIVERY_FEE.toFixed(2)}` },
  { Icon: GiftIcon, text: `Free delivery over $${FREE_SHIPPING_THRESHOLD}` },
  { Icon: HeartIcon, text: "Victoria only, Melbourne Metro area" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cream">
      {/* Hidden SVG def for the organic "blob" clip on the top footer photo */}
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id="footer-blob" clipPathUnits="objectBoundingBox">
            <path d="M0.2,0 C0.05,0.02 0.0128,0.13 0.02,0.22 C0.0272,0.31 0.24,0.399 0.24,0.5 C0.24,0.601 0.0272,0.69 0.02,0.78 C0.0128,0.87 0.05,0.98 0.2,1 L0.86,1 C0.94,1 1,0.94 1,0.87 L1,0.13 C1,0.06 0.94,0 0.86,0 Z" />
          </clipPath>
          <clipPath id="footer-blob-2" clipPathUnits="objectBoundingBox">
            <path d="M0.15,0 C0.03,0.02 0,0.1 0.05,0.17 C0.1,0.24 0.1,0.24 0.04,0.32 C0.01,0.37 0,0.41 0,0.45 L0,0.85 C0,0.94 0.06,1 0.15,1 L0.85,1 C0.94,1 1,0.94 1,0.85 L1,0.15 C1,0.06 0.94,0 0.85,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-0 h-40 w-48 bg-coral-tint sm:h-52 sm:w-64"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      />

      <div className="container-shell relative py-16 lg:py-20">
        <div className="grid grid-cols-[0.85fr_1fr] items-start gap-3 sm:grid-cols-[0.85fr_1fr] sm:gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10 min-w-0">
            <p className="text-sm leading-relaxed text-ink sm:text-base lg:text-lg">
              Homemade dog food, gently cooked in small batches in Melbourne.
              Real ingredients, real love, made in Australia.
            </p>
            <p className="script-accent mt-3 text-xl text-coral sm:mt-4 sm:text-2xl lg:text-3xl">
              with love, always
            </p>
            <span className="mt-1 block h-0.5 w-24 bg-teal sm:w-32 lg:w-40" />

            <div className="mt-8 lg:mt-10">
              <p className="eyebrow flex items-center gap-2 text-teal">
                Explore <HeartIcon className="h-4 w-4 text-teal" />
              </p>
              <ul className="mt-3 flex flex-col divide-y divide-ink/10 lg:mt-4">
                {EXPLORE_LINKS.map(({ href, label, Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center gap-2.5 py-2.5 font-display text-base font-bold text-ink transition hover:text-coral sm:gap-3 sm:py-3 sm:text-lg"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-coral sm:h-5 sm:w-5" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 lg:mt-10">
              <p className="eyebrow flex items-center gap-2 text-teal">
                Delivery &amp; pickup <HeartIcon className="h-4 w-4 text-teal" />
              </p>
              <ul className="mt-3 flex flex-col gap-2.5 lg:mt-4 lg:gap-3">
                {DELIVERY_LINES.map(({ Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5 text-sm text-ink-soft sm:gap-3 sm:text-base">
                    <Icon className="h-4 w-4 shrink-0 text-teal sm:h-5 sm:w-5" />
                    {text}
                  </li>
                ))}
                <li className="flex items-start gap-2.5 pt-1 text-sm text-ink-soft sm:gap-3 sm:text-base">
                  <HouseIcon className="mt-0.5 h-4 w-4 shrink-0 text-coral sm:h-5 sm:w-5" />
                  <span>
                    Free pickup —{" "}
                    {PICKUP_LOCATIONS.map((loc) => `${loc}, VIC`).join(" · ")}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative flex flex-col gap-3 sm:gap-4">
            <div
              className="relative aspect-[3/4] w-full overflow-hidden shadow-lg"
              style={{ clipPath: "url(#footer-blob)" }}
            >
              <Image
                src="/assets/photos/footer-dog-running.jpg"
                alt="A happy, healthy Paw-a-licious dog"
                fill
                sizes="(min-width: 1024px) 40vw, 50vw"
                className="object-cover"
              />
            </div>
            <div
              className="relative aspect-[4/3.5] w-full overflow-hidden shadow-lg"
              style={{ clipPath: "url(#footer-blob-2)" }}
            >
              <Image
                src="/assets/photos/footer-bowl-mat.jpg"
                alt="A bowl of Paw-a-licious homemade dog food on a woven mat"
                fill
                sizes="(min-width: 1024px) 40vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-ink/10 py-5">
        <div className="container-shell flex flex-col items-center justify-between gap-2 text-xs text-ink-faint sm:flex-row">
          <p>© {new Date().getFullYear()} Paw-a-licious. Made in Australia.</p>
          <div className="flex items-center gap-4">
            <a className="link-underline" href={CONTACT.phoneHref}>
              {CONTACT.phone}
            </a>
            <a
              className="link-underline"
              href={CONTACT.instagramHref}
              target="_blank"
              rel="noreferrer"
            >
              {CONTACT.instagram}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
