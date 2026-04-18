import { Text, View } from "react-native";
import { styles  } from "./styles";
import { MoneyText } from "../MoneyText";

type Period = "dia" | "semana" | "mês";

interface FinancialSummaryCardProps {
   value: number;
   period?: Period;
}

export function FinancialSummaryCard({
   value,
   period = "mês"
}: FinancialSummaryCardProps) {

   const periodLabel = {
      dia: "do dia",
      semana: "da semana",
      mês: "do mês"
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