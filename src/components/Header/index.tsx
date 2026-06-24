import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { HeaderProps } from "./types";
import { colors, sizes } from "@/constants/theme";
import { styles } from "./styles";

export function Header({ initials, onCarPress }: HeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.avatar} onPress={() => router.push("/profile")}>
        <Text style={styles.avatarText}>{initials}</Text>
      </TouchableOpacity>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton} onPress={onCarPress}>
          <MaterialIcons name="directions-car" size={sizes.icon_medium} color={colors["green--500"]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.notificationDot} />
          <MaterialIcons name="notifications-none" size={sizes.icon_medium} color={colors["green--500"]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
