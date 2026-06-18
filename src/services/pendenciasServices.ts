import { API_CONFIG } from "@/config/api";

export interface PendenciasResponse {
  kmDesatualizado: boolean;
  manutencaoKmVencido: boolean;
  manutencaoTempoVencido: boolean;
}

export async function fetchPendencias(): Promise<PendenciasResponse> {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/relatorios/pendencias`);
    if (!response.ok) {
      throw new Error("Erro ao buscar pendências");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro no fetchPendencias:", error);
    throw error;
  }
}
