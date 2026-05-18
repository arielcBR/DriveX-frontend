import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { GoogleButton } from "@/components/GoogleButton";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { PasswordInput } from "@/components/PasswordInput";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function RegisterDriver() {
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
            <Text style={styles.title}>Cadastro</Text>

            <Input
              labelText="Nome completo"
              placeholder="Nome do usuário"
              iconName="person-outline"
            />

            <Input
              labelText="Telefone"
              placeholder="(xx)xxxxx-xxxx"
              iconName="phone"
              keyboardType="phone-pad"
            />

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

            <GoogleButton title="Cadastrar com Google" />

            <View style={styles.separatorContainer}>
              <View style={styles.separatorLine} />
              <Text style={styles.separatorText}>OU</Text>
              <View style={styles.separatorLine} />
            </View>

            <Button
              variant="primary"
              title="Cadastrar"
              textStyle={{ fontSize: 20 }}
            />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Já tem uma conta?</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.footerLink}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}
