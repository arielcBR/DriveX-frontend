import React from "react";
import { Text, View } from "react-native";
import { Container } from "@/components/Container";
import { ErrorMessage } from "@/components/ErrorMessage";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { AlertsCard } from "./components/AlertsCard";
import { EarningsCard } from "./components/EarningsCard";
import { Header } from "./components/Header";
import { styles } from "./styles";
import { useHomeData } from "@/hooks/useHomeData";


export function Home() {
  // const { user } = useAuth();
  const idUsuario = 7; // Substitua pelo ID real do usuário logado
  
  const { data, loading, error } = useHomeData(idUsuario);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage onRetry={() => {}} />;
  if (!data) return null;

  return (
    <Container>
      <View style={styles.content}>
        <Header initials="AC" /> 
        <Text style={styles.greetingText}>Bem-vindo!</Text>
        
        <EarningsCard earnings={data.earnings} />
        
        {/* CORREÇÃO: Alterado de data.alertas para data.alerts */}
        <AlertsCard alertsData={data.alerts} />
      </View>
    </Container>
  );
}