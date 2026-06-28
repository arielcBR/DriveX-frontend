import { API_CONFIG } from "../config/api";

export interface LoginResponse {
  id: number;
  email: string;
  telefone?: string;
  nome: string;
  dataCadastro: string;
  notificacaoVencimento: boolean;
  notificacaoManutencao: boolean;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const btoa = (input: string = '') => {
  let str = input;
  let output = '';
  for (let block = 0, charCode, i = 0, map = chars;
  str.charAt(i | 0) || (map = '=', i % 1);
  output += map.charAt(63 & block >> 8 - i % 1 * 8)) {
    charCode = str.charCodeAt(i += 3/4);
    if (charCode > 0xFF) {
      throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
    }
    block = block << 8 | charCode;
  }
  return output;
};

export async function login(email: string, password: string): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa(`${email}:${password}`)}`
      }
    });

    if (!response.ok) {
      const errorData = await response.text();
      let errorMessage = "Erro ao fazer login";
      try {
        const errorJson = JSON.parse(errorData);
        errorMessage = errorJson.message || errorJson.error || errorData;
      } catch (e) {
        if (response.status === 401) {
          errorMessage = "E-mail ou senha inválidos";
        } else {
          errorMessage = errorData || "Erro ao fazer login";
        }
      }
      throw new Error(errorMessage);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Erro no login:", error);
    throw error;
  }
}

export async function logout(): Promise<void> {
  try {
    await fetch(`${API_CONFIG.baseURL}/logout`, {
      method: "POST",
      credentials: "include"
    });
  } catch (error) {
    console.error("Erro no logout:", error);
  }
}