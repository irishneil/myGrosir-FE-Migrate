const commissionManagerRoutes = [
  {
    path: "/commission",
    redirect: "/commission/agent_manager",
    children: [
      {
        path: "rates_libary",
        name: "Rates Libary",
        component: () => import("@/views/pages/commission-manager/RatesLibary.vue"),
      },
      {
        path: "default_rates",
        name: "Default Rates",
        component: () => import("@/views/pages/commission-manager/DefaultRates.vue"),
      },
      {
        path: "agent_manager",
        name: "Agent Manager",
        component: () => import("@/views/pages/commission-manager/AgentManager.vue"),
        children: [
          {
            path: "late_actions",
            alias: "",
            name: "AM Late Actions",
            component: () => import("@/views/pages/commission-manager/agent-manager/LateActions.vue"),
          },
          {
            path: "agents",
            alias: "",
            name: "AM Agents",
            component: () => import("@/views/pages/commission-manager/agent-manager/Agents.vue"),
          },
          {
            path: "shops",
            alias: "",
            name: "AM Shops",
            component: () => import("@/views/pages/commission-manager/agent-manager/Shops.vue"),
          },
        ],
      },
      {
        path: "payments",
        name: "Commission Payments",
        component: () => import("@/views/pages/commission-manager/Payments.vue"),
        children: [
          {
            path: "commissions",
            alias: "",
            name: "CP Comissions",
            component: () => import("@/views/pages/commission-manager/payments/Commissions.vue"),
          },
          {
            path: "agentpurchases",
            alias: "",
            name: "CP AgentPurchase",
            component: () => import("@/views/pages/commission-manager/payments/AgentPurchases.vue"),
          },
          {
            path: "transactionhistory",
            alias: "",
            name: "CP TransactionHistory",
            component: () => import("@/views/pages/commission-manager/payments/TransactionHistory.vue"),
          },
          {
            path: "admin",
            alias: "",
            name: "CP Admin",
            component: () => import("@/views/pages/commission-manager/payments/Admin.vue"),
          },
        ],
      },
    ],
  },
]

export default commissionManagerRoutes
