const memberManagementRoutes = [
  {
    path: "/accounts",
    redirect: "/accounts/members",
    children: [
      {
        path: "members",
        name: "members",
        component: () => import("@/views/pages/member-manager/Members.vue"),
        meta: {
          pageTitle: "Member Management",
          breadcrumb: [
            {
              text: "Member Management",
              active: true,
            },
          ],
        },
      },
      {
        path: "create",
        name: "Create Member",
        component: () => import("@/views/pages/member-manager/CreateMember.vue"),
        meta: {
          pageTitle: "Member Management",
          breadcrumb: [
            {
              text: "Create Member",
              active: true,
            },
          ],
        },
      },
      {
        path: "geoplotter",
        name: "Geoplotter",
        component: () => import("@/views/pages/member-manager/Geoplotter.vue"),
        meta: {
          pageTitle: "Geoplotter",
          breadcrumb: [
            {
              text: "Geoplotter",
              active: true,
            },
          ],
        },
      },
    ],
  },
]

export default memberManagementRoutes
