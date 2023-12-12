import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex)

new Vuex.Store({
    modules: {
        user
    }
})