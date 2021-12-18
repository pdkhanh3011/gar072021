import { createRouter, createWebHistory } from "vue-router";
import MainPage from '../views/MainPage.vue'
import SkinSlide from '../components/SkinSlide.vue'

const routes = [
  {
    path: "/",
    name: "mainpage",
    component: MainPage
  },
  {
    path: '/champion',
    name: 'champion',
    component: () =>
      import('../views/ChampionsList.vue')
  },
  {
    path: '/champion/:name',
    name: 'championdetail',
    component: () =>
      import('../views/ChampionDetail.vue')
  },
  {
    path: '/slide',
    name: 'slide',
    component: SkinSlide
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
