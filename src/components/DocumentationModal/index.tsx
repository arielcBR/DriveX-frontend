import { colors } from "@/constants/theme";
import { createDocumentation } from "@/services/maintenanceServices";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { ActivityIndicator, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { DocumentationModalProps } from "./types";

export function DocumentationModal({ visible, onClose, onSuccess, userId }: DocumentationModalProps) {
  const [tipo, setTipo] = useState<"seguro" | "impostos" | "multas" | "outros">("seguro");
  const [valor, setValor] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [descricao, setDescricao] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleClose = () => {
    setValor("");
    setDataLancamento("");
    setDescricao("");
    setErrorMsg(null);
    onClose();
  };

  const handleConfirm = async () => {
    setErrorMsg(null);
    if (!valor || !dataLancamento) {
      setErrorMsg("Preencha o valor e a data.");
      return;
    }

    const [dia, mes, ano] = dataLancamento.split("/");
    const formatadaParaBanco = `${ano}-${mes}-${dia}`;
    const valorNumerico = parseFloat(valor.replace(",", "."));

    try {
      setIsLoading(true);
      await createDocumentation({
        tipo: tipo,
        valor: valorNumerico,
        dataVencimento: formatadaParaBanco,
        dataPagamento: formatadaParaBanco, 
        descricao: descricao || "Documentação registrada pelo app"
      });
      
      onSuccess?.();
      handleClose();
    } catch (error) {
      setErrorMsg("Erro ao salvar documentação.");
    } finally {
      setIsLoading(false);
    }
  };

  const getIconName = (t: string) => {
    switch (t) {
      case "seguro": return "shield";
      case "impostos": return "request-quote";
      case "multas": return "receipt-long";
      default: return "apps";
    }
  };

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={handleClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeBtnIcon} onPress={handleClose}>
            <MaterialIcons name="close" size={20} color={colors["blue--300"]} />
          </TouchableOpacity>

          <Text style={styles.title}>Qual o tipo de{"\n"}documentação?</Text>

          <View style={[styles.typeContainer, { flexWrap: "wrap", justifyContent: "center", gap: 16 }]}>
            {(["seguro", "impostos", "multas", "outros"] as const).map((t) => (
              <TouchableOpacity
                key={t}
                style={[styles.typeButton, { minWidth: "40%" }, tipo === t && styles.typeButtonActive]}
                onPress={() => setTipo(t)}
              >
                <MaterialIcons
                  name={getIconName(t) as any}
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
            <Text style={styles.labelText}>Data do lançamento</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={colors["blue--300"]}
              value={dataLancamento}
              onChangeText={setDataLancamento}
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