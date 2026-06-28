import { colors } from "@/constants/theme";
import { useVehicleData } from "@/hooks/useVehicleData";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import { Container } from "@/components/Container";

export function VehicleDetails() {
  const { data, loading, error } = useVehicleData();
  const [showTooltip, setShowTooltip] = useState(false);

  if (loading) {
    return (
      <Container>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors["green--500"]} />
          <Text style={styles.loadingText}>Carregando dados do veículo...</Text>
        </View>
      </Container>
    );
  }

  if (error || !data) {
    return (
      <Container>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Erro ao carregar os dados do veículo.</Text>
        </View>
      </Container>
    );
  }



  const formatNumber = (num: number) => {
    return num.toLocaleString('pt-BR');
  };

  const shortModel = data.modelo ? data.modelo.split(' ')[0] : '';
  const formattedType = data.tipo ? data.tipo.charAt(0).toUpperCase() + data.tipo.slice(1).toLowerCase() : '';

  return (
    <Container>
      <View style={styles.content}>
        <Text style={styles.headerTitle}>Meu veículo</Text>

        <View style={styles.mainCard}>
          <View style={styles.mainCardTop}>
            <View style={styles.badgeHatch}>
              <Text style={styles.badgeHatchText}>{formattedType}</Text>
            </View>
            <View style={styles.badgeAtivo}>
              <View style={styles.dot} />
              <Text style={styles.badgeAtivoText}>ativo</Text>
            </View>
          </View>

          <View style={styles.carImageContainer}>
            <FontAwesome5 
              name="car-side" 
              size={100} 
              color={colors["blue--600"]} 
              style={styles.carImage} 
            />
          </View>

          <View style={styles.mainCardBottom}>
            <View style={{ flex: 1, marginRight: 12 }}>
              <Text style={styles.carName} numberOfLines={1} ellipsizeMode="tail">
                {data.marca} {shortModel}
              </Text>
              <Text style={styles.carDetails}>{data.ano} - {data.cor}</Text>
            </View>
            <Text style={styles.carPlate}>{data.placa}</Text>
          </View>
        </View>

        <View style={styles.infoCardsRow}>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardLabel}>KM ATUAL</Text>
            <View style={styles.infoCardValueRow}>
              <Text style={styles.infoCardValue}>{formatNumber(data.kmAtual)}</Text>
              <Text style={styles.infoCardUnit}>km</Text>
            </View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardLabel}>PRÓXIMA REVISÃO</Text>
            <View style={styles.infoCardValueRow}>
              <Text style={styles.infoCardValue}>{formatNumber(data.proximaManutencaoKm)}</Text>
              <Text style={styles.infoCardUnit}>km</Text>
            </View>
            <TouchableOpacity 
              style={styles.infoIcon}
              onPress={() => setShowTooltip(!showTooltip)}
            >
              <MaterialIcons 
                name="info-outline" 
                size={16} 
                color={colors.white} 
              />
            </TouchableOpacity>
          </View>
        </View>

        {showTooltip && (
          <View style={styles.tooltipContainer}>
            <Text style={styles.tooltipText}>Os dados são gerados por IA e podem apresentar imprecisões.</Text>
          </View>
        )}

        <Text style={styles.sectionTitle}>IDENTIFICAÇÃO</Text>

        <View style={styles.identificationCard}>
          <View style={styles.identItem}>
            <View style={styles.identIconContainer}>
              <MaterialIcons name="directions-car" size={20} color={colors["green--500"]} />
            </View>
            <View style={styles.identTextContainer}>
              <Text style={styles.identLabel}>Marca</Text>
              <Text style={styles.identValue}>{data.marca}</Text>
            </View>
          </View>

          <View style={styles.identItem}>
            <View style={styles.identIconContainer}>
              <MaterialIcons name="local-offer" size={20} color={colors["green--500"]} />
            </View>
            <View style={styles.identTextContainer}>
              <Text style={styles.identLabel}>Modelo</Text>
              <Text style={styles.identValue}>{data.modelo}</Text>
            </View>
          </View>

          <View style={styles.identItem}>
            <View style={styles.identIconContainer}>
              <MaterialIcons name="calendar-month" size={20} color={colors["green--500"]} />
            </View>
            <View style={styles.identTextContainer}>
              <Text style={styles.identLabel}>Ano</Text>
              <Text style={styles.identValue}>{data.ano}</Text>
            </View>
          </View>

          <View style={styles.identItem}>
            <View style={styles.identIconContainer}>
              <MaterialIcons name="palette" size={20} color={colors["green--500"]} />
            </View>
            <View style={styles.identTextContainer}>
              <Text style={styles.identLabel}>Cor</Text>
              <Text style={styles.identValue}>{data.cor}</Text>
            </View>
          </View>

          <View style={styles.identItem}>
            <View style={styles.identIconContainer}>
              <MaterialIcons name="dashboard" size={20} color={colors["green--500"]} />
            </View>
            <View style={styles.identTextContainer}>
              <Text style={styles.identLabel}>Tipo</Text>
              <Text style={styles.identValue}>{formattedType}</Text>
            </View>
          </View>

          <View style={[styles.identItem, { marginBottom: 0 }]}>
            <View style={styles.identIconContainer}>
              <MaterialIcons name="credit-card" size={20} color={colors["green--500"]} />
            </View>
            <View style={styles.identTextContainer}>
              <Text style={styles.identLabel}>Placa</Text>
              <Text style={styles.identValue}>{data.placa}</Text>
            </View>
          </View>
        </View>


        
      </View>
    </Container>
  );
}
