import { createDriver } from "@/services/driverServices";
import { RegisterDriverRequest, RegisterDriverResponse } from "@/types/driver";
import { useState } from "react";

export function useRegisterDriver() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const register = async (
    data: RegisterDriverRequest,
  ): Promise<RegisterDriverResponse | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await createDriver(data);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Erro desconhecido"));
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
}
