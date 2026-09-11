import type { Metadata } from "next";
import CheckoutExperience from "@/components/CheckoutExperience";

export const metadata: Metadata = {
  title: "Checkout — Paw-a-licious",
  description:
    "Review your Paw-a-licious order and check out securely with Stripe.",
};

export default function CheckoutPage() {
  return <CheckoutExperience />;
}
