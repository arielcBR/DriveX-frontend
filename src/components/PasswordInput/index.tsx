import { colors, sizes } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { ComponentProps, useState } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type MaterialIconName = ComponentProps<typeof MaterialIcons>["name"];

interface Props extends TextInputProps {
  labelText: string;
  iconName?: MaterialIconName;
}

export function PasswordInput({ labelText, iconName, ...rest }: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

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
    </View>
  );
}
