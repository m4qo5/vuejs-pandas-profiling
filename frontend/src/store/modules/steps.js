import { jwt } from '@/services/jwt'
import {
    SET_LOADING, SET_STEPS
} from '../mutation.types'
import { http } from '@/services/http'


const state = {
    steps: null,
    stepsAreLoading: null,
}

const getters = {
    steps: state => state.steps,
    stepsAreLoading: state => state.stepsAreLoading,
}


const mutations = {
    [SET_STEPS](state, steps) {
        state.steps = steps

    },
    [SET_LOADING](state, payload) {
        state.stepsAreLoading = payload
    }
}


const actions = {
    getSteps({ commit }) {
        commit(SET_LOADING, true)
        return http.steps.all()
            .then(data => {
                commit(SET_STEPS, data)
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