import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        headline: {
          title: "Brasil Agrícola",
          description: "Explorando as Riquezas Agrícolas de Cada Estado Brasileiro",
        },
      },
    },
    {
      path: '/produtores',
      name: 'Produtores',
      component: () => import('../views/ProdutoresView.vue'),
      meta: {
        headline: {
          title: "Principais Produtores",
          description: "",
        },
      },
    },
    {
      path: '/culturas',
      name: 'Culturas',
      component: () => import('../views/CulturasView.vue'),
      meta: {
        headline: {
          title: "Principais Culturas",
          description: "",
        },
      },
    },
    {
      path: '/tecnologia',
      name: 'Tecnologia',
      component: () => import('../views/TecnologiaView.vue'),
      meta: {
        headline: {
          title: "Tecnologia",
          description: "",
        },
      },
    }
  ]
})

export default router
