const state = {
    atividades: [],
    atividade: {
        id: 0
    }
}

const getters = {
    atividades: state => state.atividades,
    atividadeSelecionada: state => state.atividade
}

const mutations = {
    addAtividade: (state, atividade) => {
        state.atividades.push({...atividade, id: state.atividades.length <= 0 ? 1 :
            Math.max.apply(Math, state.atividades.map((item) => item.id)) + 1})
    },
    cancelarAtividade(state) {
        state.atividade = {id: 0}
    },
    atualizarAtividade(state, ativ) {
        state.atividades = state.atividades.map((item) => item.id === ativ.id ? ativ : item)
        state.atividade = {id: 0}
    },
    deletarAtividade(state, id) {
        const atividadesFiltradas = state.atividades.filter((atividade) => atividade.id !== id)
        state.atividades = [...atividadesFiltradas]
    },
    pegarAtividade(state, id) {
        const atividade = state.atividades.filter((atividade) => atividade.id === id)
        state.atividade = atividade[0]
    }
}
const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}