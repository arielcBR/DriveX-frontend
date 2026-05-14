import { API_CONFIG } from "@/config/api";

export async function fetchHomeData() {
  const response = await fetch(`${API_CONFIG.baseURL}/home`);
  if (!response.ok) throw new Error("Erro ao buscar dados");
  return response.json();
}