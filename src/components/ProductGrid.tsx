"use client";

import { useMemo, useState } from "react";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { motion } from "framer-motion";

const PROTEINS = ["All", "Chicken", "Beef", "Turkey", "Kangaroo"] as const;
type SortKey = "featured" | "price-asc" | "price-desc" | "name";

export default function ProductGrid({
  withFilters = false,
  compact = false,
}: {
  withFilters?: boolean;
  compact?: boolean;
}) {
  const [protein, setProtein] = useState<(typeof PROTEINS)[number]>("All");
  const [sort, setSort] = useState<SortKey>("featured");

  const products = useMemo(() => {
    let list = PRODUCTS.slice();
    if (protein !== "All") {
      list = list.filter((p) => p.protein === protein);
    }
    if (sort === "price-asc") {
      list.sort((a, b) => a.slug.localeCompare(b.slug));
    } else if (sort === "price-desc") {
      list.sort((a, b) => b.slug.localeCompare(a.slug));
    } else if (sort === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      list.sort((a, b) => (b.isFavourite ? 1 : 0) - (a.isFavourite ? 1 : 0));
    }
    return list;
  }, [protein, sort]);

  return (
    <div>
      {withFilters && (
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {PROTEINS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setProtein(p)}
                className={`rounded-chip px-4 py-2 text-sm font-bold transition ${
                  protein === p
                    ? "bg-ink text-cream-soft"
                    : "bg-cream-deep text-ink-soft hover:bg-ink/10"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 text-sm font-bold text-ink-soft">
            Sort by
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-chip border border-ink/15 bg-cream-soft px-3 py-2 text-sm font-bold text-ink focus:outline-none focus:ring-2 focus:ring-coral/40"
            >
              <option value="featured">Featured</option>
              <option value="name">Name A–Z</option>
              <option value="price-asc">Recipe A–Z</option>
              <option value="price-desc">Recipe Z–A</option>
            </select>
          </label>
        </div>
      )}

      {products.length === 0 ? (
        <p className="py-16 text-center text-ink-soft">No recipes match that filter yet.</p>
      ) : (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product) => (
            <motion.div key={product.slug} variants={staggerItem}>
              <ProductCard product={product} compact={compact} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
