import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import EditProfileView from '../views/EditProfileView.vue'

const routes = [
  {
    path: '/',
    component: LoginView
  },
  {
    path: '/register',
    component: RegisterView
  },
  {
    path: '/home',
    component: HomeView
  },
  {
    path: '/profile',
    component: ProfileView
  },
  {
    path: '/editProfile',
    component: EditProfileView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const protectedRoutes = ["/home","/profile", "/editProfile"]
  if(protectedRoutes.includes(to.path) && !store.getters.token)
    next('/')
  else
    next()
})


export default router