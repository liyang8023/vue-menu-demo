import Vue from 'vue';
import Vuex from 'vuex';
import test from './mutations/state'

Vue.use(Vuex)

const store = new Vuex.Store({
    namespaced: true,
    modules: {
        test
    }
})

export default store;



