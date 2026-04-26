import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from "@/constants/theme";
import { ProgressBar, ProgressVariant } from '../ProgressBar'; // Ajuste o caminho
import { styles } from './styles';

interface SimpleLimitCardProps {
  label: string;
  currentValue: number;
  maxValue: number;
  iconName: React.ComponentProps<typeof MaterialIcons>['name'];
  variant: ProgressVariant;
  prefix?: string; // Ex: "R$"
}

export function SimpleLimitCard({ 
  label, 
  currentValue, 
  maxValue, 
  iconName, 
  variant,
  prefix = "R$" 
}: SimpleLimitCardProps) {
  
  // Formatação simples de moeda/valor
  const formattedValue = `${prefix} ${currentValue.toLocaleString('pt-BR')}`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContent}>
          <MaterialIcons name={iconName} size={20} color={colors['orange--500']} />
          <Text style={styles.label}>{label}</Text>
        </View>
        
        <Text style={styles.valueText}>{formattedValue}</Text>
      </View>

      <ProgressBar 
        currentValue={currentValue} 
        maxValue={maxValue} 
        variant={variant} 
        showPercent={true} 
      />
    </View>
  );
}