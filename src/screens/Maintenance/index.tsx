import { Alert } from "@/components/AlertCard";
import { Container } from "@/components/Container";
import { DocumentationModal } from "@/components/DocumentationModal";
import { Header } from "@/components/Header";
import { MaintenanceModal } from "@/components/MaintenanceModal";
import { useMaintenance } from "@/hooks/useMaintenance";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Maintenance() {
  const {
    vehicleData,
    maintenanceInfo,
    historyList,
    isLoading,
    isMaintenanceModalVisible,
    setIsMaintenanceModalVisible,
    isDocModalVisible,
    setIsDocModalVisible,
    refreshData,
  } = useMaintenance();

  if (isLoading || !vehicleData || !maintenanceInfo) {
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
            <Text style={styles.vehicleName}>{vehicleData.marca} {vehicleData.modelo}</Text>
            <Text style={styles.vehicleDetails}>{vehicleData.placa} - {vehicleData.kmAtual} KM</Text>
          </View>
        </TouchableOpacity>

        {/* Alertas podem ser derivados de regras futuras do backend, deixado fixo por enquanto para manter o layout */}
        <Text style={styles.sectionTitle}>Alertas</Text>
        <Alert
          title={`Próxima revisão em breve`}
          iconName="error-outline"
          data={[{ id: "1", label: "Preventiva recomendada", value: "Atenção", status: "warning" }]}
        />

        <Text style={styles.sectionTitle}>Saúde do veículo</Text>
        <View style={styles.healthContainer}>
          <View style={[styles.healthCard, styles.healthCardPreventive]}>
            <MaterialIcons name="fact-check" size={24} color="#84CC16" />
            <Text style={[styles.healthValue, styles.healthValuePreventive]}>
              {maintenanceInfo.totalManutencoesPreventivas}
            </Text>
            <Text style={[styles.healthLabel, styles.healthLabelPreventive]}>Preventivas ok</Text>
          </View>
          <View style={[styles.healthCard, styles.healthCardCorrective]}>
            <MaterialIcons name="build" size={24} color="#EF4444" />
            <Text style={[styles.healthValue, styles.healthValueCorrective]}>
              {maintenanceInfo.totalManutencoesCorretivas}
            </Text>
            <Text style={[styles.healthLabel, styles.healthLabelCorrective]}>Corretivas</Text>
          </View>
          <View style={[styles.healthCard, styles.healthCardAvg]}>
            <MaterialIcons name="speed" size={24} color="#3B82F6" />
            <Text style={[styles.healthValue, styles.healthValueAvg]}>
              {maintenanceInfo.mediaPrecoManutencao ? `R$ ${maintenanceInfo.mediaPrecoManutencao.toFixed(2)}` : "0"}
            </Text>
            <Text style={[styles.healthLabel, styles.healthLabelAvg]}>Custo médio</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Histórico de lançamentos</Text>
        <View style={styles.historyCard}>
          {historyList.length === 0 ? (
            <Text style={{ color: "#74839D", textAlign: "center" }}>Nenhum lançamento encontrado.</Text>
          ) : (
            historyList.map((item: any) => (
              <View key={item.id || item.dataManutencao} style={styles.historyItem}>
                <View style={[styles.historyIndicator, styles.historyIndicatorInfo]} />
                <View style={styles.historyContent}>
                  <Text style={styles.historyTitle}>{item.descricao}</Text>
                  <Text style={styles.historyDetails}>R$ {item.valor}</Text>
                </View>
                <Text style={[styles.historyKm, styles.historyKmInfo]}>{item.dataManutencao}</Text>
              </View>
            ))
          )}
        </View>

        <View style={styles.footerButtons}>
          <TouchableOpacity
            style={styles.outlineButton}
            onPress={() => setIsDocModalVisible(true)}
            activeOpacity={0.7}
          >
            <Text style={styles.outlineButtonText}>+ Registrar documentação</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.outlineButton}
            onPress={() => setIsMaintenanceModalVisible(true)}
            activeOpacity={0.7}
          >
            <Text style={styles.outlineButtonText}>+ registrar manutenção</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Renderização Condicional dos Modais */}
      <MaintenanceModal 
        visible={isMaintenanceModalVisible} 
        onClose={() => setIsMaintenanceModalVisible(false)} 
        onSuccess={refreshData}
        vehicleId={vehicleData.id || 1}
      />

      <DocumentationModal 
        visible={isDocModalVisible} 
        onClose={() => setIsDocModalVisible(false)} 
        onSuccess={refreshData}
        userId={vehicleData.idUsuario || 1}
      />
    </Container>
  );
}