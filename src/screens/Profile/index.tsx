import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { colors } from "@/constants/theme";
import React, { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Profile() {
  const [alertVencimento, setAlertVencimento] = useState(true);
  const [manutencaoKm, setManutencaoKm] = useState(false);

  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Perfil</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.editButton}>Editar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>RR</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dados pessoais</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nome completo</Text>
          <Text style={styles.value}>Rodrigo Remor</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.value}>rodrigo@gmail.com</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Telefone</Text>
          <Text style={styles.value}>(11) 99999-9999</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Notificações</Text>
        
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Alertas de vencimento</Text>
          <Switch
            value={alertVencimento}
            onValueChange={setAlertVencimento}
            trackColor={{ false: colors['blue--600'], true: colors['green--500'] }}
            thumbColor={colors.white}
          />
        </View>
        
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Manutenção por km</Text>
          <Switch
            value={manutencaoKm}
            onValueChange={setManutencaoKm}
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
        <Button variant="danger" title="Sair da conta" />
      </View>
    </Container>
  );
}