import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { useVerifyToken } from "@/hooks/useVerifyToken";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function VerifyToken() {
  const { codigo, setCodigo, isLoading, displayEmail, handleVerify, router } = useVerifyToken();

  return (
    <Container>
      <View style={styles.content}>
        <View style={styles.header}>
          <Logo />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Verifique seu e-mail</Text>
          <Text style={styles.subtitle}>Enviamos um código para</Text>
          <Text style={styles.emailHighlight}>{displayEmail}</Text>
        </View>

        <View style={styles.form}>
          <Input
            labelText="Código de segurança"
            placeholder="Ex: ABC12345"
            iconName="vpn-key"
            autoCapitalize="characters"
            value={codigo}
            onChangeText={setCodigo}
          />

          <View style={styles.buttonContainer}>
            <Button
              variant="primary"
              title="Confirmar"
              textStyle={{ fontSize: 16 }}
              onPress={handleVerify}
              disabled={isLoading}
            />

            <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.7} onPress={() => router.back()} disabled={isLoading}>
              <Text style={styles.secondaryButtonText}>Voltar ao login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}