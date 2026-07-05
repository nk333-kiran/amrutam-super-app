import React from "react";
import { View, Text, Button } from "react-native";
import { Booking } from "../types";

type Props = {
  booking: Booking;
  onCancel: () => void;
};

export default function BookingCard({ booking, onCancel }: Props) {
  return (
    <View
      style={{
        margin: 12,
        padding: 16,
        backgroundColor: "#f4f4f4",
        borderRadius: 12,
      }}
    >
      <Text>{booking.doctorName}</Text>
      <Text>{booking.slotTime}</Text>
      <Text>Status: {booking.status}</Text>

      {booking.status === "BOOKED" && <Button title="Cancel Booking" onPress={onCancel} />}
    </View>
  );
}
