import React from "react";
import { TextInput, StyleSheet } from "react-native";

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export default function ProductSearchBar({ value, onChange }: Props) {
  return (
    <TextInput
      placeholder="Search products"
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
    backgroundColor: "#f3f3f3",
    borderRadius: 12,
  },
});
