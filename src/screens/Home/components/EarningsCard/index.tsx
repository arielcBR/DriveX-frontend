import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { EarningsCardProps } from "./types";


const formatCurrency = (value: number | string | undefined) => {
  if (value === undefined || value === null) return "0,00";
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numValue)) return "0,00";
  
  return numValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export function EarningsCard({ earnings }: EarningsCardProps) {
  const safeEarnings = earnings || {};

  return (
    <View style={styles.mainCard}>
      <View style={styles.mainCardHeader}>
        <Text style={styles.mainCardTitle}>Ganhos brutos</Text>
        <View style={styles.badgeSemanal}>
          <Text style={styles.badgeSemanalText}>Semanal</Text>
        </View>
      </View>
      
      {/* Aplicando a formatação segura */}
      <Text style={styles.mainCardValue}>R$ {formatCurrency(safeEarnings.gross)}</Text>

      <View style={styles.mainCardFooter}>
        <View style={styles.mainCardFooterItem}>
          <Text style={styles.mainCardFooterLabel}>Despesas</Text>
          <Text style={styles.mainCardFooterValueRed}>R$ {formatCurrency(safeEarnings.expenses)}</Text>
        </View>
        <View style={styles.mainCardFooterItem}>
          <Text style={styles.mainCardFooterLabel}>Lucro líquido</Text>
          <Text style={styles.mainCardFooterValueGreen}>R$ {formatCurrency(safeEarnings.net)}</Text>
        </View>
      </View>
    </View>
  );
}