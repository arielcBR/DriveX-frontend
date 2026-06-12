import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "@/constants/theme";
import { SummaryBoxesProps } from "./types";

export function SummaryBoxes({ data }: SummaryBoxesProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { borderColor: "#4ade80", backgroundColor: "rgba(74, 222, 128, 0.05)" }]}>
        <Text style={[styles.value, { color: "#4ade80" }]}>8</Text>
        <Text style={[styles.label, { color: "#4ade80" }]}>Preventivas{"\n"}realizadas</Text>
      </View>

      <View style={[styles.box, { borderColor: "#f87171", backgroundColor: "rgba(248, 113, 113, 0.05)" }]}>
        <Text style={[styles.value, { color: "#f87171" }]}>8</Text>
        <Text style={[styles.label, { color: "#f87171" }]}>Corretivas no{"\n"}ano</Text>
      </View>

      <View style={[styles.box, { borderColor: "#60a5fa", backgroundColor: "rgba(96, 165, 250, 0.05)" }]}>
        <Text style={[styles.value, { color: "#60a5fa" }]}>R$ 430</Text>
        <Text style={[styles.label, { color: "#60a5fa" }]}>Preventivas{"\n"}realizadas</Text>
      </View>
    </View>
  );
}
