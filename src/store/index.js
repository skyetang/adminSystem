import Vue from 'vue';
import Vuex from 'vuex';
import Cookie from 'js-cookie';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      name: '',
      avatar: '',
      token: Cookie.get('Skye-Token')
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.user.token = token;
    },
    SET_NAME: (state, name) => {
      state.user.name = name;
    }
  },
  actions: {
    singin({ commit }, user) {
      return new Promise((resolve, reject) => {
        if (user.username === 'admin' && user.password === '123456') {
          commit('SET_NAME', user.name);
          commit('SET_TOKEN', 'admin');
          Cookie.set('Skye-Token', 'admin');
          resolve(user.username);
        } else {
          reject(user.username);
        }
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '');
        Cookie.remove('Skye-Token');
        resolve();
      });
    }
  }
});

export default store;
