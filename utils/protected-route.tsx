import { useAuth } from "@/context/auth-context";
import { Redirect } from "expo-router";
import { ReactNode } from "react";

export const ProtectedRoute = ({children}: {children: ReactNode}) => {
    const {user} = useAuth()

    if (!user) {
        return <Redirect href="/" />
    }

    return children
}