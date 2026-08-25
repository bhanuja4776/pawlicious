import type { Metadata } from "next";
import QuizExperience from "@/components/QuizExperience";

export const metadata: Metadata = {
  title: "Dog Quiz — Find Their Match | Paw-a-licious",
  description:
    "Answer a few quick questions about your dog and we'll match them to a real Paw-a-licious recipe — Chicken, Beef, Turkey or Kangaroo.",
};

export default function QuizPage() {
  return <QuizExperience />;
}
