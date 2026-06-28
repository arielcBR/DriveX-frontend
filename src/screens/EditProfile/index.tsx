import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { PasswordInput } from "@/components/PasswordInput";
import { colors } from "@/constants/theme";
import { useAuth } from "@/hooks/useAuth";
import {
  changePassword,
  deleteAccount,
  editProfile,
} from "@/services/userServices";
import { getInitials } from "@/utils/stringUtils";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function EditProfile() {
  const { user, updateUser, signOut } = useAuth();

  const [nome, setNome] = useState(user?.nome || "");
  const [email, setEmail] = useState(user?.email || "");
  const [telefone, setTelefone] = useState(user?.telefone || "");

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState("");

  const [nomeError, setNomeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telefoneError, setTelefoneError] = useState("");
  const [senhaAtualError, setSenhaAtualError] = useState("");
  const [novaSenhaError, setNovaSenhaError] = useState("");
  const [confirmarNovaSenhaError, setConfirmarNovaSenhaError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setNome(user.nome || "");
      setEmail(user.email || "");
      setTelefone(user.telefone || "");
    }
  }, [user]);

  const handleSave = async () => {
    setNomeError("");
    setEmailError("");
    setTelefoneError("");
    setSenhaAtualError("");
    setNovaSenhaError("");
    setConfirmarNovaSenhaError("");
    setGeneralError("");

    let isValid = true;

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("E-mail inválido");
      isValid = false;
    }

    if (telefone && telefone.replace(/\D/g, "").length < 10) {
      setTelefoneError("Telefone inválido");
      isValid = false;
    }

    if (novaSenha) {
      if (novaSenha.length < 6) {
        setNovaSenhaError("A nova senha deve ter pelo menos 6 caracteres");
        isValid = false;
      }
      if (novaSenha !== confirmarNovaSenha) {
        setConfirmarNovaSenhaError("As senhas não coincidem");
        isValid = false;
      }
      if (!senhaAtual) {
        setSenhaAtualError("Campo obrigatório para alterar a senha");
        isValid = false;
      }
    }

    if (!isValid) return;

    setLoading(true);
    try {
      if (
        nome !== user?.nome ||
        email !== user?.email ||
        telefone !== user?.telefone
      ) {
        await editProfile({ nome, email, telefone });
        updateUser({ nome, email, telefone });
      }

      if (novaSenha) {
        await changePassword({ senhaAtual, novaSenha });
        setSenhaAtual("");
        setNovaSenha("");
        setConfirmarNovaSenha("");
      }

      Alert.alert("Sucesso", "Perfil atualizado com sucesso!", [
        { text: "OK", onPress: () => router.back() },
      ]);
    } catch (error: any) {
      const msg = (error.message || "").toLowerCase();
      if (msg.includes("senha")) {
        setSenhaAtualError(error.message);
      } else if (msg.includes("email") || msg.includes("e-mail")) {
        setEmailError(error.message);
      } else if (msg.includes("telefone")) {
        setTelefoneError(error.message);
      } else {
        setGeneralError(
          error.message || "Não foi possível atualizar o perfil.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = () => {
    setSenhaAtualError("");
    setGeneralError("");

    if (!senhaAtual) {
      setSenhaAtualError("Campo obrigatório para excluir conta");
      return;
    }

    Alert.alert(
      "Excluir conta",
      "Tem certeza que deseja excluir sua conta? Esta ação é irreversível.",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              setLoading(true);
              await deleteAccount({ senha: senhaAtual });
              Alert.alert(
                "Conta excluída",
                "Sua conta foi excluída com sucesso.",
                [
                  {
                    text: "OK",
                    onPress: () => {
                      signOut();
                      router.replace("/sign-in");
                    },
                  },
                ],
              );
            } catch (error: any) {
              const msg = (error.message || "").toLowerCase();
              if (msg.includes("senha")) {
                setSenhaAtualError(error.message);
              } else {
                setGeneralError(
                  error.message || "Não foi possível excluir a conta.",
                );
              }
            } finally {
              setLoading(false);
            }
          },
        },
      ],
    );
  };

  return (
    <Container>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <MaterialIcons
            name="chevron-left"
            size={24}
            color={colors["green--400"]}
          />
          <Text style={styles.headerTitle}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {getInitials(user?.nome || "Usuário")}
          </Text>
        </View>
        <Text style={styles.userName}>{user?.nome || "Usuário"}</Text>
      </View>

      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>DADOS PESSOAIS</Text>

        <Input
          labelText="Nome completo"
          placeholder="Seu nome"
          iconName="person"
          value={nome}
          onChangeText={(t) => {
            setNome(t);
            setNomeError("");
          }}
          errorMessage={nomeError}
        />
        <Input
          labelText="E-mail"
          placeholder="seu@email.com"
          iconName="mail"
          keyboardType="email-address"
          value={email}
          onChangeText={(t) => {
            setEmail(t);
            setEmailError("");
          }}
          errorMessage={emailError}
        />
        <Input
          labelText="Telefone"
          placeholder="(00) 00000-0000"
          iconName="phone"
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={(t) => {
            setTelefone(t);
            setTelefoneError("");
          }}
          errorMessage={telefoneError}
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>ALTERAR SENHA</Text>

        <PasswordInput
          labelText="Senha atual"
          placeholder="••••••••"
          iconName="lock"
          value={senhaAtual}
          onChangeText={(t) => {
            setSenhaAtual(t);
            setSenhaAtualError("");
          }}
          errorMessage={senhaAtualError}
        />
        <PasswordInput
          labelText="Nova senha"
          placeholder="••••••••"
          iconName="lock"
          value={novaSenha}
          onChangeText={(t) => {
            setNovaSenha(t);
            setNovaSenhaError("");
          }}
          errorMessage={novaSenhaError}
        />
        <PasswordInput
          labelText="Confirmar nova senha"
          placeholder="••••••••"
          iconName="lock"
          value={confirmarNovaSenha}
          onChangeText={(t) => {
            setConfirmarNovaSenha(t);
            setConfirmarNovaSenhaError("");
          }}
          errorMessage={confirmarNovaSenhaError}
        />
      </View>

      {generalError ? (
        <Text
          style={{
            color: colors["red--400"],
            textAlign: "center",
            marginVertical: 10,
          }}
        >
          {generalError}
        </Text>
      ) : null}

      <View style={styles.footer}>
        <Button
          title="Salvar alterações"
          onPress={handleSave}
          disabled={loading}
        />

        <TouchableOpacity
          style={styles.dangerOutlineButton}
          activeOpacity={0.8}
          onPress={handleDeleteAccount}
          disabled={loading}
        >
          <MaterialIcons
            name="delete-outline"
            size={20}
            color={colors["red--400"]}
          />
          <Text style={styles.dangerOutlineText}>Excluir conta</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
