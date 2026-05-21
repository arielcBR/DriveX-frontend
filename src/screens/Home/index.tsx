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

// import { useAuth } from "@/contexts/AuthContext";

export function Home() {
  // const { user } = useAuth();
  const userId = 7; 
  const { data, loading, error } = useHomeData(userId);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage onRetry={() => {}} />;
  if (!data) return null;

  return (
    <Container>
      <View style={styles.content}>
        <Header initials={data.user.initials} /> 
        <Text style={styles.greetingText}>Bem-vindo, {data.user.name}!</Text>
        <EarningsCard earnings={data.earnings} />
        
        <AlertsCard alertsData={data.alerts} />
      </View>
    </Container>
  );
}