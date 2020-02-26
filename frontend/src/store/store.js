import Vue from 'vue';
import Vuex from 'vuex';
import steps from './modules/steps'
import auth from './modules/auth'
import projects from './modules/projects'
import global from './modules/global'

Vue.use(Vuex);



export default new Vuex.Store({
    //state,
    //getters,
    //mutations,
    //actions,
    modules: {
        steps,
        auth,
        projects,
        global,
    }
})