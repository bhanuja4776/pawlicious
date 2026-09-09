"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FEEDING_GUIDE,
  OPTIONAL_BOOSTS,
  SHARED_INGREDIENTS,
  STORAGE_INSTRUCTIONS,
} from "@/lib/products";

const TABS = ["Ingredients", "Feeding Guide", "Storage & Serving", "Optional Boosts"] as const;

export default function ProductTabs({ protein }: { protein: string }) {
  const [active, setActive] = useState<(typeof TABS)[number]>("Ingredients");

  return (
    <div className="border-t border-ink/10">
      <div className="flex flex-wrap gap-x-2 gap-y-2 border-b border-ink/10 py-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`rounded-chip px-4 py-2 text-sm font-bold transition ${
              active === tab
                ? "bg-ink text-cream-soft"
                : "text-ink-soft hover:bg-ink/5"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="min-h-[220px] py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {active === "Ingredients" && (
              <div>
                <p className="mb-4 text-ink-soft">
                  {protein} + a full mix of real vegetables and brown rice — no
                  fillers, no preservatives, no artificial colours or
                  flavours.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <span className="rounded-chip bg-coral-tint px-4 py-2 text-sm font-bold text-coral-dark">
                    {protein}
                  </span>
                  {SHARED_INGREDIENTS.map((ing) => (
                    <span
                      key={ing}
                      className="rounded-chip bg-teal-tint px-4 py-2 text-sm font-bold text-teal"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {active === "Feeding Guide" && (
              <div>
                <div className="overflow-hidden rounded-card border border-ink/10">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-cream-deep">
                      <tr>
                        <th className="px-4 py-3 font-display font-medium text-ink">Dog size</th>
                        <th className="px-4 py-3 font-display font-medium text-ink">Weight</th>
                        <th className="px-4 py-3 font-display font-medium text-ink">Per meal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FEEDING_GUIDE.map((row, i) => (
                        <tr key={row.size} className={i % 2 ? "bg-cream" : "bg-cream-soft"}>
                          <td className="px-4 py-3 font-bold text-ink">{row.size}</td>
                          <td className="px-4 py-3 text-ink-soft">{row.weight}</td>
                          <td className="px-4 py-3 text-ink-soft">{row.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-ink-faint">
                  Always ensure fresh drinking water is available.
                </p>
              </div>
            )}

            {active === "Storage & Serving" && (
              <ul className="flex flex-col gap-3">
                {STORAGE_INSTRUCTIONS.map((line) => (
                  <li key={line} className="flex gap-3 text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {line}
                  </li>
                ))}
              </ul>
            )}

            {active === "Optional Boosts" && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {OPTIONAL_BOOSTS.map((boost) => (
                  <div key={boost.title} className="rounded-card bg-teal-tint p-5">
                    <h4 className="font-display text-lg font-medium text-teal">
                      {boost.title}
                    </h4>
                    <p className="mt-2 text-sm text-teal">{boost.detail}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
