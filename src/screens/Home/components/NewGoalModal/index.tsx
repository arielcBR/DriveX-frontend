import { colors } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { NewGoalModalProps } from "./types";

export function NewGoalModal({ visible, onClose }: NewGoalModalProps) {
  const [goalType, setGoalType] = useState<"finance" | "cost">("finance");
  const [period, setPeriod] = useState<"daily" | "weekly" | "monthly">("daily");

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Nova meta</Text>
            <TouchableOpacity style={styles.closeBtnIcon} onPress={onClose}>
              <MaterialIcons name="close" size={16} color={colors["blue--300"]} />
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Título da meta</Text>
            <View style={styles.textInputContainer}>
              <MaterialIcons name="edit" size={16} color={colors["blue--300"]} />
              <TextInput
                style={styles.textInput}
                placeholder="Ex: Meta de investimento"
                placeholderTextColor={colors["blue--300"]}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tipo de meta</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.typeBtn, goalType === "finance" && styles.typeBtnFinanceActive]}
                onPress={() => setGoalType("finance")}
              >
                <MaterialIcons name="trending-up" size={16} color={colors["green--500"]} />
                <View>
                  <Text style={styles.typeBtnTitle}>Financeira</Text>
                  <Text style={styles.typeBtnSubtitle}>Receita</Text>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.typeBtn, goalType === "cost" && styles.typeBtnCostActive]}
                onPress={() => setGoalType("cost")}
              >
                <MaterialIcons name="trending-down" size={16} color="#FF5B5B" />
                <View>
                  <Text style={styles.typeBtnTitle}>Custo</Text>
                  <Text style={styles.typeBtnSubtitle}>Limite de gasto</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Período</Text>
            <View style={styles.periodContainer}>
              <TouchableOpacity
                style={[styles.periodBtn, period === "daily" && styles.periodBtnActive]}
                onPress={() => setPeriod("daily")}
              >
                <Text style={[styles.periodText, period === "daily" && styles.periodTextActive]}>Diário</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.periodBtn, period === "weekly" && styles.periodBtnActive]}
                onPress={() => setPeriod("weekly")}
              >
                <Text style={[styles.periodText, period === "weekly" && styles.periodTextActive]}>Semanal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.periodBtn, period === "monthly" && styles.periodBtnActive]}
                onPress={() => setPeriod("monthly")}
              >
                <Text style={[styles.periodText, period === "monthly" && styles.periodTextActive]}>Mensal</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dateInfoContainer}>
            <View style={styles.dateBox}>
              <Text style={styles.dateLabel}>Início</Text>
              <Text style={styles.dateValue}>22/05/2026</Text>
            </View>
            <View style={styles.durationBadge}>
              <Text style={styles.durationText}>1 dia</Text>
            </View>
            <View style={styles.dateBox}>
              <Text style={[styles.dateLabel, { color: colors.white }]}>Fim</Text>
              <Text style={styles.dateValue}>22/05/2026</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
              <Text style={styles.cancelBtnText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createBtn}>
              <Text style={styles.createBtnText}>Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}