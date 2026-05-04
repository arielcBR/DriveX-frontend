import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { SummaryGoalCard } from "@/components/SummaryGoalCard";
import { TaskProgressCard } from "@/components/TaskProgressCard";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Goals() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Metas</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.newGoalButton}>
            <Text style={styles.newGoalButtonText}>Nova meta</Text>
          </TouchableOpacity>
        </View>

        <SummaryGoalCard 
          currentValue={3} 
          maxValue={5} 
          period="Abr 2026" 
          daysRemaining={23} 
        />

        <SectionHeader 
          title="Corridas" 
          iconName="directions-car" 
          badgeText="baseado em corridas" 
        />

        <TaskProgressCard 
          title="Número de corridas"
          subTitle="Quantidade no mês"
          currentValue={40}
          maxValue={50}
          unit="corridas feitas"
          variant="success"
          iconName="schedule"
          status="em andamento"
        />

        <TaskProgressCard 
          title="Quilômetros rodados"
          subTitle="Km_inicial → km_final"
          currentValue={1820}
          maxValue={2500}
          unit="km"
          variant="info" 
          iconName="map"
          status="em andamento"
        />

        <SectionHeader 
          title="Financeiro" 
          iconName="attach-money" 
          badgeText="Baseado em Custo" 
        />

        <TaskProgressCard 
          title="Receita bruta"
          subTitle="Valor ganho acumulado"
          currentValue={2780}
          maxValue={3500}
          unit="R$"
          variant="success"
          iconName="attach-money"
          status="em andamento"
        />

        <TaskProgressCard 
          title="Limite de gastos"
          subTitle="Custo total no periodo"
          currentValue={500}
          maxValue={800}
          unit="R$"
          variant="danger" 
          iconName="shield"
          status="atenção"
        />

        <SectionHeader 
          title="Veículo" 
          iconName="build" 
          badgeText="Baseado em Manutenção" 
        />

        <TaskProgressCard 
          title="Manutenções preventivas"
          subTitle="natureza: preventiva"
          currentValue={2}
          maxValue={2}
          unit="realizadas"
          variant="success"
          iconName="check-box"
          status="concluída"
        />

        <TaskProgressCard 
          title="Exemplo"
          subTitle="meta de exemplo personalizavel"
          currentValue={68}
          maxValue={100}
          unit="exemplo"
          variant="danger" 
          iconName="shield"
          status="atenção"
        />

      </ScrollView>
    </Container>
  );
}