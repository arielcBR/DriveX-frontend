import { Container } from "@/components/Container";
import { styles } from "./styles";
import { View } from "react-native";
import { TransactionOverview } from "./components/TransactionOverview";
import { FinancialSummaryCard } from "./components/FinancialSummaryCard";
import { ProgressGroup } from "@/components/ProgressGroup"
import { WeeklyRevenueChart } from "@/components/WeeklyRevenueChart";
import { CategoryExpensesSection } from "@/components/CategoryExpensesSection";
import { Alert } from "@/components/AlertCard";

export function Finance(){

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

    return(
        <Container>
            <View style={styles.content}>
                <FinancialSummaryCard value={1500.56} period="semana"/>
                <ProgressGroup 
                    label="Meta: R$ 3.000"
                    currentValue={2134.80} 
                    maxValue={3000} 
                    variant="info"
                />
                <TransactionOverview />
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
            </View>
        </Container>
    );
}