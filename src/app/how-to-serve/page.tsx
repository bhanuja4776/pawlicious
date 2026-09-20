import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How to Serve — Paw-a-licious",
  description:
    "From our freezer to their bowl — how to store, thaw and serve Paw-a-licious homemade dog food, plus a simple feeding guide.",
};

export default function HowToServePage() {
  return (
    <section className="bg-white pb-16 pt-24 lg:pb-24 lg:pt-32">
      <div className="container-shell">
        <h1 className="sr-only">How to Serve Paw-a-licious</h1>
        <Image
          src="/assets/photos/how-to-serve.webp"
          alt="How to Serve Paw-a-licious. 1. Keep frozen: store frozen for up to 5 months from the date on the package. 2. Thaw in the refrigerator for at least 24 hours before serving. 3. Serve chilled or warm slightly for 30–40 seconds in the microwave; dogs often prefer their meal slightly warm. 4. Once thawed, keep refrigerated and use within 5 days. Want to add a little extra? Add 1–2 cooked eggs, or 1–2 tablespoons of plain natural yoghurt. Feeding guide: small dogs up to 10kg, 150–250g per meal; medium dogs 10–25kg, 250–450g per meal; large dogs 25kg+, 450–650g per meal. Always ensure fresh drinking water is available. This is a general guide only; individual requirements may vary depending on your dog's age, size, activity level and individual needs."
          width={686}
          height={1600}
          priority
          unoptimized
          className="mx-auto h-auto w-full"
          style={{ maxWidth: 686 }}
        />
      </div>
    </section>
  );
}
