import { Product } from "./types";

const categories = ["Herbs", "Skin Care", "Hair Care", "Supplements", "Wellness"];

export function generateProducts(count = 20000): Product[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `product-${i}`,
    name: `Ayurvedic Product ${i}`,
    category: categories[i % categories.length],
    price: Math.floor(Math.random() * 3000) + 200,
    rating: Number((Math.random() * 2 + 3).toFixed(1)),
    stock: Math.floor(Math.random() * 100),
    image: "https://via.placeholder.com/150",
    description: "Premium Ayurvedic wellness product",
  }));
}
