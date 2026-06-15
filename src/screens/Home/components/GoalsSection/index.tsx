import { colors } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NewGoalModal } from "../NewGoalModal";
import { styles } from "./styles";
import { GoalCardProps, GoalsSectionProps } from "./types";

export function GoalsSection({ goals }: GoalsSectionProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Meta</Text>
        <TouchableOpacity 
          style={styles.addBtn}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.addBtnText}>+ Nova meta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.goalsList}>
        <GoalCard 
          icon="show-chart" 
          title="Receita bruta" 
          subtitle="No mês - Restam 23 dias" 
          progress={68} 
          current="R$ 2.780" 
          target="R$ 3.500"
          color={colors["blue--500"]} 
        />
        <GoalCard 
          icon="speed" 
          title="Limite de gastos" 
          subtitle="Custo total do período" 
          progress={68} 
          current="R$ 500" 
          target="R$ 800"
          color="#FF5B5B" 
        />
        <GoalCard 
          icon="account-balance-wallet" 
          title="Meta de investimento" 
          subtitle="Aporte mensal - Restam 23 dias" 
          progress={24} 
          current="R$ 200" 
          target="R$ 1.000"
          color="#D4FF5B" 
        />
      </View>

      <View style={styles.pagination}>
        <TouchableOpacity>
          <Text style={styles.pageAction}>Anterior</Text>
        </TouchableOpacity>
        <Text style={styles.pageInfo}>1-3 de 6</Text>
        <TouchableOpacity>
          <Text style={styles.pageAction}>Próximo</Text>
        </TouchableOpacity>
      </View>

      <NewGoalModal 
        visible={isModalVisible} 
        onClose={() => setIsModalVisible(false)} 
      />
    </View>
  );
}

function GoalCard({ icon, title, subtitle, progress, current, target, color }: GoalCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <MaterialIcons name={icon} size={20} color={colors.white} />
        <View style={styles.cardTextContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubtitle}>{subtitle}</Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="delete-outline" size={20} color={colors["blue--300"]} />
        </TouchableOpacity>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: `${progress}%`, backgroundColor: color }]} />
        </View>
        <Text style={[styles.progressText, { color }]}>{progress}%</Text>
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.footerText}>{current} de {target}</Text>
      </View>
    </View>
  );
}