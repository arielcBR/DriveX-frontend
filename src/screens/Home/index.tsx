import React from "react";
import { Text, View } from "react-native";
import { Container } from "@/components/Container";
import { ErrorMessage } from "@/components/ErrorMessage";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { AlertsCard } from "./components/AlertsCard";
import { ChartCard } from "./components/ChartCard";
import { EarningsCard } from "./components/EarningsCard";
import { Header } from "./components/Header";
import { StatsContainer } from "./components/StatsContainer";
import { styles } from "./styles";
import { useHomeData } from "@/hooks/useHomeData";

export function Home() {
  const { data, loading, error } = useHomeData();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage onRetry={() => {}} />;
  
  if (!data) return null;

  return (
    <Container>
      <View style={styles.content}>
        <Header initials={data.user.initials} />
        <Text style={styles.greetingText}>Bem-vindo, {data.user.name}!</Text>
        <EarningsCard earnings={data.earnings} />
        <StatsContainer stats={data.stats} />
        <ChartCard hoursWorked={data.hoursWorked} />
        <AlertsCard alerts={data.alerts} />
      </View>
    </Container>
  );
}