import { DELIVERY_INFO } from "@/lib/utils";

export default function DeliveryInfo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <ul className="flex flex-col gap-0.5">
        <li>{DELIVERY_INFO.metro}</li>
        <li>{DELIVERY_INFO.free}</li>
        <li>{DELIVERY_INFO.pickup}</li>
      </ul>
      <p className="mt-1.5">{DELIVERY_INFO.pickupNote}</p>
    </div>
  );
}
