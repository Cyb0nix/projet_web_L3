import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Projectpage from '../views/Projectpage.vue'
import ProjectEdit from '../views/ProjectEdit.vue'
import ProjectList from '../views/ProjectList.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin/project',
      name: 'project',
      component: Projectpage
    },
    {
      path: '/admin/projectEdit',
      name: 'projectEdit',
      component: ProjectEdit
    },
    {
      path: '/admin/projectList',
      name: 'projectList',
      component: ProjectList
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
