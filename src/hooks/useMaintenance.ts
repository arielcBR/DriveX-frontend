import { getMaintenancesList, getVehicleMaintenanceInfo } from "@/services/maintenanceServices";
import { getVehicleData } from "@/services/vehicleServices";
import { useEffect, useState } from "react";

export function useMaintenance() {
  const [vehicleData, setVehicleData] = useState<any>(null);
  const [maintenanceInfo, setMaintenanceInfo] = useState<any>(null);
  const [historyList, setHistoryList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isMaintenanceModalVisible, setIsMaintenanceModalVisible] = useState(false);
  const [isDocModalVisible, setIsDocModalVisible] = useState(false);

  async function loadData() {
    try {
      setIsLoading(true);
      const [vehicle, info, historyResponse] = await Promise.all([
        getVehicleData(),
        getVehicleMaintenanceInfo(),
        getMaintenancesList(0, 10)
      ]);

      setVehicleData(vehicle);
      setMaintenanceInfo(info);
      setHistoryList(historyResponse.content || historyResponse); 
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return {
    vehicleData,
    maintenanceInfo,
    historyList,
    isLoading,
    isMaintenanceModalVisible,
    setIsMaintenanceModalVisible,
    isDocModalVisible,
    setIsDocModalVisible,
    refreshData: loadData,
  };
}