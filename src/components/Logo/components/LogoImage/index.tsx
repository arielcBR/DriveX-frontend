import { styles } from "./styles";
import { sizes } from "@/constants/theme";
import { View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function LogoImage(){
    return(
        <View style={styles.container}>
            <MaterialIcons 
                style={styles.icon} 
                size={sizes.icon_logo} 
                name="directions-car"
            />
        </View>
    );
}