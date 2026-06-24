import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { GoogleButton } from "@/components/GoogleButton";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { PasswordInput } from "@/components/PasswordInput";
import { useAuth } from "@/hooks/useAuth";
import { useSignUp } from "@/hooks/useSignUp";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function RegisterDriver() {
    const router = useRouter();
    const { register, loading, error } = useSignUp();
    const { signIn } = useAuth();
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleRegister = async () => {
        setEmailError("");
        setPhoneError("");
        setPasswordError("");
        setConfirmPasswordError("");

        if (!name || !phone || !email || !password || !confirmPassword) {
            if (!password) setPasswordError("Campo obrigatório");
            if (!confirmPassword) setConfirmPasswordError("Campo obrigatório");
            if (!email) setEmailError("Campo obrigatório");
            if (!phone) setPhoneError("Campo obrigatório");
            return;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError("As senhas não coincidem");
            return;
        }

        const result = await register(name, email, password, phone);
        if (result.success) {
            router.replace({
                pathname: "/register-vehicle",
                params: {
                    userId: result.data?.idUsuario,
                    email,
                    password
                }
            });
        } else {
            const err = result.error;
            if (typeof err === "object" && err !== null) {
                if (err.email) setEmailError(err.email);
                if (err.telefone) setPhoneError(err.telefone);
                
                if (err.message && typeof err.message === "string") {
                    const msg = err.message.toLowerCase();
                    if (msg.includes("e-mail") || msg.includes("email")) {
                        setEmailError(err.message);
                    } else if (msg.includes("telefone") || msg.includes("número")) {
                        setPhoneError(err.message);
                    }
                }
            } else if (typeof err === "string") {
                const msg = err.toLowerCase();
                if (msg.includes("e-mail") || msg.includes("email")) {
                    setEmailError(err);
                } else if (msg.includes("telefone") || msg.includes("número")) {
                    setPhoneError(err);
                }
            }
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
                        onChangeText={(t) => { setPhone(t); setPhoneError(""); }}
                        errorMessage={phoneError}
                    />
                    <Input
                        labelText="E-mail"
                        placeholder="seu@email.com"
                        iconName="mail-outline"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(t) => { setEmail(t); setEmailError(""); }}
                        errorMessage={emailError}
                    />
                    <PasswordInput
                        labelText="Senha"
                        placeholder="••••••••"
                        iconName="lock-outline"
                        value={password}
                        onChangeText={(t) => { setPassword(t); setPasswordError(""); }}
                        errorMessage={passwordError}
                    />
                    <PasswordInput
                        labelText="Confirmar Senha"
                        placeholder="••••••••"
                        iconName="lock-outline"
                        value={confirmPassword}
                        onChangeText={(t) => { setConfirmPassword(t); setConfirmPasswordError(""); }}
                        errorMessage={confirmPasswordError}
                    />

                    {error && typeof error === "string" && !emailError && !phoneError && !confirmPasswordError && <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>}

                    <GoogleButton title="Cadastrar com Google" />
                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine} />
                        <Text style={styles.separatorText}>OU</Text>
                        <View style={styles.separatorLine} />
                    </View>
                    <Button
                        variant="primary"
                        title={loading || isLoggingIn ? "Processando..." : "Cadastrar"}
                        textStyle={{ fontSize: 20 }}
                        onPress={handleRegister}
                        disabled={loading || isLoggingIn}
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
