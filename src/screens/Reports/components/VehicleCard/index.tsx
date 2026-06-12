import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/constants/theme";
import { VehicleCardProps } from "./types";

export function VehicleCard({ data }: VehicleCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="directions-car" size={24} color={colors["blue--900"]} />
        </View>
        <Text style={styles.headerText}>HBX-2J19 - 2021</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.column}>
          <View style={styles.fieldInfo}>
            <Text style={styles.fieldLabel}>Marca</Text>
            <Text style={styles.fieldValue}>Hyundai</Text>
          </View>
          <View style={styles.fieldInfo}>
            <Text style={styles.fieldLabel}>Ano de fabricação</Text>
            <Text style={styles.fieldValue}>2020</Text>
          </View>
          <View style={styles.fieldInfo}>
            <Text style={styles.fieldLabel}>KM atual</Text>
            <Text style={styles.fieldValueHighlight}>87.420 km</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.column}>
          <View style={styles.fieldInfo}>
            <Text style={styles.fieldLabel}>Modelo</Text>
            <Text style={styles.fieldValue}>HB20</Text>
          </View>
          <View style={styles.fieldInfo}>
            <Text style={styles.fieldLabel}>Placa</Text>
            <Text style={styles.fieldValue}>HBX-2J19</Text>
          </View>
          <View style={styles.fieldInfo}>
            <Text style={styles.fieldLabel}>Próxima revisão</Text>
            <Text style={styles.fieldValueDanger}>90.420 km</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
