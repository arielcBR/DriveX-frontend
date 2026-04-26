import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { StatCard } from "../StatCard";

interface TransactionValues {
  cash: number;
  transactions: number;
}

interface TransactionOverviewProps {
  income: TransactionValues;
  outcome: TransactionValues;
  onAddIncome: () => void;
  onAddOutcome: () => void;
}

export function TransactionOverview({ 
  income, 
  outcome, 
  onAddIncome, 
  onAddOutcome 
}: TransactionOverviewProps) {
  return (
    <View style={styles.statCardsWrapper}>
      <View style={styles.column}>
        <StatCard 
          type="income" 
          amountOfCash={income.cash} 
          amountOfTransactions={income.transactions}
        />
        <Button 
          textStyle={styles.buttonText}
          title="+ Entrada" 
          onPress={onAddIncome}
        />
      </View>

      <View style={styles.column}>
        <StatCard 
          type="outcome" 
          amountOfCash={outcome.cash} 
          amountOfTransactions={outcome.transactions}
        />
        <Button 
          textStyle={styles.buttonText}
          title="- Saída" 
          variant="danger"
          onPress={onAddOutcome}
        />
      </View>
    </View>
  );
}