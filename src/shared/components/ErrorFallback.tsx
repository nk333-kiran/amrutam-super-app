import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type Props = {
  error: unknown;
  resetErrorBoundary: () => void;
};

export default function ErrorFallback({ error, resetErrorBoundary }: Props) {
  const message = error instanceof Error ? error.message : "Unexpected error";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Something went wrong</Text>
      <Text>{message}</Text>
      <Button title="Retry" onPress={resetErrorBoundary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
});
