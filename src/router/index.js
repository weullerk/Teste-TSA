import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from '../components/Cadastro'
import Lista from '../components/Lista'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/lista',
    name: 'Lista',
    component: Lista
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
