import { API_CONFIG } from "@/config/api";
import { HomeData } from "@/types/home";

function getInitials (name: string): string  {
  if (!name || name.trim() === "") return "";
  
  const nameParts = name.trim().split(/\s+/);
  
  if (nameParts.length === 1) 
    return nameParts[0].charAt(0).toUpperCase();
  
  const firstLetter = nameParts[0].charAt(0);
  const lastLetter = nameParts[nameParts.length - 1].charAt(0);
  
  return (firstLetter + lastLetter).toUpperCase();
};

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

    // Simulando o dado que viria do backend ou do seu Contexto de Autenticação
    const userName = "Jorgito Andes";

    return {
      earnings: receita, 
      alerts: custos,
      user: {
        id: idUsuario,
        name: userName, 
        initials: getInitials(userName),
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