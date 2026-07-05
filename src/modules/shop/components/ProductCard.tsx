import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";
import GlassCard from "../../../shared/components/GlassCard";
import AnimatedWishlistHeart from "./AnimatedWishlistHeart";
import { Product } from "../types";

type Props = {
  product: Product;
  onAdd: () => void;
  onOpen: () => void;
  wishlisted?: boolean;
};

function ProductCard({ product, onAdd, onOpen, wishlisted }: Props) {
  return (
    <TouchableOpacity onPress={onOpen} accessible accessibilityRole="button" accessibilityLabel={`Open product ${product.name}`}>
      <GlassCard style={{ marginBottom: 18 }}>
        <View style={{ height: 140, borderRadius: 18, backgroundColor: "#F1F5F9", marginBottom: 14 }} />

        <Text style={{ fontWeight: "700", fontSize: 17 }}>{product.name}</Text>
        <Text>{product.category}</Text>

        <View style={{ marginTop: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text>₹ {product.price}</Text>
          <AnimatedWishlistHeart active={!!wishlisted} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)} />
        </View>

        <TouchableOpacity
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            onAdd();
          }}
          style={{ marginTop: 16, padding: 12, borderRadius: 16, backgroundColor: "#2FD6A3", alignItems: "center" }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>Add To Cart</Text>
        </TouchableOpacity>
      </GlassCard>
    </TouchableOpacity>
  );
}

export default React.memo(ProductCard);
