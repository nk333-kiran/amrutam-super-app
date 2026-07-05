import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import * as Haptics from "expo-haptics";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import GradientBackground from "../../../shared/components/GradientBackground";
import AnimatedScreen from "../../../shared/components/AnimatedScreen";
import GlassCard from "../../../shared/components/GlassCard";
import PrimaryButton from "../../../shared/components/PrimaryButton";
import { RootStackParamList } from "../../../app/navigation/AppNavigator";
import { useAppDispatch, useAppSelector } from "../../../core/hooks/reduxHooks";
import SlotCard from "../components/SlotCard";
import { canBookSlot, isExpiredSlot } from "../bookingUtils";
import { bookSlot } from "../consultationSlice";
import { Booking, BookingStatus } from "../types";
import { addBookingToQueue } from "../offlineQueue";
import { isOnline } from "../../../core/utils/network";

type Props = NativeStackScreenProps<RootStackParamList, "DoctorDetail">;

export default function DoctorDetailScreen({ route, navigation }: Props) {
  const { doctorId } = route.params;
  const dispatch = useAppDispatch();
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

  const doctor = useAppSelector((state) => state.consultation.doctors.find((d) => d.id === doctorId));
  const bookings = useAppSelector((state) => state.consultation.bookings);
  const selectedSlot = doctor?.slots.find((slot) => slot.id === selectedSlotId);

  if (!doctor) {
    return <Text>Doctor not found</Text>;
  }

  const handleSelectSlot = (slot: { id: string; time: string }) => {
    if (isExpiredSlot(slot.time)) {
      Toast.show({ type: "error", text1: "Slot expired" });
      return;
    }

    if (!canBookSlot(bookings, doctor.id, slot.id)) {
      Toast.show({ type: "error", text1: "Slot already booked" });
      return;
    }

    setSelectedSlotId(slot.id);
  };

  const handleContinue = () => {
    if (!selectedSlotId) {
      Toast.show({ type: "error", text1: "Please select a time" });
      return;
    }

    const selectedSlot = doctor.slots.find((slot) => slot.id === selectedSlotId);

    if (!selectedSlot) {
      Toast.show({ type: "error", text1: "Please select a time" });
      return;
    }

    if (isExpiredSlot(selectedSlot.time)) {
      Toast.show({ type: "error", text1: "Slot expired" });
      return;
    }

    if (!canBookSlot(bookings, doctor.id, selectedSlot.id)) {
      Toast.show({ type: "error", text1: "Slot already booked" });
      return;
    }

    const online = isOnline();

    const booking: Booking = {
      bookingId: Date.now().toString(),
      doctorId: doctor.id,
      doctorName: doctor.name,
      slotId: selectedSlot.id,
      slotTime: selectedSlot.time,
      status: (online ? "BOOKED" : "PENDING_SYNC") as BookingStatus,
    };

    if (!online) {
      addBookingToQueue({ type: "BOOK_SLOT", payload: booking });
    }

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    dispatch(bookSlot(booking));
    navigation.navigate("UpcomingConsultations");

    Toast.show({
      type: "success",
      text1: online ? "Booking Confirmed" : "Booking queued offline",
    });
  };

  return (
    <AnimatedScreen>
      <GradientBackground>
        <ScrollView style={{ padding: 16 }}>
        <GlassCard style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>{doctor.name}</Text>
          <Text>{doctor.specialization}</Text>
          <Text>⭐ {doctor.rating}</Text>
          <Text>{doctor.experience} years</Text>
        </GlassCard>

        {selectedSlot ? (
          <View style={{ paddingHorizontal: 16 }}>
            <View style={{ alignSelf: "flex-start", backgroundColor: "#2FD6A3", paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, marginBottom: 12 }}>
              <Text style={{ color: "white", fontWeight: "700" }}>Selected: {selectedSlot.time}</Text>
            </View>
          </View>
        ) : null}

        <GlassCard>
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 6 }}>Select a time</Text>
          <Text style={{ color: "#6B7280", marginBottom: 12 }}>
            {selectedSlot ? `Selected: ${selectedSlot.time}` : "Tap a time slot to choose it"}
          </Text>

          {doctor.slots.map((slot) => (
            <SlotCard
              key={slot.id}
              time={slot.time}
              selected={selectedSlotId === slot.id}
              // disabled when slot is explicitly unavailable or expired
              disabled={!slot.available || isExpiredSlot(slot.time)}
              onPress={() => handleSelectSlot(slot)}
            />
          ))}

          <View style={{ marginTop: 12 }}>
            <PrimaryButton title="Continue" onPress={handleContinue} />
          </View>
        </GlassCard>
        </ScrollView>
      </GradientBackground>
    </AnimatedScreen>
  );
}
