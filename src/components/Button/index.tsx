import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { Props } from "./types";

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