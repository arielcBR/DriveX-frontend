import React from "react";
import { Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StatsContainerProps } from "./types";
import { colors, sizes } from "@/constants/theme";
import { styles } from "./styles";

export function StatsContainer({ stats }: StatsContainerProps) {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.smallCard}>
        <MaterialIcons name="attach-money" size={sizes.icon_small} color={colors["green--500"]} style={styles.smallCardIcon} />
        <Text style={styles.smallCardValue}>R$ {stats.valuePerKm}</Text>
        <Text style={styles.smallCardLabel}>Valor/km</Text>
      </View>
      <View style={styles.smallCard}>
        <MaterialIcons name="access-time" size={sizes.icon_small} color={colors["orange--500"]} style={styles.smallCardIcon} />
        <Text style={styles.smallCardValue}>R$ {stats.profitPerHour}</Text>
        <Text style={styles.smallCardLabel}>Lucro/hora</Text>
      </View>
      <View style={styles.smallCard}>
        <MaterialIcons name="directions-car" size={sizes.icon_small} color={colors["purple--400"]} style={styles.smallCardIcon} />
        <Text style={styles.smallCardValue}>{stats.kmDriven}</Text>
        <Text style={styles.smallCardLabel}>Km rodados</Text>
      </View>
    </View>
  );
}
