const mediaCenterRoutes = [
  {
    path: '/media-center',
    name: 'Media_Center',
    redirect: '/media-center/gallery',
    children: [
      {
        path: 'gallery',
        name: 'Media Gallery',
        component: () => import('@/views/pages/media-center/MediaGallery.vue'),
      },
      {
        path: 'add',
        name: 'Media Add',
        component: () => import("@/views/pages/media-center/AddMedia.vue"),
      },
    ],
  },
]



export default mediaCenterRoutes
