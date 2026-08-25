import type { Metadata } from "next";
import CheckoutExperience from "@/components/CheckoutExperience";

export const metadata: Metadata = {
  title: "Checkout — Paw-a-licious",
  description:
    "Review your Paw-a-licious order. This is a design preview — for real orders, contact us on Instagram or by phone.",
};

export default function CheckoutPage() {
  return <CheckoutExperience />;
}
