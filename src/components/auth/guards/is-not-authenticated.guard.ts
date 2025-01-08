import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';
import { AuthStatus } from '../interfaces';

const isNotAuthenticatedGuard = async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
) => {
    try {
        const authStore = useAuthStore();
        await authStore.checkAuthStatus();
        authStore.authStatus === AuthStatus.Authenticated ? next({ name: 'home' }) : next();        
    } catch (error) {
        console.log('Error en isNotAuthenticatedGuard:', error);
        next({ name: 'login' });
    }
};

export default isNotAuthenticatedGuard;






// import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
// import { useAuthStore } from '../stores/auth.store';
// import { AuthStatus } from '../interfaces';

// const isNotAuthenticatedGuard = (
//     to: RouteLocationNormalized,
//     from: RouteLocationNormalized,
//     next: NavigationGuardNext,
// ) => {
//     const authStore = useAuthStore();
//     if (authStore.authStatus === AuthStatus.Authenticated) {
//         next({ name: 'home' }); // Redirige al home si está autenticado
//     } else {
//         next(); // Permite la navegación
//     }
// };

// export default isNotAuthenticatedGuard;