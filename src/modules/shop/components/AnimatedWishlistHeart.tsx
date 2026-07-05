import React from "react";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";
import { TouchableOpacity } from "react-native";

type Props = {
  active: boolean;
  onPress: () => void;
};

export default function AnimatedWishlistHeart({ active, onPress }: Props) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    scale.value = withSpring(1.35);
    scale.value = withSpring(1);
    onPress();
  };

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity onPress={handlePress}>
        <Animated.Text>{active ? "❤️" : "🤍"}</Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
