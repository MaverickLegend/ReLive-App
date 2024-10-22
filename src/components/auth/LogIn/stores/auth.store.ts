import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { AuthStatus, type User } from '../interfaces';
import { loginAction } from '../actions';
import { useLocalStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
    const authStatus = ref<AuthStatus>(AuthStatus.Checking);
    const user = ref<User | undefined>();
    const token = ref( useLocalStorage('token', '') );

    const login = async (email: string, password: string) => {
        try {
            const loginResponse = await loginAction(email, password);
            if (!loginResponse.ok) {
                logout();
                console.log(loginResponse.message);
                return false;
            }

            user.value = loginResponse.user;
            token.value = loginResponse.token;
            authStatus.value = AuthStatus.Authenticated;

            return true;
        } catch (error) {
            return logout();
        }
    };

    const logout = () => {
        authStatus.value = AuthStatus.UnAuthenticated;
        user.value = undefined;
        token.value = '';
        return false;
    };

    return {
        user,
        token,
        authStatus,

        // Getters
        isChecking: computed(() => authStatus.value === AuthStatus.Checking),
        isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),

        // TODO: Getter para saber rol del usuario

        username: computed(() => user.value?.fullName),
        // Actions
        login,
    };
});
