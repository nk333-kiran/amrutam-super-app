import React from "react";
import { View, Text } from "react-native";

type Props = {
  title: string;
};

export default function EmptyState({ title }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
      <Text style={{ fontSize: 50 }}>🌿</Text>
      <Text style={{ fontSize: 20, marginTop: 12, textAlign: "center" }}>{title}</Text>
    </View>
  );
}
