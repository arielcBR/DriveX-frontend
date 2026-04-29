import { styles } from "./styles";
import { Text, View } from "react-native";


type TransactionType = "income" | "outcome";
    
interface StatCardProps {
    type: TransactionType;
    amountOfCash: number;
    amountOfTransactions?: number;
}


export function StatCard({ type, amountOfCash, amountOfTransactions }: StatCardProps){
    const amountFormated = amountOfCash.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumSignificantDigits: 2
    });

    return(
        <View style={styles.content}>
            <View style={styles.headerWrapper}>
                <View style={[styles.dot, type == "income" ? styles.greenBg : styles.redBg]}/>
                <Text style={styles.headerText}>{type == "income" ? "Income" : "Outcome"}</Text>
            </View>
            <Text style={[styles.amount, type == "income" ? styles.greenColor : styles.redColor]}>{amountFormated}</Text>
            <Text style={styles.footerText}>{amountOfTransactions} transactions</Text>
        </View>
    )
}