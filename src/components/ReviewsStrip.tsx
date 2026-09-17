"use client";

import ScrollReveal from "@/components/ScrollReveal";

const REVIEWS = [
  {
    quote:
      "We have been using Paw-a-licious for some time now and Gigi absolutely loves it. It's so convenient having the food come frozen, and the portion sizes are perfect. The food looks so amazing and fresh that I'm even tempted to give it a try myself! It's so important to know what your dog is eating, and ever since we started using Paw-a-licious, we've noticed Gigi's energy levels are up and her coat is so shiny. Thank you, Rachelle and the team at Paw-a-licious!",
    name: "Michael Ambruosi",
    detail: "Gigi's dad — 2-year-old Rottweiler",
  },
  {
    quote:
      "When it comes to our family meals, we go above and beyond to make sure we're eating right. We have five in our family — four humans and our precious dog Cooper, who is a very big part of our family. When it comes to Cooper's food, we love giving him homemade meals, as we believe he deserves to eat healthy meals just like us. Ever since trying Paw-a-licious, all the hard work has been taken away from our busy schedule, and we know Cooper is getting 100% healthy, home-cooked meals with a variety of different meats. I highly recommend Paw-a-licious to all our family and friends, as our dogs really do deserve the best.",
    name: "Tania",
    detail: "Cooper's mum",
  },
  {
    quote:
      "Our fur baby Max is absolutely loving Paw-a-licious! He has never been one to eat canned dog food, so it's been so easy and convenient to have nutritious, home-cooked food for him. The whole process with Rachelle, from ordering through to delivery, has been so easy and convenient. Highly recommend!",
    name: "Max's Family",
    detail: undefined,
  },
];

export default function ReviewsStrip() {
  return (
    <ScrollReveal className="border-y border-ink/10 bg-white py-16 lg:py-20">
      <div className="container-shell">
        <p className="mb-10 text-center text-xs font-bold uppercase tracking-widest text-ink-faint">
          What dogs (and their people) are saying
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-card border border-ink/10 bg-cream-soft/60 p-6"
            >
              <p className="mb-3 text-coral">★★★★★</p>
              <p className="flex-1 text-sm italic text-ink-soft">&ldquo;{review.quote}&rdquo;</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-ink-faint">
                — {review.name}
                {review.detail ? `, ${review.detail}` : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
