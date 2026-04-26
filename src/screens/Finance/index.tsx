import { Container } from "@/components/Container";
import { styles } from "./styles";
import { View } from "react-native";
import { TransactionOverview } from "./components/TransactionOverview";
import { FinancialSummaryCard } from "./components/FinancialSummaryCard";
import { ProgressGroup } from "@/components/ProgressGroup"
import { WeeklyRevenueChart } from "@/components/WeeklyRevenueChart";

export function Finance(){

    const weeklyRevenueData = [
        { label: "S1", value: 450, max: 1000 },
        { label: "S2", value: 720, max: 1000 },
        { label: "S3", value: 1000, max: 1000, isActive: true }, 
        { label: "S4", value: 380, max: 1000 },
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
            </View>
        </Container>
    );
}