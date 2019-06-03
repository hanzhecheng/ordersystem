import Vue from "vue";
import Vuex from "vuex";
import cart from './modules/cart' //引入购物车模块
import goods from './modules/goods' //引入商品模块
import getters from './getters'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    goods
  },
  getters
});