import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/constants/theme";

export function ExportSection() {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.card, { borderColor: "#4ade80", backgroundColor: "rgba(74, 222, 128, 0.05)" }]}
      >
        <View style={styles.infoContainer}>
          <Text style={[styles.title, { color: "#4ade80" }]}>Relatorio para mecânico</Text>
          <Text style={styles.subtitle}>Ficha técnica + diagnostico + intervenções + historico de uso do app</Text>
        </View>
        <View style={[styles.iconContainer, { backgroundColor: "#4ade80" }]}>
          <MaterialIcons name="file-download" size={24} color={colors.white} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, { borderColor: colors["blue--600"], backgroundColor: "transparent" }]}
      >
        <View style={styles.infoContainer}>
          <Text style={[styles.title, { color: colors.white }]}>Compartilhar por link</Text>
          <Text style={styles.subtitle}>Acesso temporario ao historico</Text>
        </View>
        <View style={[styles.iconContainer, { backgroundColor: colors["blue--600"] }]}>
          <MaterialIcons name="share" size={24} color={colors.white} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
