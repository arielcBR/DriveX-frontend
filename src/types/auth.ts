export interface User {
  id: number;
  name: string;
  email: string;
  telefone?: string;
}

export interface AuthContextData {
  user: User | null;
  signed: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}