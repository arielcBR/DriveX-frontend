import { Text, View } from "react-native";
import { styles } from "./styles";
import { MoneyText } from "../MoneyText";
import { FilterType } from "@/components/FinanceHeader";

interface FinancialSummaryCardProps {
   value: number;
   period?: FilterType;
}

export function FinancialSummaryCard({
   value,
   period = "Mês" 
}: FinancialSummaryCardProps) {

   const periodLabel = {
      "Hoje": "do dia",
      "Semana": "da semana",
      "Mês": "do mês"
   };

   return (
      <View style={styles.content}>
         <Text style={styles.label}>
            Ganho líquido {periodLabel[period]}
         </Text>
         <MoneyText value={value} />
      </View>
   );
}