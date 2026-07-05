import React from "react";
import { View } from "react-native";

export default function FloatingTab() {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        height: 75,
        borderRadius: 40,
        backgroundColor: "rgba(255,255,255,0.25)",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
}
