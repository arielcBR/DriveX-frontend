import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function VerifyToken() {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  return (
    <Container>
      <View style={styles.content}>
        
        <View style={styles.header}>
          <Logo />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Verifique seu e-mail</Text>
          <Text style={styles.subtitle}>Enviamos um código de 6 dígitos para</Text>
          <Text style={styles.emailHighlight}>jo***@gmail.com</Text>
        </View>

        <View style={styles.form}>
          
          <View style={styles.tokenContainer}>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <TextInput
                key={index}
                style={styles.tokenInput}
                keyboardType="number-pad"
                maxLength={1}
                value={code[index]}
                onChangeText={(text) => {
                  const newCode = [...code];
                  newCode[index] = text;
                  setCode(newCode);
                }}
              />
            ))}
          </View>

          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Reenviar em 01:24</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.resendLink}>Reenviar código</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              variant="primary"
              title="Confirmar"
              textStyle={{ fontSize: 16 }}
              onPress={() => console.log("Navegar para Alterar Senha")}
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