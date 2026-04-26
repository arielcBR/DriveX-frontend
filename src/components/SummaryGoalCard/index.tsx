import React from "react";
import { Text, View } from "react-native";
import { ProgressBar } from "../ProgressBar";
import { styles } from "./styles";

interface SummaryGoalCardProps {
  currentValue: number;
  maxValue: number;
  period: string; // Ex: "Abr 2026"
  daysRemaining: number;
}

export function SummaryGoalCard({ 
  currentValue, 
  maxValue, 
  period, 
  daysRemaining 
}: SummaryGoalCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.progressInfo}>
          <Text style={styles.progressTitle}>Progresso geral</Text>
          <Text style={styles.progressValue}>{currentValue}/{maxValue}</Text>
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
          currentValue={currentValue} 
          maxValue={maxValue} 
          variant="success" 
          showPercent={false} 
        />
      </View>
    </View>
  );
}