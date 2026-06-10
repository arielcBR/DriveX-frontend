import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ComponentProps } from "react";
import { TextInputProps } from "react-native";
import { MaterialIconName } from "../../types/icons";

export interface Props extends TextInputProps {
  labelText: string;
  iconName?: MaterialIconName;
  errorMessage?: string;
}
