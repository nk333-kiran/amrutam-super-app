import React from "react";
import { View, Text } from "react-native";
import GlassCard from "./GlassCard";

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
      }}
    >
      <View>
        <Text style={{ color: "#666" }}>
          Good Morning,
        </Text>

        <Text
          style={{
            fontSize: 28,
            fontWeight: "700"
          }}
        >
          Amrutam 🌿
        </Text>
      </View>

      <GlassCard
        style={{
          width: 60,
          height: 60,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>🔔</Text>
      </GlassCard>
    </View>
  );
}
