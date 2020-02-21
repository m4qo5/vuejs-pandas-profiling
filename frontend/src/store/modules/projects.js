import {
    SET_LOADING, SET_PROJECTS
} from '../mutation.types'
import { http } from '@/services/http'


const state = {
    projects: null,
    projectsAreLoading: null,
}

const getters = {
    projects: state => state.projects,
    projectsAreLoading: state => state.projectsAreLoading,
}


const mutations = {
    [SET_PROJECTS](state, projects) {
        state.projects = projects

    },
    [SET_LOADING](state, payload) {
        state.projectsAreLoading = payload
    }
}


const actions = {
    getProjects({ commit }) {
        commit(SET_LOADING, true)
        return http.projects.all()
            .then(data => {
                commit(SET_PROJECTS, data)
            })
            .finally(() => {
                commit(SET_LOADING, false)
            })
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}