import { reliveApi } from '@/api/reliveApi';
import type { User } from '../interfaces/user.interface';
import axios from 'axios';

interface RegisterError {
    ok: false;
    message: string;
}

interface RegisterSuccess {
    ok: true;
    user: User;
    message: string;
}


export const registerAction = async (
    fullName: string, email: string, password: string, roles: string[]
): Promise<RegisterError | RegisterSuccess> => {
    try {
        const { data } = await reliveApi.post('auth/register', {
            fullName,
            email,
            password,
            roles,
        });
        return {
            ok: true,
            user: data.user,
            message: 'Usuario registrado correctamente',
        };
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 400) {
            return {
                ok: false,
                message: 'Error con Axios al registrar usuario',
            };
        }
        return {
            ok: false,
            message: 'Error al registrar usuario',
        }
    }
}