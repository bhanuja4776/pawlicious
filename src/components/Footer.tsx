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
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-0 h-40 w-48 bg-coral-tint sm:h-52 sm:w-64"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      />

      <div className="container-shell relative py-16 lg:py-20">
        <div className="grid grid-cols-[0.85fr_1fr] items-start gap-3 sm:gap-8 lg:grid-cols-2 lg:gap-16">
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
              className="relative aspect-[3/4] w-full shadow-lg"
              style={{ clipPath: "inset(0 round 2rem)" }}
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
              className="relative aspect-[4/3.5] w-full shadow-lg"
              style={{ clipPath: "inset(0 round 2rem)" }}
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
