import { colors } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ExportSectionProps } from "./types";

export function ExportSection({}: ExportSectionProps) {
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
            Relatorio para mecânico
          </Text>
          <Text style={styles.subtitle}>
            Ficha técnica + diagnostico + intervenções + historico de uso do app
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.iconContainer, { backgroundColor: "#4ade80" }]}
        >
          <MaterialIcons name="file-download" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.card,
          { borderColor: colors["blue--600"], backgroundColor: "transparent" },
        ]}
      >
        <View style={styles.infoContainer}>
          <Text style={[styles.title, { color: colors.white }]}>
            Compartilhar por link
          </Text>
          <Text style={styles.subtitle}>Acesso temporario ao historico</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.iconContainer,
            { backgroundColor: colors["blue--600"] },
          ]}
        >
          <MaterialIcons name="share" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
