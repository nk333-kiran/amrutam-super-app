import React from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";

const years = ["2024", "2025", "2026"];

type Props = {
  selected?: string;
  onSelect: (value: string) => void;
};

export default function YearSelector({ selected, onSelect }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
      {years.map((year) => {
        const active = selected === year;

        return (
          <TouchableOpacity
            key={year}
            onPress={() => onSelect(year)}
            style={{
              paddingHorizontal: 18,
              paddingVertical: 10,
              borderRadius: 25,
              marginRight: 10,
              backgroundColor: active ? "#7C5CFC" : "rgba(255,255,255,0.25)",
            }}
          >
            <Text style={{ color: active ? "white" : "#111827", fontWeight: "600" }}>{year}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
