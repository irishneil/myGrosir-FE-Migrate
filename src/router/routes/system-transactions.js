const systemTransactionRoutes = [
  {
    path: "/transactions",
    children: [
      {
        path: "new-shops",
        name: "new_shops",
        component: () => import("@/views/pages/system-transactions/NewShops.vue"),
        meta: {
          pageTitle: "New Shops",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "New Shops",
              active: true,
            },
          ],
        },
      },
      {
        path: "bonus-payments",
        name: "bonus_payments",
        component: () => import("@/views/pages/system-transactions/BonusPayments.vue"),
        meta: {
          pageTitle: "Bonus Payments",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "Bonus Payments",
              active: true,
            },
          ],
        },
      },
      {
        path: "contracts-signings",
        name: "contracts_signings",
        component: () =>
          import("@/views/pages/system-transactions/ContractSignings.vue"),
        meta: {
          pageTitle: "Contracts Signings",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "Contracts Signings",
              active: true,
            },
          ],
        },
      },
      {
        path: "consign-checks",
        name: "consign_checks",
        component: () =>
          import("@/views/pages/system-transactions/ConsignmentChecks.vue"),
        meta: {
          pageTitle: "Consign Checks",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "Consign Checks",
              active: true,
            },
          ],
        },
      },
      {
        path: "consign-sales",
        name: "consign_sales",
        component: () =>
          import("@/views/pages/system-transactions/ConsignmentSales.vue"),
        meta: {
          pageTitle: "Consign Sales",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "Consign Sales",
              active: true,
            },
          ],
        },
      },
      {
        path: "consign-payments",
        name: "consign_payments",
        component: () =>
          import("@/views/pages/system-transactions/ConsignmentPayments.vue"),
        meta: {
          pageTitle: "Consign Payments",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "Consign Payments",
              active: true,
            },
          ],
        },
      },
      {
        path: "consign-stock",
        name: "consign_stock",
        component: () =>
          import("@/views/pages/system-transactions/ConsignmentStock.vue"),
        meta: {
          pageTitle: "Consign Stock",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "Consign Stock",
              active: true,
            },
          ],
        },
      },
      {
        path: "late-actions",
        name: "late_actions",
        component: () =>
          import("@/views/pages/system-transactions/LateActions.vue"),
        meta: {
          pageTitle: "Late Actions",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "Late Actions",
              active: true,
            },
          ],
        },
      },
      {
        path: "new-accounts",
        name: "new_accounts",
        component: () =>
          import("@/views/pages/system-transactions/NewAccounts.vue"),
        meta: {
          pageTitle: "New Accounts",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "New Accounts",
              active: true,
            },
          ],
        },
      },
    ],
  },
]

export default systemTransactionRoutes
