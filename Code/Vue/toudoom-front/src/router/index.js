import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Projectpage from '../views/Projectpage.vue'
import ProjectEdit from '../views/ProjectEdit.vue'
import ProjectList from '../views/ProjectList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project',
      name: 'project',
      component: Projectpage
    },
    {
      path: '/projectEdit',
      name: 'projectEdit',
      component: ProjectEdit
    },
    {
      path: '/projectList',
      name: 'projectList',
      component: ProjectList
    }
  ]
})

export default router
