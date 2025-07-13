// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ServiceView from '@/views/ServiceView.vue'
import ContactView from '@/views/ContactView.vue'

NProgress.configure({ showSpinner: false }) 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectView,
  },
  {
    path: '/services',
    name: 'Services',
    component: ServiceView,
  },
  {
    path: '/contact',
    name: 'Contacts',
    component: ContactView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// Finish progress bar after navigation
router.afterEach(() => {
  NProgress.done()
})



export default router
