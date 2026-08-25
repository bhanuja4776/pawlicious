import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pb-20 pt-32 text-center">
      <p className="script-accent text-3xl text-coral">uh oh, wrong bowl</p>
      <h1 className="mt-3 font-display text-[clamp(2.5rem,7vw,5rem)] font-medium leading-none text-ink">
        404
      </h1>
      <p className="mt-4 max-w-md text-lg text-ink-soft">
        We couldn&apos;t find that page. Let&apos;s get you back to something
        delicious.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="btn btn-coral">
          Back to home
        </Link>
        <Link href="/shop" className="btn btn-outline">
          Shop Paw-a-licious
        </Link>
      </div>
    </section>
  );
}
