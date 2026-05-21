import React from "react";
import { Text, View } from "react-native";
import { VerticalProgressBar } from "./components/VerticalProgressBar";
import { styles } from "./styles";
import { WeeklyRevenueChartProps } from "./types";

export function WeeklyRevenueChart({ title, period, data }: WeeklyRevenueChartProps) {
  
  const formatPeriod = (date: Date) => {
    const formatter = new Intl.DateTimeFormat("pt-BR", { 
      month: "long", 
      year: "numeric" 
    });
    
    const formatted = formatter.format(date);
    
    return formatted
      .replace(" de ", " ")
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.period}>{formatPeriod(period)}</Text>
      </View>

      <View style={styles.chartArea}>
        {data.map((item, index) => {
          const percentage = Math.min(Math.max((item.value / item.max) * 100, 0), 100);
          
          return (
            <View key={index} style={styles.barGroup}>
              <VerticalProgressBar 
                percentage={percentage} 
                isActive={item.isActive} 
              />
              <Text style={[
                styles.barLabel, 
                item.isActive && styles.labelActive
              ]}>
                {item.label}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}