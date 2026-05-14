import React from "react";
import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { colors } from "@/constants/theme";

export function LoadingSpinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors["green--400"]} />
    </View>
  );
}