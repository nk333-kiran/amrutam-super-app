export type Slot = {
  id: string;
  time: string;
  available: boolean;
};

export type Doctor = {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  consultationFee: number;
  slots: Slot[];
};

export type BookingStatus =
  | "BOOKED"
  | "CANCELLED"
  | "PENDING_SYNC";

export interface Booking {
  bookingId: string;
  doctorId: string;
  doctorName: string;
  slotId: string;
  slotTime: string;
  status: BookingStatus;
}
