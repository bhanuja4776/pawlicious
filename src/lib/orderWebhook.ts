import type Stripe from "stripe";
import { buildOrderEmail, buildOwnerEmail, type OrderEmail } from "./orderEmail";

export type SendFn = (mail: OrderEmail) => Promise<void>;

// Sends the owner notification and the customer confirmation once each.
// Progress is stored in the Checkout Session's metadata, so a Stripe retry
// (or a second event for the same order) never sends a duplicate.
export async function handlePaidSession(
  stripe: Stripe,
  sessionId: string,
  send: SendFn
): Promise<"sent" | "already-sent" | "no-customer-email"> {
  const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ["line_items"] });
  const done = { ...(session.metadata ?? {}) };
  let sentAnything = false;

  const mark = async (key: string) => {
    done[key] = "1";
    try {
      await stripe.checkout.sessions.update(session.id, { metadata: done });
    } catch (err) {
      console.error(`Could not record ${key} on ${session.id}:`, err);
    }
  };

  if (!done.owner_email_sent) {
    await send(buildOwnerEmail(session));
    sentAnything = true;
    await mark("owner_email_sent");
  }

  const customerMail = buildOrderEmail(session);
  if (!customerMail) {
    console.error(`Order ${session.id}: no customer email on session, confirmation not sent.`);
    return "no-customer-email";
  }
  if (!done.customer_email_sent) {
    await send(customerMail);
    sentAnything = true;
    await mark("customer_email_sent");
  }

  return sentAnything ? "sent" : "already-sent";
}
