export function calculateCheckout(subtotal: number) {
  const tax = subtotal * 0.05;
  const delivery = subtotal > 1000 ? 0 : 80;
  const total = subtotal + tax + delivery;

  return {
    subtotal,
    tax,
    delivery,
    total,
  };
}
