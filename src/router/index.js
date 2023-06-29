/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'

Vue.use(VueRouter)

const routes = [ 
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('@/views/CalendarView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/ProjectsView.vue')
  },
  {
    path: '/projects/:projectId',
    name: 'projectDetail',
    component: () => import('@/components/project/ProjectDetail.vue')
  },
  {
    path: '/lists',
    name: 'lists',
    component: () => import('@/views/ListsView.vue')
  },
  {
    path: '/lists/:listId',
    name: 'ListItem',
    component: () => import('@/components/list/ListItem.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/SettingsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

// router.beforeEach((to, from, next) => {
//   window.history.previousUrl = from.fullPath;
//   if (to.name === "login") {
//     next();
//   } else if (router.app.$store.getters['secure/isLoggedIn']) {
//     next();
//   } else {
//     next('/login');    
//   }
// });

export default router
