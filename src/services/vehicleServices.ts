import { API_CONFIG } from "@/config/api";
import { RegisterVehiclePayload, VehicleResponse } from "@/types/vehicle";

export async function registerVehicle(payload: RegisterVehiclePayload): Promise<VehicleResponse> {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/veiculo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || "Erro ao cadastrar veículo.");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro no registerVehicle:", error);
    throw error;
  }
}