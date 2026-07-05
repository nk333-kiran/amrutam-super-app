import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateDoctors } from "./mockDoctors";
import { Booking } from "./types";

type ConsultationState = {
  doctors: ReturnType<typeof generateDoctors>;
  bookings: Booking[];
  search: string;
  filter: string | null;
};

const initialState: ConsultationState = {
  doctors: generateDoctors(),
  bookings: [],
  search: "",
  filter: null,
};

const consultationSlice = createSlice({
  name: "consultation",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },

    setFilter(state, action: PayloadAction<string | null>) {
      state.filter = action.payload;
    },

    bookSlot(state, action: PayloadAction<Booking>) {
      state.bookings.push(action.payload);
    },

    cancelBooking(state, action: PayloadAction<string>) {
      const booking = state.bookings.find((b) => b.bookingId === action.payload);

      if (booking) {
        booking.status = "CANCELLED";
      }
    },
  },
});

export const { setSearch, setFilter, bookSlot, cancelBooking } = consultationSlice.actions;

export default consultationSlice.reducer;
