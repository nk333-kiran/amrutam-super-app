import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function GradientBackground({
  children
}: any) {
  return (
    <LinearGradient
      colors={[
        "#DDF9F4",
        "#DCEFFF",
        "#E9DEFF"
      ]}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
}
