"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { EASE_OUT } from "@/lib/animations";

const PANELS = [
  {
    n: "01",
    title: "Ingredients",
    image: "/assets/photos/ingredients-flatlay-1.jpg",
    copy: "Sweet potato, pumpkin, broccoli, cauliflower, carrot, zucchini and mushroom — real vegetables you can recognise, folded through every batch.",
  },
  {
    n: "02",
    title: "Nutrition",
    image: "/assets/photos/bowl-topdown-bone.jpg",
    copy: "Brown rice, coconut oil and psyllium husk round out each recipe alongside a real protein — gently cooked to keep it wholesome, never processed.",
  },
  {
    n: "03",
    title: "Flavour",
    image: "/assets/photos/lifestyle-setup-signage-2.jpg",
    copy: "Chicken, beef, turkey or kangaroo — each recipe is cooked in small batches so the flavour stays close to home-cooked, not factory-made.",
  },
  {
    n: "04",
    title: "Benefits",
    image: "/assets/photos/food-prep-tubs-1.jpg",
    copy: "No fillers, no preservatives, no artificial colours or flavours. Just real food, portioned and frozen fresh, ready when your dog is.",
  },
  {
    n: "05",
    title: "Why Dogs Love It",
    image: "/assets/photos/dog-hoodie-waiting.jpg",
    copy: "Ask any dog waiting by the bowl. Real ingredients, gently cooked and served warm — it smells and tastes like it was made for them. Because it was.",
  },
];

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(PANELS.length - 1, Math.floor(v * PANELS.length));
    setActive(idx);
  });

  return (
    <section className="bg-teal-tint/40 py-20 lg:py-0">
      <div className="container-shell mb-12 lg:mb-0 lg:hidden">
        <p className="eyebrow text-coral-dark">The Bowl, Explained</p>
        <h2 className="mt-2 font-display text-4xl font-medium text-ink">
          What&apos;s actually in it
        </h2>
      </div>

      {/* Desktop: sticky pinned image + scroll-driven numbered panels */}
      <div ref={containerRef} className="relative hidden lg:block" style={{ height: `${PANELS.length * 88}vh` }}>
        <div className="sticky top-0 flex h-screen items-center">
          <div className="container-shell grid grid-cols-2 items-center gap-16">
            <div>
              <p className="eyebrow text-coral-dark">The Bowl, Explained</p>
              <div className="relative mt-6 h-[420px] overflow-hidden">
                <AnimatePresence mode="wait">
                  {PANELS.map(
                    (panel, i) =>
                      i === active && (
                        <motion.div
                          key={panel.n}
                          initial={{ opacity: 0, y: 24 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -24 }}
                          transition={{ duration: 0.5, ease: EASE_OUT }}
                          className="absolute inset-0"
                        >
                          <span className="script-accent text-4xl text-teal">{panel.n}</span>
                          <h3 className="mt-2 font-display text-5xl font-medium text-ink">
                            {panel.title}
                          </h3>
                          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                            {panel.copy}
                          </p>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-8 flex gap-2">
                {PANELS.map((panel, i) => (
                  <span
                    key={panel.n}
                    className={`h-1.5 flex-1 rounded-chip transition-colors duration-500 ${
                      i === active ? "bg-coral" : "bg-ink/10"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-media shadow-[0_30px_70px_-25px_rgba(18,59,66,0.4)]">
              <AnimatePresence mode="sync">
                {PANELS.map(
                  (panel, i) =>
                    i === active && (
                      <motion.div
                        key={panel.n}
                        initial={{ opacity: 0, scale: 1.06, clipPath: "inset(0 0 100% 0)" }}
                        animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: EASE_OUT }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={panel.image}
                          alt={`${panel.title} — Paw-a-licious`}
                          fill
                          sizes="40vw"
                          className="object-cover"
                        />
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet: simple alternating stacked flow (sticky scroll doesn't translate well) */}
      <div className="container-shell flex flex-col gap-14 lg:hidden">
        {PANELS.map((panel) => (
          <div key={panel.n} className="flex flex-col gap-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-media">
              <Image
                src={panel.image}
                alt={`${panel.title} — Paw-a-licious`}
                fill
                sizes="90vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="script-accent text-2xl text-teal">{panel.n}</span>
              <h3 className="mt-1 font-display text-3xl font-medium text-ink">{panel.title}</h3>
              <p className="mt-3 text-ink-soft">{panel.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
