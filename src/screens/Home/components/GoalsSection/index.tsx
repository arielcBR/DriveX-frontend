import { colors } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import { NewGoalModal } from "../NewGoalModal";
import { styles } from "./styles";
import { GoalCardProps, GoalsSectionProps } from "./types";
import { deleteMeta } from "@/services/homeServices";

export function GoalsSection({ goals, onRefresh }: GoalsSectionProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(goals.length / itemsPerPage);
  const paginatedGoals = goals.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleDelete = (id: number) => {
    if (!id) return;
    Alert.alert(
      "Excluir Meta",
      "Tem certeza que deseja excluir esta meta?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Excluir", 
          style: "destructive",
          onPress: async () => {
            try {
              await deleteMeta(id);
              onRefresh?.();
            } catch (error) {
              Alert.alert("Erro", "Não foi possível excluir a meta.");
            }
          }
        }
      ]
    );
  };

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
        {paginatedGoals.length > 0 ? (
          paginatedGoals.map((goal: any, index: number) => {
            const isIncome = goal.tipo === "RECEITA";
            const formatoCapitalized = goal.formato 
              ? goal.formato.charAt(0).toUpperCase() + goal.formato.slice(1).toLowerCase() 
              : "Não definido";
            const subtitle = `Formato: ${formatoCapitalized}`;
            
            const formatCurrency = (val: number) => `R$ ${val.toFixed(2).replace('.', ',')}`;

            return (
              <GoalCard 
                key={goal.idMeta || index}
                icon={isIncome ? "trending-up" : "trending-down"} 
                title={goal.titulo} 
                subtitle={subtitle} 
                progress={goal.percentualAtingido || 0} 
                current={formatCurrency(goal.valorAtual || 0)} 
                target={formatCurrency(goal.valorDesejado || 0)}
                color={isIncome ? "#D4FF5B" : "#FF5B5B"} 
                onDelete={() => handleDelete(goal.idMeta)}
              />
            );
          })
        ) : (
          <Text style={{ color: colors.white, textAlign: 'center', marginTop: 10 }}>Nenhuma meta encontrada.</Text>
        )}
      </View>

      {goals.length > 0 && (
        <View style={styles.pagination}>
          <TouchableOpacity onPress={handlePrev} disabled={currentPage === 1}>
            <Text style={[styles.pageAction, currentPage === 1 && { opacity: 0.5 }]}>Anterior</Text>
          </TouchableOpacity>
          <Text style={styles.pageInfo}>
            {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, goals.length)} de ${goals.length}`}
          </Text>
          <TouchableOpacity onPress={handleNext} disabled={currentPage === totalPages}>
            <Text style={[styles.pageAction, currentPage === totalPages && { opacity: 0.5 }]}>Próximo</Text>
          </TouchableOpacity>
        </View>
      )}

      <NewGoalModal 
        visible={isModalVisible} 
        onClose={() => setIsModalVisible(false)} 
        onSuccess={onRefresh}
      />
    </View>
  );
}

function GoalCard({ icon, title, subtitle, progress, current, target, color, onDelete }: GoalCardProps) {
  const displayProgress = Math.round(progress);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <MaterialIcons name={icon} size={20} color={color} />
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <TouchableOpacity onPress={onDelete}>
          <MaterialIcons name="delete-outline" size={20} color={colors["blue--300"]} />
        </TouchableOpacity>
      </View>

      <View style={{ gap: 8, marginTop: 4 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Text style={styles.cardSubtitle}>{subtitle}</Text>
          <Text style={[styles.progressText, { color }]}>{displayProgress}%</Text>
        </View>

        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: `${Math.min(displayProgress, 100)}%`, backgroundColor: color }]} />
        </View>
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.footerText}>{current} de {target}</Text>
      </View>
    </View>
  );
}