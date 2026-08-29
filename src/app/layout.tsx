import type { Metadata } from "next";
import { Fredoka, Caveat, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import ConditionalFooter from "@/components/ConditionalFooter";
import CartDrawer from "@/components/CartDrawer";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Paw-a-licious — Homemade Dog Food, Made in Melbourne",
  description:
    "Fresh, gently-cooked, human-grade homemade dog food made in small batches in Melbourne. Real chicken, beef, turkey & kangaroo recipes with real veggies — no fillers, no preservatives. Goodness in every bowl.",
  metadataBase: new URL("https://www.paw-a-licious.com.au"),
  openGraph: {
    title: "Paw-a-licious — Homemade Dog Food",
    description:
      "Fresh, real, made with love. Small-batch homemade dog food, made in Melbourne.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${caveat.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <ConditionalFooter />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
