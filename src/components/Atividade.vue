<template>
    <li>
        <div :class="['card mb-2 shadow-sm', prioridadeStyleBorder]">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                <h5 class="card-title">
                    <span class="badge bg-secondary me-1">
                    {{ atividade.id }}
                    </span>
                    - {{ atividade.titulo }}
                </h5>
                <h6>
                    Prioridade:
                    <span :class="['ms-1 text', prioridadeStyle()]">
                    <i :class="['me-1 far', prioridadeStyle(true)]"></i>
                    {{ prioridadeLabel }}
                    </span>
                </h6>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="card-text">
                        {{ atividade.descricao }}
                    </p>
                    <p>
                        {{ atividade.data }}
                    </p>
                </div>
        
                <div class="d-flex justify-content-end pt-2 m-0 border-top">
                <button
                    class="btn btn-sm btn-outline-primary me-2 "
                    @click="pegarAtividade(atividade.id)"
                >
                    <i class="fas fa-pen me-2"></i>
                    Editar
                </button>
                <button
                    class="btn btn-sm btn-outline-danger"
                    @click="deletarAtividade(atividade.id)"
                >
                    <i class="fas fa-trash me-2"></i>
                    Deletar
                </button>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'atividade-view',
    props: ['atividade'],
    methods: {
        ...mapMutations(['pegarAtividade', 'deletarAtividade']),
        prioridadeStyle(icone) {
            switch(this.atividade.prioridade) {
                case '1':
                return icone ? 'fa-smile' : 'text-success'
                case '2':
                return icone ? 'fa-meh' : 'text-dark'
                case '3':
                return icone ? 'fa-frown' : 'text-warning'       
            }
        }
    },
    computed: {
            prioridadeStyleBorder() {
                return {
                    'border-success': this.atividade.prioridade == '1',
                    'border-dark': this.atividade.prioridade == '2',
                    'border-warning': this.atividade.prioridade == '3'
                }
            },
            prioridadeLabel() {
                switch(this.atividade.prioridade) {
                case '1':
                    return 'Baixa'
                case '2':
                    return 'Normal'
                case '3':
                    return 'Alta'
                default:
                    return 'Não definido'
                }
            }
    }
}
</script>