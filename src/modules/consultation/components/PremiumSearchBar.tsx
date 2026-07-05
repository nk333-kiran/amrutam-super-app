import React from "react";
import { View, TextInput, Text } from "react-native";
import AnimatedScreen from "../../../shared/components/AnimatedScreen";
import GlassCard from "../../../shared/components/GlassCard";

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export default function PremiumSearchBar({ value, onChange }: Props) {
  return (
    <AnimatedScreen>
      <GlassCard style={{ marginBottom: 16 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>🔍</Text>

        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder="Search doctor..."
          placeholderTextColor="#6B7280"
          style={{ marginLeft: 12, flex: 1, fontSize: 16 }}
        />
      </View>
      </GlassCard>
    </AnimatedScreen>
  );
}
