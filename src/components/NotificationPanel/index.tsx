import { colors, sizes } from "@/constants/theme";
import { usePendencias } from "@/hooks/usePendencias";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";
import { NotificationPanelProps } from "./types";

export function NotificationPanel({
  visible,
  onClose,
}: NotificationPanelProps) {
  const [showModal, setShowModal] = React.useState(visible);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const { data, loading, error } = usePendencias(visible);

  useEffect(() => {
    if (visible) {
      setShowModal(true);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowModal(false);
      });
    }
  }, [visible, slideAnim, fadeAnim]);

  const slideInterpolate = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 0],
  });

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.emptyContainer}>
          <ActivityIndicator size="large" color={colors["green--500"]} />
          <Text style={styles.emptyText}>Carregando...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.emptyContainer}>
          <MaterialIcons
            name="error-outline"
            size={48}
            color={colors["red--400"]}
          />
          <Text style={styles.emptyText}>Erro ao carregar pendências.</Text>
        </View>
      );
    }

    if (!data) {
      return null;
    }

    const { kmDesatualizado, manutencaoKmVencido, manutencaoTempoVencido } =
      data;

    const items = [];
    if (kmDesatualizado) {
      items.push({
        id: "1",
        title: "Atualização de quilometragem",
        message:
          "A quilometragem do seu veículo encontra-se desatualizada. Por favor, registre o valor atual para garantir a precisão do plano de manutenções.",
        icon: "speed" as const,
      });
    }
    if (manutencaoKmVencido) {
      items.push({
        id: "2",
        title: "Revisão por quilometragem",
        message:
          "O veículo atingiu o limite de quilometragem estipulado para a revisão. Recomendamos realizar a manutenção preventiva para assegurar seu bom funcionamento.",
        icon: "build" as const,
      });
    }
    if (manutencaoTempoVencido) {
      items.push({
        id: "3",
        title: "Revisão periódica vencida",
        message:
          "O prazo estipulado para a revisão periódica do seu veículo expirou. Agende a manutenção preventiva para evitar danos futuros e garantir sua segurança.",
        icon: "event-busy" as const,
      });
    }

    if (items.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <MaterialIcons
            name="notifications-none"
            size={48}
            color={colors["blue--300"]}
          />
          <Text style={styles.emptyText}>Nenhuma pendência</Text>
        </View>
      );
    }

    return (
      <View style={styles.listContent}>
        {items.map((item) => (
          <View
            key={item.id}
            style={[styles.notificationItem, styles.notificationItemUnread]}
          >
            <View style={styles.itemHeader}>
              <MaterialIcons
                name={item.icon}
                size={20}
                color={colors.white}
                style={{ marginTop: 2 }}
              />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
            <Text style={styles.itemMessage}>{item.message}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <Modal
      visible={showModal}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={onClose}>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: "rgba(0,0,0,0.6)", opacity: fadeAnim },
            ]}
          />
        </TouchableWithoutFeedback>

        <Animated.View
          style={[
            styles.panel,
            { transform: [{ translateX: slideInterpolate }] },
          ]}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Pendências</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <MaterialIcons
                name="close"
                size={sizes.icon_medium}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
          {renderContent()}
        </Animated.View>
      </View>
    </Modal>
  );
}
