import { colors } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { NewGoalModalProps } from "./types";
import { createMeta } from "@/services/homeServices";

export function NewGoalModal({ visible, onClose, onSuccess }: NewGoalModalProps) {
  const [goalType, setGoalType] = useState<"finance" | "cost">("finance");
  const [period, setPeriod] = useState<"daily" | "weekly" | "monthly">("daily");
  
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleClose = () => {
    setErrorMsg(null);
    setSuccessMsg(null);
    onClose();
  };

  const handleCreate = async () => {
    setErrorMsg(null);
    if (!titulo || !valor) {
      setErrorMsg("Preencha o título e o valor da meta.");
      return;
    }

    try {
      setIsLoading(true);
      const formatoMap = {
        daily: "Diária",
        weekly: "Semanal",
        monthly: "Mensal"
      };
      
      const tipoMap = {
        finance: "Receita",
        cost: "Custo"
      };

      await createMeta({
        titulo,
        formato: formatoMap[period],
        tipo: tipoMap[goalType],
        valor: Number(valor.replace(",", "."))
      });

      setTitulo("");
      setValor("");
      setSuccessMsg("Meta criada com sucesso!");
      onSuccess?.();
      setTimeout(() => {
        handleClose();
      }, 1500);
    } catch (error) {
      setErrorMsg("Não foi possível criar a meta. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={handleClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Nova meta</Text>
            <TouchableOpacity style={styles.closeBtnIcon} onPress={handleClose}>
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
                value={titulo}
                onChangeText={setTitulo}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Valor da meta</Text>
            <View style={styles.textInputContainer}>
              <MaterialIcons name="attach-money" size={16} color={colors["blue--300"]} />
              <TextInput
                style={styles.textInput}
                placeholder="Ex: 300"
                placeholderTextColor={colors["blue--300"]}
                keyboardType="numeric"
                value={valor}
                onChangeText={setValor}
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

          {errorMsg && (
            <Text style={styles.errorText}>{errorMsg}</Text>
          )}

          {successMsg && (
            <Text style={styles.successText}>{successMsg}</Text>
          )}

          <View style={styles.footer}>
            <TouchableOpacity style={styles.cancelBtn} onPress={handleClose} disabled={isLoading}>
              <Text style={styles.cancelBtnText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createBtn} onPress={handleCreate} disabled={isLoading}>
              {isLoading ? (
                <ActivityIndicator color={colors["blue--900"]} />
              ) : (
                <Text style={styles.createBtnText}>Criar</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}