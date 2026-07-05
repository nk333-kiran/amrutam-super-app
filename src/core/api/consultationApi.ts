import api from "./client";

export async function fetchConsultationData() {
  const response = await api.get("/consultations");
  return response.data ?? [];
}
