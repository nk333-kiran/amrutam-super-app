import React from "react";
import { Text } from "react-native";
import * as Haptics from "expo-haptics";
import AnimatedButton from "./AnimatedButton";

export default function PrimaryButton({ title, onPress, disabled }: any) {
  return (
    <AnimatedButton
      disabled={disabled}
      onPress={() => {
        if (disabled) return;
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress?.();
      }}
    >
      <Text
        style={{
          backgroundColor: disabled ? "#9CA3AF" : "#2FD6A3",
          paddingVertical: 14,
          borderRadius: 18,
          alignItems: "center",
          textAlign: "center",
          color: "white",
          fontWeight: "700",
          fontSize: 16,
          opacity: disabled ? 0.9 : 1,
        }}
      >
        {title}
      </Text>
    </AnimatedButton>
  );
}
