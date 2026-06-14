import { colors, sizes } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";
import { NotificationItem, NotificationPanelProps } from "./types";

const mockNotifications: NotificationItem[] = [
  {
    id: "1",
    title: "Revisão agendada",
    message: "A revisão do seu veículo (Placa ABC-1234) está agendada para amanhã.",
    time: "Há 2 horas",
    read: false,
  },
  {
    id: "2",
    title: "Meta atingida!",
    message: "Parabéns! Você atingiu sua meta de faturamento desta semana.",
    time: "Ontem",
    read: true,
  },
  {
    id: "3",
    title: "Alerta de manutenção",
    message: "É recomendável verificar o nível de óleo nos próximos dias.",
    time: "2 dias atrás",
    read: true,
  },
];

export function NotificationPanel({ visible, onClose }: NotificationPanelProps) {
  const [showModal, setShowModal] = React.useState(visible);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

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

  const renderItem = ({ item }: { item: NotificationItem }) => (
    <View style={[styles.notificationItem, !item.read && styles.notificationItemUnread]}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemTime}>{item.time}</Text>
      </View>
      <Text style={styles.itemMessage}>{item.message}</Text>
    </View>
  );

  return (
    <Modal visible={showModal} transparent animationType="none" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={onClose}>
          <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0,0,0,0.6)', opacity: fadeAnim }]} />
        </TouchableWithoutFeedback>

        <Animated.View style={[styles.panel, { transform: [{ translateX: slideInterpolate }] }]}>
          <View style={styles.header}>
            <Text style={styles.title}>Notificações</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <MaterialIcons name="close" size={sizes.icon_medium} color={colors.white} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={mockNotifications}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <MaterialIcons name="notifications-none" size={48} color={colors["blue--300"]} />
                <Text style={styles.emptyText}>Nenhuma notificação</Text>
              </View>
            }
          />
        </Animated.View>
      </View>
    </Modal>
  );
}
