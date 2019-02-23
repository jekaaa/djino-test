import Vue from 'vue'
import Vuex from 'vuex'
import { DEFAULT_TEXT, DOWNLOAD_ICON, SIZE_TEXT } from '@/const/main'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    icon: DOWNLOAD_ICON,
    text: DEFAULT_TEXT,
    status: '',
    fileInfo: SIZE_TEXT
  },
  mutations: {
    SET(state, { field, value }) { state[field] = value }
  },
  actions: {
    set({ commit }, { field, value }) { commit('SET', { field, value }) },
  },
  getters: {
    icon(state)     { return state.icon     },
    text(state)     { return state.text     },
    status(state)   { return state.status   },
    fileInfo(state) { return state.fileInfo }
  }
})
