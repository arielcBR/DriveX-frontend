import { API_CONFIG } from "@/config/api";

export async function atualizarNotificacao(idUsuario: number, notificacao: string) {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/usuario/notificacoes/${idUsuario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ notificacao: notificacao }),
    });

    if (response.ok === false) {
      throw new Error("Erro ao atualizar notificação.");
    }
  } catch (error) {
    console.error("Erro no atualizarNotificacao:", error);
    throw error;
  }
}

export async function editarDadosPerfil(idUsuario: number, payload: { nome: string; email: string; telefone: string }) {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/usuario/${idUsuario}/editar-perfil`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok === false) {
      throw new Error("Erro ao atualizar perfil.");
    }
  } catch (error) {
    console.error("Erro no editarDadosPerfil:", error);
    throw error;
  }
}

export async function alterarSenhaPerfil(idUsuario: number, payload: { senhaAtual: string; novaSenha: string }) {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/usuario/${idUsuario}/alterar-senha`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok === false) {
      throw new Error("Erro ao alterar senha.");
    }
  } catch (error) {
    console.error("Erro no alterarSenhaPerfil:", error);
    throw error;
  }
}

export async function deletarConta(idUsuario: number, payload: { senha: string }) {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/usuario/${idUsuario}/excluir-conta`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok === false) {
      throw new Error("Erro ao excluir conta.");
    }
  } catch (error) {
    console.error("Erro no deletarConta:", error);
    throw error;
  }
}