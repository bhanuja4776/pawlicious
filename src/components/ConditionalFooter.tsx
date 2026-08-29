"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

/** The landing page is a single, non-scrolling screen — no footer to scroll to. */
export default function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Footer />;
}
