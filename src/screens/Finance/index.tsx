import { Container } from "@/components/Container";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function Finance(){
    return(
        <Container>
            <View style={styles.content}>
                <Text>Página de finanças</Text>
            </View>
        </Container>
    );
}