import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { AlertProps } from "./types";


export function Alert({ title, iconName, data }: AlertProps) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons 
          name={iconName} 
          size={20} 
          color={styles.title.color} 
        />
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.content}>
        {data.map((item) => (
          <View key={item.id} style={styles.row}>
            <Text style={styles.itemLabel}>{item.label}</Text>
            <Text 
              style={[
                styles.itemValueBase,
                item.status === "warning" ? styles.valueWarning : styles.valueDanger
              ]}
            >
              {item.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}