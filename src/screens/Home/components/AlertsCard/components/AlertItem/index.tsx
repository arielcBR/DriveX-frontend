import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles"
import { ProcessedAlert } from "../../types";

export function AlertItem ({ item }: { item: ProcessedAlert })  {
  const isHighUrgency = item.urgency === 'high';

  return (
    <View style={styles.alertItem}>
      <View style={styles.alertLeft}>
        <View style={[styles.alertDot, isHighUrgency ? styles.dotHigh : styles.dotMedium]} />
        <Text style={styles.alertItemTitle} numberOfLines={1}>
          {item.description}
        </Text>
      </View>

      {item.statusText ? (
        <View style={[styles.alertBadge, isHighUrgency ? styles.badgeBgHigh : styles.badgeBgMedium]}>
          <Text style={[styles.alertBadgeText, isHighUrgency ? styles.badgeTextHigh : styles.badgeTextMedium]}>
            {item.statusText}
          </Text>
        </View>
      ) : null}
    </View>
  );
};