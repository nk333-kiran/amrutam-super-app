import api from "./client";

export async function fetchShopData() {
  const response = await api.get("/products");
  return response.data ?? [];
}
