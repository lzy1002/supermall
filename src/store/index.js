import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const index = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations,
  getters,
  actions,
});

export default index;
