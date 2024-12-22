import FactsView from "@/views/FactsView.vue";
import LoginView from "@/views/LoginView.vue";
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from "vue-router"; 
import NotFoundView from "@/views/NotFoundView.vue";
import CatView from "@/views/CatView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/facts',
      name: 'facts',
      component: FactsView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/fact',
      name: 'fact',
      component: CatView,
      props: (route) => {
        try {
          return { cat: route.query.cat ? JSON.parse(route.query.cat) : null };
        } catch (error) {
          console.error('Failed to parse cat data:', error);
          return { cat: null };
        }
      },
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ]
})

router.beforeEach((to, from, next) => {
  const username = localStorage.getItem('username');

  if (!username) {
    if (to.name !== 'home' && to.name !== 'login') {
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;