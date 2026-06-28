import { API_CONFIG } from "@/config/api";

export async function editProfile(data: { nome?: string; email?: string; telefone?: string }): Promise<void> {
    try {
        const response = await fetch(`${API_CONFIG.baseURL}/usuario/editar-perfil`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });

        if (!response.ok) {
            let errorMsg = "Erro ao editar perfil";
            try {
                const errorData = await response.json();
                errorMsg = errorData?.message || errorData?.erro || errorMsg;
            } catch (e) {
                // Ignore parse errors
            }
            throw new Error(errorMsg);
        }
    } catch (error) {
        console.error("Erro no editProfile:", error);
        throw error;
    }
}

export async function changePassword(data: { senhaAtual: string; novaSenha: string }): Promise<void> {
    try {
        const response = await fetch(`${API_CONFIG.baseURL}/usuario/alterar-senha`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });

        if (!response.ok) {
            let errorMsg = "Erro ao alterar senha";
            try {
                const errorData = await response.json();
                errorMsg = errorData?.message || errorData?.erro || errorMsg;
            } catch (e) {
                // Ignore parse errors
            }
            throw new Error(errorMsg);
        }
    } catch (error) {
        console.error("Erro no changePassword:", error);
        throw error;
    }
}

export async function updateNotifications(data: { notificacao: string }): Promise<void> {
    try {
        const response = await fetch(`${API_CONFIG.baseURL}/usuario/notificacoes`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });

        if (!response.ok) {
            let errorMsg = "Erro ao atualizar notificações";
            try {
                const errorData = await response.json();
                errorMsg = errorData?.message || errorData?.erro || errorMsg;
            } catch (e) {
                // Ignore parse errors
            }
            throw new Error(errorMsg);
        }
    } catch (error) {
        console.error("Erro no updateNotifications:", error);
        throw error;
    }
}

export async function deleteAccount(data: { senha?: string }): Promise<void> {
    try {
        const response = await fetch(`${API_CONFIG.baseURL}/usuario/excluir-conta`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });

        if (!response.ok) {
            let errorMsg = "Erro ao excluir conta";
            try {
                const errorData = await response.json();
                errorMsg = errorData?.message || errorData?.erro || errorMsg;
            } catch (e) {
                // Ignore parse errors
            }
            throw new Error(errorMsg);
        }
    } catch (error) {
        console.error("Erro no deleteAccount:", error);
        throw error;
    }
}
