import React from "react";
import { Text, View } from "react-native";

import { Container } from "@/components/Container";
import { colors } from "@/constants/theme";

import { AlertsCard } from "./components/AlertsCard";
import { ChartCard } from "./components/ChartCard";
import { EarningsCard } from "./components/EarningsCard";
import { Header } from "./components/Header";
import { StatsContainer } from "./components/StatsContainer";
import { styles } from "./styles";

export function Home() {
  const mockHomeData = {
    user: {
      initials: "RR",
      name: "Rodrigo",
    },
    earnings: {
      gross: "278,50",
      expenses: "145,00",
      net: "133,50",
    },
    stats: {
      valuePerKm: "1,41",
      profitPerHour: "29",
      kmDriven: "3.420",
    },
    hoursWorked: [
      { day: "Seg", value: 0.3, active: false },
      { day: "Ter", value: 0.7, active: true },
      { day: "Qua", value: 0.2, active: false },
      { day: "Qui", value: 0.6, active: true },
      { day: "Sex", value: 0.8, active: true },
      { day: "Sab", value: 0.2, active: false },
      { day: "Dom", value: 0.1, active: false },
    ],
    alerts: [
      { id: "1", title: "IPVA 2026", badgeText: "Vence em 3 dias", badgeColor: colors["red--400"], dotColor: colors["red--400"] },
      { id: "2", title: "Seguro veicular", badgeText: "Vence em 12 dias", badgeColor: colors["orange--500"], dotColor: colors["orange--500"] },
      { id: "3", title: "Multa - R$ 195,23", badgeText: "Pendente", badgeColor: colors["red--400"], dotColor: colors["red--400"] },
    ],
  };

  return (
    <Container>
      <View style={styles.content}>
        <Header initials={mockHomeData.user.initials} />
        <Text style={styles.greetingText}>Bem-vindo, {mockHomeData.user.name}!</Text>
        <EarningsCard earnings={mockHomeData.earnings} />
        <StatsContainer stats={mockHomeData.stats} />
        <ChartCard hoursWorked={mockHomeData.hoursWorked} />
        <AlertsCard alerts={mockHomeData.alerts} />
      </View>
    </Container>
  );
}
