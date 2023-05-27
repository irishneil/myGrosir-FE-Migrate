const notifacationRoutes = [
  {
    path: "/notifcations",
    name: "Notifcations",
    component: () => import("@/views/pages/notifications/Notifications.vue"),
    meta: {
      pageTitle: "Notifacation Feed",
      breadcrumb: [
        {
          text: "Notifcation Feed",
          active: true,
        },
      ],
    },
  },
]

export default notifacationRoutes
