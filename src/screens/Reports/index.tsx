import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { colors } from "@/constants/theme";
import { useReportsData } from "@/hooks/useReportsData";
import { useVehicleData } from "@/hooks/useVehicleData";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { ExportSection } from "./components/ExportSection";
import { InterventionsList } from "./components/Interventions";
import { SummaryBoxes } from "./components/SummaryBoxes";
import { VehicleCard } from "./components/VehicleCard";
import { styles } from "./styles";

export function Reports() {
  const { data: vehicleData, loading: vehicleLoading } = useVehicleData();
  const { infoManutencao, pendencias, manutencoes, loading: reportsLoading } = useReportsData();

  if (vehicleLoading || reportsLoading) {
    return (
      <Container>
        <View style={[styles.content, { justifyContent: 'center', alignItems: 'center', flex: 1 }]}>
          <ActivityIndicator size="large" color={colors["green--500"]} />
        </View>
      </Container>
    );
  }

  const proximaRevisao = vehicleData?.kmAtual != null 
    ? Math.ceil((vehicleData.kmAtual + 1) / 10000) * 10000 
    : 0;

  return (
    <Container>
      <View style={styles.content}>
        <Header initials="RR" />

        <View style={styles.sectionsWrapper}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Ficha técnica do veículo</Text>
            
            <VehicleCard data={vehicleData} proximaRevisao={proximaRevisao} />
            <SummaryBoxes data={infoManutencao} proximaRevisao={proximaRevisao} />
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Últimas manutenções</Text>
            <InterventionsList data={manutencoes?.content || []} />
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Exportar relatórios</Text>
            <ExportSection />
          </View>
        </View>
      </View>
    </Container>
  );
}