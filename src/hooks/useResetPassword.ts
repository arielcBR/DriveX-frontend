import { redefinirSenhaFinal } from "@/services/passwordServices";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export function useResetPassword() {
  const router = useRouter();
  const { email, codigo } = useLocalSearchParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const userEmail = typeof email === "string" ? email : "";
  const userCodigo = typeof codigo === "string" ? codigo : "";

  async function handleReset() {
    setError("");

    if (password === "" || confirmPassword === "") {
      setError("Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      setIsLoading(true);
      await redefinirSenhaFinal(userEmail, userCodigo, password);
      Alert.alert("Sucesso", "Sua senha foi alterada! Faça login com a nova senha.", [
        { text: "OK", onPress: () => router.push("/sign-in") },
      ]);
    } catch (err: any) {
      setError(err.message || "Não foi possível alterar a senha.");
    } finally {
      setIsLoading(false);
    }
  }

  return { password, setPassword, confirmPassword, setConfirmPassword, isLoading, error, setError, handleReset, router };
}