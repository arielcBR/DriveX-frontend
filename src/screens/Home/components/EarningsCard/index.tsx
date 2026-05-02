import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
export interface EarningsProps {
  gross: string;
  expenses: string;
  net: string;
}

interface EarningsCardProps {
  earnings: EarningsProps;
}

export function EarningsCard({ earnings }: EarningsCardProps) {
  return (
    <View style={styles.mainCard}>
      <View style={styles.mainCardHeader}>
        <Text style={styles.mainCardTitle}>Ganhos brutos</Text>
        <View style={styles.badgeSemanal}>
          <Text style={styles.badgeSemanalText}>Semanal</Text>
        </View>
      </View>
      <Text style={styles.mainCardValue}>R$ {earnings.gross}</Text>

      <View style={styles.mainCardFooter}>
        <View style={styles.mainCardFooterItem}>
          <Text style={styles.mainCardFooterLabel}>Despesas</Text>
          <Text style={styles.mainCardFooterValueRed}>R$ {earnings.expenses}</Text>
        </View>
        <View style={styles.mainCardFooterItem}>
          <Text style={styles.mainCardFooterLabel}>Lucro líquido</Text>
          <Text style={styles.mainCardFooterValueGreen}>R$ {earnings.net}</Text>
        </View>
      </View>
    </View>
  );
}
