import { TouchableOpacity,TouchableOpacityProps ,Text } from "react-native";
import { styles } from "./styles";


export type ButtonVariant = "primary" | "danger";

interface Props extends TouchableOpacityProps {
    title: string;
    variant?: ButtonVariant;
}

export function Button({title, variant="primary", ...rest}: Props){
    return(
        <TouchableOpacity 
            style={[styles.container, styles[variant]]} 
            activeOpacity={0.8} 
            {...rest}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}