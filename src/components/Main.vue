<template>
    <atividade-form />      
    <atividade-lista
        :atividades="atividades"
        v-if="atividades.length !== 0"
    />
    <h1 v-else class="text-center text-muted border mt-3">Sem atividades no momento</h1>
</template>

<script>
import AtividadeForm from './AtividadeForm.vue'
import AtividadeLista from './AtividadeLista.vue'
export default {
    name: "main-view",
    components: {
        AtividadeForm,
        AtividadeLista
    },   
    computed: {
        atividades() {
             return this.$store.getters.atividades
        }
    }
}
</script>
