import { colors } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { ProgressBar } from "../ProgressBar"; 
import { styles } from "./styles";
import { SimpleLimitCardProps } from "./types";

export function SimpleLimitCard({ 
  label, 
  currentValue, 
  maxValue, 
  iconName, 
  variant,
  prefix = "R$" 
}: SimpleLimitCardProps) {
  
  const percentage = (currentValue / maxValue) * 100;
  const formattedValue = `${prefix} ${currentValue.toLocaleString("pt-BR")}`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContent}>
          <MaterialIcons name={iconName} size={20} color={colors["orange--500"]} />
          <Text style={styles.label}>{label}</Text>
        </View>
        
        <Text style={styles.valueText}>{formattedValue}</Text>
      </View>

      <ProgressBar 
        variant={variant} 
        percentage={percentage} 
      />
    </View>
  );
}