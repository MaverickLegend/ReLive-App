import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';

const isAdminGuard = async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
) => {
    try {
        const authStore = useAuthStore();
    
        await authStore.checkAuthStatus();
    
        authStore.isAdmin ? next() : next({ name: 'home' });
        
    } catch (error) {
        console.log('Error en isAdminGuard:', error);
        next({ name: 'home' });
        
    }
};

export default isAdminGuard;
