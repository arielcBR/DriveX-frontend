import { useAuth } from "@/hooks/useAuth";
import { atualizarNotificacao } from "@/services/profileServices";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export function useProfile() {
  const { user, signOut } = useAuth();
  const [alertVencimento, setAlertVencimento] = useState(true);
  const [manutencaoKm, setManutencaoKm] = useState(false);

  let iniciais = "RR";
  
  if (user !== null && user !== undefined && user.name !== undefined) {
    let primeiraLetra = user.name.charAt(0);
    let espacoIndex = user.name.lastIndexOf(" ");
    let ultimaLetra = "";
    
    if (espacoIndex !== -1 && espacoIndex < user.name.length - 1) {
      ultimaLetra = user.name.charAt(espacoIndex + 1);
    }
    
    iniciais = primeiraLetra + ultimaLetra;
    iniciais = iniciais.toUpperCase();
  }

  async function toggleNotificacaoVencimento(valor: boolean) {
    setAlertVencimento(valor);
    
    try {
      await atualizarNotificacao(user.id, "VENCIMENTO");
    } catch (erro) {
      Alert.alert("Erro", "Não foi possível atualizar a notificação.");
      setAlertVencimento(!valor);
    }
  }

  async function handleSair() {
    signOut();
    router.replace("/");
  }

  return {
    user,
    iniciais,
    alertVencimento,
    manutencaoKm,
    setManutencaoKm,
    toggleNotificacaoVencimento,
    handleSair,
  };
}