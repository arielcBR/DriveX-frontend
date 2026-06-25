import { API_CONFIG } from "@/config/api";
import { SignUpRequest, SignUpResponse } from "@/types/signUp";

export async function signUp(
    name: string,
    email: string,
    password: string,
    phone: string
): Promise<SignUpResponse> {
    const body: SignUpRequest = {
        nome: name,
        email,
        senha: password,
        telefone: phone,
    };

    const response = await fetch(`${API_CONFIG.baseURL}/usuario`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        let errorData: any;
        const errorText = await response.text();
        try {
            errorData = JSON.parse(errorText);
        } catch (e) {
            errorData = { message: errorText || "Erro ao cadastrar usuário" };
        }
        throw errorData;
    }

    const data: SignUpResponse = await response.json();
    console.log("Resposta da API:", data);
    return data;
}