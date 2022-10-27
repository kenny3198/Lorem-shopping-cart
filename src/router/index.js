import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartApp from '@/views/CartApp'
import PaymentPath from '@/components/PaymentPath'
import sucessfulltPath from '@/components/sucessfullPath'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/cartApp',
    name: 'cart',
    component: CartApp
  },
  {
    path: '/paymentPath',
    name: 'paymentPath',
    component: PaymentPath
  },
  {
    path: '/sucessdullPath',
    name: 'sucessfull',
    component: sucessfulltPath
  },
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
