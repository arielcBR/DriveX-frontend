import React from "react";
import { Text, View, StyleProp, ViewStyle } from "react-native";

import { colors } from "@/constants/theme";
import { styles } from "./styles";
export interface HoursWorkedProps {
  day: string;
  value: number;
  active: boolean;
}

interface ChartCardProps {
  hoursWorked: HoursWorkedProps[];
}

export function ChartCard({ hoursWorked }: ChartCardProps) {
  const getChartBarStyle = (workDay: HoursWorkedProps): StyleProp<ViewStyle> => {
    return [
      styles.chartBar,
      {
        height: `${workDay.value * 100}%` as any,
        backgroundColor: workDay.active ? colors["green--500"] : colors["blue--300"] + "40",
      },
    ];
  };

  return (
    <View style={styles.chartCard}>
      <View style={styles.chartHeader}>
        <Text style={styles.chartTitle}>Horas trabalhadas</Text>
        <Text style={styles.chartSubtitle}>Esta semana</Text>
      </View>
      <View style={styles.chartContainer}>
        {hoursWorked.map((workDay, index) => {
          const chartBarStyle = getChartBarStyle(workDay);

          return (
            <View key={index} style={styles.chartColumn}>
              <View style={styles.chartBarBackground}>
                <View style={chartBarStyle} />
              </View>
              <Text style={styles.chartDayText}>{workDay.day}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
