import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ErrorMessageProps = {
  message?: string;
  onRetry?: () => void;
};

export function ErrorMessage({
  message = "Algo deu errado. Tente novamente.",
  onRetry,
}: ErrorMessageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>⚠️</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry && (
        <TouchableOpacity style={styles.button} onPress={onRetry}>
          <Text style={styles.buttonText}>Tentar novamente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}