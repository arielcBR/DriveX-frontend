import React, { createContext, ReactNode, useState } from "react";
import { login } from "../services/authServices";

export interface AuthContextData {
  user: any;
  signed: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  async function signIn(email: string, password: string) {
    const response = await login(email, password);
    setUser(response.user);
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}