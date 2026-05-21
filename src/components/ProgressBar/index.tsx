import { colors } from "@/constants/theme";
import { View } from "react-native";
import { styles } from "./styles";
import { ProgressBarProps } from "@/types/progress";

export function ProgressBar({ percentage, variant }: ProgressBarProps) {

  const variantColorMap = {
    success: colors["green--500"],
    info: colors["blue--200"],
    danger: colors["red--400"],
    warning: colors["orange--500"],
    purple: colors["purple--400"],
  };

  const activeColor = variantColorMap[variant];

  return (
    <View style={styles.track}>
      <View 
        style={[
          styles.fill, 
          { width: `${percentage}%`, backgroundColor: activeColor }
        ]} 
      />
    </View>
  );
}

