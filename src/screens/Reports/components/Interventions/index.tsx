import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { InterventionsListProps, InterventionVariant } from "./types";

interface InterventionCardProps {
  title: string;
  subtitle: string;
  rightText: string;
  variant: InterventionVariant;
  isPill?: boolean;
}

const variantStyles = {
  danger: {
    borderColor: "#f87171",
    backgroundColor: "rgba(248, 113, 113, 0.05)",
    textColor: "#f87171",
    pillBg: "rgba(248, 113, 113, 0.2)",
  },
  warning: {
    borderColor: "#fbbf24",
    backgroundColor: "rgba(251, 191, 36, 0.05)",
    textColor: "#fbbf24",
    pillBg: "rgba(251, 191, 36, 0.2)",
  },
  info: {
    borderColor: "#60a5fa",
    backgroundColor: "rgba(96, 165, 250, 0.05)",
    textColor: "#60a5fa",
    pillBg: "rgba(96, 165, 250, 0.2)",
  },
};

function InterventionCard({ title, subtitle, rightText, variant, isPill }: InterventionCardProps) {
  const vStyle = variantStyles[variant];

  return (
    <View style={[styles.card, { borderColor: vStyle.borderColor, backgroundColor: vStyle.backgroundColor }]}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {isPill ? (
        <View style={[styles.pill, { backgroundColor: vStyle.pillBg }]}>
          <Text style={[styles.pillText, { color: vStyle.textColor }]}>{rightText}</Text>
        </View>
      ) : (
        <Text style={[styles.rightText, { color: vStyle.textColor }]}>{rightText}</Text>
      )}
    </View>
  );
}

export function InterventionsList({ data }: InterventionsListProps) {
  return (
    <View style={styles.container}>
      <InterventionCard
        title="Revisão de freios"
        subtitle="Preventiva - Mecânica"
        rightText="Vencido"
        variant="danger"
        isPill
      />
      <InterventionCard
        title="Troca de correia dentada"
        subtitle="Preventiva - Mecânica - 90.000 km"
        rightText="2.580 km"
        variant="warning"
      />
      <InterventionCard
        title="Higienização interna"
        subtitle="Preventiva - Estética - 88.000 km"
        rightText="580 km"
        variant="info"
      />
    </View>
  );
}
