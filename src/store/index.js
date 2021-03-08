import Vue from "vue";
import Vuex from "vuex";
import product from "@/store/modules/product.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    product
  }
});

export default store;
