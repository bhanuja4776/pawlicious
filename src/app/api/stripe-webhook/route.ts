import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { buildOrderEmail } from "@/lib/orderEmail";
import { sendOrderEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = req.headers.get("stripe-signature");
  if (!secret || !signature) {
    return NextResponse.json({ error: "Webhook not configured." }, { status: 400 });
  }

  const stripe = getStripe();
  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, secret);
  } catch {
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (
    event.type !== "checkout.session.completed" &&
    event.type !== "checkout.session.async_payment_succeeded"
  ) {
    return NextResponse.json({ received: true });
  }

  const eventSession = event.data.object as Stripe.Checkout.Session;
  if (eventSession.payment_status !== "paid") {
    return NextResponse.json({ received: true });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(eventSession.id, {
      expand: ["line_items"],
    });
    const mail = buildOrderEmail(session);
    if (!mail) {
      console.error(`Order ${session.id}: no customer email on session, confirmation not sent.`);
      return NextResponse.json({ received: true });
    }
    await sendOrderEmail(mail);
  } catch (err) {
    // A non-2xx response makes Stripe retry the webhook, so a temporary
    // email/API failure doesn't silently lose the confirmation.
    console.error("Order confirmation email failed:", err);
    return NextResponse.json({ error: "Could not send confirmation." }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
