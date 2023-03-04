import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";
import Home from "./pages/Home.vue";
import Character from "./pages/Character.vue";
export function initRouter(): Router {
  const routes: RouteRecordRaw[] = [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/character/:characterId",
      component: Character,
      props: (route) => ({
        characterId: route.params.characterId,
      }),
    },
  ];

  return createRouter({
    history: createWebHistory(),
    routes,
  });
}
