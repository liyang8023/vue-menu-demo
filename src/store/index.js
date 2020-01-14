import Vue from 'vue';
import Vuex from 'vuex';
import test from './mutations/state'
import layout from './mutations/layout'

Vue.use(Vuex)

const store = new Vuex.Store({
    namespaced: true,
    modules: {
        test,
        layout
    }
})

export default store;



