import Vue from "vue";
import Vuex from "vuex";
import product from "@/store/modules/product.js";
import foods from "@/store/modules/foods.js";
import watchs from "@/store/modules/watchs.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    product,
    foods,
    watchs
  }
});

export default store;
