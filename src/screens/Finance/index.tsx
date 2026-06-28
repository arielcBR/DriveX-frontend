import { Container } from "@/components/Container";
import { styles } from "./styles";
import { View, ActivityIndicator, Text } from "react-native";
import { FinancialSummaryCard } from "./components/FinancialSummaryCard";
import { ProgressGroup } from "@/components/ProgressGroup";
import { TransactionOverview } from "./components/TransactionOverview";
import { WeeklyRevenueChart } from "@/components/WeeklyRevenueChart";
import { CategoryExpensesSection } from "@/components/CategoryExpensesSection";
import { RecentTransactions } from "@/components/RecentTransactions";
import { FinanceHeader } from "@/components/FinanceHeader";
import type { MaterialIconName } from "@/types/icons";
import { useFinance } from "@/hooks/useFinance";
import { useState } from "react";

type FilterType = "Hoje" | "Semana" | "Mês";

export function Finance() {
    const [filter, setFilter] = useState<FilterType>("Hoje");
    const { data, loading } = useFinance(filter);

    const weeklyRevenueData = [
        { label: "Seg", value: data?.weeklyRevenue.segunda ?? 0, max: data?.weeklyRevenue.ganhoBruto || 1 },
        { label: "Ter", value: data?.weeklyRevenue.terca   ?? 0, max: data?.weeklyRevenue.ganhoBruto || 1 },
        { label: "Qua", value: data?.weeklyRevenue.quarta  ?? 0, max: data?.weeklyRevenue.ganhoBruto || 1, isActive: true },
        { label: "Qui", value: data?.weeklyRevenue.quinta  ?? 0, max: data?.weeklyRevenue.ganhoBruto || 1 },
        { label: "Sex", value: data?.weeklyRevenue.sexta   ?? 0, max: data?.weeklyRevenue.ganhoBruto || 1 },
        { label: "Sáb", value: data?.weeklyRevenue.sabado  ?? 0, max: data?.weeklyRevenue.ganhoBruto || 1 },
        { label: "Dom", value: data?.weeklyRevenue.domingo ?? 0, max: data?.weeklyRevenue.ganhoBruto || 1 },
    ];

    const categories = [
        { id: "1", label: "Combustível", amount: data?.categoryExpenses.combustivel ?? 0, maxValue: data?.categoryExpenses.combustivel || 1, iconName: "local-gas-station", iconBgColor: "#B45309", variant: "warning" },
        { id: "2", label: "Manutenção",  amount: data?.categoryExpenses.manutencao  ?? 0, maxValue: data?.categoryExpenses.manutencao  || 1, iconName: "directions-car",    iconBgColor: "#1E3A8A", variant: "info" },
        { id: "3", label: "Seguro",      amount: data?.categoryExpenses.seguro      ?? 0, maxValue: data?.categoryExpenses.seguro      || 1, iconName: "security",          iconBgColor: "#166534", variant: "info" },
        { id: "4", label: "Impostos",    amount: data?.categoryExpenses.impostos    ?? 0, maxValue: data?.categoryExpenses.impostos    || 1, iconName: "description",       iconBgColor: "#F3F4F6", variant: "white" },
        { id: "5", label: "Multas",      amount: data?.categoryExpenses.multas      ?? 0, maxValue: data?.categoryExpenses.multas      || 1, iconName: "gavel",             iconBgColor: "#7F1D1D", variant: "warning" },
        { id: "6", label: "Outros",      amount: data?.categoryExpenses.outros      ?? 0, maxValue: data?.categoryExpenses.outros      || 1, iconName: "more-horiz",        iconBgColor: "#374151", variant: "info" },
    ];

    const transactions = (data?.transactions ?? []).map((t, i) => ({
        id: String(i),
        description: t.descricao,
        date: t.data,
        amount: t.valor,
        type: t.tipoTransacao === "receita" ? "income" : "outcome" as "income" | "outcome",
        iconName: (t.tipoTransacao === "receita" ? "check" : "local-gas-station") as MaterialIconName,
        iconColor: t.tipoTransacao === "receita" ? "#A3E635" : "#EF4444",
    }));

    return (
        <Container>
            <View style={styles.content}>
                <FinanceHeader selectedFilter={filter} onFilterChange={setFilter} />

                <FinancialSummaryCard
                    value={data?.summary.lucroLiquido ?? 0}
                    period={filter}
                />
                <ProgressGroup
                    label={`Meta: R$ ${(data?.summary.ganhoBruto ?? 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                    currentValue={data?.summary.lucroLiquido ?? 0}
                    maxValue={data?.summary.ganhoBruto || 1}
                    variant="info"
                />
                <TransactionOverview
                    income={{ cash: data?.summary.ganhoBruto ?? 0, transactions: 0 }}
                    outcome={{ cash: data?.summary.gastoTotal ?? 0, transactions: 0 }}
                    onAddIncome={() => {}}
                    onAddOutcome={() => {}}
                />

                {loading
                    ? <ActivityIndicator />
                    : <WeeklyRevenueChart
                        title="Receita semanal"
                        period={new Date()}
                        data={weeklyRevenueData}
                    />
                }

                <CategoryExpensesSection data={categories} />

                {transactions.length > 0 && (
                    <RecentTransactions data={transactions} onViewAll={() => {}} />
                )}
            </View>
        </Container>
    );
}