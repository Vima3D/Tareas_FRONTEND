import { createContext } from "react";

export interface User {
  id: string;
  name: string;
  role: "admin" | "user";
}

export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// Creamos el contexto pero NO un componente
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
