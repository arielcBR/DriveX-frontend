import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { useRecoverPassword } from "@/hooks/useRecoverPassword";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function RecoverPassword() {
  const { email, setEmail, isLoading, handleSendCode, router } = useRecoverPassword();

  return (
    <Container>
      <View style={styles.content}>
        <View style={styles.header}>
          <Logo />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Recuperar senha</Text>
          <Text style={styles.subtitle}>Informe o e-mail cadastrado</Text>
        </View>

        <View style={styles.form}>
          <Input
            labelText="E-mail"
            placeholder="seu@email.com"
            iconName="mail-outline"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <View style={styles.buttonContainer}>
            <Button
              variant="primary"
              title="Enviar código"
              textStyle={{ fontSize: 16 }}
              onPress={handleSendCode}
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