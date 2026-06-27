import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { PasswordInput } from "@/components/PasswordInput";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useResetPassword } from "@/hooks/useResetPassword";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function ResetPassword() {
  const { password, setPassword, confirmPassword, setConfirmPassword, isLoading, error, handleReset, router } = useResetPassword();

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      <View style={styles.content}>
        <View style={styles.header}>
          <Logo />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Senha nova</Text>
          <Text style={styles.subtitle}>Qual vai ser a sua nova senha?</Text>
        </View>

        <View style={styles.form}>
          <PasswordInput
            labelText="Nova senha"
            placeholder="Sua senha"
            iconName="lock-outline"
            value={password}
            onChangeText={setPassword}
          />

          <PasswordInput
            labelText="Confirmação"
            placeholder="Sua senha"
            iconName="lock-outline"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <View style={styles.buttonContainer}>
            <Button
              variant="primary"
              title="Salvar"
              onPress={handleReset}
            />

            <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.7} onPress={() => router.back()}>
              <Text style={styles.secondaryButtonText}>Voltar ao login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}