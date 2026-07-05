import React from "react";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

export default function GlassCard({
  children,
  style
}: any) {
  return (
    <BlurView
      intensity={35}
      tint="light"
      style={[styles.card, style]}
    >
      {children}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 28,
    overflow: "hidden",
    backgroundColor:
      "rgba(255,255,255,0.25)",
    borderWidth: 1,
    borderColor:
      "rgba(255,255,255,0.4)"
  }
});
