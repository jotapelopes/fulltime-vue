import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'site',
      component: () => import('../views/SiteView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginUsuarioView.vue')
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        auth: true
      },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/canhotos',
      name: 'canhotos',
      meta: {
        auth: true
      },
      component: () => import('../views/CanhotoView.vue')
    },
    {
      path: '/colaboradores',
      name: 'colaboradores',
      meta: {
        auth: true
      },
      component: () => import('../views/ColaboradoresView.vue')
    },
    {
      path: '/cadastro-empresa',
      name: 'cadastro-empresa',
      component: () => import('../views/StepperView.vue')
    },
    {
      path: '/usuario',
      name: 'usuario',
      meta: {
        auth: false
      },
      component: () => import('../views/UsuarioView.vue')
    }
  ]
})


router.beforeEach(routes);

export default router