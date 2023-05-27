const shopManagerRoutes = [
  {
    // SALES MANAGER

    path: "/sales-manager",
    name: "sales_manager",
    component: () =>
      import("@/views/pages/shop-manager/sales-manager/Index.vue"),
    children: [
      {
        alias: "/",
        path: "actions",
        name: "actions_manager",
        component: () =>
          import("@/views/pages/shop-manager/sales-manager/Actions.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Actions Manager",
          breadcrumb: [
            {
              text: "Actions Manager",
              active: true,
            },
          ],
        },
      },
      {
        path: "payments",
        name: "sales_manager_payments",
        component: () =>
          import("@/views/pages/shop-manager/sales-manager/Payments.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Sales Manager",
          breadcrumb: [
            {
              text: "Payments",
              active: true,
            },
          ],
        },
      },
      {
        path: "my-stock",
        name: "sales_manager_mystock",
        component: () =>
          import("@/views/pages/shop-manager/sales-manager/MyStock.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Sales Manager",
          breadcrumb: [
            {
              text: "My Stock",
              active: true,
            },
          ],
        },
      },
    ],
  },
  {
    // ADD MANAGE

    path: "/shop-manager",
    name: "shop_manager",
    component: () =>
      import("@/views/pages/shop-manager/add-manage/AddManage.vue"),
    children: [
      {
        path: "add-mange",
        alias: "/",
        name: "shop_manager",
        component: () =>
          import("@/views/pages/shop-manager/add-manage/AddManage.vue"),
        meta: {
          pageTitle: "Shop Manager",
          breadcrumb: [
            {
              text: "Manage",
              active: true,
            },
          ],
        },
      },
      {
        path: "create",
        name: "create_shop",
        component: () =>
          import("@/views/pages/shop-manager/add-manage/AddShop.vue"),
        meta: {
          pageTitle: "Shop Manager",
          breadcrumb: [
            {
              text: "Manage",
              active: false,
              to: "/shop-manager",
            },
            {
              text: "Create",
              active: true,
            },
          ],
        },
      },

      //   {
      //     path: "",
      //     alias: "/",
      //     name: "shop_liability",
      //     component: Liability,
      //     children: [
      //       {
      //         path: "",
      //         name: "shop_liability_list",
      //         component: LiabilityList,
      //       },
      //     ],
      //   },

      {
        path: "/viewshop/:id",
        name: "shop_view",
        component: () =>
          import("@/views/pages/shop-manager/add-manage/ShopDetails.vue"),
        meta: {
          pageTitle: "Detail Shop",
          breadcrumb: [
            {
              text: "Manage",
              active: false,
              to: "/shop-manager",
            },
            {
              text: "Shop Detail",
              active: true,
            },
          ],
        },
        children: [
          //   {
          //     path: "details",
          //     name: "shop_details",
          //     component: ShopDetails,
          //     meta: {
          //       contentClass: "ecommerce-application",
          //     },
          //   },
          //   {
          //     path: "key-person",
          //     name: "shop_key_person",
          //     component: KeyPerson,
          //     meta: {
          //       contentClass: "ecommerce-application",
          //     },
          //   },
          //   {
          //     path: "liability",
          //     name: "shop_detail_liability",
          //     component: ShopLiability,
          //     meta: {
          //       contentClass: "ecommerce-application",
          //     },
          //   },
          //   {
          //     path: "trading",
          //     name: "shop_detail_trading",
          //     component: ShopTrading,
          //     meta: {
          //       contentClass: "ecommerce-application",
          //     },
          //   },
          //   {
          //     path: "activity",
          //     name: "shop_detail_activity",
          //     component: ShopActivity,
          //     meta: {
          //       contentClass: "ecommerce-application",
          //     },
          //   },
          //   {
          //     path: "agents",
          //     name: "shop_detail_agents",
          //     component: ShopAgents,
          //     meta: {
          //       contentClass: "ecommerce-application",
          //     },
          //   },
          //   {
          //     path: "google",
          //     name: "shop_detail_google",
          //     component: ShopGoogle,
          //     meta: {
          //       contentClass: "ecommerce-application",
          //     },
          //   },
        ],
      },
    ],
  },
  {
    // CONSIGNMENT

    path: "/consignment",
    name: "",
    component: () => import("@/views/pages/shop-manager/consignment/Index.vue"),
    children: [
      {
        path: "request",
        alias: "/",
        name: "consignment_request",
        component: () =>
          import("@/views/pages/shop-manager/consignment/Request.vue"),
        meta: {
          pageTitle: "Consignment",
          breadcrumb: [
            {
              text: "Request",
              active: true,
            },
          ],
        },
      },
      {
        path: "offer",
        alias: "/",
        name: "consignmnet_offer",
        component: () =>
          import("@/views/pages/shop-manager/consignment/Offer.vue"),
        meta: {
          pageTitle: "Consignment Offer",
          breadcrumb: [
            {
              text: "Consignment Offer",
              active: true,
            },
          ],
        },
      },
      {
        path: "open",
        alias: "/",
        name: "consignment_open",
        component: () =>
          import("@/views/pages/shop-manager/consignment/Open.vue"),
        meta: {
          pageTitle: "Consignment Open",
          breadcrumb: [
            {
              text: "Consignment Open",
              active: true,
            },
          ],
        },
      },
      {
        path: "completed",
        alias: "/",
        name: "consignment_completed",
        component: () =>
          import("@/views/pages/shop-manager/consignment/Completed.vue"),
        meta: {
          pageTitle: "Consignment",
          breadcrumb: [
            {
              text: "Completed",
              active: true,
            },
          ],
        },
      },
    ],
  },
  {
    // CREDIT SCORE

    path: "/credit-score",
    name: "credit_score",
    component: () =>
      import("@/views/pages/shop-manager/credit-score/CreditScore.vue"),
    meta: {
      contentClass: "ecommerce-application",
      pageTitle: "Credit Score",
      breadcrumb: [
        {
          text: "Credit Score",
          active: true,
        },
      ],
    },
  },
]

export default shopManagerRoutes
