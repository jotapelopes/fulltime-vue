import { useAuth } from '@/stores/auth';
import { createRouter, createWebHistory } from 'vue-router'

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
      path: '/usuario',
      name: 'usuario',
      component: () => import('../views/UsuarioView.vue')
    }
  ]
})


// beforeEach é um metodo para validarmos algum logica *antes de cada* rota se acessada 
router.beforeEach((to, from) => {
  if(to.meta?.auth){
    const auth = useAuth();
    if(auth.user && auth.token){
      const isAuthenticated = auth.checkToken()

      console.log(isAuthenticated)
    }
}});

export default router
