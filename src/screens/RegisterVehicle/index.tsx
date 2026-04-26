import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { Text, View } from "react-native";
import { styles } from "./styles";


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
                        <Input  labelText="Modelo" placeholder="Argo" iconName="local-offer" />
                    </View>

                    <View style={styles.containerWrapper}>
                        <Input  labelText="Ano" placeholder="2024" iconName="calendar-month" />
                        <Input  labelText="Cor" placeholder="Prata" iconName="palette" />
                        <Input  labelText="Tipo" placeholder="Hatch" iconName="dashboard" />
                    </View>

                    <Text style={styles.subtitle}>Identificação</Text>
                    <View style={styles.containerWrapper}>
                        <Input  labelText="Placa" placeholder="ABC1D26" iconName="credit-card" />
                        <Input  labelText="Km inicial" placeholder="25000" iconName="speed" />
                    </View>
                    <View style={styles.containerWrapper}>
                        <Input  labelText="RENAVAM" placeholder="00000000000 (11dígitos)" iconName="local-offer" />
                    </View>
                </View>
                <Button variant="primary" title="Cadastrar"/>
            </View>
        </Container>
    );
}