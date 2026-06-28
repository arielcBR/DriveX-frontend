import { AuthContextData, User } from "@/types/auth";
import React, { createContext, ReactNode, useState } from "react";
import { login } from "../services/authServices";

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  async function signIn(email: string, password: string) {
    const response = await login(email, password);
    setUser(response);
  }

  function signOut() {
    setUser(null);
  }

  function updateUser(data: Partial<User>) {
    setUser(prev => prev ? { ...prev, ...data } : null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}