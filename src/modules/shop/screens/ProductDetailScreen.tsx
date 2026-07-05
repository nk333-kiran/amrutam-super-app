import React from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import GradientBackground from "../../../shared/components/GradientBackground";
import AnimatedScreen from "../../../shared/components/AnimatedScreen";
import GlassCard from "../../../shared/components/GlassCard";
import PrimaryButton from "../../../shared/components/PrimaryButton";
import { RootStackParamList } from "../../../app/navigation/AppNavigator";
import { useAppDispatch, useAppSelector } from "../../../core/hooks/reduxHooks";
import { addToCart, toggleWishlist } from "../shopSlice";

type Props = NativeStackScreenProps<RootStackParamList, "ProductDetail">;

export default function ProductDetailScreen({ route }: Props) {
  const { productId } = route.params;
  const dispatch = useAppDispatch();

  const product = useAppSelector((state) => state.shop.products.find((p) => p.id === productId));
  const wishlist = useAppSelector((state) => state.shop.wishlist);

  if (!product) {
    return <Text>Product not found</Text>;
  }

  const isWishlisted = wishlist.includes(product.id);

  return (
    <AnimatedScreen>
      <GradientBackground>
        <View style={{ padding: 20 }}>
        <GlassCard>
          <View style={{ height: 220, borderRadius: 20, backgroundColor: "#F1F5F9" }} />
          <Text style={{ marginTop: 16, fontSize: 24, fontWeight: "700" }}>{product.name}</Text>
          <Text>₹ {product.price}</Text>
          <Text>⭐ {product.rating}</Text>
          <Text style={{ marginTop: 12, color: "#4B5563" }}>{product.description}</Text>

          <View style={{ marginTop: 18, gap: 10 }}>
            <PrimaryButton title="Add To Cart" onPress={() => dispatch(addToCart(product.id))} />
            <PrimaryButton title={isWishlisted ? "Remove Wishlist" : "Add Wishlist"} onPress={() => dispatch(toggleWishlist(product.id))} />
          </View>
        </GlassCard>
        </View>
      </GradientBackground>
    </AnimatedScreen>
  );
}
