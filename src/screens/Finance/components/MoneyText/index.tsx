import { Text } from "react-native";
import { styles  } from "./styles";

interface FinancialSummaryCardProps {
    value: number;
}

export function MoneyText({ value }: FinancialSummaryCardProps){
    const formatted = value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      
      const [intPart, decPart] = formatted.split(",");

    return(
        <Text style={styles.amount}>
            <Text style={styles.currency}>R$ </Text>
            <Text style={styles.integer}>{intPart}</Text>
            <Text style={styles.decimal}>,{decPart}</Text>
        </Text>
    )
}