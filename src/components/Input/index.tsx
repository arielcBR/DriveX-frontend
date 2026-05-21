import { colors, sizes } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Props } from "./types";

export function Input({ labelText, iconName, ...rest }: Props) {
  return (
    <View style={styles.content}>
      <Text style={styles.label}>{labelText}</Text>
      
      <View style={styles.inputWrapper}>
        {iconName && 
          <MaterialIcons 
          style={styles.icon} 
          size={sizes.icon_small} 
          name={iconName}
          />
        }

        <TextInput 
          style={styles.input}
          placeholderTextColor={colors["blue--500"]}
          {...rest} 
        />
      </View>
    </View>
  );
}