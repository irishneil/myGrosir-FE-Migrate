import { createRouter, createWebHistory } from 'vue-router'

import authRoutes from './routes/auth'
import catalogueRoutes from './routes/catalogue'
import commissionManagerRoutes from './routes/comissionManager'
import dashboardRoutes from './routes/dashboards'
import errorRoutes from './routes/errors'
import mediaCenterRoutes from './routes/mediaCenter'
import memberManagementRoutes from './routes/memberManager'
import notifacationRoutes from './routes/notifacations'
import publicRoutes from './routes/publicRoutes'
import shopManagerRoutes from './routes/shopManager'
import systemCommunicationRoutes from './routes/system-communication'
import systemMasterDataRoutes from './routes/system-masterData'
import systemAccountRoutes from './routes/system-systemAccounts'
import systemTransactionRoutes from './routes/system-transactions'
import systemWharehouseRoutes from './routes/system-warehouse'
import userPaymentRoutes from './routes/user-payments'
import userSettingsRoutes from './routes/user-settings'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    ...publicRoutes,
    ...errorRoutes,
    ...authRoutes,
    ...dashboardRoutes,
    ...memberManagementRoutes,
    ...commissionManagerRoutes,
    ...catalogueRoutes,
    ...shopManagerRoutes,
    ...mediaCenterRoutes,
    ...notifacationRoutes,
    ...systemMasterDataRoutes,
    ...systemCommunicationRoutes,
    ...systemAccountRoutes,
    ...systemWharehouseRoutes,
    ...systemTransactionRoutes,
    ...userSettingsRoutes,
    ...userPaymentRoutes,
    
    // {
    //   path: '*',
    //   redirect: 'error-404',
    // },
    
  ],
})


// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
export default router
