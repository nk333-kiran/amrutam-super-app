import React from "react";
import { TextInput, StyleSheet } from "react-native";

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export default function RecordSearchBar({ value, onChange }: Props) {
  return (
    <TextInput
      placeholder="Search records"
      value={value}
      onChangeText={onChange}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    padding: 12,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
  },
});
