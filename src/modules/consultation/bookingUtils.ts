import { Booking } from "./types";

export function canBookSlot(
  bookings: Booking[],
  doctorId: string,
  slotId: string
) {
  return !bookings.some(
    (booking) =>
      booking.doctorId === doctorId &&
      booking.slotId === slotId &&
      booking.status === "BOOKED"
  );
}

export function isExpiredSlot(slotTime: string) {
  const currentHour = new Date().getHours();
  const slotHour = Number(slotTime.split(":")[0]);

  return slotHour <= currentHour;
}
