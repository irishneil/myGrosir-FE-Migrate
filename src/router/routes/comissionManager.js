const commissionManagerRoutes = [
  {
    path: "/rates_libary",
    name: "rates libary",
    component: () => import("@/views/pages/commission-manager/RatesLibary.vue"),
    meta: {
      pageTitle: "Rates Libary",
      breadcrumb: [
        {
          text: "Rates Libary",
          active: true,
        },
      ],
    },
  },
  {
    path: "/default_rates",
    name: "default rates",
    component: () =>
      import("@/views/pages/commission-manager/DefaultRates.vue"),
    meta: {
      pageTitle: "Default Rates",
      breadcrumb: [
        {
          text: "Default Rates",
          active: true,
        },
      ],
    },
  },
  {
    path: "/agent_manager",
    name: "agent manager",
    component: () => import("@/views/pages/commission-manager/AgentManager.vue"),
    children: [
      {
        path: "late_actions",
        alias: "/",
        name: "late actions",
        component: () =>import("@/views/pages/commission-manager/agent-manager/LateActions.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Agent Manager",
          breadcrumb: [
            {
              text: "Agent Manager",
              active: true,
            },
          ],
        },
      },
      {
        path: "agents",
        alias: "/",
        name: "agents",
        component: () => import("@/views/pages/commission-manager/agent-manager/Agents.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Agent Manager",
          breadcrumb: [
            {
              text: "Agent Manager",
              active: true,
            },
          ],
        },
      },
      {
        path: "shops",
        alias: "/",
        name: "shops",
        component: () =>import("@/views/pages/commission-manager/agent-manager/Shops.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Agent Manager",
          breadcrumb: [
            {
              text: "Agent Manager",
              active: true,
            },
          ],
        },
      },
    ],
  },
  {
    path: "/payments",
    name: "payments",
    component: () => import("@/views/pages/commission-manager/Payments.vue"),
    children: [
      {
        path: "commissions",
        alias: "/",
        name: "commissions",
        component: () => import("@/views/pages/commission-manager/payments/Commissions.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Commissions Payments",
          breadcrumb: [
            {
              text: "Commission",
              active: true,
            },
          ],
        },
      },
      {
        path: "agentpurchases",
        alias: "/",
        name: "agent transactions",
        component: () => import("@/views/pages/commission-manager/payments/AgentPurchases.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Commissions Payments",
          breadcrumb: [
            {
              text: "Commission",
              active: true,
            },
          ],
        },
      },
      {
        path: "transactionhistory",
        alias: "/",
        name: "transaction history",
        component: () => import("@/views/pages/commission-manager/payments/TransactionHistory.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Commissions Payments",
          breadcrumb: [
            {
              text: "Commission",
              active: true,
            },
          ],
        },
      },
      {
        path: "admin",
        alias: "/",
        name: "admin",
        component: () => import("@/views/pages/commission-manager/payments/Admin.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Commissions Payments",
          breadcrumb: [
            {
              text: "Commission",
              active: true,
            },
          ],
        },
      },
    ],
  },
]

export default commissionManagerRoutes
