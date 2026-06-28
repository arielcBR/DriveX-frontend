import { Alert } from "@/components/AlertCard";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { useMaintenance } from "@/hooks/useMaintenance";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Maintenance() {
  const {
    data,
    isLoading,
    handleUpdateMileage,
    handleRegisterDocumentation,
    handleRegisterMaintenance,
  } = useMaintenance();

  if (isLoading || !data) {
    return (
      <Container>
        <Header initials="RR" />
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#84CC16" />
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <Header initials="RR" />

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Manutenções</Text>
        <TouchableOpacity style={styles.vehicleCard} activeOpacity={0.8}>
          <View style={styles.vehicleIconContainer}>
            <MaterialIcons name="directions-car" size={24} color="#132338" />
          </View>
          <View style={styles.vehicleInfo}>
            <Text style={styles.vehicleName}>{data.vehicle.name}</Text>
            <Text style={styles.vehicleDetails}>{data.vehicle.details}</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#84CC16" />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Alertas</Text>
        <Alert
          title="Revisão dos 200.00 km"
          iconName="error-outline"
          data={[
            { id: "1", label: "Preventiva - mecanica", value: "Vencido", status: "danger" },
          ]}
        />
        <Alert
          title="Revisão dos 300.00 km"
          iconName="error-outline"
          data={[
            { id: "2", label: "Preventiva - mecanica", value: "a fazer", status: "warning" },
          ]}
        />

        <Text style={styles.sectionTitle}>Saúde do veículo</Text>
        <View style={styles.healthContainer}>
          <View style={[styles.healthCard, styles.healthCardPreventive]}>
            <MaterialIcons name="fact-check" size={24} color="#84CC16" />
            <Text style={[styles.healthValue, styles.healthValuePreventive]}>
              {data.health.preventive}
            </Text>
            <Text style={[styles.healthLabel, styles.healthLabelPreventive]}>
              Preventivas ok
            </Text>
          </View>
          <View style={[styles.healthCard, styles.healthCardCorrective]}>
            <MaterialIcons name="build" size={24} color="#EF4444" />
            <Text style={[styles.healthValue, styles.healthValueCorrective]}>
              +{data.health.corrective}
            </Text>
            <Text style={[styles.healthLabel, styles.healthLabelCorrective]}>
              Corretivas
            </Text>
          </View>
          <View style={[styles.healthCard, styles.healthCardAvg]}>
            <MaterialIcons name="speed" size={24} color="#3B82F6" />
            <Text style={[styles.healthValue, styles.healthValueAvg]}>
              {data.health.avgKm}
            </Text>
            <Text style={[styles.healthLabel, styles.healthLabelAvg]}>
              km médio
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Quilometragem</Text>
        <View style={styles.mileageCard}>
          <View style={styles.mileageHeader}>
            <View>
              <Text style={styles.mileageLabel}>KM atual</Text>
              <Text style={styles.mileageValue}>{data.mileage.current}</Text>
            </View>
            <View>
              <Text style={[styles.mileageLabel, { textAlign: "right" }]}>Ultima atualização</Text>
              <Text style={styles.mileageUpdateValue}>{data.mileage.lastUpdate}</Text>
            </View>
          </View>
          <View style={styles.mileageButtonContainer}>
            <Button
              title="Atualizar agora"
              onPress={handleUpdateMileage}
              textStyle={{ fontSize: 12, paddingHorizontal: 16 }}
            />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Histórico de lançamentos</Text>
        <View style={styles.historyCard}>
          {data.history.map((item: any) => (
            <View key={item.id} style={styles.historyItem}>
              <View
                style={[
                  styles.historyIndicator,
                  item.type === "danger" && styles.historyIndicatorDanger,
                  item.type === "warning" && styles.historyIndicatorWarning,
                  item.type === "info" && styles.historyIndicatorInfo,
                ]}
              />
              <View style={styles.historyContent}>
                <Text style={styles.historyTitle}>{item.title}</Text>
                <Text style={styles.historyDetails}>{item.details}</Text>
              </View>
              <Text
                style={[
                  styles.historyKm,
                  item.type === "danger" && styles.historyKmDanger,
                  item.type === "warning" && styles.historyKmWarning,
                  item.type === "info" && styles.historyKmInfo,
                ]}
              >
                {item.km}
              </Text>
            </View>
          ))}
          <View style={styles.pagination}>
            <TouchableOpacity style={styles.paginationButton}>
              <Text style={styles.paginationText}>Anterior</Text>
            </TouchableOpacity>
            <Text style={styles.paginationText}>1-3 de 6</Text>
            <TouchableOpacity style={styles.paginationButton}>
              <Text style={styles.paginationText}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footerButtons}>
          <TouchableOpacity
            style={styles.outlineButton}
            onPress={handleRegisterDocumentation}
            activeOpacity={0.7}
          >
            <Text style={styles.outlineButtonText}>+ Registrar documentação</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.outlineButton}
            onPress={handleRegisterMaintenance}
            activeOpacity={0.7}
          >
            <Text style={styles.outlineButtonText}>+ registrar manutenção</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}