import React from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";

const categories = ["Herbs", "Skin", "Hair", "Supplements", "Wellness"];

type Props = {
  selected?: string;
  onSelect: (value: string) => void;
};

export default function CategoryChips({ selected, onSelect }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 14 }}>
      {categories.map((category) => {
        const active = selected === category;

        return (
          <TouchableOpacity
            key={category}
            onPress={() => onSelect(category)}
            style={{
              paddingHorizontal: 18,
              paddingVertical: 10,
              borderRadius: 25,
              marginRight: 10,
              backgroundColor: active ? "#2FD6A3" : "rgba(255,255,255,0.3)",
            }}
          >
            <Text>{category}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
