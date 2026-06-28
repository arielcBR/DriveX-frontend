export interface User {
  id: number;
  email: string;
  telefone?: string;
  nome: string;
  dataCadastro?: string;
  notificacaoVencimento?: boolean;
  notificacaoManutencao?: boolean;
}

export interface AuthContextData {
  user: User | null;
  signed: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  updateUser: (data: Partial<User>) => void;
}