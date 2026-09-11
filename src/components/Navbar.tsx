"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/quiz", label: "Dog Quiz" },
  { href: "/our-story", label: "Our Story" },
  { href: "/ingredients", label: "Ingredients" },
];

function Wordmark() {
  return (
    <span className="flex flex-col leading-none">
      <span className="font-display text-2xl font-semibold leading-none tracking-tight md:text-[1.7rem]">
        <span className="text-coral">Paw-a-l</span>
        <span className="text-teal">icious</span>
        <span className="ml-1 text-coral">♡</span>
      </span>
      <span className="mt-1 flex items-center justify-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-teal">
        <span className="h-px w-3 bg-teal/50" />
        Homemade dog food
        <span className="h-px w-3 bg-teal/50" />
      </span>
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 48);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close the mobile menu whenever the route changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const compact = scrolled || !isHome || mobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          compact
            ? "bg-cream-soft/92 py-3 shadow-[0_4px_24px_-8px_rgba(35,35,35,0.15)] backdrop-blur-md"
            : "bg-transparent py-6"
        )}
      >
        <nav className="container-shell flex items-center justify-between">
          <Link href="/" aria-label="Paw-a-licious home" className="shrink-0">
            <Wordmark />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "link-underline font-body text-[0.95rem] font-bold text-ink",
                    pathname === link.href && "opacity-70"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-ink/5"
            >
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 8h12l-1.2 11.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z" strokeLinejoin="round" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
              </svg>
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    key={itemCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-coral text-[0.65rem] font-bold text-cream-soft"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-ink/5 lg:hidden"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                {mobileOpen ? (
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-teal-deeper/98 backdrop-blur-sm lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
              className="flex h-full flex-col items-start justify-center gap-2 px-8 pt-16"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="w-full border-b border-cream-soft/10 py-4"
                >
                  <Link
                    href={link.href}
                    className="font-display text-4xl font-medium text-cream-soft"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -24 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="pt-8"
              >
                <Link href="/shop" className="btn btn-coral text-base">
                  Shop Paw-a-licious
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
