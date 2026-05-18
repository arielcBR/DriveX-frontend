export interface RegisterDriverRequest {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
}

export interface RegisterDriverResponse {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  token?: string;
}
