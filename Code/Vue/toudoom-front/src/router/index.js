import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectPage from '../views/ProjectPage.vue'
import ProjectEdit from '../views/ProjectEdit.vue'
import ProjectList from '../views/ProjectList.vue'
import EquipmentPage from '../views/EquipmentPage.vue'
import EquipmentEdit from '../views/EquipmentEdit.vue'
import EquipmentList from '../views/EquipmentList.vue'

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
      component: ProjectPage
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
    }
  ]
})

export default router
