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
          titulo: "Brasil Agrícola",
          subtitulo: "Explorando as Riquezas Agrícolas de Cada Estado Brasileiro",
        },
      },
    },
    {
      path: '/noticias',
      name: 'Notícias',
      component: () => import('../views/ListaNoticiasView.vue'),
      meta: {
        headline: {
          titulo: "Notícias",
          subtitulo: "",
        },
      },
    },
    {
      path: '/noticias/:slug',
      name: 'Notícia',
      component: () => import('../views/DetalhesNoticiaView.vue'),
      meta: {
        headline: {
          titulo: "",
          subtitulo: "",
        },
      },
    },
    {
      path: '/produtores',
      name: 'Produtores',
      component: () => import('../views/ProdutoresView.vue'),
      meta: {
        headline: {
          titulo: "Principais Produtores",
          subtitulo: "",
        },
      },
    },
    {
      path: '/culturas',
      name: 'Culturas',
      component: () => import('../views/CulturasView.vue'),
      meta: {
        headline: {
          titulo: "Principais Culturas",
          subtitulo: "",
        },
      },
    },
    {
      path: '/tecnologia',
      name: 'Tecnologia',
      component: () => import('../views/TecnologiaView.vue'),
      meta: {
        headline: {
          titulo: "Tecnologia",
          subtitulo: "",
        },
      },
    }
  ]
})

export default router
