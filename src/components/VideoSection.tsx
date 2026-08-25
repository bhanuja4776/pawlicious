"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { EASE_OUT } from "@/lib/animations";

type VideoSectionProps = {
  src: string;
  poster: string;
  eyebrow: string;
  headline: string;
  subtext: string;
  dark?: boolean;
};

export default function VideoSection({
  src,
  poster,
  eyebrow,
  headline,
  subtext,
  dark = true,
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper || reduce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [reduce]);

  function handleManualPlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <section ref={wrapperRef} className="relative isolate h-[85vh] min-h-[520px] w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay={!reduce}
        preload="metadata"
        aria-hidden={!reduce}
      />
      <div
        className={`absolute inset-0 ${
          dark
            ? "bg-gradient-to-t from-teal-deeper/85 via-teal-deeper/25 to-teal-deeper/40"
            : "bg-gradient-to-t from-ink/60 via-ink/10 to-ink/30"
        }`}
      />

      <div className="container-shell relative flex h-full flex-col items-start justify-end pb-16 text-cream-soft lg:pb-24">
        <ScrollReveal>
          <p className="eyebrow text-coral-light">{eyebrow}</p>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.03] text-balance">
            {headline}
          </h2>
          <p className="mt-4 max-w-lg text-cream-soft/85">{subtext}</p>
        </ScrollReveal>

        {reduce && (
          <motion.button
            type="button"
            onClick={handleManualPlay}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="btn btn-outline-light mt-7"
          >
            {playing ? "Pause video" : "Play video"}
          </motion.button>
        )}
      </div>
    </section>
  );
}
