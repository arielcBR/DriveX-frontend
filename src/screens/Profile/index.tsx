import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { colors } from "@/constants/theme";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { Switch, Text, TouchableOpacity, View, Alert } from "react-native";
import { useAuth } from "@/hooks/useAuth";
import { updateNotifications } from "@/services/userServices";
import { getInitials } from "@/utils/stringUtils";
import { styles } from "./styles";

export function Profile() {
  const { user, signOut, updateUser } = useAuth();
  const [alertVencimento, setAlertVencimento] = useState(user?.notificacaoVencimento ?? true);
  const [manutencaoKm, setManutencaoKm] = useState(user?.notificacaoManutencao ?? false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setAlertVencimento(user.notificacaoVencimento ?? true);
      setManutencaoKm(user.notificacaoManutencao ?? false);
    }
  }, [user]);

  const handleToggleVencimento = async (value: boolean) => {
    setAlertVencimento(value);
    try {
      setLoading(true);
      await updateNotifications({ notificacao: "Vencimento" });
      updateUser({ notificacaoVencimento: value });
    } catch (error: any) {
      setAlertVencimento(!value);
      Alert.alert("Erro", error.message || "Não foi possível atualizar as notificações.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleManutencao = async (value: boolean) => {
    setManutencaoKm(value);
    try {
      setLoading(true);
      await updateNotifications({ notificacao: "Manutenção" });
      updateUser({ notificacaoManutencao: value });
    } catch (error: any) {
      setManutencaoKm(!value);
      Alert.alert("Erro", error.message || "Não foi possível atualizar as notificações.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Perfil</Text>
        
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => router.push('/edit-profile')}
        >
          <Text style={styles.editButton}>Editar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{getInitials(user?.nome || "Usuário")}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dados pessoais</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nome completo</Text>
          <Text style={styles.value}>{user?.nome || "-"}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.value}>{user?.email || "-"}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Telefone</Text>
          <Text style={styles.value}>{user?.telefone || "-"}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Notificações</Text>
        
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Alertas de vencimento</Text>
          <Switch
            value={alertVencimento}
            onValueChange={handleToggleVencimento}
            disabled={loading}
            trackColor={{ false: colors['blue--600'], true: colors['green--500'] }}
            thumbColor={colors.white}
          />
        </View>
        
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Manutenção por km</Text>
          <Switch
            value={manutencaoKm}
            onValueChange={handleToggleManutencao}
            disabled={loading}
            trackColor={{ false: colors['blue--600'], true: colors['green--500'] }}
            thumbColor={colors.white}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Preferências</Text>
        <View style={styles.preferenceRow}>
          <Text style={styles.switchLabel}>Idioma</Text>
          <Text style={styles.preferenceValue}>Português (BR) </Text>
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <Button variant="danger" title="Sair da conta" onPress={() => {
          signOut();
          router.replace("/sign-in");
        }} />
      </View>
    </Container>
  );
}