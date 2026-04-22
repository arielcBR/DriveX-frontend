import { Container } from "@/components/Container";
import { styles } from "./styles";
import { Text, View } from "react-native";

export function Finance(){
    return(
        <Container>
            <View style={styles.content}>
                <Text>Página de finanças</Text>
            </View>
        </Container>
    );
}