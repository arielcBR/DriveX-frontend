import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { GoogleButton } from "@/components/GoogleButton";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { PasswordInput } from "@/components/PasswordInput";
import { colors } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 24 }}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Logo />
          </View>

          <View style={styles.form}>
            <Text style={styles.title}>Bem-vindo</Text>

            <Input
              labelText="E-mail"
              placeholder="seu@email.com"
              iconName="mail-outline"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <PasswordInput
              labelText="Senha"
              placeholder="••••••••"
              iconName="lock-outline"
            />

            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                activeOpacity={0.7}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <View style={[styles.checkbox, rememberMe && styles.checkboxActive]}>
                  {rememberMe && (
                    <MaterialIcons name="check" size={12} color={colors["blue--900"]} />
                  )}
                </View>
                <Text style={styles.checkboxText}>Lembrar de mim</Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>

            <Button
              variant="primary"
              title="Entrar"
              textStyle={{ fontSize: 20 }}
            />

            <View style={styles.separatorContainer}>
              <View style={styles.separatorLine} />
              <Text style={styles.separatorText}>OU</Text>
              <View style={styles.separatorLine} />
            </View>

            <GoogleButton title="Entrar com Google" />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Não tem uma conta?</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.footerLink}>Criar conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}