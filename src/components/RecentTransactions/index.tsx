import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { RecentTransactionsProps } from './types';

export function RecentTransactions({ data, onViewAll }: RecentTransactionsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>últimas transações</Text>
        
        <TouchableOpacity onPress={onViewAll} activeOpacity={0.7}>
          <Text style={styles.viewAll}>ver tudo</Text>
        </TouchableOpacity>
      </View>

      <View>
        {data.map((item) => (
          <View key={item.id} style={styles.transactionItem}>
            <View style={[styles.iconBox, { backgroundColor: item.iconColor + '20' }]}>
              <MaterialIcons 
                name={item.iconName} 
                size={24} 
                color={item.iconColor} 
              />
            </View>

            <View style={styles.details}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>

            <Text style={[
              styles.amount, 
              item.type === 'income' ? styles.income : styles.outcome
            ]}>
              {item.type === 'income' ? '+' : '-'}
              R$ {item.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}