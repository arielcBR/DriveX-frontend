import { useEffect, useState } from "react";
import type { FinanceData, FilterType } from "@/types/finance";
import {
  fetchCategoryExpenses,
  fetchFinancialSummary,
  fetchRecentTransactions,
  fetchWeeklyRevenue,
} from "@/services/financeService";

const FILTER_MAP: Record<string, FilterType> = {
  Hoje: "dia",
  Semana: "semana",
  Mês: "mes",
};

export function useFinance(filter: string) {
  const [data, setData] = useState<FinanceData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const tipo = FILTER_MAP[filter] ?? "dia";

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const [summary, weeklyRevenue, categoryExpenses, transactions] =
    await Promise.all([
        fetchFinancialSummary(tipo),
        fetchWeeklyRevenue(),
        fetchCategoryExpenses(tipo),
        fetchRecentTransactions(),
    ]);

setData({ summary, weeklyRevenue, categoryExpenses, transactions });
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Erro desconhecido"));
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [filter]);

  return { data, loading, error };
}