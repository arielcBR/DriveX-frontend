import { validarTokenRecuperacao } from "@/services/passwordServices";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export function useVerifyToken() {
  const router = useRouter();
  const { email } = useLocalSearchParams();
  const [codigo, setCodigo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const displayEmail = typeof email === "string" ? email : "";

  async function handleVerify() {
    if (codigo === "") {
      Alert.alert("Atenção", "Preencha o código que enviamos para o seu e-mail.");
      return;
    }

    try {
      setIsLoading(true);
      await validarTokenRecuperacao(displayEmail, codigo);
      router.push({ pathname: "/reset-password", params: { email: displayEmail, codigo: codigo } });
    } catch (error) {
      Alert.alert("Erro", "Código incorreto ou expirado.");
    } finally {
      setIsLoading(false);
    }
  }

  return { codigo, setCodigo, isLoading, displayEmail, handleVerify, router };
}