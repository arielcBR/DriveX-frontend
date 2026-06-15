import { Container } from "@/components/Container";
import { ErrorMessage } from "@/components/ErrorMessage";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useHomeData } from "@/hooks/useHomeData";
import React from "react";
import { Text, View } from "react-native";
import { AlertsCard } from "./components/AlertsCard";
import { EarningsCard } from "./components/EarningsCard";
import { GoalsSection } from "./components/GoalsSection";
import { Header } from "./components/Header";
import { styles } from "./styles";

export function Home() {
  const userId = 1; 
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
        <GoalsSection goals={data.goals} />
        <AlertsCard alertsData={data.alerts} />
      </View>
    </Container>
  );
}