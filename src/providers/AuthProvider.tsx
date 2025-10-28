import { useState, type ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";
import type UserInfo from "../types/UserInfo";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserInfo>();
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
};