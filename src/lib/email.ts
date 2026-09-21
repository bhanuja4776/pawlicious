import nodemailer from "nodemailer";
import type { OrderEmail } from "./orderEmail";

export const EMAIL_FROM = process.env.EMAIL_FROM ?? "Paw-a-licious <info@pawalicious.com.au>";
export const EMAIL_REPLY_TO = "info@pawalicious.com.au";

export function getTransport() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    throw new Error("SMTP_USER and SMTP_PASS are not set, so order emails cannot be sent.");
  }
  const port = Number(process.env.SMTP_PORT ?? 465);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: { user, pass },
  });
}

export async function sendOrderEmail(mail: OrderEmail) {
  await getTransport().sendMail({
    from: EMAIL_FROM,
    replyTo: EMAIL_REPLY_TO,
    to: mail.to,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  });
}
