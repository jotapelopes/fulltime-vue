import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginEmpresa from '@/components/LoginEmpresa.vue'
import LoginUsuario from '@/components/LoginUsuario.vue'
import HomeSite from '@/components/HomeSite.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/loginempresa',
      name: 'loginempresa',
      component: LoginEmpresa
    },
    {
      path: '/loginusuario',
      name: 'loginusuario',
      component: LoginUsuario
    },
    {
      path: '/direcionamento',
      name: 'direcionamento',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/homesite',
      name: 'homesite',
      component: HomeSite
    },
  ]
})

export default router
