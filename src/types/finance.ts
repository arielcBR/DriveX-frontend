export type FilterType = "dia" | "semana" | "mes";

export interface WeeklyRevenue {
    ganhoBruto: number;
    segunda: number;
    terca: number;
    quarta: number;
    quinta: number;
    sexta: number;
    sabado: number;
    domingo: number;
}

export interface FinancialSummary {
    ganhoBruto: number;
    gastoTotal: number;
    lucroLiquido: number;
}

export interface CategoryExpenses {
    manutencao: number;
    combustivel: number;
    seguro: number;
    impostos: number;
    outros: number;
    multas: number;
}

export interface RecentTransaction {
    descricao: string;
    categoria: string;
    valor: number;
    data: string;
    tipoTransacao: string;
}

export interface FinanceData {
    summary: FinancialSummary;
    weeklyRevenue: WeeklyRevenue;
    categoryExpenses: CategoryExpenses;
    transactions: RecentTransaction[];
}