import {
    SET_SHOW_DRAWER, SET_SHOW_PROJECT_DIALOG, SET_SHOW_FILE_DIALOG, SET_SHOW_REPORT_DIALOG
} from '../mutation.types'
import { http } from '@/services/http'


const state = {
    drawer: true,
    projectDialog: false,
    fileDialog: false,
    reportDialog: false,
    drawerItems: [
        { icon: 'mdi-plus', text: 'Add data to project' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
      ],
}

const getters = {
    drawer: state => state.drawer,
    drawerItems: state => state.drawerItems,
    projectDialog: state => state.projectDialog,
    fileDialog: state => state.fileDialog,
    reportDialog: state => state.reportDialog,
}


const mutations = {
    [SET_SHOW_DRAWER](state) {
        state.drawer = !state.drawer
    },
    [SET_SHOW_PROJECT_DIALOG](state) {
        state.projectDialog = !state.projectDialog
    },
    [SET_SHOW_FILE_DIALOG](state) {
        state.fileDialog = !state.fileDialog
    },
    [SET_SHOW_REPORT_DIALOG](state) {
        state.reportDialog = !state.reportDialog
    }
}


const actions = {
    onDrawer({ commit }) {
        commit(SET_SHOW_DRAWER)
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}