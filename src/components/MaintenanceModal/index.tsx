import { colors } from "@/constants/theme";
import { createMaintenance } from "@/services/maintenanceServices";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
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

  const handleClose = () => {
    setValor("");
    setDataManutencao("");
    setDescricao("");
    setErrorMsg(null);
    onClose();
  };

  const handleConfirm = async () => {
    setErrorMsg(null);
    if (!valor || !dataManutencao) {
      setErrorMsg("Preencha o valor e a data.");
      return;
    }

    const [dia, mes, ano] = dataManutencao.split("/");
    const formatadaParaBanco = `${ano}-${mes}-${dia}`;
    const valorNumerico = parseFloat(valor.replace(",", "."));

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
              value={valor}
              onChangeText={setValor}
            />
          </View>

          <View style={styles.labelRow}>
            <Text style={styles.labelText}>Data da manutenção</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={colors["blue--300"]}
              value={dataManutencao}
              onChangeText={setDataManutencao}
            />
          </View>

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