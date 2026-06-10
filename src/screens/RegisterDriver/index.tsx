import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { GoogleButton } from "@/components/GoogleButton";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { PasswordInput } from "@/components/PasswordInput";
import { useRegisterDriver } from "@/hooks/useRegisterDriver";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function RegisterDriver() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [touched, setTouched] = useState({
    nome: false,
    telefone: false,
    email: false,
    senha: false,
    confirmarSenha: false,
  });

  const [apiError, setApiError] = useState("");

  const { register, loading } = useRegisterDriver();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{11}$/;

  const isNomeValid = nome.trim().length > 0;
  const numbersOnly = telefone.replace(/\D/g, "");
  const isTelefoneValid = phoneRegex.test(numbersOnly);
  const isEmailValid = emailRegex.test(email);
  const isSenhaValid = senha.trim().length > 0;
  const isConfirmarSenhaValid =
    confirmarSenha.trim().length > 0 && confirmarSenha === senha;

  const isFormValid =
    isNomeValid &&
    isTelefoneValid &&
    isEmailValid &&
    isSenhaValid &&
    isConfirmarSenhaValid;

  const handleRegister = async () => {
    if (!isFormValid) {
      setTouched({
        nome: true,
        telefone: true,
        email: true,
        senha: true,
        confirmarSenha: true,
      });
      return;
    }

    setApiError("");

    try {
      const response = await register({ nome, telefone, email, senha });
      if (response) {
        Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
        setNome("");
        setTelefone("");
        setEmail("");
        setSenha("");
        setConfirmarSenha("");
        setTouched({
          nome: false,
          telefone: false,
          email: false,
          senha: false,
          confirmarSenha: false,
        });
        router.push("/login");
      }
    } catch (error: any) {
      setApiError(error.message);
      Alert.alert(
        "Erro",
        "Não foi possível cadastrar o usuário. Verifique os dados fornecidos.",
      );
      const msg = error.message || "";
      setApiError(msg);

      const isEmailError =
        msg.toLowerCase().includes("e-mail") ||
        msg.toLowerCase().includes("email");
      const isPhoneError = msg.toLowerCase().includes("telefone");

      if (!isEmailError && !isPhoneError) {
        Alert.alert(
          "Erro",
          "Não foi possível cadastrar o usuário. Verifique os dados fornecidos.",
        );
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
            value={nome}
            onChangeText={setNome}
            onBlur={() => setTouched((prev) => ({ ...prev, nome: true }))}
            errorMessage={
              touched.nome && !isNomeValid
                ? "O preenchimento é obrigatório"
                : undefined
            }
          />

          <Input
            labelText="Telefone"
            placeholder="(xx)xxxxx-xxxx"
            iconName="phone"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
            onBlur={() => setTouched((prev) => ({ ...prev, telefone: true }))}
            errorMessage={
              touched.telefone
                ? !telefone.trim()
                  ? "O preenchimento é obrigatório"
                  : !isTelefoneValid
                    ? "Telefone inválido"
                    : undefined
                : undefined
            }
          />

          <Input
            labelText="E-mail"
            placeholder="seu@email.com"
            iconName="mail-outline"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            errorMessage={
              touched.email
                ? !email.trim()
                  ? "O preenchimento é obrigatório"
                  : !isEmailValid
                    ? "E-mail inválido"
                    : undefined
                : undefined
            }
          />

          <PasswordInput
            labelText="Senha"
            placeholder="••••••••"
            iconName="lock-outline"
            value={senha}
            onChangeText={setSenha}
            onBlur={() => setTouched((prev) => ({ ...prev, senha: true }))}
            errorMessage={
              touched.senha && !isSenhaValid
                ? "O preenchimento é obrigatório"
                : undefined
            }
          />

          <PasswordInput
            labelText="Confirmar Senha"
            placeholder="••••••••"
            iconName="lock-outline"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            onBlur={() =>
              setTouched((prev) => ({ ...prev, confirmarSenha: true }))
            }
            errorMessage={
              touched.confirmarSenha
                ? !confirmarSenha.trim()
                  ? "O preenchimento é obrigatório"
                  : confirmarSenha !== senha
                    ? "As senhas não coincidem"
                    : undefined
                : undefined
            }
          />

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
            disabled={loading || !isFormValid}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Já tem uma conta?</Text>
            <TouchableOpacity
              onPress={() => router.push("/login")}
              activeOpacity={0.7}
            >
              <Text style={styles.footerLink}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
