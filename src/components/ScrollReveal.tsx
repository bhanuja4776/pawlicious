"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/animations";

type ScrollRevealProps = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
};

export default function ScrollReveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  once = true,
  amount = 0.25,
}: ScrollRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
