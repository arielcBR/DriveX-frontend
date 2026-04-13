import { styles } from "./styles";
import { LogoImage } from "./components/LogoImage";
import { Text, View } from "react-native";

export function Logo(){
    return(
        <View style={styles.content}>
            <LogoImage />
            <Text style={styles.title}>DriveX</Text>
            <Text style={styles.subtitle}>Gestão para motoristas</Text>
        </View>
    );
}