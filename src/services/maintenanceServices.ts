import { API_CONFIG } from "@/config/api";

export async function getVehicleMaintenanceInfo() {
  const response = await fetch(`${API_CONFIG.baseURL}/veiculo/informacoes-manutencao`);
  if (!response.ok) throw new Error("Erro ao buscar informações de manutenção.");
  return response.json();
}

export async function getMaintenancesList(page = 0, size = 10) {
  const response = await fetch(`${API_CONFIG.baseURL}/manutencao?page=${page}&size=${size}`);
  if (!response.ok) throw new Error("Erro ao buscar lista de manutenções.");
  return response.json();
}

export async function createMaintenance(data: { tipo: string; dataManutencao: string; descricao: string; idVeiculo: number; valor: number }) {
  const response = await fetch(`${API_CONFIG.baseURL}/manutencao`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Erro ao criar manutenção.");
}

export async function createDocumentation(data: { tipo: string; valor: number; dataVencimento: string; dataPagamento: string; descricao: string }) {
  const response = await fetch(`${API_CONFIG.baseURL}/custo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Erro ao criar custo/documentação.");
}