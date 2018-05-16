/**
 * Created by wqs on 2017/12/18.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  user: '',
};

// 仓库过滤器
const getters = {
  user: state => state.user,
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
