import React from "react";
import { Pressable } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
};

export default function AnimatedButton({ children, onPress, disabled }: Props) {
  const scale = useSharedValue(1);

  const style = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      disabled={disabled}
      onPressIn={() => {
        if (!disabled) scale.value = withSpring(0.96);
      }}
      onPressOut={() => {
        if (!disabled) scale.value = withSpring(1);
      }}
      onPress={() => {
        if (!disabled) onPress?.();
      }}
    >
      <Animated.View style={[style, { opacity: disabled ? 0.6 : 1 }]}>{children}</Animated.View>
    </Pressable>
  );
}
