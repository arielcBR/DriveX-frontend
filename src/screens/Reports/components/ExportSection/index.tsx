import { colors } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ExportSectionProps } from "./types";
import { downloadRelatorioManutencoes } from "@/services/reportsServices";
import * as Sharing from 'expo-sharing';
import { useState } from "react";
import { ActivityIndicator, Alert } from "react-native";

export function ExportSection({}: ExportSectionProps) {
  const [loading, setLoading] = useState(false);

  const handleExportPDF = async () => {
    try {
      setLoading(true);
      const fileUri = await downloadRelatorioManutencoes();
      
      const isAvailable = await Sharing.isAvailableAsync();
      if (isAvailable) {
        await Sharing.shareAsync(fileUri, {
          mimeType: 'application/pdf',
          dialogTitle: 'Exportar Relatório de Manutenções',
          UTI: 'com.adobe.pdf'
        });
      } else {
        Alert.alert("Erro", "O compartilhamento não está disponível no seu dispositivo.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Falha ao gerar o relatório em PDF.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.card,
          {
            borderColor: "#4ade80",
            backgroundColor: "rgba(74, 222, 128, 0.05)",
          },
        ]}
      >
        <View style={styles.infoContainer}>
          <Text style={[styles.title, { color: "#4ade80" }]}>
            Exportar em PDF
          </Text>
          <Text style={styles.subtitle}>
            Relatório consolidado de todas as manutenções
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.iconContainer, { backgroundColor: "#4ade80" }]}
          onPress={handleExportPDF}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color={colors.white} size="small" />
          ) : (
            <MaterialIcons name="file-download" size={24} color={colors.white} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
