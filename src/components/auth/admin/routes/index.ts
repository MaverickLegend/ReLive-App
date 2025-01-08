import type { RouteRecordRaw } from "vue-router";
import isAuthenticatedGuard from "../../guards/is-authenticated.guard";
import isAdminGuard from "../is-admin.guard";

export const adminRoutes: RouteRecordRaw[] = [
    {
        path: '/admin',
        name: 'admin',
        beforeEnter: [isAuthenticatedGuard, isAdminGuard],
        component: () => import('@/views/AdminView.vue'),
    },
    {
        path: '/register',
        name: 'register',
        beforeEnter: [isAuthenticatedGuard, isAdminGuard],
        component: () => import('@/views/RegisterView.vue'),
    },
];