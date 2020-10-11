import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // access through this.$store.state.text etc
    text: ""
  },
  mutations: {
    // mutate through this.$store.commit("updateText", payload);
    updateText: (state, payload) => {
      state.text = payload;
    },
  },
  actions: {},
  modules: {}
});