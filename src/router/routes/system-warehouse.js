const systemWharehouseRoutes = [
  {
    // SYSTEM WAREHOUSE ROUTES

    path: "/warehouse/",
    redirect: "warehouse/manage",
    meta: {
      layout: "full",
    },
    children: [
      {
        path: "/manage",
        name: "warehouse_manage",
        component: () => import("@/views/pages/system-warehouse/Manage.vue"),
        meta: {
          layout: "full",
        },
      },
      {
        path: "/stockmanager",
        name: "warehouse_stockmanager",
        component: () => import("@/views/pages/system-warehouse/StockManager.vue"),
        meta: {
          layout: "full",
        },
      },
      {
        path: "/transactions",
        name: "warehouse_transactions",
        component: () => import("@/views/pages/system-warehouse/TransactionHistory.vue"),
        meta: {
          layout: "full",
        },
      },
    ],
  },
]

export default systemWharehouseRoutes
