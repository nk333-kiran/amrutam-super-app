import React from "react";
import { View } from "react-native";

export default function IconBubble({
  children
}: any) {
  return (
    <View
      style={{
        width: 62,
        height: 62,
        borderRadius: 31,
        backgroundColor:
          "rgba(255,255,255,0.35)",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {children}
    </View>
  );
}
