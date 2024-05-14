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
      path: '/loginempresa',
      name: 'loginempresa',
      component: () => import('../views/LoginEmpresaView.vue')
    },
    {
      path: '/loginusuario',
      name: 'loginusuario',
      component: () => import('../views/LoginUsuarioView.vue')
    },
    {
      path: '/direcionamento',
      name: 'direcionamento',
      component: () => import('../views/DirecionamentoView.vue')
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
  ]
})

export default router
