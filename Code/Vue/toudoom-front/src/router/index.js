import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectPage from '../views/ProjectpageView.vue'
import ProjectEdit from '../views/ProjectEdit.vue'
import ProjectList from '../views/ProjectList.vue'
import EquipmentPage from '../views/EquipmentPage.vue'
import EquipmentEdit from '../views/EquipmentEdit.vue'
import EquipmentList from '../views/EquipmentList.vue'
import StaffPage from '../views/StaffPage.vue'
import StaffEdit from '../views/StaffEdit.vue'
import StaffList from '../views/StaffList.vue'
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
      path: '/admin/project/:id',
      name: 'project',
      component: ProjectPage
    },
    {
      path: '/admin/projectEdit/:id',
      name: 'projectEdit',
      component: ProjectEdit
    },
    {
      path: '/admin/projectList',
      name: 'projectList',
      component: ProjectList
    },
    {
      path: '/admin/equipment/:id',
      name: 'equipment',
      component: EquipmentPage
    },
    {
      path: '/admin/equipmentEdit/:id',
      name: 'equipmentEdit',
      component: EquipmentEdit
    },
    {
      path: '/admin/equipmentList',
      name: 'equipmentList',
      component: EquipmentList
    },
    {
      path: '/admin/staff/:id',
      name: 'staff',
      component: StaffPage
    },
    {
      path: '/admin/staffEdit/:id',
      name: 'staffEdit',
      component: StaffEdit
    },
    {
      path: '/admin/staffList/',
      name: 'staffList',
      component: StaffList
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
