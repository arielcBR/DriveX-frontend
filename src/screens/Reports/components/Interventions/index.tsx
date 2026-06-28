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
  if (!data || data.length === 0) {
    return (
      <View style={[styles.container, { alignItems: 'center', padding: 20 }]}>
        <Text style={{ color: '#9ca3af' }}>Nenhuma manutenção registrada.</Text>
      </View>
    );
  }

  const getVariant = (tipo: string): InterventionVariant => {
    switch (tipo) {
      case 'CORRETIVA': return 'danger';
      case 'PREDITIVA': return 'warning';
      case 'PREVENTIVA': default: return 'info';
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <View style={styles.container}>
      {data.map((manutencao) => (
        <InterventionCard
          key={manutencao.idManutencao}
          title={manutencao.descricao}
          subtitle={`Tipo: ${manutencao.tipo}`}
          rightText={formatDate(manutencao.dataManutencao)}
          variant={getVariant(manutencao.tipo)}
          isPill
        />
      ))}
    </View>
  );
}
