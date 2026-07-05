import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";

const categories = ["Herbs", "Skin Care", "Hair Care", "Supplements", "Wellness"];

type Props = {
  selected: string | null;
  onSelect: (value: string | null) => void;
};

export default function FilterBar({ selected, onSelect }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity onPress={() => onSelect(null)} style={styles.chip}>
        <Text>All</Text>
      </TouchableOpacity>

      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          onPress={() => onSelect(category)}
          style={[styles.chip, selected === category && styles.selectedChip]}
        >
          <Text>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 6,
    marginVertical: 4,
    backgroundColor: "#EEE",
    borderRadius: 10,
  },
  selectedChip: {
    backgroundColor: "#AED581",
  },
});
