export function formatPrice(value: number): string {
  return `$${value.toFixed(2)}`;
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export const FREE_SHIPPING_THRESHOLD = 250;
export const DELIVERY_FEE = 14.95;

export const CONTACT = {
  phone: "0412 626 627",
  phoneHref: "tel:0412626627",
  email: "paw.a.licious.dogfood@gmail.com",
  instagram: "@paw_a_licious_dogfood",
  instagramHref: "https://instagram.com/paw_a_licious_dogfood",
};

export const PICKUP_LOCATIONS = ["Balwyn North", "Templestowe Lower"];

export const DELIVERY_INFO = {
  metro: `Melbourne Metro delivery – ${formatPrice(DELIVERY_FEE)}`,
  free: `Free delivery over $${FREE_SHIPPING_THRESHOLD}`,
  pickup: `Free pickup – ${PICKUP_LOCATIONS.join(" or ")}`,
  pickupNote: "Please send us an email for exact pick up location after order is placed.",
};
