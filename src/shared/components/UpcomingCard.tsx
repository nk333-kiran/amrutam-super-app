import React from "react";
import { Text } from "react-native";
import GlassCard from "./GlassCard";

export default function UpcomingCard() {
  return (
    <GlassCard style={{ marginBottom: 20 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700"
        }}
      >
        Upcoming Consultation
      </Text>

      <Text style={{ marginTop: 10 }}>
        Dr. Priya Sharma
      </Text>

      <Text>24 May 2026 • 10:30 AM</Text>
    </GlassCard>
  );
}
