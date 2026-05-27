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

  const { register, loading } = useRegisterDriver();

  const handleRegister = async () => {
    if (!nome || !telefone || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    const response = await register({ nome, telefone, email, senha });

    if (response) {
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      router.push("/login");
    } else {
      Alert.alert("Erro", "Não foi possível cadastrar o usuário.");
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
          />

          <Input
            labelText="Telefone"
            placeholder="(xx)xxxxx-xxxx"
            iconName="phone"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
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
            value={senha}
            onChangeText={setSenha}
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
            disabled={loading}
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
