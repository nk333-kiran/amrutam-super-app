import React from "react";
import { View, Text } from "react-native";
import GlassCard from "../../../shared/components/GlassCard";

export default function OfferBanner() {
  return (
    <GlassCard style={{ marginBottom: 18 }}>
      <Text style={{ fontSize: 26, fontWeight: "700" }}>30% OFF 🌿</Text>
      <Text style={{ marginTop: 8, color: "#555" }}>Ayurvedic wellness products this week</Text>
    </GlassCard>
  );
}
