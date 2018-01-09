import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
          id: '',
          themeId: -1,
          showSlide: false
    },
    getters: {
        id: state => state.id,
        themeId: state => state.themeId,
        showSlide: state => state.showSlide
    },
    mutations: {
        setId(state,id) {
            state.id = id
        },
        setThemeId(state,id) {
            state.themeId = id
        },
        setShowSlide(state) {
            state.showSlide = !state.showSlide
        }

    }
})
