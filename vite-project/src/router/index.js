import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/home.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/about.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../components/portfolio.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../components/services.vue')
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: () => import('../components/contactUs.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../components/skills.vue')
    },
    {
      path: '/footer',
      name: 'footer',
      component: () => import('../components/footer.vue')
    }

    
  ]
})

export default router
