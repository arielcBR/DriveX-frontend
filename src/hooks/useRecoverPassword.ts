import { enviarEmailRecuperacao } from "@/services/passwordServices";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export function useRecoverPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSendCode() {
    if (email === "") {
      Alert.alert("Atenção", "Por favor, insira o seu e-mail.");
      return;
    }

    try {
      setIsLoading(true);
      await enviarEmailRecuperacao(email);
      router.push({ pathname: "/verify-token", params: { email: email } });
    } catch (error) {
      Alert.alert("Erro", "Não foi possível enviar o código. Verifique se o e-mail está correto.");
    } finally {
      setIsLoading(false);
    }
  }

  return { email, setEmail, isLoading, handleSendCode, router };
}