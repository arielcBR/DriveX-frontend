import { useAuth } from "@/hooks/useAuth";
import { alterarSenhaPerfil, deletarConta, editarDadosPerfil } from "@/services/profileServices";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export function useEditProfile() {
  const { user, signOut } = useAuth();
  
  const [nome, setNome] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [telefone, setTelefone] = useState(user?.telefone || "");
  
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

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

  async function salvarAlteracoes() {
    try {
      await editarDadosPerfil(user.id, {
        nome: nome,
        email: email,
        telefone: telefone,
      });

      let senhaAtualizada = false;

      if (senhaAtual !== "" || novaSenha !== "" || confirmarSenha !== "") {
        if (novaSenha !== confirmarSenha) {
          Alert.alert("Erro", "A nova senha e a confirmação não são iguais.");
          return;
        }

        await alterarSenhaPerfil(user.id, {
          senhaAtual: senhaAtual,
          novaSenha: novaSenha,
        });
        
        senhaAtualizada = true;
      }

      if (senhaAtualizada === true) {
        Alert.alert("Sucesso", "Perfil e senha atualizados com sucesso!");
      } else {
        Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
      }
      
    } catch (erro) {
      Alert.alert("Erro", "Ocorreu um problema ao salvar os dados.");
    }
  }

  async function excluirConta() {
    if (senhaAtual === "") {
      Alert.alert("Atenção", "Para excluir a conta, digite sua senha atual no campo 'Senha atual'.");
      return;
    }

    try {
      await deletarConta(user.id, {
        senha: senhaAtual,
      });

      Alert.alert("Sucesso", "Sua conta foi excluída.");
      signOut();
      router.replace("/");
    } catch (erro) {
      Alert.alert("Erro", "Não foi possível excluir a conta.");
    }
  }

  return {
    nome, setNome,
    email, setEmail,
    telefone, setTelefone,
    senhaAtual, setSenhaAtual,
    novaSenha, setNovaSenha,
    confirmarSenha, setConfirmarSenha,
    iniciais,
    salvarAlteracoes,
    excluirConta
  };
}