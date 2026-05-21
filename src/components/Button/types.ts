import { TouchableOpacityProps ,TextStyle, StyleProp } from "react-native";

export type ButtonVariant = "primary" | "danger";

export interface Props extends TouchableOpacityProps {
    title: string;
    variant?: ButtonVariant;
    textStyle?: StyleProp<TextStyle>;
}