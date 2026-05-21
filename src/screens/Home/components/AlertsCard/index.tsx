import React, { useEffect, useState, useRef } from "react";
import { Text, View, FlatList, ViewToken } from "react-native";
import { styles, SLIDER_WIDTH } from "./styles";
import { ProcessedAlert, AlertsCardProps } from "./types";
import { AlertSlide } from "./components/AlertSlide";

const chunkArray = (arr: ProcessedAlert[], size: number) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
};

export function AlertsCard({ alertsData }: AlertsCardProps) {
  const [slides, setSlides] = useState<ProcessedAlert[][]>([]);
  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (alertsData && alertsData.length > 0) {
      const processedData = processAlerts(alertsData);
      
      processedData.sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      });

      setSlides(chunkArray(processedData, 3));
    }
  }, [alertsData]);

  const processAlerts = (data: any[]): ProcessedAlert[] => {
    const today = new Date();

    return data.map(item => {
      let daysRemaining = null;
      let statusText = "";
      let urgency: 'high' | 'medium' | 'low' = 'low';

      const dueDateString = item.dataVencimento || item.dueDate;

      if (dueDateString) {
        const dueDate = new Date(dueDateString);
        const diffTime = dueDate.getTime() - today.getTime();
        daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (daysRemaining < 0) {
          statusText = "Pendente";
          urgency = "high";
        } else if (daysRemaining === 0) {
          statusText = "Vence hoje";
          urgency = "high";
        } else if (daysRemaining <= 5) {
          statusText = `Vence em ${daysRemaining} dias`;
          urgency = "high";
        } else {
          statusText = `Vence em ${daysRemaining} dias`;
          urgency = "medium";
        }
      }

      return { 
        costId: item.idCusto || item.costId, 
        description: item.descricao || item.description,
        amount: item.valor || item.amount,
        type: item.tipo || item.type,
        dueDate: dueDateString,
        daysRemaining, 
        statusText, 
        urgency 
      };
    });
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== null) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  if (!slides || slides.length === 0) return null;

  return (
    <View style={styles.alertsCard}>
      <Text style={styles.alertsTitle}>Alertas de vencimento</Text>
      <FlatList
        data={slides}
        keyExtractor={(_, index) => `slide-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={SLIDER_WIDTH} 
        renderItem={({ item }) => <AlertSlide alerts={item} />}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      {slides.length > 1 && (
        <View style={styles.paginationContainer}>
          {slides.map((_, index) => (
            <View
              key={`dot-${index}`}
              style={[
                styles.paginationDot,
                activeIndex === index 
                  ? styles.paginationDotActive 
                  : styles.paginationDotInactive
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
}