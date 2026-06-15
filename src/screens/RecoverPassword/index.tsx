import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function RecoverPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

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
              onPress={() => console.log("Navegar para tela de Token")}
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