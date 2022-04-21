import { createStore } from "vuex"
import atividades from './modules/atividades'

export const store = createStore({
    modules: {
        atividades
    } 
})
