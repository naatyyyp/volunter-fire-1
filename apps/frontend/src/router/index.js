// Composables
import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/Default.vue'
import { HomePage } from '@/modules/home'
import ContactPage from '@/modules/contact/page/ContactPage.vue'
import HistoryPage from '@/modules/history/pages/HistoryPage.vue'
import DonationPage from '@/modules/donations/pages/DonationPage.vue'
import AdminPage from '@/modules/admin/pages/AdminPage.vue'


const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: HomePage,
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactPage,
      },
      {
        path: '/history',
        name: 'history',
        component: HistoryPage,
      },
      {
        path: '/donations',
        name: 'donations',
        component: DonationPage,
      },
      {
        path: '/admin',
        name: 'admin',
        component: AdminPage,
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
