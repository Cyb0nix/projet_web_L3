import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectPage from '../views/Projectpage.vue'
import ProjectEdit from '../views/ProjectEdit.vue'
import ProjectList from '../views/ProjectList.vue'
import EquipmentPage from '../views/EquipmentPage.vue'
import EquipmentEdit from '../views/EquipmentEdit.vue'
import EquipmentList from '../views/EquipmentList.vue'
import StaffPage from '../views/StaffPage.vue'
import StaffEdit from '../views/StaffEdit.vue'
import StaffList from '../views/StaffList.vue'
import LoginView from '../views/LoginView.vue'

function routeGuard(to, from, next)
{
 var isAuthenticated= false;
 if(localStorage.getItem('LoggedUser'))
  isAuthenticated = true;
 else
  isAuthenticated= false;
if(isAuthenticated) {
  next(); // allow to enter route
 } else{
  next('/login'); // go to '/login';
 }
}

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
      component: ProjectPage,
      beforeEnter: routeGuard,
    },
    {
      path: '/admin/projectEdit/:id',
      name: 'projectEdit',
      component: ProjectEdit,
      beforeEnter: routeGuard
    },
    {
      path: '/admin/projectList',
      name: 'projectList',
      component: ProjectList,
      beforeEnter: routeGuard
    },
    {
      path: '/admin/equipment/:id',
      name: 'equipment',
      component: EquipmentPage,
      beforeEnter: routeGuard
    },
    {
      path: '/admin/equipmentEdit/:id',
      name: 'equipmentEdit',
      component: EquipmentEdit,
      beforeEnter: routeGuard
    },
    {
      path: '/admin/equipmentList',
      name: 'equipmentList',
      component: EquipmentList,
      beforeEnter: routeGuard
    },
    {
      path: '/admin/staff/:id',
      name: 'staff',
      component: StaffPage,
      beforeEnter: routeGuard
    },
    {
      path: '/admin/staffEdit/:id',
      name: 'staffEdit',
      component: StaffEdit,
      beforeEnter: routeGuard
    },
    {
      path: '/admin/staffList/',
      name: 'staffList',
      component: StaffList,
      beforeEnter: routeGuard
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})





export default router
