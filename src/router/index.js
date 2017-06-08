import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Account from '@/components/Account'
import MissionsView from '@/components/MissionsView'
import MissionsNew from '@/components/MissionsNew'
import ProfileUser from '@/components/ProfileUser'
import Documentation from '@/components/Documentation'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/missions',
      name: 'MissionsView',
      component: MissionsView
    },
    {
      path: '/missions-new',
      name: 'MissionsNew',
      component: MissionsNew
    },
    {
      path: '/profileuser',
      name: 'ProfileUser',
      component: ProfileUser
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/documentation',
      name: 'Documentation',
      component: Documentation
    },
    {
    path: '*',
    redirect: '/'
  }

    
  ]
})
