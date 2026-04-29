import { colors } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface SectionHeaderProps {
  title: string;
  iconName: keyof typeof MaterialIcons.preset; // Isso ajuda o IntelliSense a sugerir ícones
  badgeText?: string;
}

export function SectionHeader({ title, iconName, badgeText }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <MaterialIcons 
          name={iconName as any} 
          size={22} 
          color={colors.white} 
        />
        <Text style={styles.title}>{title}</Text>
      </View>

      {badgeText && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badgeText}</Text>
        </View>
      )}
    </View>
  );
}