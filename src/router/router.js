import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../pages/home/home')
const Login = () => import('../pages/login/login')
const Forget = () => import('../pages/forget/forget')
const Profile = () => import('../pages/profile/profile')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home1',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
