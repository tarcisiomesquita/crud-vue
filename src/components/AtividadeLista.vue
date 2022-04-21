
<template>
    <div className="mt-3">
        <ul className="list-group list-unstyled">
            <atividade
                v-for="atividade in atividades"
                :key="atividade.id" 
                :atividade="atividade"   
            />
        </ul>
      </div>
</template>

<script>
import Atividade from './Atividade.vue'
export default {
    name: 'atividade-lista',
    props: ['atividades'],
    components: {
        Atividade
    }
}
</script>