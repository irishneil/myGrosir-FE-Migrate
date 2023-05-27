const mediaCenterRoutes = [
  {
    path: "/media-center",
    name: "media_center",
    layout: 'Full',
    component: () => import("@/views/pages/media-center/MediaGallery.vue"),
    meta: {
      
    },
    children: [
      {
        path: "add",
        name: "media_center_add",
        component: () => import("@/views/pages/media-center/AddMedia.vue"),
        meta: {
          pageTitle: "Add Media",
          layout: 'vertical',
          breadcrumb: [
            {
              text: "Add Media",
              active: true,
            },
          ],
        },
      },
    ],
  },
]

export default mediaCenterRoutes
