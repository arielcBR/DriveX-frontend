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
    throw new Error("Erro ao enviar e-mail de recuperação.");
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
    throw new Error("Código inválido ou expirado.");
  }
}

export async function redefinirSenhaFinal(email: string, codigo: string, senhaNova: string) {
  const response = await fetch(`${API_CONFIG.baseURL}/security/redefinir-senha`, {
    method: "PUT", // Conforme a doc, aqui é PUT
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, codigo: codigo, senha: senhaNova }),
  });

  if (response.ok === false) {
    throw new Error("Erro ao redefinir a senha.");
  }
}