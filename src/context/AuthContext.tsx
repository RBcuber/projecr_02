import { createContext } from "react";
import type UserInfo from "../types/UserInfo";

interface AuthContextType {
  user: UserInfo | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserInfo | undefined>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);