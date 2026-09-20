import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SnowflakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M24 5v38M7.6 14.5l32.8 19M40.4 14.5 7.6 33.5" />
      <path d="M19 8.5 24 12l5-3.5M19 39.5 24 36l5 3.5M9 20l5.5 1.2-.8 6M39 28l-5.5-1.2.8-6M9 28l5.5-1.2-.8-6M39 20l-5.5 1.2.8 6" />
    </svg>
  );
}

export function FreezerFridgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="11" y="4" width="20" height="40" rx="3" />
      <path d="M11 18h20M15 9v5M15 24v8" />
      <path d="M38 22v10M33.5 24.5l9 5M42.5 24.5l-9 5" />
    </svg>
  );
}

export function FridgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="12" y="4" width="24" height="40" rx="3" />
      <path d="M12 19h24M17 10v5M17 25v9" />
    </svg>
  );
}

export function SteamBowlIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 24h36c0 9-7 16-18 16S6 33 6 24Z" />
      <path d="M16 8c-2 3 2 4 0 8M24 6c-2 3 2 4 0 8M32 8c-2 3 2 4 0 8" />
      <circle cx="24" cy="32" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="19.5" cy="29.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="28.5" cy="29.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function EggIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M24 5c-8 0-14 12-14 21a14 14 0 0 0 28 0C38 17 32 5 24 5Z" />
      <path d="M17 28a7 7 0 0 0 5 6" />
    </svg>
  );
}

export function YoghurtIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 22h36c0 10-7 18-18 18S6 32 6 22Z" />
      <path d="M13 22c0-6 5-9 11-9s11 3 11 9" />
      <path d="M24 13c-2-2 0-4 2-3" />
    </svg>
  );
}

export function DropIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M24 6C16 16 11 22 11 29a13 13 0 0 0 26 0c0-7-5-13-13-23Z" />
      <path d="M18 30a6 6 0 0 0 5 6" />
    </svg>
  );
}
