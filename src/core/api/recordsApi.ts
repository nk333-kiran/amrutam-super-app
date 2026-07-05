import api from "./client";

export async function fetchRecordsData() {
  const response = await api.get("/records");
  return response.data ?? [];
}
