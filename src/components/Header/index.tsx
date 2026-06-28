import { NotificationPanel } from "@/components/NotificationPanel";
import { colors, sizes } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { HeaderProps } from "./types";

export function Header({ initials }: HeaderProps) {
  const [isNotificationPanelVisible, setIsNotificationPanelVisible] =
    useState(false);

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.avatar}
        onPress={() => router.push("/profile")}
      >
        <Text style={styles.avatarText}>{initials}</Text>
      </TouchableOpacity>
      <View style={styles.headerIcons}>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => router.push("/vehicle")}
        >
          <MaterialIcons
            name="directions-car"
            size={sizes.icon_medium}
            color={colors["green--500"]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setIsNotificationPanelVisible(true)}
        >
          <View style={styles.notificationDot} />
          <MaterialIcons
            name="notifications-none"
            size={sizes.icon_medium}
            color={colors["green--500"]}
          />
        </TouchableOpacity>
      </View>

      <NotificationPanel
        visible={isNotificationPanelVisible}
        onClose={() => setIsNotificationPanelVisible(false)}
      />
    </View>
  );
}
