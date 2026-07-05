import React, { useMemo } from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import GradientBackground from "../../../shared/components/GradientBackground";
import AnimatedScreen from "../../../shared/components/AnimatedScreen";
import FloatingFab from "../../../shared/components/FloatingFab";
import OfferBanner from "../components/OfferBanner";
import PremiumProductSearch from "../components/PremiumProductSearch";
import CategoryChips from "../components/CategoryChips";
import ProductCard from "../components/ProductCard";

import { RootStackParamList } from "../../../app/navigation/AppNavigator";
import { useAppDispatch, useAppSelector } from "../../../core/hooks/reduxHooks";

import { setSearch, setFilter, setSort, addToCart } from "../shopSlice";
import { filterProducts } from "../filterProducts";

type Props = NativeStackScreenProps<RootStackParamList, "ProductList">;

export default function ProductListScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const shop = useAppSelector((state) => state.shop);

  const filteredProducts = useMemo(
    () => filterProducts(shop.products, shop.search, shop.filter, shop.sort),
    [shop.filter, shop.products, shop.search, shop.sort]
  );

  return (
    <AnimatedScreen>
      <GradientBackground>
        <View style={{ flex: 1, padding: 16 }}>
        <OfferBanner />
        <PremiumProductSearch value={shop.search} onChange={(value) => dispatch(setSearch(value))} />
        <CategoryChips selected={shop.filter ?? undefined} onSelect={(value) => dispatch(setFilter(value))} />

        <FlashList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              wishlisted={shop.wishlist.includes(item.id)}
              onAdd={() => dispatch(addToCart(item.id))}
              onOpen={() => navigation.navigate("ProductDetail", { productId: item.id })}
            />
          )}
        />

        <FloatingFab label={`🛒 ${shop.cart.reduce((sum, item) => sum + item.quantity, 0)}`} onPress={() => navigation.navigate("Cart")} />
      </View>
      </GradientBackground>
    </AnimatedScreen>
  );
}
