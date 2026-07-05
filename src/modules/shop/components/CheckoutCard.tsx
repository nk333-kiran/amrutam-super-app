import React from "react";
import { Text } from "react-native";
import GlassCard from "../../../shared/components/GlassCard";
import PrimaryButton from "../../../shared/components/PrimaryButton";

type Props = {
  total: number;
};

export default function CheckoutCard({ total }: Props) {
  return (
    <GlassCard>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>Total: ₹ {total}</Text>
      <Text style={{ marginTop: 6, color: "#6B7280" }}>Free delivery on wellness bundles</Text>
      <PrimaryButton title="Proceed to Checkout" onPress={() => {}} />
    </GlassCard>
  );
}
