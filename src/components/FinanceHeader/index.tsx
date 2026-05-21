import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { FilterType, FinanceHeaderProps } from './types';


export function FinanceHeader({ selectedFilter, onFilterChange }: FinanceHeaderProps) {
  const filters: FilterType[] = ['Hoje', 'Semana', 'Mês'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finanças</Text>
      
      <View style={styles.filterContainer}>
        {filters.map((filter) => {
          const isActive = selectedFilter === filter;
          
          return (
            <TouchableOpacity
              key={filter}
              onPress={() => onFilterChange(filter)}
              activeOpacity={0.7}
              style={[
                styles.filterButton,
                isActive ? styles.buttonActive : styles.buttonInactive
              ]}
            >
              <Text style={[
                styles.filterText,
                isActive ? styles.textActive : styles.textInactive
              ]}>
                {filter}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}