import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";
import GlassCard from "../../../shared/components/GlassCard";
import { Doctor } from "../types";

type Props = {
  doctor: Doctor;
  onPress: () => void;
};

function DoctorCard({ doctor, onPress }: Props) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={() => {
        scale.value = withSpring(0.98);
      }}
      onPressOut={() => {
        scale.value = withSpring(1);
      }}
    >
      <Animated.View style={animatedStyle}>
      <GlassCard style={{ marginBottom: 18 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              backgroundColor: "#CFFAFE",
            }}
          />

          <View style={{ marginLeft: 14, flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>{doctor.name}</Text>
            <Text>{doctor.specialization}</Text>
            <Text>⭐ {doctor.rating}</Text>
          </View>
        </View>

        <View style={{ marginTop: 16, flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{doctor.experience} yrs</Text>
          <Text>₹ {doctor.consultationFee}</Text>
        </View>
      </GlassCard>
      </Animated.View>
    </TouchableOpacity>
  );
}

export default React.memo(DoctorCard);
