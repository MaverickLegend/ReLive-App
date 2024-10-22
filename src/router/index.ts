import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import isAuthenticatedGuard from '@/components/auth/LogIn/guards/is-authenticated.guard';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            beforeEnter: [isAuthenticatedGuard],
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
            ],
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LogInView.vue'),
        },
    ],
});

export default router;
