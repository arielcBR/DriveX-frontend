import { colors, sizes } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Props } from "./types";

export function PasswordInput({ labelText, iconName, errorMessage, ...rest }: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.content}>
      <Text style={styles.label}>{labelText}</Text>
      
      <View style={[styles.inputWrapper, errorMessage ? styles.inputWrapperError : null]}>
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
          secureTextEntry={!passwordVisible}
          {...rest} 
        />

        <TouchableOpacity 
          onPress={() => setPasswordVisible(!passwordVisible)} 
          activeOpacity={0.7} 
          style={styles.rightIconContainer}
        >
          <MaterialIcons 
            style={styles.rightIcon} 
            size={24} 
            name={passwordVisible ? "visibility" : "visibility-off"}
          />
        </TouchableOpacity>
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
}
