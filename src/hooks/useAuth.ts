import { useContext } from "react";
import { AuthContext } from "../contexts/authContexts";

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}