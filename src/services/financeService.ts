import { API_CONFIG } from "@/config/api";

import type {
  FilterType,
  FinancialSummary,
  WeeklyRevenue,
  CategoryExpenses,
  RecentTransaction,
} from "@/types/finance";


const BASE = `${API_CONFIG.baseURL}/relatorios`;
const OPTS: RequestInit = { credentials: "include" };

function today(): string {
  return new Date().toISOString().split("T")[0];
}

export async function fetchFinancialSummary(
  tipo: FilterType,
  data?: string
): Promise<FinancialSummary> {
  const params = new URLSearchParams({ tipo });
  if (data) params.set("data", data);

  const res = await fetch(`${BASE}/resumo-financeiro?${params}`, OPTS);
  if (!res.ok) throw new Error("Erro ao buscar resumo financeiro");
  return res.json();
}

export async function fetchWeeklyRevenue(): Promise<WeeklyRevenue> {
  const res = await fetch(`${BASE}/receita-semana`, OPTS);
  if (!res.ok) throw new Error("Erro ao buscar receita semanal");
  return res.json();
}

export async function fetchCategoryExpenses(
  tipo: FilterType,
  dataBase?: string
): Promise<CategoryExpenses> {
  const params = new URLSearchParams({ tipo, dataBase: dataBase ?? today() });
  const res = await fetch(`${BASE}/gastos-categoria-dia?${params}`, OPTS);
  if (!res.ok) throw new Error("Erro ao buscar gastos por categoria");
  return res.json();
}

export async function fetchRecentTransactions(): Promise<RecentTransaction[]> {
  const res = await fetch(`${BASE}/ultimas-transacoes`, OPTS);
  if (!res.ok) throw new Error("Erro ao buscar últimas transações");
  return res.json();
}