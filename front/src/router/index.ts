import Vue from "vue";
import Router from "vue-router";
import store from "@/store/index";
Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/components/userCreate/index.vue"),
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: () => import("@/components/rooms/index.vue"),
    beforeEnter: (to: any, from: any, next: any):void=>{
      const avtarLength = store.getters.getAvatar.length;
      const nameLength = store.getters.getName.length;
  
      if (!avtarLength && !nameLength){
        next('/');
      } else {
        next();
      }
      
    }
  },
  {
    path:'/chat',
    name:'Chat',
    component: () => import('@/components/chatRoom/index.vue'),
  }
];
export default new Router({
  routes,
});