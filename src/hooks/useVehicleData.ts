import { getVehicleData } from "@/services/vehicleServices";
import { VehicleResponse } from "@/types/vehicle";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

export function useVehicleData() {
  const [data, setData] = useState<VehicleResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = (silent = false) => {
    if (!silent) setLoading(true);
    getVehicleData()
      .then((resultado) => setData(resultado))
      .catch((erro) => setError(erro))
      .finally(() => setLoading(false));
  };

  useFocusEffect(
    useCallback(() => {
      fetchData(data !== null);
    }, [data !== null]),
  );

  return { data, loading, error, refetch: fetchData };
}
