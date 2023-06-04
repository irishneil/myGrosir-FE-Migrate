const systemMasterDataRoutes = [
 
  {
    //MASTER PRODUCT

    path: "/masterdata/product",
    name: "master_product_container",
    component: () => import("@/views/pages/system-master-settings/master-product/IndexContainer.vue"),
    meta: {
      pageTitle: "Master Industry Container",
      breadcrumb: [
        {
          text: "Master Industry",
          active: true,
        },
      ],
    },
    children: [
      {
        alias: "/",
        path: "industry",
        name: "master_industry",
        component: () => import("@/views/pages/system-master-settings/master-product/Industry.vue"),
        meta: {
          pageTitle: "Master Industry",
          breadcrumb: [
            {
              text: "Master Industry",
              active: true,
            },
          ],
        },
      },
      {
        path: "brand",
        name: "master_brand",
        component: () => import("@/views/pages/system-master-settings/master-product/Brand.vue"),
        meta: {
          pageTitle: "Master Brand",
          breadcrumb: [
            {
              text: "Master Brand",
              active: true,
            },
          ],
        },
      },
      {
        path: "product",
        name: "master_product",
        component: () => import("@/views/pages/system-master-settings/master-product/Product.vue"),
        meta: {
          pageTitle: "Master Product",
          breadcrumb: [
            {
              text: "Master Product",
              active: true,
            },
          ],
        },
      },
      {
        path: "uom",
        name: "master_uom",
        component: () => import("@/views/pages/system-master-settings/master-product/UoM.vue"),
        meta: {
          pageTitle: "Product",
          breadcrumb: [
            {
              text: "Units of Measurement",
              active: true,
            },
          ],
        },
      },
    ],
  },

  // MASTER COUNTRY

  {
    path: "/masterdata/mastercountry",
    name: "master_country",
    component: () => import("@/views/pages/system-master-settings/master-country/MasterCountry.vue"),
    meta: {
      pageTitle: "Master Country",
      breadcrumb: [
        {
          text: "Master Country",
          active: true,
        },
      ],
    },
  },

  // MASTER CONTRACTS

  {
    path: "/masterdata/mastercontracts",
    name: "master_contracts",
    component: () => import("@/views/pages/system-master-settings/master-contract/MasterContracts.vue"),
    meta: {
      pageTitle: "Master Contracts",
      breadcrumb: [
        {
          text: "Master Contracts",
          active: true,
        },
      ],
    },
  },

  // MASTER ACCOUNT TYPES & PERMISSIONS

  {
    path: "/masterdata/maser-roles",
    name: "master_roles_container",
    component: () => import("@/views/pages/system-master-settings/master-roles/IndexContainer.vue"),
    meta: {
      pageTitle: "Master Roles",
      breadcrumb: [
        {
          text: "Master Roles",
          active: true,
        },
      ],
    },
    children: [
      {
        path: "roles",
        name: "master_roles",
        component: () => import("@/views/pages/system-master-settings/master-roles/Roles.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Master Roles",
          breadcrumb: [
            {
              text: "Master Roles",
              active: true,
            },
          ],
        },
      },
      {
        path: "permissions",
        name: "master_permissions",
        component: () => import("@/views/pages/system-master-settings/master-roles/Roles.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Role Permissions",
          breadcrumb: [
            {
              text: "Role Permissions",
              active: true,
            },
          ],
        },
      },
    ],
  }, 
  
  // DEFAULT VARIABLES

  {
    path: "/masterdata/variables",
    name: "defaultvariables",
    component: () => import("@/views/pages/system-master-settings/master-defaults/DefaultVariables.vue"),
    meta: {
      pageTitle: "Default Variables",
      breadcrumb: [
        {
          text: "Default Variables",
          active: true,
        },
      ],
    },
  },
]

export default systemMasterDataRoutes
