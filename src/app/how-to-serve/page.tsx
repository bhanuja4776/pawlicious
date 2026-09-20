import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { HeartIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "How to Serve — Paw-a-licious",
  description:
    "From our freezer to their bowl — how to store, thaw and serve Paw-a-licious homemade dog food, plus a simple feeding guide.",
};

const A = "/assets/how-to-serve";

const STEPS = [
  {
    n: 1,
    title: "Keep frozen",
    icon: { src: "snowflake", w: 57, h: 67 },
    tone: "teal",
    copy: "Keep frozen until needed. Store frozen for up to 5 months from the date on the package.",
  },
  {
    n: 2,
    title: "Thaw",
    icon: { src: "freezer", w: 56, h: 76 },
    tone: "coral",
    copy: "Thaw in the refrigerator for at least 24 hours before serving.",
  },
  {
    n: 3,
    title: "Serve",
    icon: { src: "serve-bowl", w: 75, h: 76 },
    tone: "coral",
    copy: "Serve chilled or warm slightly for 30–40 seconds in the microwave. Dogs often prefer their meal slightly warm.",
  },
  {
    n: 4,
    title: "Once thawed",
    icon: { src: "fridge", w: 43, h: 76 },
    tone: "teal",
    copy: "Keep refrigerated and use within 5 days.",
  },
] as const;

const EXTRAS = [
  {
    title: "Cooked egg",
    color: "text-coral",
    src: "egg",
    w: 142,
    h: 131,
    copy: "Add 1–2 cooked eggs and serve alongside their meal.",
  },
  {
    title: "Natural yoghurt",
    color: "text-teal",
    src: "yoghurt",
    w: 136,
    h: 130,
    copy: "Add 1–2 tablespoons of plain natural yoghurt.",
  },
];

const FEEDING = [
  { label: "Small dogs (up to 10kg)", amount: "150 – 250g per meal", src: "dog-small", w: 36, h: 33 },
  { label: "Medium dogs (10 – 25kg)", amount: "250 – 450g per meal", src: "dog-medium", w: 54, h: 40 },
  { label: "Large dogs (25kg+)", amount: "450 – 650g per meal", src: "dog-large", w: 62, h: 45 },
];

export default function HowToServePage() {
  return (
    <div className="bg-white pb-20 pt-24 lg:pb-28 lg:pt-32">
      <div className="mx-auto w-full max-w-[686px] space-y-8 px-5 sm:px-0 lg:space-y-10">
        <div className="-mx-5 sm:mx-0">
          <h1 className="sr-only">How to Serve Paw-a-licious</h1>
          <Image
            src={`${A}/section-hero.png`}
            alt="How to Serve Paw-a-licious. From our freezer to their bowl — simple, fresh & made with love. Happy dogs, happier lives."
            width={686}
            height={304}
            priority
            unoptimized
            className="h-auto w-full"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2">
          {STEPS.map(({ n, title, icon, tone, copy }, i) => (
            <ScrollReveal
              key={n}
              delay={i * 0.08}
              className="relative overflow-hidden rounded-card border border-ink/10 bg-white p-6 shadow-[0_8px_24px_-16px_rgba(35,35,35,0.2)]"
            >
              <div
                aria-hidden
                className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-teal-tint"
              />
              <div className="relative flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-lg font-medium text-white ${
                    tone === "teal" ? "bg-teal" : "bg-coral"
                  }`}
                >
                  {n}
                </span>
                <h2
                  className={`font-display text-xl font-medium uppercase tracking-wide ${
                    tone === "teal" ? "text-teal" : "text-coral"
                  }`}
                >
                  {title}
                </h2>
              </div>
              <div className="relative mt-4 flex items-center gap-4">
                <Image
                  src={`${A}/${icon.src}.png`}
                  alt=""
                  width={icon.w}
                  height={icon.h}
                  unoptimized
                  className="shrink-0"
                  style={{ width: icon.w, height: icon.h }}
                />
                <p className="text-ink-soft">{copy}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="rounded-media bg-teal-tint px-5 py-10 text-center sm:px-10">
          <h2 className="script-accent inline-flex items-center gap-2 text-[clamp(2.25rem,6vw,3.5rem)] text-teal-dark">
            Want to add a little extra?
            <HeartIcon className="h-6 w-6 text-teal" />
          </h2>
          <p className="mx-auto mt-2 max-w-md text-ink-soft">
            A couple of simple, optional additions for even more goodness.
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 text-left min-[520px]:grid-cols-2">
            {EXTRAS.map(({ title, color, src, w, h, copy }) => (
              <div key={title} className="flex items-center gap-4 rounded-card bg-white p-4 shadow-sm">
                <Image
                  src={`${A}/${src}.png`}
                  alt={title}
                  width={w}
                  height={h}
                  unoptimized
                  className="h-auto shrink-0 mix-blend-multiply"
                  style={{
                    width: Math.round(w * 0.85),
                    WebkitMaskImage:
                      "linear-gradient(to right,transparent,#000 6%,#000 94%,transparent),linear-gradient(to bottom,transparent,#000 6%,#000 94%,transparent)",
                    WebkitMaskComposite: "source-in",
                    maskImage:
                      "linear-gradient(to right,transparent,#000 6%,#000 94%,transparent),linear-gradient(to bottom,transparent,#000 6%,#000 94%,transparent)",
                    maskComposite: "intersect",
                  }}
                />
                <div>
                  <h3 className={`font-display text-lg font-medium uppercase tracking-wide ${color}`}>
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div style={{ containerType: "inline-size" }}>
            <Image
              src={`${A}/feeding-heading.png`}
              alt="Feeding Guide"
              width={320}
              height={57}
              unoptimized
              className="h-auto"
              style={{ width: "max(14.5rem, 46cqw)" }}
            />
            <p className="mt-1 text-[#1f2d38]" style={{ fontSize: "max(0.8rem, 2.3cqw)" }}>
              A general guide to help you find the right amount for your dog.
            </p>
            <div className="mt-4 overflow-hidden rounded-[14px] border bg-white"
              style={{ borderColor: "#efe6e1" }}>
              {FEEDING.map(({ label, amount, src, w, h }, i) => (
                <div
                  key={label}
                  className={`grid grid-cols-[19%_40%_41%] items-center ${i > 0 ? "border-t" : ""}`}
                  style={{ minHeight: "max(3.1rem, 6.9cqw)", borderColor: "#efe6e1" }}
                >
                  <div className="flex justify-center py-2">
                    <Image
                      src={`${A}/${src}.png`}
                      alt=""
                      width={w}
                      height={h}
                      unoptimized
                      style={{ width: `max(${Math.round(w * 0.72)}px, ${((w / 686) * 100).toFixed(2)}cqw)`, height: "auto" }}
                    />
                  </div>
                  <p className="pr-2 leading-tight text-[#1f2d38]" style={{ fontSize: "max(0.7rem, 2.3cqw)" }}>
                    {label}
                  </p>
                  <p
                    className="flex items-center self-stretch border-l pl-[6%] leading-tight text-[#1f2d38]"
                    style={{ fontSize: "max(0.7rem, 2.3cqw)", borderColor: "#efe6e1" }}
                  >
                    {amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-start gap-4 rounded-card bg-teal-tint p-5">
            <Image
              src={`${A}/drop.png`}
              alt=""
              width={38}
              height={55}
              unoptimized
              className="shrink-0"
              style={{ width: 28, height: 40 }}
            />
            <div className="text-sm text-ink-soft">
              <p className="font-bold text-ink">Always ensure fresh drinking water is available.</p>
              <p className="mt-1">
                This is a general guide only. Individual requirements may vary depending on your
                dog&apos;s age, size, activity level and individual needs.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="-mx-5 sm:mx-0">
            <Image
              src={`${A}/section-closing.png`}
              alt="Real food. Happier dogs. Goodness in every bowl."
              width={686}
              height={238}
              unoptimized
              className="h-auto w-full"
            />
          </div>
          <div className="mt-6 text-center">
            <Link href="/shop" className="btn btn-coral">
              Shop Paw-a-licious
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
