import { enviarEmailRecuperacao } from "@/services/passwordServices";
import { useRouter } from "expo-router";
import { useState } from "react";

export function useRecoverPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSendCode() {
    setError("");
    
    if (email === "") {
      setError("Por favor, insira o seu e-mail.");
      return;
    }

    try {
      setIsLoading(true);
      await enviarEmailRecuperacao(email);
      router.push({ pathname: "/verify-token", params: { email: email } });
    } catch (err: any) {
      setError(err.message || "Não foi possível enviar o código. Verifique se o e-mail está correto.");
    } finally {
      setIsLoading(false);
    }
  }

  return { email, setEmail, isLoading, error, setError, handleSendCode, router };
}