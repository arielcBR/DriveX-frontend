import { useState } from "react";
import { registerVehicle } from "@/services/vehicleServices";
import { RegisterVehiclePayload, VehicleResponse } from "@/types/vehicle";

export function useRegisterVehicle() {
  const [data, setData] = useState<VehicleResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (payload: RegisterVehiclePayload) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await registerVehicle(payload);
      setData(result);
      return { success: true, data: result };
    } catch (err: any) {
      setError(err.message || "Ocorreu um erro inesperado.");
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { register, data, loading, error };
}