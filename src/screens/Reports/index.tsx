import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { VehicleCard } from "./components/VehicleCard";
import { SummaryBoxes } from "./components/SummaryBoxes";
import { InterventionsList } from "./components/Interventions";
import { ExportSection } from "./components/ExportSection";
import { styles } from "./styles";
import { useVehicleData } from "@/hooks/useVehicleData";
import { useReportsData } from "@/hooks/useReportsData";
import { ActivityIndicator } from "react-native";
import { colors } from "@/constants/theme";

export function Reports() {
  const { data: vehicleData, loading: vehicleLoading } = useVehicleData();
  const { infoManutencao, pendencias, manutencoes, loading: reportsLoading } = useReportsData();

  if (vehicleLoading || reportsLoading) {
    return (
      <Container>
        <View style={[styles.content, { justifyContent: 'center', alignItems: 'center' }]}>
          <ActivityIndicator size="large" color={colors["green--500"]} />
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Header initials="RR" />

          <View style={styles.sectionsWrapper}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Ficha técnica do veículo</Text>
              <VehicleCard data={vehicleData} />
              <SummaryBoxes data={infoManutencao} />
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
      </ScrollView>
    </Container>
  );
}
