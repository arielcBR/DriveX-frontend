import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { PasswordInput } from "@/components/PasswordInput";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function ResetPassword() {
  const router = useRouter();

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
          />

          <PasswordInput
            labelText="Confirmação"
            placeholder="Sua senha"
            iconName="lock-outline"
          />

          <View style={styles.buttonContainer}>
            <Button
              variant="primary"
              title="Salvar"
              textStyle={{ fontSize: 16 }}
              onPress={() => console.log("Salvar nova senha e abrir pop-up")}
            />

            <TouchableOpacity 
              style={styles.secondaryButton} 
              activeOpacity={0.7}
              onPress={() => router.back()}
            >
              <Text style={styles.secondaryButtonText}>Voltar ao login</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </Container>
  );
}