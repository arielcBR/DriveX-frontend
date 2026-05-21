import React from "react";
import { Text, View } from "react-native";
import { ProgressBar } from "../ProgressBar";
import { styles } from "./styles";
import { SummaryGoalCardProps } from "./types";

export function SummaryGoalCard({ 
  currentValue, 
  maxValue, 
  period, 
  daysRemaining 
}: SummaryGoalCardProps) {
  const percentage = (currentValue / maxValue) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.progressInfo}>
          <Text style={styles.progressTitle}>Progresso geral</Text>
          <Text style={styles.progressValue}>{percentage.toFixed(2)}%</Text>
          <Text style={styles.subText}>metas conquistadas</Text>
        </View>

        <View style={styles.periodInfo}>
          <Text style={styles.periodLabel}>Período</Text>
          <Text style={styles.periodDate}>{period}</Text>
          <Text style={styles.daysLeft}>{daysRemaining} dias restantes</Text>
        </View>
      </View>

      <View style={styles.progressBarContainer}>
        <ProgressBar 
          variant="success" 
          percentage={percentage} 
        />
      </View>
    </View>
  );
}