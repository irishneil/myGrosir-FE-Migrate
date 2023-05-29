const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    layout: "default",
    component: () => import("@/views/pages/dashboards/DashBoardSelector.vue"),
    meta: {
      pageTitle: "Dashboard",
      layout: "default",
      breadcrumb: [
        {
          text: "Dashboard",
          active: true,
        },
      ],
    },
  },
]

export default dashboardRoutes
