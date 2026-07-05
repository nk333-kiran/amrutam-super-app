import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from "react-native-reanimated";

type Props = {
  label: string;
  onPress?: () => void;
};

export default function FloatingFab({ label, onPress }: Props) {
  const pulse = useSharedValue(1);

  React.useEffect(() => {
    pulse.value = withRepeat(withTiming(1.04, { duration: 1200, easing: Easing.inOut(Easing.ease) }), -1, true);
  }, [pulse]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulse.value }],
  }));

  return (
    <Animated.View style={[{ position: "absolute", bottom: 100, right: 20 }, animatedStyle]}>
      <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#2FD6A3", paddingHorizontal: 18, paddingVertical: 14, borderRadius: 999, boxShadow: "0 10px 24px rgba(47,214,163,0.32)", elevation: 6 }}>
        <Text style={{ color: "white", fontWeight: "700" }}>{label}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
