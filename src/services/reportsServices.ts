import { API_CONFIG } from "@/config/api";
import { File, Paths } from 'expo-file-system';

export interface InformacoesManutencaoVeiculoResponse {
  totalManutencoesPreventivas: number;
  totalManutencoesCorretivas: number;
  totalManutencoesPreditivas: number;
  valorTotalPreventivas: number;
  valorTotalCorretivas: number;
  valorTotalPreditivas: number;
  mediaPrecoManutencao: number;
  valorCustoPorKmRodado: number;
}

export interface PendenciasDoUsuarioResponse {
  kmDesatualizado: boolean;
  manutencaoKmVencido: boolean;
  manutencaoTempoVencido: boolean;
}

export interface ManutencaoResponse {
  idManutencao: number;
  tipo: "PREVENTIVA" | "CORRETIVA" | "PREDITIVA";
  dataManutencao: string;
  descricao: string;
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
}

export async function getInformacoesManutencao(): Promise<InformacoesManutencaoVeiculoResponse> {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/veiculo/informacoes-manutencao`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!response.ok) throw new Error("Erro ao buscar informações de manutenção.");
    return await response.json();
  } catch (error) {
    console.error("Erro no getInformacoesManutencao:", error);
    throw error;
  }
}

export async function getPendenciasUsuario(): Promise<PendenciasDoUsuarioResponse> {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/relatorios/pendencias`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!response.ok) throw new Error("Erro ao buscar pendências do usuário.");
    return await response.json();
  } catch (error) {
    console.error("Erro no getPendenciasUsuario:", error);
    throw error;
  }
}

export async function getManutencoes(page = 0, size = 10): Promise<Page<ManutencaoResponse>> {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/manutencao?page=${page}&size=${size}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!response.ok) throw new Error("Erro ao buscar manutenções.");
    return await response.json();
  } catch (error) {
    console.error("Erro no getManutencoes:", error);
    throw error;
  }
}

export async function downloadRelatorioManutencoes(): Promise<string> {
  try {
    const dataReferencia = new Date().toISOString().split('T')[0];
    const url = `${API_CONFIG.baseURL}/relatorios/exportar/manutencoes?tipoPeriodo=ANO&dataReferencia=${dataReferencia}`;

    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Erro ao exportar relatório.");
    }

    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Data = (reader.result as string).split(',')[1];
          const file = new File(Paths.document, 'relatorio_manutencoes.pdf');
          file.write(base64Data, { encoding: 'base64' });
          resolve(file.uri);
        } catch (e) {
          reject(e);
        }
      };
      reader.onerror = () => reject(new Error("Erro ao ler o arquivo gerado"));
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Erro no downloadRelatorioManutencoes:", error);
    throw error;
  }
}
