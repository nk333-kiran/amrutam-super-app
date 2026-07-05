import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";

const filters = ["Ayurveda", "Skin", "Hair", "Nutrition", "Digestive"];

type Props = {
  selected?: string;
  onSelect: (value: string) => void;
};

export default function PremiumFilterChips({ selected, onSelect }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {filters.map((filter) => {
        const active = selected === filter;

        return (
          <TouchableOpacity
            key={filter}
            onPress={() => onSelect(filter)}
            style={[styles.chip, active && styles.activeChip]}
          >
            <Text style={[styles.label, active && styles.activeLabel]}>{filter}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  chip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "rgba(255,255,255,0.35)",
  },
  activeChip: {
    backgroundColor: "#2FD6A3",
  },
  label: {
    color: "#1F2937",
    fontWeight: "600",
  },
  activeLabel: {
    color: "white",
  },
});
