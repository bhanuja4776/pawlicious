import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { DogFaceIcon, HeartIcon, PawIcon } from "@/components/icons";
import {
  DropIcon,
  EggIcon,
  FreezerFridgeIcon,
  FridgeIcon,
  SnowflakeIcon,
  SteamBowlIcon,
  YoghurtIcon,
} from "@/components/serve-icons";

export const metadata: Metadata = {
  title: "How to Serve — Paw-a-licious",
  description:
    "From our freezer to their bowl — how to store, thaw and serve Paw-a-licious homemade dog food, plus a simple feeding guide.",
};

const STEPS = [
  {
    n: 1,
    title: "Keep frozen",
    Icon: SnowflakeIcon,
    tone: "teal",
    copy: "Keep frozen until needed. Store frozen for up to 5 months from the date on the package.",
  },
  {
    n: 2,
    title: "Thaw",
    Icon: FreezerFridgeIcon,
    tone: "coral",
    copy: "Thaw in the refrigerator for at least 24 hours before serving.",
  },
  {
    n: 3,
    title: "Serve",
    Icon: SteamBowlIcon,
    tone: "coral",
    copy: "Serve chilled or warm slightly for 30–40 seconds in the microwave. Dogs often prefer their meal slightly warm.",
  },
  {
    n: 4,
    title: "Once thawed",
    Icon: FridgeIcon,
    tone: "teal",
    copy: "Keep refrigerated and use within 5 days.",
  },
] as const;

const EXTRAS = [
  { title: "Cooked egg", Icon: EggIcon, copy: "Add 1–2 cooked eggs and serve alongside their meal." },
  { title: "Natural yoghurt", Icon: YoghurtIcon, copy: "Add 1–2 tablespoons of plain natural yoghurt." },
];

const FEEDING = [
  { label: "Small dogs (up to 10kg)", amount: "150 – 250g per meal", size: "h-7 w-7" },
  { label: "Medium dogs (10 – 25kg)", amount: "250 – 450g per meal", size: "h-9 w-9" },
  { label: "Large dogs (25kg+)", amount: "450 – 650g per meal", size: "h-11 w-11" },
];

export default function HowToServePage() {
  return (
    <>
      <section className="bg-white pb-6 pt-28 lg:pb-10 lg:pt-36">
        <div className="container-shell">
          <ScrollReveal className="grid overflow-hidden rounded-media bg-teal-tint lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <h1>
                <span className="script-accent block text-[clamp(2.75rem,7vw,4.25rem)] text-teal-dark">
                  How to Serve
                </span>
                <span className="mt-2 flex items-center gap-2 font-display text-[clamp(2.1rem,5.5vw,3.5rem)] font-medium leading-none text-coral">
                  Paw-a-licious
                  <HeartIcon className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" />
                </span>
              </h1>
              <p className="mt-5 max-w-sm text-lg text-ink-soft">
                From our freezer to their bowl — simple, fresh &amp; made with love.
              </p>
            </div>
            <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[440px]">
              <Image
                src="/assets/photos/hero-mitso.jpg"
                alt="Mitso, our head taste-tester, with a bowl of Paw-a-licious"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[50%_30%]"
              />
              <p className="script-accent absolute bottom-5 right-6 max-w-[9rem] text-right text-3xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] sm:text-4xl">
                Happy dogs happier lives
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-8 lg:py-12">
        <div className="container-shell grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ n, title, Icon, tone, copy }, i) => (
            <ScrollReveal
              key={n}
              delay={i * 0.08}
              className="flex flex-col rounded-card border border-ink/10 bg-white p-6 shadow-[0_8px_24px_-16px_rgba(35,35,35,0.2)]"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-lg font-medium text-white ${
                    tone === "teal" ? "bg-teal" : "bg-coral"
                  }`}
                >
                  {n}
                </span>
                <h2 className="font-display text-xl font-medium uppercase tracking-wide text-teal-dark">
                  {title}
                </h2>
              </div>
              <Icon className={`mt-5 h-14 w-14 ${tone === "teal" ? "text-teal" : "text-coral"}`} />
              <p className="mt-4 text-ink-soft">{copy}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-8 lg:py-12">
        <div className="container-shell">
          <ScrollReveal className="rounded-media bg-teal-tint px-5 py-10 text-center sm:px-10 lg:py-14">
            <h2 className="script-accent text-[clamp(2.25rem,6vw,3.5rem)] text-teal-dark">
              Want to add a little extra?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-ink-soft">
              A couple of simple, optional additions for even more goodness.
            </p>
            <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
              {EXTRAS.map(({ title, Icon, copy }) => (
                <div key={title} className="flex items-center gap-5 rounded-card bg-white p-5">
                  <Icon className="h-14 w-14 shrink-0 text-coral" />
                  <div>
                    <p className="eyebrow text-coral">Optional</p>
                    <h3 className="font-display text-xl font-medium uppercase tracking-wide text-teal-dark">
                      {title}
                    </h3>
                    <p className="mt-1 text-ink-soft">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-8 lg:py-12">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <h2 className="flex items-center gap-3 script-accent text-[clamp(2.5rem,6vw,3.75rem)] text-teal-dark">
              Feeding Guide <PawIcon fill="currentColor" stroke="none" className="h-8 w-8 text-coral" />
            </h2>
            <p className="mt-3 text-ink-soft">
              A general guide to help you find the right amount for your dog.
            </p>
            <div className="mt-6 divide-y divide-ink/10 overflow-hidden rounded-card border border-ink/10">
              {FEEDING.map(({ label, amount, size }) => (
                <div
                  key={label}
                  className="grid grid-cols-[3rem_1fr] items-center gap-x-3 gap-y-0.5 px-4 py-4 sm:grid-cols-[3rem_1fr_1fr] sm:px-6"
                >
                  <DogFaceIcon className={`${size} justify-self-center text-teal-dark`} />
                  <p className="font-bold text-ink">{label}</p>
                  <p className="col-start-2 font-display text-lg text-coral sm:col-start-3">{amount}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-4 rounded-card bg-teal-tint p-5">
              <DropIcon className="h-9 w-9 shrink-0 text-teal" />
              <div className="text-sm text-ink-soft">
                <p className="font-bold text-ink">Always ensure fresh drinking water is available.</p>
                <p className="mt-1">
                  This is a general guide only. Individual requirements may vary depending on your
                  dog&apos;s age, size, activity level and individual needs.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white pb-20 pt-8 lg:pb-28 lg:pt-12">
        <div className="container-shell">
          <ScrollReveal className="grid items-center gap-8 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <p className="script-accent text-[clamp(2.75rem,7vw,4.25rem)] leading-[1.05] text-teal-dark">
                Real food. <span className="text-coral">Happier dogs.</span>
              </p>
              <Link href="/shop" className="btn btn-coral mt-8">
                Shop Paw-a-licious
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-media">
              <Image
                src="/assets/photos/lifestyle-bowl-closeup.jpg"
                alt="A bowl of Paw-a-licious homemade dog food surrounded by fresh vegetables"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[50%_25%]"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
