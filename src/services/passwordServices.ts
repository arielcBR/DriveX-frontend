import { API_CONFIG } from "@/config/api";

export async function enviarEmailRecuperacao(email: string) {
  const response = await fetch(`${API_CONFIG.baseURL}/security/enviar-codigo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });

  if (response.ok === false) {
    let errorMsg = "Erro ao enviar e-mail de recuperação.";
    try {
      const data = await response.json();
      if (data && data.message) errorMsg = data.message;
    } catch (e) { }
    throw new Error(errorMsg);
  }
}

export async function validarTokenRecuperacao(email: string, codigo: string) {
  const response = await fetch(`${API_CONFIG.baseURL}/security/validar-codigo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, codigo: codigo }),
  });

  if (response.ok === false) {
    let errorMsg = "Código inválido ou expirado.";
    try {
      const data = await response.json();
      if (data && data.message) errorMsg = data.message;
    } catch (e) { }
    throw new Error(errorMsg);
  }
}

export async function redefinirSenhaFinal(email: string, codigo: string, senhaNova: string) {
  const response = await fetch(`${API_CONFIG.baseURL}/security/redefinir-senha`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, codigo: codigo, senha: senhaNova }),
  });

  if (response.ok === false) {
    let errorMsg = "Erro ao redefinir a senha.";
    try {
      const data = await response.json();
      if (data && data.message) {
        errorMsg = data.message;
      }
    } catch (e) {
      // Ignora erro de JSON e mantém a mensagem padrão
    }
    throw new Error(errorMsg);
  }
}