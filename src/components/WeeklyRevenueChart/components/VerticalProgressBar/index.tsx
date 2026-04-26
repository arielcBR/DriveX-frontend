import { View } from 'react-native';
import { colors } from "@/constants/theme";
import { styles } from './styles';

interface VerticalProgressBarProps {
  percentage: number;
  isActive?: boolean;
}

export function VerticalProgressBar({ percentage, isActive = false }: VerticalProgressBarProps) {
  return (
    <View style={styles.track}>
      <View 
        style={[
          styles.fill, 
          { 
            height: `${percentage}%`, 
            // S3 no print é mais claro/brilhante
            backgroundColor: isActive ? colors['green--500'] : 'rgba(163, 230, 53, 0.5)' 
          }
        ]} 
      />
    </View>
  );
}

