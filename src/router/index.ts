import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import isAuthenticatedGuard from '@/components/auth/guards/is-authenticated.guard';
import isNotAuthenticatedGuard from '@/components/auth/guards/is-not-authenticated.guard';
import isAdminGuard from '@/components/auth/admin/is-admin.guard';
import { adminRoutes } from '@/components/auth/admin/routes';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            beforeEnter: [isAuthenticatedGuard],
            component: HomeView,
            children: [
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('../views/AboutView.vue'),
                },
                {
                    path: '/inventory/add-article',
                    name: 'addArticle',
                    component: () => import('../views/AddArticleView.vue'),
                },
                {
                    path: '/inventory',
                    name: 'inventory',
                    component: () => import('../views/InventoryView.vue'),
                },
                {
                    path: '/tasks',
                    name: 'tasks',
                    component: () => import('../views/TasksView.vue'),
                },
                ...adminRoutes
            ],
        },
        {
            path: '/login',
            name: 'login',
            beforeEnter: [isNotAuthenticatedGuard],
            component: () => import('../views/LogInView.vue'),
        },

    ],
});

export default router;
