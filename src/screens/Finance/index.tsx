import { Container } from "@/components/Container";
import { styles } from "./styles";
import { View } from "react-native";
import { FinancialSummaryCard } from "./components/FinancialSummaryCard";
import { ProgressGroup } from "@/components/ProgressGroup"
import { TransactionOverview } from "./components/TransactionOverview";
import { WeeklyRevenueChart } from "@/components/WeeklyRevenueChart";
import { CategoryExpensesSection } from "@/components/CategoryExpensesSection";
import { Alert } from "@/components/AlertCard";
import { Transaction, RecentTransactions } from "@/components/RecentTransactions";
import { FilterType, FinanceHeader } from "@/components/FinanceHeader";
import { useState } from "react";

export function Finance(){

    const [filter, setFilter] = useState<FilterType>('Hoje');

    const dataMock = {
        'Hoje': {
            income: { cash: 215.80, transactions: 3 },
            outcome: { cash: 85.00, transactions: 1 },
            meta: 300,
            currentMeta: 215.80
        },
        'Semana': {
            income: { cash: 1540.00, transactions: 24 },
            outcome: { cash: 620.00, transactions: 8 },
            meta: 1500,
            currentMeta: 1540
        },
        'Mês': {
            income: { cash: 5234.80, transactions: 89 },
            outcome: { cash: 3100.00, transactions: 34 },
            meta: 3000,
            currentMeta: 2134.80
        }
    };

    const displayData = dataMock[filter];

    const weeklyRevenueData = [
        { label: "S1", value: 450, max: 1000 },
        { label: "S2", value: 720, max: 1000 },
        { label: "S3", value: 1000, max: 1000, isActive: true }, 
        { label: "S4", value: 380, max: 1000 },
    ];

    const categories = [
        { 
          id: "1", label: "Combustível", amount: 280, maxValue: 500, 
          iconName: "local-gas-station", iconBgColor: "#B45309", variant: "warning" 
        },
        { 
          id: "2", label: "Manutenção", amount: 200, maxValue: 800, 
          iconName: "directions-car", iconBgColor: "#1E3A8A", variant: "info" 
        },
        { 
          id: "3", label: "IPVA/ Licen.", amount: 300, maxValue: 1000, 
          iconName: "description", iconBgColor: "#F3F4F6", variant: "white" 
        },
      ];

      const transactions: Transaction[] = [
        {
          id: '1',
          description: 'Corrida - Zona Sul',
          date: 'Hoje, 14:32',
          amount: 15.85,
          type: 'income',
          iconName: 'check',
          iconColor: '#A3E635'
        },
        {
          id: '2',
          description: 'Abastecimento',
          date: 'Hoje, 09:07',
          amount: 85.00,
          type: 'outcome',
          iconName: 'local-gas-station',
          iconColor: '#EF4444'
        },
        {
          id: '3',
          description: 'Corrida - Centro',
          date: 'Hoje, 07:07',
          amount: 28.85,
          type: 'income',
          iconName: 'check',
          iconColor: '#A3E635'
        }
      ];

    return(
        <Container>
            <View style={styles.content}>
            <FinanceHeader selectedFilter={filter} onFilterChange={setFilter} />
                <FinancialSummaryCard 
                    value={displayData.income.cash - displayData.outcome.cash} 
                    period={filter} 
                />
                <ProgressGroup 
                    label={`Meta: R$ ${displayData.meta.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                    currentValue={displayData.currentMeta} 
                    maxValue={displayData.meta} 
                    variant="info"
                />
                <TransactionOverview 
                    income={displayData.income}
                    outcome={displayData.outcome}
                    onAddIncome={() => {}}
                    onAddOutcome={() => {}}
                />
                <WeeklyRevenueChart 
                    title="Receita semanal"
                    period={new Date(2024, 3)} 
                    data={weeklyRevenueData}
                />
                <CategoryExpensesSection data={categories} />
                <Alert
                    title="Alertas"
                    iconName="warning"
                    data={[
                        { id: "1", label: "Pagamento vencido", value: "R$ 150,00", status: "danger" },
                        { id: "2", label: "Pagamento a vencer", value: "R$ 200,00", status: "warning" }
                    ]}
                />
                <RecentTransactions data={transactions} onViewAll={() => console.log('Ver tudo')} />
            </View>
        </Container>
    );
}