import { colors } from "@/constants/theme";
import { View } from "react-native";
import { styles } from "./styles";
import { VerticalProgressBarProps } from "./types";

export function VerticalProgressBar({ percentage, isActive = false }: VerticalProgressBarProps) {
  return (
    <View style={styles.track}>
      <View 
        style={[
          styles.fill, 
          { 
            height: `${percentage}%`, 
            backgroundColor: isActive ? colors["green--500"] : "rgba(163, 230, 53, 0.5)" 
          }
        ]} 
      />
    </View>
  );
}

