import Vue from "vue";
import Vuex from "vuex";
import bannerLiner from "./home/bannerLiner";
import selectBox from "./home/selectBox";
import shoppingCar from "./home/shoppingCar";
import city from "./home/city"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    bannerLiner,
    selectBox,
    shoppingCar,city
  },
  children: {}
});
