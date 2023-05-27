const systemCommunicationRoutes = [
  {
    path: "/communication",
    redirect: "communication/announcements",
    children: [
      {
        path: "/announcements",
        name: "announcements",
        component: () => import("@/views/pages/system-communication/Annoucements.vue"),
        meta: {
          pageTitle: "Announcements",
          breadcrumb: [
            {
              text: "Announcements",
              active: true,
            },
          ],
        },
      },
      {
        path: "/whatsapp",
        name: "whatsapp",
        component: () => import("@/views/pages/system-communication/WhatsApp.vue"),
        meta: {
          pageTitle: "Whatsapp",
          breadcrumb: [
            {
              text: "Whatsapp",
              active: true,
            },
          ],
        },
      },
    ],
  },
]

export default systemCommunicationRoutes
