import React from "react";
import { ScrollView, Text, View } from "react-native";
import EmptyState from "../../../shared/components/EmptyState";

import GradientBackground from "../../../shared/components/GradientBackground";
import AnimatedScreen from "../../../shared/components/AnimatedScreen";
import GlassCard from "../../../shared/components/GlassCard";
import CheckoutCard from "../components/CheckoutCard";
import CartItemCard from "../components/CartItemCard";
import { useAppDispatch, useAppSelector } from "../../../core/hooks/reduxHooks";
import { addToCart, decreaseQuantity, removeFromCart } from "../shopSlice";
import { calculateCheckout } from "../checkoutUtils";

export default function CartScreen() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.shop.cart);
  const products = useAppSelector((state) => state.shop.products);

  const subtotal = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);

    if (!product) return sum;

    return sum + product.price * item.quantity;
  }, 0);

  const checkout = calculateCheckout(subtotal);

  return (
    <AnimatedScreen>
      <GradientBackground>
        <ScrollView style={{ flex: 1, padding: 16 }}>
        {cart.length === 0 ? (
          <EmptyState title="Your cart is ready for wellness picks" />
        ) : (
          cart.map((item) => {
            const product = products.find((p) => p.id === item.productId);

            if (!product) return null;

            return (
              <CartItemCard
                key={item.productId}
                name={product.name}
                price={product.price}
                quantity={item.quantity}
                onIncrease={() => dispatch(addToCart(item.productId))}
                onDecrease={() => dispatch(decreaseQuantity(item.productId))}
                onRemove={() => dispatch(removeFromCart(item.productId))}
              />
            );
          })
        )}

        <View style={{ marginTop: 8 }}>
          <GlassCard>
            <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 8 }}>Checkout Summary</Text>
            <Text>Subtotal: ₹ {checkout.subtotal}</Text>
            <Text>Tax: ₹ {checkout.tax}</Text>
            <Text>Delivery: ₹ {checkout.delivery}</Text>
            <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 6 }}>Total: ₹ {checkout.total}</Text>
          </GlassCard>

          <CheckoutCard total={checkout.total} />
        </View>
        </ScrollView>
      </GradientBackground>
    </AnimatedScreen>
  );
}
