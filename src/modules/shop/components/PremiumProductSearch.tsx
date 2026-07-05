import React from "react";
import { View, Text, TextInput } from "react-native";
import GlassCard from "../../../shared/components/GlassCard";

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export default function PremiumProductSearch({ value, onChange }: Props) {
  return (
    <GlassCard style={{ marginBottom: 18 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>🔍</Text>
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder="Search products"
          placeholderTextColor="#6B7280"
          style={{ flex: 1, marginLeft: 12 }}
        />
      </View>
    </GlassCard>
  );
}
