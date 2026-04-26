import { TouchableOpacity,TouchableOpacityProps ,Text, TextStyle, StyleProp } from "react-native";
import { styles } from "./styles";


export type ButtonVariant = "primary" | "danger";

interface Props extends TouchableOpacityProps {
    title: string;
    variant?: ButtonVariant;
    textStyle?: StyleProp<TextStyle>;
}

export function Button({title, variant="primary", textStyle, ...rest}: Props){
    return(
        <TouchableOpacity 
            style={[styles.container, styles[variant]]} 
            activeOpacity={0.8} 
            {...rest}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}