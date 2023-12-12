import { createStore } from 'vuex';

export default createStore({
  actions: {
    async getUserData(ctx) {
      const response = await fetch('./../../data/userData.json');
      const userInfo = await response.json();
      ctx.commit('updateUser', userInfo);
      return userInfo;
    }
  },
  mutations: {
    updateUser(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  state: {
    userInfo: {}
  },
  getters: {
    allInfo(state) {
      return state.userInfo;
    }
  }
});
