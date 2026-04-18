import { View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { StatCard } from "../StatCard";

export function TransactionOverview(){
    return (
        <View style={styles.statCardsWrapper}>
            <View style={styles.column}>
                <StatCard type="income" amountOfCash={1000} amountOfTransactions={5}/>
                <Button 
                    textStyle={styles.buttonText}
                    title="+ Entrada" 
                />
            </View>
            <View style={styles.column}>
                <StatCard type="outcome" amountOfCash={500} amountOfTransactions={5}/>
                <Button 
                    textStyle={styles.buttonText}
                    title="- Saída" 
                    variant="danger"
                />
            </View>
        </View>
    );
}