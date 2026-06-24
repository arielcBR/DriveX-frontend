import { colors } from "@/constants/theme";
import { updateMileage } from "@/services/homeServices";
import { getVehicleData } from "@/services/vehicleServices";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MileageModalProps } from "./types";

export function MileageModal({ visible, onClose, onSuccess, userId }: MileageModalProps) {
  const [km, setKm] = useState("");
  const [currentKm, setCurrentKm] = useState<number | null>(null);
  const [isFetchingKm, setIsFetchingKm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    if (visible) {
      const fetchKm = async () => {
        try {
          setIsFetchingKm(true);
          const vehicleData = await getVehicleData();
          setCurrentKm(vehicleData.kmAtual || 0);
        } catch (error) {
          console.error("Failed to fetch vehicle", error);
          setErrorMsg("Não foi possível buscar a quilometragem atual.");
        } finally {
          setIsFetchingKm(false);
        }
      };
      fetchKm();
    }
  }, [visible]);

  const handleClose = () => {
    setKm("");
    setErrorMsg(null);
    setSuccessMsg(null);
    setCurrentKm(null);
    onClose();
  };

  const handleConfirm = async () => {
    setErrorMsg(null);
    if (!km || isNaN(Number(km))) {
      setErrorMsg("Informe uma quilometragem válida.");
      return;
    }
    if (currentKm === null) {
      setErrorMsg("Aguarde o carregamento da quilometragem atual.");
      return;
    }

    try {
      setIsLoading(true);
      await updateMileage({
        idUsuario: userId,
        kmAtualizado: currentKm + Number(km)
      });

      setSuccessMsg("Quilometragem atualizada!");
      onSuccess?.();
      setTimeout(() => {
        handleClose();
      }, 1500);
    } catch (error: any) {
      setErrorMsg(error.message || "Não foi possível atualizar a quilometragem.");
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

          <View style={styles.iconCircle}>
            <MaterialIcons name="edit-road" size={40} color={colors["blue--900"]} />
          </View>

          <Text style={styles.title}>Adicionar quilometragem</Text>
          <Text style={styles.subtitle}>Quantos km você rodou a mais?</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Ex: 842"
              placeholderTextColor={colors["blue--300"]}
              keyboardType="numeric"
              value={km}
              onChangeText={setKm}
              editable={!isFetchingKm}
            />
            <Text style={styles.unitText}>km</Text>
          </View>

          {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}
          {successMsg && <Text style={styles.successText}>{successMsg}</Text>}

          <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm} disabled={isLoading || isFetchingKm}>
            {isLoading || isFetchingKm ? (
              <ActivityIndicator color={colors["blue--900"]} />
            ) : (
              <Text style={styles.confirmBtnText}>Confirmar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
