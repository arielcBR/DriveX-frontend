import { useRouter } from "expo-router";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { GoogleButton } from "@/components/GoogleButton";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { PasswordInput } from "@/components/PasswordInput";
import { useSignUp } from "@/hooks/useSignUp";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function RegisterDriver() {
    const router = useRouter();
    const { register, loading, error } = useSignUp();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
      
        const result = await register(name, email, password, phone);
        if (result.success) {
            router.push("/sign-in");
        }
    };

    return (
        <Container>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Logo />
                </View>
                <View style={styles.form}>
                    <Text style={styles.title}>Cadastro</Text>
                    <Input
                        labelText="Nome completo"
                        placeholder="Nome do usuário"
                        iconName="person-outline"
                        value={name}
                        onChangeText={setName}
                    />
                    <Input
                        labelText="Telefone"
                        placeholder="(xx)xxxxx-xxxx"
                        iconName="phone"
                        keyboardType="phone-pad"
                        value={phone}
                        onChangeText={setPhone}
                    />
                    <Input
                        labelText="E-mail"
                        placeholder="seu@email.com"
                        iconName="mail-outline"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <PasswordInput
                        labelText="Senha"
                        placeholder="••••••••"
                        iconName="lock-outline"
                        value={password}
                        onChangeText={setPassword}
                    />

                    {error && <Text>{error}</Text>}

                    <GoogleButton title="Cadastrar com Google" />
                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine} />
                        <Text style={styles.separatorText}>OU</Text>
                        <View style={styles.separatorLine} />
                    </View>
                    <Button
                        variant="primary"
                        title={loading ? "Cadastrando..." : "Cadastrar"}
                        textStyle={{ fontSize: 20 }}
                        onPress={handleRegister}
                        disabled={loading}
                    />
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Já tem uma conta?</Text>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => router.push("/sign-in")}
                        >
                            <Text style={styles.footerLink}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    );
}