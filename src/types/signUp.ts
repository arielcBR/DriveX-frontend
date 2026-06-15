export interface SignUpRequest {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
}

export interface SignUpResponse {
    idUsuario: number;
    nome: string;
    email: string;
    dataCadastro: string;
    telefone: string;
}