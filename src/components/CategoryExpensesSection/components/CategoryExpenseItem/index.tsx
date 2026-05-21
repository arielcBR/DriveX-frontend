import { ProgressBar } from "@/components/ProgressBar";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { CategoryExpenseItemProps } from "./types";

export function CategoryExpenseItem({ 
  label, amount, currentValue, maxValue, iconName, iconBgColor, variant 
}: CategoryExpenseItemProps) {
  const percentage = Math.min(Math.max((currentValue / maxValue) * 100, 0), 100);

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.leftGroup}>
          <View style={[styles.iconBox, { backgroundColor: iconBgColor }]}>
            <MaterialIcons name={iconName} size={18} color="#000" />
          </View>
          <Text style={styles.label}>{label}</Text>
        </View>
        <Text style={styles.amount}>R$ {amount}</Text>
      </View>

      <ProgressBar percentage={percentage} variant={variant} />
    </View>
  );
}