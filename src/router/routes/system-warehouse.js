const systemWharehouseRoutes = [
  {
    // SYSTEM WAREHOUSE ROUTES

    path: "/warehouse/",
    redirect: "warehouse/manage",
    children: [
      {
        path: "manage",
        name: "warehouse_manage",
        component: () => import("@/views/pages/system-warehouse/Manage.vue"),
      },
      {
        path: "stockmanager",
        name: "warehouse_stockmanager",
        component: () => import("@/views/pages/system-warehouse/StockManager.vue"),
      },
      {
        path: "transactions",
        name: "warehouse_transactions",
        component: () => import("@/views/pages/system-warehouse/TransactionHistory.vue"),
      },
    ],
  },
]

export default systemWharehouseRoutes
