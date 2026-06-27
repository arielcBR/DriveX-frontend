import { enviarEmailRecuperacao, validarTokenRecuperacao } from "@/services/passwordServices";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export function useVerifyToken() {
  const router = useRouter();
  const { email } = useLocalSearchParams();
  const [codigo, setCodigo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(120);
  const [error, setError] = useState("");

  const displayEmail = typeof email === "string" ? email : "";

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  async function handleVerify() {
    setError("");

    if (codigo === "" || codigo.length < 8) {
      setError("Preencha o código completo de 8 caracteres que enviamos para o seu e-mail.");
      return;
    }

    try {
      setIsLoading(true);
      await validarTokenRecuperacao(displayEmail, codigo);
      router.push({ pathname: "/reset-password", params: { email: displayEmail, codigo: codigo } });
    } catch (err: any) {
      setError(err.message || "Código incorreto ou expirado.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleResendCode() {
    if (timer > 0) return;
    setError("");

    try {
      setIsLoading(true);
      await enviarEmailRecuperacao(displayEmail);
      setTimer(120);
      Alert.alert("Sucesso", "Novo código enviado com sucesso.");
    } catch (err: any) {
      setError(err.message || "Não foi possível reenviar o código.");
    } finally {
      setIsLoading(false);
    }
  }

  return { codigo, setCodigo, isLoading, error, setError, displayEmail, handleVerify, handleResendCode, timer, router };
}