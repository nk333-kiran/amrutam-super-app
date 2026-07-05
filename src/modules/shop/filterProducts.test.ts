import { filterProducts } from "./filterProducts";
import { Product } from "./types";

const products: Product[] = [
  {
    id: "1",
    name: "Ayurvedic Product 1",
    category: "Herbs",
    price: 500,
    rating: 4.5,
    stock: 10,
    image: "https://via.placeholder.com/150",
    description: "Premium Ayurvedic wellness product",
  },
  {
    id: "2",
    name: "Skin Care Blend",
    category: "Skin Care",
    price: 300,
    rating: 4.2,
    stock: 20,
    image: "https://via.placeholder.com/150",
    description: "Premium Ayurvedic wellness product",
  },
  {
    id: "3",
    name: "Hair Care Oil",
    category: "Hair Care",
    price: 700,
    rating: 4.8,
    stock: 5,
    image: "https://via.placeholder.com/150",
    description: "Premium Ayurvedic wellness product",
  },
];

describe("filterProducts", () => {
  test("searches, filters by category, and sorts by price", () => {
    const result = filterProducts(products, "care", "Skin Care", "PRICE_ASC");

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("2");
  });
});
