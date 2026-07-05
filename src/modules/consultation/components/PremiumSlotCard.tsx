import React from "react";
import { Pressable, Text, View, Animated } from "react-native";

type Props = {
  time: string;
  selected?: boolean;
  disabled?: boolean;
  onPress: () => void;
};

export default function PremiumSlotCard({ time, selected, disabled, onPress }: Props) {
  const scale = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <View
        style={{
          paddingVertical: 18,
          borderRadius: 18,
          marginBottom: 12,
          backgroundColor: selected ? "#2FD6A3" : "rgba(255,255,255,0.25)",
          opacity: disabled ? 0.4 : 1,
          alignItems: "center",
          borderWidth: selected ? 2 : 1,
          borderColor: selected ? "#16A34A" : "rgba(255,255,255,0.4)",
          boxShadow: selected ? "0 6px 18px rgba(45, 163, 90, 0.18)" : undefined,
          paddingHorizontal: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: selected ? "white" : "#111827", fontWeight: "600" }}>{time}</Text>

        {disabled ? (
          <View style={{ backgroundColor: "rgba(255,255,255,0.12)", paddingHorizontal: 12, paddingVertical: 8, borderRadius: 14 }}>
            <Text style={{ color: "#9CA3AF" }}>Unavailable</Text>
          </View>
        ) : selected ? (
          <View style={{ backgroundColor: "rgba(255,255,255,0.14)", paddingHorizontal: 12, paddingVertical: 8, borderRadius: 14 }}>
            <Text style={{ color: "white", fontWeight: "700" }}>Selected</Text>
          </View>
        ) : (
          <Pressable
            onPress={() => {
              handlePressIn();
              onPress();
              handlePressOut();
            }}
            accessibilityRole="button"
            style={{ backgroundColor: "#2FD6A3", paddingHorizontal: 12, paddingVertical: 8, borderRadius: 14, pointerEvents: 'auto', zIndex: 10 }}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>Select</Text>
          </Pressable>
        )}
      </View>
    </Animated.View>
  );
}
