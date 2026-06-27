import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { colors } from "@/constants/theme";
import { useVerifyToken } from "@/hooks/useVerifyToken";
import React, { useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function VerifyToken() {
  const { codigo, setCodigo, isLoading, error, displayEmail, handleVerify, handleResendCode, timer, router } = useVerifyToken();
  const inputs = useRef<Array<TextInput | null>>([]);
  const [otpValues, setOtpValues] = useState<string[]>(Array(8).fill(""));

  if (isLoading) return <LoadingSpinner />;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otpValues];
    newOtp[index] = text;
    setOtpValues(newOtp);
    setCodigo(newOtp.join(""));

    if (text && index < 7) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otpValues[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

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
          <View style={styles.tokenContainer}>
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <TextInput
                  key={index}
                  style={styles.tokenInput}
                  maxLength={1}
                  keyboardType="default"
                  autoCapitalize="characters"
                  value={otpValues[index]}
                  onChangeText={(text) => handleOtpChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  ref={(ref) => (inputs.current[index] = ref)}
                  cursorColor={colors["blue--600"]}
                />
              ))}
          </View>

          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>
              {timer > 0 ? `Reenviar código em ${formatTime(timer)}` : "Não recebeu o código?"}
            </Text>
            {timer === 0 && (
              <TouchableOpacity onPress={handleResendCode} disabled={isLoading}>
                <Text style={styles.resendLink}>Reenviar</Text>
              </TouchableOpacity>
            )}
          </View>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <View style={styles.buttonContainer}>
            <Button
              variant="primary"
              title="Confirmar"
              textStyle={{ fontSize: 16 }}
              onPress={handleVerify}
              disabled={isLoading || codigo.length < 8}
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