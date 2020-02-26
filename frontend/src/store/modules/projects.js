import {
    SET_LOADING, SET_PROJECTS, ADD_PROJECT, ADD_PROJECT_TO_CURRENT_PROJECTS, SET_SELECTED_PROJECT
} from '../mutation.types'
import { http } from '@/services/http'


const state = {
    projects: null,
    projectsAreLoading: null,
    newProject: null,
    selectedProject: null,
}

const getters = {
    projects: state => state.projects,
    projectsAreLoading: state => state.projectsAreLoading,
    newProject: state => state.newProject,
    selectedProject: state => state.selectedProject,
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
    [SET_SELECTED_PROJECT](state, payload) {
        state.selectedProject = payload
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
                return dispatch('getProjects')
                //commit(ADD_PROJECT_TO_CURRENT_PROJECTS, data)
            })
    },
    selectProject({ commit }, payload) {
        commit(SET_SELECTED_PROJECT, payload)
    },
}


export default {
    state,
    getters,
    actions,
    mutations
}