import { getMaintenanceData } from "@/services/maintenanceServices";
import { useEffect, useState } from "react";

export function useMaintenance() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getMaintenanceData();
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  function handleUpdateMileage() {}

  function handleRegisterDocumentation() {}

  function handleRegisterMaintenance() {}

  return {
    data,
    isLoading,
    handleUpdateMileage,
    handleRegisterDocumentation,
    handleRegisterMaintenance,
  };
}