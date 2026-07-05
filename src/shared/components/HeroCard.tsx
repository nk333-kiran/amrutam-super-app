import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlassCard from "./GlassCard";
import PrimaryButton from "./PrimaryButton";

export default function HeroCard() {
  const navigation = useNavigation<any>();

  return (
    <GlassCard style={{ marginBottom: 20 }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "700",
          marginBottom: 10
        }}
      >
        Your Health,
      </Text>

      <Text
        style={{
          fontSize: 34,
          fontWeight: "800",
          marginBottom: 12
        }}
      >
        Our Priority
      </Text>

      <Text
        style={{
          color: "#666",
          marginBottom: 18
        }}
      >
        Consult top doctors anytime.
      </Text>

      <PrimaryButton
        title="Book Now"
        onPress={() => navigation.navigate("DoctorList")}
      />
    </GlassCard>
  );
}
