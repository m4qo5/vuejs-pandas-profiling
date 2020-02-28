import {
    SET_LOADING, SET_PROJECTS, ADD_PROJECT, ADD_PROJECT_TO_CURRENT_PROJECTS, SET_SELECTED_PROJECT,
    ADD_PROJECT_FILE, SET_PROJECT_FILES, SET_IS_SELECTED_PROJECT
} from '../mutation.types'
import { http } from '@/services/http'


const state = {
    projects: null,
    loading: null,
    newProject: null,
    selectedProject: null,
    isSelectedProject: false,
    projectFiles: [],
}

const getters = {
    projects: state => state.projects,
    loading: state => state.loading,
    newProject: state => state.newProject,
    selectedProject: state => state.selectedProject,
    isSelectedProject: state => state.isSelectedProject,
    projectFiles: state => state.projectFiles,
}


const mutations = {
    [SET_PROJECTS](state, projects) {
        state.projects = projects
    },
    [SET_PROJECT_FILES](state, files) {
        state.projectFiles = files
    },
    [SET_LOADING](state, payload) {
        state.loading = payload
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
    [SET_IS_SELECTED_PROJECT](state) {
        state.isSelectedProject = !state.isSelectedProject
    },
    [ADD_PROJECT_FILE](state, payload) {
        state.projectFiles.unshift(payload)
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
    getProjectFiles({ commit }) {
        commit(SET_LOADING, true)
        return http.projects.allFiles()
            .then(data => {
                commit(SET_PROJECT_FILES, data)
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
    createProjectFile({ commit, dispatch }, payload) {
        return http.projects.createProjectFile(payload)
            .then(data => {
                commit(ADD_PROJECT_FILE, data)
            })
    },
    selectProject({ commit }, payload) {
        commit(SET_LOADING, true)
        return http.projects.single(payload)
            .then(data => {
                commit(SET_SELECTED_PROJECT, data)
            })
            .finally(() => {
                commit(SET_LOADING, false)
            })
    },
}


export default {
    state,
    getters,
    actions,
    mutations
}