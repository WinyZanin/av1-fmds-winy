/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
//import { setupLayouts } from 'virtual:generated-layouts'

import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
})
/*
const router = createRouter({
  routes: [
    // route default to layout and childrens to pages
    {
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("@/pages/index.vue"),
        },
        {
          path: "/add",
          name: "add",
          component: () => import("@/pages/addPage.vue"),
        },
        {
          path: "/edit",
          name: "edit",
          component: () => import("@/pages/editPage.vue"),
        },
        {
          path: "/list",
          name: "list",
          component: () => import("@/pages/listPage.vue"),
        },
      ],
    },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
});
*/
export default router
