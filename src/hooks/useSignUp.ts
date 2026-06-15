import { useState } from "react";
import { signUp } from "@/services/signUpServices";
import { SignUpResponse } from "@/types/signUp";

export function useSignUp() {
    const [data, setData] = useState<SignUpResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const register = async (
        name: string,
        email: string,
        password: string,
        phone: string
    ) => {
        setLoading(true);
        setError(null);

        try {
            const result = await signUp(name, email, password, phone);
            setData(result);
            return { success: true, data: result };
        } catch (err: any) {
            setError(err.message || "Ocorreu um erro inesperado.");
            return { success: false, error: err.message };
        } finally {
            setLoading(false);
        }
    };

    return { register, data, loading, error };
}