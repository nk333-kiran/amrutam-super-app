import React from "react";
import { ScrollView, Text } from "react-native";
import Toast from "react-native-toast-message";

import { useAppDispatch, useAppSelector } from "../../../core/hooks/reduxHooks";
import BookingCard from "../components/BookingCard";
import { cancelBooking } from "../consultationSlice";

export default function UpcomingConsultationScreen() {
  const bookings = useAppSelector((state) => state.consultation.bookings);
  const dispatch = useAppDispatch();

  const activeBookings = bookings.filter((booking) => booking.status !== "CANCELLED");

  const handleCancel = (bookingId: string) => {
    dispatch(cancelBooking(bookingId));

    Toast.show({
      type: "success",
      text1: "Booking cancelled",
    });
  };

  return (
    <ScrollView>
      {activeBookings.length === 0 ? (
        <Text style={{ margin: 20 }}>No consultations booked</Text>
      ) : (
        activeBookings.map((booking) => (
          <BookingCard
            key={booking.bookingId}
            booking={booking}
            onCancel={() => handleCancel(booking.bookingId)}
          />
        ))
      )}
    </ScrollView>
  );
}
