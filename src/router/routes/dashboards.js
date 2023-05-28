const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/pages/dashboards/DashBoardSelector.vue"),
    meta: {
      pageTitle: "Dashboard",
      layout: "vertical",
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
