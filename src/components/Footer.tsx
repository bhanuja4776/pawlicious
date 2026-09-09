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
        className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-coral-tint/70 blur-2xl"
      />

      <div className="container-shell relative py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10">
            <p className="max-w-sm text-lg leading-relaxed text-ink">
              Homemade dog food, gently cooked in small batches in Melbourne.
              Real ingredients, real love, made in Australia.
            </p>
            <p className="script-accent mt-4 text-3xl text-coral">
              with love, always
            </p>
            <span className="mt-1 block h-0.5 w-40 bg-teal" />

            <div className="mt-10">
              <p className="eyebrow flex items-center gap-2 text-teal">
                Explore <HeartIcon className="h-4 w-4 text-teal" />
              </p>
              <ul className="mt-4 flex flex-col divide-y divide-ink/10">
                {EXPLORE_LINKS.map(({ href, label, Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center gap-3 py-3 font-display text-lg font-bold text-ink transition hover:text-coral"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-coral" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <p className="eyebrow flex items-center gap-2 text-teal">
                Delivery &amp; pickup <HeartIcon className="h-4 w-4 text-teal" />
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {DELIVERY_LINES.map(({ Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-ink-soft">
                    <Icon className="h-5 w-5 shrink-0 text-teal" />
                    {text}
                  </li>
                ))}
                <li className="flex items-start gap-3 pt-1 text-ink-soft">
                  <HouseIcon className="mt-0.5 h-5 w-5 shrink-0 text-coral" />
                  <span>
                    Free pickup —{" "}
                    {PICKUP_LOCATIONS.map((loc) => `${loc}, VIC`).join(" · ")}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative order-first grid grid-cols-2 gap-3 lg:order-none lg:flex lg:flex-col lg:gap-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem_1rem_1rem_1rem] shadow-lg sm:rounded-[3rem_1.5rem_1.5rem_1.5rem] lg:aspect-[4/3] lg:rounded-[5rem_1.5rem_1.5rem_1.5rem]">
              <Image
                src="/assets/photos/footer-dog-running.jpg"
                alt="A happy, healthy Paw-a-licious dog"
                fill
                sizes="(min-width: 1024px) 40vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1rem_1rem_2rem_1rem] shadow-lg sm:rounded-[1.5rem_1.5rem_3rem_1.5rem] lg:aspect-[4/3] lg:rounded-[1.5rem_1.5rem_5rem_1.5rem]">
              <Image
                src="/assets/photos/footer-bowl-mat.jpg"
                alt="A bowl of Paw-a-licious homemade dog food on a woven mat"
                fill
                sizes="(min-width: 1024px) 40vw, 45vw"
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
