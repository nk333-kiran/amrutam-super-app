import { Product } from "./types";

export function filterProducts(
  products: Product[],
  search: string,
  filter: string | null,
  sort: string | null
) {
  let result = [...products];

  if (search) {
    result = result.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
  }

  if (filter) {
    result = result.filter((product) => product.category === filter);
  }

  if (sort === "PRICE_ASC") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sort === "PRICE_DESC") {
    result.sort((a, b) => b.price - a.price);
  }

  return result;
}
