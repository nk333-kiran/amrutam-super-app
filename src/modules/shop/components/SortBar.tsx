import React from "react";
import { View, Button, StyleSheet } from "react-native";

type Props = {
  onSort: (value: string | null) => void;
};

export default function SortBar({ onSort }: Props) {
  return (
    <View style={styles.container}>
      <Button title="Price Low → High" onPress={() => onSort("PRICE_ASC")} />
      <Button title="Price High → Low" onPress={() => onSort("PRICE_DESC")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    gap: 8,
  },
});
