import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { PasswordInput } from "@/components/PasswordInput";
import { colors } from "@/constants/theme";
import { useEditProfile } from "@/hooks/useEditProfile";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function EditProfile() {
  const {
    nome, setNome,
    email, setEmail,
    telefone, setTelefone,
    senhaAtual, setSenhaAtual,
    novaSenha, setNovaSenha,
    confirmarSenha, setConfirmarSenha,
    iniciais,
    salvarAlteracoes,
    excluirConta
  } = useEditProfile();

  return (
    <Container>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} style={styles.backButton} onPress={() => router.back()}>
          <MaterialIcons name="chevron-left" size={24} color={colors['green--400']} />
          <Text style={styles.headerTitle}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{iniciais}</Text>
        </View>
        <Text style={styles.userName}>{nome}</Text>
      </View>

      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>DADOS PESSOAIS</Text>
        <Input labelText="Nome completo" placeholder="Rodrigo Remor" iconName="person" value={nome} onChangeText={setNome} />
        <Input labelText="E-mail" placeholder="rodrigo@gmail.com" iconName="mail" keyboardType="email-address" value={email} onChangeText={setEmail} />
        <Input labelText="Telefone" placeholder="(11) 99999-9999" iconName="phone" keyboardType="phone-pad" value={telefone} onChangeText={setTelefone} />
      </View>

      <View style={styles.divider} />

      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>ALTERAR SENHA</Text>
        <PasswordInput labelText="Senha atual" placeholder="••••••••" iconName="lock" value={senhaAtual} onChangeText={setSenhaAtual} />
        <PasswordInput labelText="Nova senha" placeholder="••••••••" iconName="lock" value={novaSenha} onChangeText={setNovaSenha} />
        <PasswordInput labelText="Confirmar nova senha" placeholder="••••••••" iconName="lock" value={confirmarSenha} onChangeText={setConfirmarSenha} />
      </View>

      <View style={styles.footer}>
        <Button title="Salvar alterações" onPress={salvarAlteracoes} />
        <TouchableOpacity style={styles.dangerOutlineButton} activeOpacity={0.8} onPress={excluirConta}>
          <MaterialIcons name="delete-outline" size={20} color={colors['red--400']} />
          <Text style={styles.dangerOutlineText}>Excluir conta</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}