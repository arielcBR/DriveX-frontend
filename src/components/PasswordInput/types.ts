import { TextInputProps } from "react-native";
import { MaterialIconName } from "../../types/icons";

export interface Props extends TextInputProps {
  labelText: string;
  iconName?: MaterialIconName;
}