import {
    SET_LOADING, SET_PROJECTS, ADD_PROJECT, ADD_PROJECT_TO_CURRENT_PROJECTS
} from '../mutation.types'
import { http } from '@/services/http'


const state = {
    projects: null,
    projectsAreLoading: null,
    newProject: null,
}

const getters = {
    projects: state => state.projects,
    projectsAreLoading: state => state.projectsAreLoading,
    newProject: state => state.newProject,
}


const mutations = {
    [SET_PROJECTS](state, projects) {
        state.projects = projects

    },
    [SET_LOADING](state, payload) {
        state.projectsAreLoading = payload
    },
    [ADD_PROJECT](state, payload) {
        state.newProject = payload
    },
    [ADD_PROJECT_TO_CURRENT_PROJECTS](state, payload) {
        state.projects = state.projects.push(payload)
    },
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
    },
    createProject({ commit, dispatch }, payload) {
        return http.projects.create(payload)
            .then(data => {
                commit(ADD_PROJECT, data)
                //return dispatch('getProjects')
                commit(ADD_PROJECT_TO_CURRENT_PROJECTS, data)
            })
    },
}


export default {
    state,
    getters,
    actions,
    mutations
}