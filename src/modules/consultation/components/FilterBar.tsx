import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";

const filters = ["Ayurveda", "Skin", "Hair", "Nutrition", "Digestive"];

type Props = {
  selected: string | null;
  onSelect: (value: string | null) => void;
};

export default function FilterBar({ selected, onSelect }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.button} onPress={() => onSelect(null)}>
        <Text>All</Text>
      </TouchableOpacity>

      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={[styles.button, selected === filter && styles.active]}
          onPress={() => onSelect(filter)}
        >
          <Text>{filter}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 6,
    borderRadius: 10,
    backgroundColor: "#e8e8e8",
  },
  active: {
    backgroundColor: "#8BC34A",
  },
});
