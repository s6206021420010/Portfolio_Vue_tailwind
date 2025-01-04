import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/php',
      name: 'php',
      component: () => import('../views/PhpDetail.vue'),
    },
    {
      path: '/js',
      name: 'js',
      component: () => import('../views/JsDetail.vue'),
    }
  ],
})

export default router
