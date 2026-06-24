import { Container } from "@/components/Container";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Header } from "@/components/Header";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useHomeData } from "@/hooks/useHomeData";
import React from "react";
import { Text, View } from "react-native";
import { AlertsCard } from "./components/AlertsCard";
import { EarningsCard } from "./components/EarningsCard";
import { GoalsSection } from "./components/GoalsSection";
import { MileageModal } from "@/components/MileageModal";
import { styles } from "./styles";

export function Home() {
  const { data, loading, error, refetch } = useHomeData();
  const [isMileageModalVisible, setIsMileageModalVisible] = React.useState(false);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage onRetry={refetch} />;
  if (!data) return null;

  return (
    <Container>
      <View style={styles.content}>
        <Header initials={data.user.initials} onCarPress={() => setIsMileageModalVisible(true)} />
        <Text style={styles.greetingText}>Bem-vindo, {data.user.name}!</Text>
        <EarningsCard earnings={data.earnings} />
        <GoalsSection goals={data.goals} onRefresh={refetch} />
        <AlertsCard alertsData={data.alerts} />
      </View>
      <MileageModal 
        visible={isMileageModalVisible}
        onClose={() => setIsMileageModalVisible(false)}
        onSuccess={refetch}
        userId={data.user.id}
      />
    </Container>
  );
}
