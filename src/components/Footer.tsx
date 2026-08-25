import Link from "next/link";
import { CONTACT, PICKUP_LOCATIONS } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/quiz", label: "Dog Quiz" },
  { href: "/our-story", label: "Our Story" },
  { href: "/ingredients", label: "Ingredients" },
];

export default function Footer() {
  return (
    <footer className="bg-teal-deeper text-cream-soft">
      <div className="container-shell grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <span className="font-display text-2xl font-semibold">
            <span className="text-coral">Paw-a-l</span>
            <span className="text-cream-soft">icious</span>
            <span className="ml-1 text-coral">♡</span>
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-cream-soft/75">
            Homemade dog food, gently cooked in small batches in Melbourne. Real
            ingredients, real love, made in Australia.
          </p>
          <p className="script-accent text-2xl text-coral-light">with love, always</p>
        </div>

        <div>
          <h3 className="eyebrow mb-4 text-cream-soft/60">Explore</h3>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline text-sm font-bold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4 text-cream-soft/60">Delivery &amp; pickup</h3>
          <ul className="flex flex-col gap-3 text-sm text-cream-soft/85">
            <li>Melbourne Metro delivery — $14.95</li>
            <li>Free delivery over $250</li>
            <li>Victoria only, Melbourne Metro area</li>
            <li className="pt-2 font-bold text-cream-soft">Free pickup locations</li>
            {PICKUP_LOCATIONS.map((loc) => (
              <li key={loc}>{loc}, VIC</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4 text-cream-soft/60">Get in touch</h3>
          <ul className="flex flex-col gap-3 text-sm text-cream-soft/85">
            <li>
              <a className="link-underline" href={CONTACT.phoneHref}>
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a className="link-underline break-all" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                className="link-underline"
                href={CONTACT.instagramHref}
                target="_blank"
                rel="noreferrer"
              >
                {CONTACT.instagram}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={CONTACT.instagramHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-soft/25 transition hover:bg-cream-soft/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={CONTACT.phoneHref}
              aria-label="Call Paw-a-licious"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-soft/25 transition hover:bg-cream-soft/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.6 21 3 14.4 3 6a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream-soft/10 py-5">
        <div className="container-shell flex flex-col items-center justify-between gap-2 text-xs text-cream-soft/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Paw-a-licious. Made in Australia.</p>
          <p>Fresh. Real. Made with love.</p>
        </div>
      </div>
    </footer>
  );
}
