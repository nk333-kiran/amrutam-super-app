import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import GlassCard from "../../../shared/components/GlassCard";

type Props = {
  name: string;
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

function CartItemCard({ name, price, quantity, onIncrease, onDecrease, onRemove }: Props) {
  return (
    <GlassCard style={{ marginBottom: 16 }}>
      <Text style={{ fontWeight: "700" }}>{name}</Text>
      <Text>₹ {price}</Text>

      <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={onDecrease}>
          <Text>➖</Text>
        </TouchableOpacity>

        <Text style={{ marginHorizontal: 12 }}>{quantity}</Text>

        <TouchableOpacity onPress={onIncrease}>
          <Text>➕</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onRemove} style={{ marginLeft: 16 }}>
          <Text style={{ color: "#EF4444" }}>Remove</Text>
        </TouchableOpacity>
      </View>
    </GlassCard>
  );
}

export default React.memo(CartItemCard);
