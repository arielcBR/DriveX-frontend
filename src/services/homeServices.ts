import { API_CONFIG } from "@/config/api";
import { Goal } from "@/types/goals";
import { HomeData } from "@/types/home";
import { getInitials } from "@/utils/stringUtils";

export async function fetchHomeData(): Promise<HomeData> {
    try {
        const [receitaRes, metaRes, custosRes, userRes] = await Promise.all([
            fetch(`${API_CONFIG.baseURL}/relatorios/informacoes-semana`, { credentials: 'include' }),
            fetch(`${API_CONFIG.baseURL}/meta`, { credentials: 'include' }),
            fetch(`${API_CONFIG.baseURL}/custo/em-aberto`, { credentials: 'include' }),
            fetch(`${API_CONFIG.baseURL}/login`, { method: 'POST', credentials: 'include' }),
        ]);

        if (!receitaRes.ok || !metaRes.ok || !custosRes.ok || !userRes.ok) {
            throw new Error("Erro ao buscar dados do dashboard");
        }

        const [receita, meta, custos, userProfile] = await Promise.all([
            receitaRes.json(),
            metaRes.json(),
            custosRes.json(),
            userRes.json(),
        ]);

        const userName = userProfile.nome || "Usuário";

        return {
            earnings: {
                gross: receita.ganhoBruto || 0,
                net: receita.lucroLiquido || 0,
                expenses: receita.despesaTotal || 0,
            },
            alerts: custos.content || [],
            goals: (meta.content || []) as Goal[],
            user: {
                id: userProfile.idUsuario || 1, 
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

export async function createMeta(data: { titulo: string, formato: string, valor: number, tipo: string }): Promise<void> {
    try {
        const response = await fetch(`${API_CONFIG.baseURL}/meta`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error("Erro ao criar meta");
        }
    } catch (error) {
        console.error("Erro no createMeta:", error);
        throw error;
    }
}

export async function deleteMeta(id: number): Promise<void> {
    try {
        const response = await fetch(`${API_CONFIG.baseURL}/meta/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error("Erro ao deletar meta");
        }
    } catch (error) {
        console.error("Erro no deleteMeta:", error);
        throw error;
    }
}
