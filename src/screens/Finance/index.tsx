import { Container } from "@/components/Container";
import { styles } from "./styles";
import { View } from "react-native";
import { TransactionOverview } from "./components/TransactionOverview";
import { FinancialSummaryCard } from "./components/FinancialSummaryCard";

export function Finance(){
    return(
        <Container>
            <View style={styles.content}>
                <FinancialSummaryCard value={1500.56} period="semana"/>
                <TransactionOverview />
            </View>
        </Container>
    );
}