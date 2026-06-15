import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { VehicleCard } from "./components/VehicleCard";
import { SummaryBoxes } from "./components/SummaryBoxes";
import { InterventionsList } from "./components/Interventions";
import { ExportSection } from "./components/ExportSection";
import { styles } from "./styles";

export function Reports() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Header initials="RR" />

          <View style={styles.sectionsWrapper}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Ficha técnica do veículo</Text>
              <VehicleCard />
              <SummaryBoxes />
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Próximas intervenções</Text>
              <InterventionsList />
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
