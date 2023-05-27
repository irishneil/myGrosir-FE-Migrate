const catalogueRoutes = [
  {
    path: '/catalogue',
    name: 'catalogue',
    component: () => import('@/views/pages/catalogue/Catalogue.vue'),
    meta: {
      contentClass: 'ecommerce-application',
      pageTitle: 'Catalogue',
      breadcrumb: [
        {
          text: 'Catalogue',
          active: true,
        },
      ],
    },
    children: [
      {
        path: 'details/:productId',
        name: 'product-details',
        component: () => import('@/views/pages/catalogue/ProductDetails.vue'),
        meta: {
          contentClass: 'ecommerce-application',
          pageTitle: 'Product Details',
          breadcrumb: [
            {
              text: 'Catalogue',
              active: false,
              to: '/catalogue',
            },
            {
              text: 'Product Details',
              active: true,
            },
          ],
        },
      },
    ],
  },
  {
    path: '/cart',
    component: () => import('@/views/pages/catalogue/Cart.vue'),
    children: [
      {
        path: '',
        name: 'cart',
        component: () => import('@/views/pages/catalogue/Cart.vue'),
        meta: {
          pageTitle: 'Cart',
          breadcrumb: [
            {
              text: 'Catalogue',
              active: true,
              to: '/catalogue',
            },
            {
              text: 'Cart',
              active: true,
            },
          ],
        },
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('@/views/pages/catalogue/Cart.vue'),
        meta: {
          pageTitle: 'Checkout',
          breadcrumb: [
            {
              text: 'Catalogue',
              active: true,
              to: '/catalogue',
            },
            {
              text: 'Checkout',
              active: true,
            },
          ],
        },
      },
    ],
  },
]

export default catalogueRoutes
