"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/animations";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
};

/** Splits text into words and staggers them in on scroll/entrance. */
export default function AnimatedText({
  text,
  className,
  as = "h2",
  delay = 0,
  stagger = 0.045,
}: AnimatedTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const Tag = motion[as];

  if (reduce) {
    const Static = as;
    return <Static className={className}>{text}</Static>;
  }

  return (
    <Tag
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-[0.3em] inline-block overflow-hidden"
          variants={{
            hidden: {},
            show: {},
          }}
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.65, ease: EASE_OUT },
              },
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}
