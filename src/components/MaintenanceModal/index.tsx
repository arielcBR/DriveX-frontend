import { colors } from "@/constants/theme";
import { createMaintenance } from "@/services/maintenanceServices";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { ActivityIndicator, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaintenanceModalProps } from "./types";

export function MaintenanceModal({ visible, onClose, onSuccess, vehicleId }: MaintenanceModalProps) {
  const [tipo, setTipo] = useState<"preventiva" | "corretiva" | "preditiva">("preventiva");
  const [valor, setValor] = useState("");
  const [dataManutencao, setDataManutencao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Estados do Calendário
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleClose = () => {
    setValor("");
    setDataManutencao("");
    setDescricao("");
    setErrorMsg(null);
    setShowDatePicker(false);
    onClose();
  };

  // Função da Máscara BRL (Tarefa 3)
  const handleValorChange = (text: string) => {
    const digits = text.replace(/\D/g, "");
    if (!digits) {
      setValor("");
      return;
    }
    const num = (parseInt(digits, 10) / 100).toFixed(2);
    const parts = num.split(".");
    const reais = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const centavos = parts[1];
    setValor(`${reais},${centavos}`);
  };

  // Função do Calendário (Tarefa 2)
  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
      const dia = String(selectedDate.getDate()).padStart(2, "0");
      const mes = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const ano = selectedDate.getFullYear();
      setDataManutencao(`${dia}/${mes}/${ano}`);
    }
  };

  const handleConfirm = async () => {
    setErrorMsg(null);
    if (!valor || !dataManutencao) {
      setErrorMsg("Preencha o valor e a data.");
      return;
    }

    const [dia, mes, ano] = dataManutencao.split("/");
    const formatadaParaBanco = `${ano}-${mes}-${dia}`;
    const valorNumerico = parseFloat(valor.replace(/\./g, "").replace(",", "."));

    try {
      setIsLoading(true);
      await createMaintenance({
        tipo: tipo,
        dataManutencao: formatadaParaBanco,
        descricao: descricao || "Manutenção registrada pelo app",
        idVeiculo: vehicleId,
        valor: valorNumerico
      });
      
      onSuccess?.();
      handleClose();
    } catch (error) {
      setErrorMsg("Erro ao salvar manutenção.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={handleClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeBtnIcon} onPress={handleClose}>
            <MaterialIcons name="close" size={20} color={colors["blue--300"]} />
          </TouchableOpacity>

          <Text style={styles.title}>Qual o tipo de{"\n"}manutenção?</Text>

          <View style={styles.typeContainer}>
            {(["preventiva", "corretiva", "preditiva"] as const).map((t) => (
              <TouchableOpacity
                key={t}
                style={[styles.typeButton, tipo === t && styles.typeButtonActive]}
                onPress={() => setTipo(t)}
              >
                <MaterialIcons
                  name={t === "preventiva" ? "health-and-safety" : t === "corretiva" ? "build" : "auto-graph"}
                  size={24}
                  color={tipo === t ? colors["blue--900"] : colors.white}
                />
                <Text style={[styles.typeText, tipo === t && styles.typeTextActive]}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.currencyText}>R$</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="0,00"
              placeholderTextColor={colors["blue--300"]}
              value={valor}
              onChangeText={handleValorChange}
            />
          </View>

          <View style={styles.labelRow}>
            <Text style={styles.labelText}>Data da manutenção</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Text style={[styles.dateInput, !dataManutencao && { color: colors["blue--300"] }]}>
                {dataManutencao || "Selecionar data"}
              </Text>
            </TouchableOpacity>
          </View>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}

          <View style={[styles.inputContainer, styles.textAreaContainer]}>
            <TextInput
              style={styles.textInput}
              placeholder="Observação"
              placeholderTextColor={colors["blue--300"]}
              multiline
              value={descricao}
              onChangeText={setDescricao}
            />
          </View>

          {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}

          <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm} disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator color={colors["blue--900"]} />
            ) : (
              <Text style={styles.confirmBtnText}>Salvar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}