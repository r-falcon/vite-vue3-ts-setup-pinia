import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/login.vue'),
    },
    {
        path: '/',
        name: 'Home',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/index.vue'),
    },
    {
        path: '/useImport',
        name: 'UseImport',
        meta: {
            title: '自动引用',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/components/useImport.vue'),
    },
    {
        path: '/vueuse',
        name: 'VueUse',
        meta: {
            title: 'vueUse工具库',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/components/vueUse.vue'),
    },
    {
        path: '/sass',
        name: 'Sass',
        meta: {
            title: 'css预处理器',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/components/useSass.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
