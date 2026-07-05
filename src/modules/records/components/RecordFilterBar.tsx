import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";

const filters = ["LAB_REPORT", "PRESCRIPTION", "CONSULTATION", "VACCINATION", "ALLERGY"];

type Props = {
  selected: string | null;
  onSelect: (value: string | null) => void;
};

export default function RecordFilterBar({ selected, onSelect }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity onPress={() => onSelect(null)} style={styles.chip}>
        <Text>All</Text>
      </TouchableOpacity>

      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          onPress={() => onSelect(filter)}
          style={[styles.chip, selected === filter && styles.selectedChip]}
        >
          <Text>{filter}</Text>
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
    borderRadius: 10,
    backgroundColor: "#EEE",
  },
  selectedChip: {
    backgroundColor: "#A5D6A7",
  },
});
