import { API_CONFIG } from "@/config/api";
import { RegisterDriverRequest, RegisterDriverResponse } from "@/types/driver";

export async function createDriver(
  data: RegisterDriverRequest,
): Promise<RegisterDriverResponse> {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/usuario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.text();
      let errorMessage = "Erro ao criar usuário";
      try {
        const errorJson = JSON.parse(errorData);
        errorMessage = errorJson.message || errorJson.error || errorData;
      } catch (e) {
        errorMessage = errorData || "Erro ao criar usuário";
      }
      throw new Error(errorMessage);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro no createDriver:", error);
    throw error;
  }
}
