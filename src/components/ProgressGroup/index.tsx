import { colors } from "@/constants/theme";
import { Text, View } from "react-native";
import { ProgressBar, ProgressVariant } from "../ProgressBar";
import { styles } from "./styles";

interface ProgressGroupProps {
  label: string;
  currentValue: number;
  maxValue: number;
  variant: ProgressVariant;
}

export function ProgressGroup({ label, currentValue, maxValue, variant }: ProgressGroupProps) {

  const percentage = Math.min(Math.max((currentValue / maxValue) * 100, 0), 100);

  const variantColorMap = {
    success: colors["green--500"],
    info: colors["blue--200"],
    danger: colors["red--400"],
    warning: colors["orange--500"],
    purple: colors["purple--400"],
  };

  return (
    <View style={styles.content}>
      <View style={styles.textRow}>
        <Text style={styles.label}>{label}</Text>
        <Text style={[styles.percent, { color: variantColorMap[variant] }]}>
          {Math.round(percentage)}%
        </Text>
      </View>

      <ProgressBar percentage={percentage} variant={variant} />
    </View>
  );
}

