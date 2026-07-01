import { colors } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { VehicleCardProps } from "./types";

export function VehicleCard({ data, proximaRevisao }: VehicleCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  if (!data) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="directions-car" size={24} color={colors["blue--900"]} />
        </View>
        <Text style={styles.headerText}>{data.placa} - {data.ano}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.column}>
          <View style={styles.fieldInfo}>
            <Text style={styles.fieldLabel}>Marca</Text>
            <Text style={styles.fieldValue}>{data.marca}</Text>
          </View>
          <View style={styles.fieldInfo}>
            <Text style={styles.fieldLabel}>Ano</Text>
            <Text style={styles.fieldValue}>{data.ano}</Text>
          </View>
          <View style={styles.fieldInfo}>
            <Text style={styles.fieldLabel}>KM atual</Text>
            <Text style={styles.fieldValueHighlight}>{data.kmAtual.toLocaleString('pt-BR')} km</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.column}>
          <View style={styles.fieldInfo}>
            <Text style={styles.fieldLabel}>Modelo</Text>
            <Text style={styles.fieldValue}>{data.modelo}</Text>
          </View>
          <View style={styles.fieldInfo}>
            <Text style={styles.fieldLabel}>Placa</Text>
            <Text style={styles.fieldValue}>{data.placa}</Text>
          </View>
          <View style={styles.fieldInfo}>
            <Text style={styles.fieldLabel}>Próxima revisão</Text>
            <View style={styles.rowBetween}>
              <Text style={styles.fieldValueDanger}>{proximaRevisao.toLocaleString('pt-BR')} km</Text>
              <TouchableOpacity onPress={() => setShowTooltip(!showTooltip)}>
                <MaterialIcons name="info-outline" size={24} color={colors.white} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {showTooltip && (
        <View style={styles.tooltipContainer}>
          <Text style={styles.tooltipText}>Os dados são gerados por IA e podem apresentar imprecisões.</Text>
        </View>
      )}
    </View>
  );
}