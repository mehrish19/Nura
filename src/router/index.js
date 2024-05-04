import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutPage.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../pages/CategoriesPage.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../pages/ProductPage.vue')

      
    },
    {
      path: '/singleCategory/:categoryName',
      name: 'singleCategory',
      component: () => import('../pages/SingleCategoryPage.vue')
    },
    {
      path: '/search',
      name: 'ssearch',
      component: () => import('../pages/SearchPage.vue')
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: () => import('../pages/ContactsPage.vue')
    },
    {
      path: '/basket',
      name: 'basket',
      component: () => import('../pages/BasketPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../pages/ErrorPage.vue')
    },

  ]
})

export default router