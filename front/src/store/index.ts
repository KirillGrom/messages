import Vue from "vue";
import Vuex, { Store } from "vuex";
import { createVuexStore } from "vuex-simple";
import  Socket from './socket/index';

Vue.use(Vuex);

const instance = new Socket();

export default createVuexStore(instance, {
  strict: false,
  modules: {},
  plugins: [],
});
