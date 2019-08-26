import Vue from "vue";
import store from "./store/index";
import router from "./router/index";
import App from "./App.vue";
import VueSocketIO from "vue-socket.io";

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: false,
    connection: "http://localhost:3000",
    vuex: {
      store,
      actionPrefix: "socket_",
      mutationPrefix: "socket_",
    },
  })
);
console.log(store);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
