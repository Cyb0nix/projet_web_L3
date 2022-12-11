import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectPage from '../views/ProjectPage.vue'
import ProjectEdit from '../views/ProjectEdit.vue'
import ProjectList from '../views/ProjectList.vue'
import EquipmentPage from '../views/EquipmentPage.vue'
import EquipmentEdit from '../views/EquipmentEdit.vue'
import EquipmentList from '../views/EquipmentList.vue'
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
      component: ProjectPage
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
      path: '/Equipment',
      name: 'Equipment',
      component: EquipmentPage
    },
    {
      path: '/EquipmentEdit',
      name: 'EquipmentEdit',
      component: EquipmentEdit
    },
    {
      path: '/EquipmentList',
      name: 'EquipmentList',
      component: EquipmentList
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
