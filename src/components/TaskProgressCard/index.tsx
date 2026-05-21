import { colors } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { ProgressBar } from "../ProgressBar";
import { styles } from "./styles";
import { TaskProgressCardProps } from "./types"

export function TaskProgressCard({ 
  title, 
  subTitle, 
  currentValue, 
  maxValue, 
  unit,
  variant, 
  iconName,
  status 
}: TaskProgressCardProps) {
  
  const statusColors = {
    "em andamento": colors["green--300"],
    "concluída": colors["green--500"],
    "atenção": colors["red--400"],
  };

  const percentage = (currentValue / maxValue) * 100;

  const progressLabel = unit === "R$" 
    ? `R$ ${currentValue} de R$ ${maxValue}`
    : `${currentValue} de ${maxValue} ${unit}`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftInfo}>
          <MaterialIcons name={iconName} size={24} color={colors[variant === "success" ? "green--300" : "blue--200"]} />
          <View style={styles.textGroup}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>

        <View style={styles.statusBadge}>
          <Text style={[styles.statusText, { color: statusColors[status] }]}>
            {status}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <ProgressBar 
          variant={variant} 
          percentage={percentage} 
        />
      </View>
    </View>
  );
}