import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/site',
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
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/canhotos',
      name: 'canhotos',
      component: () => import('../views/CanhotoView.vue')
    },
    {
      path: '/colaboradores',
      name: 'colaboradores',
      component: () => import('../views/ColaboradoresView.vue')
    },
    {
      path: '/cadastro-empresa',
      name: 'cadastro-empresa',
      component: () => import('../views/StepperView.vue')
    },
    {
      path: '/novo-canhoto',
      name: 'novo-canhoto',
      component: () => import('../views/NovoCanhotoView.vue')
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: () => import('../views/UsuarioView.vue')
    }
  ]
})

export default router
