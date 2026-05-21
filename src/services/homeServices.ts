import { API_CONFIG } from "@/config/api";
import { HomeData } from "@/types/home";

export async function fetchHomeData(idUsuario: number): Promise<HomeData> {
  try {
    const [receitaRes, metaRes, custosRes] = await Promise.all([
      fetch(`${API_CONFIG.baseURL}/relatorios/receita-semana/${idUsuario}`),
      fetch(`${API_CONFIG.baseURL}/meta/${idUsuario}`),
      fetch(`${API_CONFIG.baseURL}/custo/${idUsuario}/em-aberto`),
    ]);

    if (!receitaRes.ok || !metaRes.ok || !custosRes.ok) {
      throw new Error("Erro ao buscar dados do dashboard");
    }

    const [receita, meta, custos] = await Promise.all([
      receitaRes.json(),
      metaRes.json(),
      custosRes.json(),
    ]);

    // Mapeamento correto para a interface HomeData
    return {
      // Mapeia os dados das requisições para as chaves esperadas pelos seus Cards
      earnings: receita, 
      alerts: custos,

      // Mocks temporários para satisfazer a tipagem do HomeData 
      // e renderizar o restante da tela sem quebrar
      user: {
        id: idUsuario,
        name: "Ariel", 
        initials: "AC",
      },
      stats: {
        valuePerKm: "0,00",
        profitPerHour: "0,00",
        kmDriven: "0",
      },
      hoursWorked: [
        { day: "Seg", value: 0, active: false },
        { day: "Ter", value: 0, active: false },
        { day: "Qua", value: 0, active: true },
        { day: "Qui", value: 0, active: false },
        { day: "Sex", value: 0, active: false },
      ],
    };
  } catch (error) {
    console.error("Erro no fetchHomeData:", error);
    throw error;
  }
}