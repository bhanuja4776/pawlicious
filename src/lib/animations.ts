import type { Variants, Transition } from "framer-motion";

export const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE_OUT } },
};

export const staggerContainer = (stagger = 0.12, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.3, ease: EASE_OUT } },
};

export const quizStepVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 36 : -36,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -36 : 36,
    transition: { duration: 0.3, ease: EASE_OUT },
  }),
};
