import { canBookSlot } from "./bookingUtils";

describe("Booking Logic", () => {
  test("prevents double booking", () => {
    const bookings = [
      {
        doctorId: "doctor-1",
        slotId: "slot-1",
        status: "BOOKED",
      },
    ];

    expect(canBookSlot(bookings as any, "doctor-1", "slot-1")).toBe(false);
  });
});
