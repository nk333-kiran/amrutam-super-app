import { RootState } from "../../app/store/store";

export const selectDoctors = (state: RootState) => state.consultation.doctors;

export const selectBookings = (state: RootState) => state.consultation.bookings;
