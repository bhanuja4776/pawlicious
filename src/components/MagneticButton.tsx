"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

const MotionLink = motion.create(Link);

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
  type?: "button" | "submit";
};

/** Wraps a button/link with a gentle magnetic-follow hover effect. Subtle by design. */
export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  strength = 10,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  function handleMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.setProperty("--mx", `${(x / rect.width) * strength}px`);
    ref.current.style.setProperty("--my", `${(y / rect.height) * strength}px`);
  }

  function handleLeave() {
    if (!ref.current) return;
    ref.current.style.setProperty("--mx", "0px");
    ref.current.style.setProperty("--my", "0px");
  }

  const style = {
    transform: "translate(var(--mx, 0px), var(--my, 0px))",
    transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
  };

  if (href) {
    return (
      <MotionLink
        ref={ref}
        href={href}
        className={className}
        style={style}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      className={className}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
