import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { HeartIcon, PawIcon } from "@/components/icons";

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
    icon: { src: "serve-bowl", w: 68, h: 76 },
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
    w: 144,
    h: 142,
    copy: "Add 1–2 cooked eggs and serve alongside their meal.",
  },
  {
    title: "Natural yoghurt",
    color: "text-teal",
    src: "yoghurt",
    w: 102,
    h: 132,
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
      <div className="container-shell max-w-5xl space-y-10 lg:space-y-14">
        <ScrollReveal className="grid overflow-hidden rounded-media bg-teal-tint md:grid-cols-[1fr_300px]">
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <h1>
              <span className="script-accent block text-[clamp(2.75rem,7vw,4.25rem)] text-teal-dark">
                How to Serve
              </span>
              <span className="mt-2 flex items-center gap-2 font-display text-[clamp(2.1rem,5.5vw,3.25rem)] font-medium leading-none text-coral">
                Paw-a-licious
                <HeartIcon className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" />
              </span>
            </h1>
            <p className="mt-5 max-w-sm text-lg text-ink-soft">
              From our freezer to their bowl — simple, fresh &amp; made with love.
            </p>
          </div>
          <div className="relative aspect-[4/3.4] md:aspect-auto md:min-h-[380px]">
            <Image
              src={`${A}/hero-dog.png`}
              alt="A happy dog looking out of a window"
              fill
              priority
              unoptimized
              className="object-cover"
            />
            <p className="script-accent absolute bottom-5 right-5 max-w-[8rem] text-right text-3xl leading-[0.95] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
              Happy dogs happier lives
            </p>
          </div>
        </ScrollReveal>

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
                  className="h-auto shrink-0 rounded-tight"
                  style={{ width: Math.round(w * 0.85) }}
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

        <ScrollReveal className="mx-auto max-w-3xl">
          <h2 className="flex items-center gap-3 script-accent text-[clamp(2.5rem,6vw,3.75rem)] text-teal-dark">
            Feeding Guide <PawIcon fill="currentColor" stroke="none" className="h-8 w-8 text-coral" />
          </h2>
          <p className="mt-3 text-ink-soft">
            A general guide to help you find the right amount for your dog.
          </p>
          <div className="mt-6 divide-y divide-ink/10 overflow-hidden rounded-card border border-ink/10 bg-white">
            {FEEDING.map(({ label, amount, src, w, h }) => (
              <div
                key={label}
                className="grid grid-cols-[4rem_1fr] items-center gap-x-3 gap-y-0.5 px-4 py-4 sm:grid-cols-[4rem_1fr_1fr] sm:px-6"
              >
                <Image
                  src={`${A}/${src}.png`}
                  alt=""
                  width={w}
                  height={h}
                  unoptimized
                  className="justify-self-center"
                  style={{ width: w, height: h }}
                />
                <p className="font-bold text-ink">{label}</p>
                <p className="col-start-2 font-display text-lg text-coral sm:col-start-3">{amount}</p>
              </div>
            ))}
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

        <ScrollReveal className="mx-auto grid max-w-3xl items-center gap-8 pt-4 sm:grid-cols-2">
          <div className="text-center sm:text-left">
            <p className="script-accent text-[clamp(2.75rem,7vw,4rem)] leading-[1.05] text-teal-dark">
              Real food. <span className="text-coral">Happier dogs.</span>
            </p>
            <Link href="/shop" className="btn btn-coral mt-7">
              Shop Paw-a-licious
            </Link>
          </div>
          <div className="relative mx-auto aspect-[266/220] w-full max-w-[340px] overflow-hidden rounded-media">
            <Image
              src={`${A}/bowl.png`}
              alt="A bowl of Paw-a-licious homemade dog food"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
