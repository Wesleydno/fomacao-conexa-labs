import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/produtores',
      name: 'Produtores',
      component: () => import('../views/ProdutoresView.vue'),
    },
    {
      path: '/culturas',
      name: 'Culturas',
      component: () => import('../views/CulturasView.vue'),
    },
    {
      path: '/tecnologia',
      name: 'Tecnologia',
      component: () => import('../views/TecnologiaView.vue'),
    }
  ]
})

export default router
