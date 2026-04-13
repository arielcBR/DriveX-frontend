import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { styles } from "./styles";
import { View, Text } from "react-native";
import { Input } from "@/components/Input";


export function RegisterVehicle(){
    return(
        <Container>
            <View style={styles.content}>
                <Logo />
                <View style={styles.form}>
                    <Text style={styles.title}>Cadastro do veículo</Text>
                    <Text style={styles.subtitle}>Identificação</Text>
                    <View style={styles.containerWrapper}>
                        <Input  labelText="Marca" placeholder="Ex: Fiat" iconName="directions-car" />
                        <Input  labelText="Modelo" placeholder="Ex: Argo" iconName="local-offer" />
                    </View>
                </View>
            </View>
        </Container>
    );
}