import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
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
});

export default router;
