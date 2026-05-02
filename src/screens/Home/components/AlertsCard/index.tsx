import React from "react";
import { Text, View, StyleProp, ViewStyle, TextStyle } from "react-native";

import { styles } from "./styles";
export interface AlertProps {
  id: string;
  title: string;
  badgeText: string;
  badgeColor: string;
  dotColor: string;
}

interface AlertsCardProps {
  alerts: AlertProps[];
}

export function AlertsCard({ alerts }: AlertsCardProps) {
  const getDotStyle = (color: string): StyleProp<ViewStyle> => {
    return [styles.alertDot, { backgroundColor: color }];
  };

  const getBadgeStyle = (color: string): StyleProp<ViewStyle> => {
    return [styles.alertBadge, { backgroundColor: color + "20" }];
  };

  const getBadgeTextStyle = (color: string): StyleProp<TextStyle> => {
    return [styles.alertBadgeText, { color: color }];
  };

  return (
    <View style={styles.alertsCard}>
      <Text style={styles.alertsTitle}>Alertas de vencimento</Text>
      {alerts.map((alert) => {
        const dotStyle = getDotStyle(alert.dotColor);
        const badgeStyle = getBadgeStyle(alert.badgeColor);
        const badgeTextStyle = getBadgeTextStyle(alert.badgeColor);

        return (
          <View key={alert.id} style={styles.alertItem}>
            <View style={styles.alertLeft}>
              <View style={dotStyle} />
              <Text style={styles.alertItemTitle}>{alert.title}</Text>
            </View>
            <View style={badgeStyle}>
              <Text style={badgeTextStyle}>{alert.badgeText}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
