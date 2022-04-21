<template>
    <div>
      <h1>Atividade
          <span v-if="atividade.id !== 0">{{ atividade.id }}</span>
      </h1>
      <form class="row g-3" @submit="handleSubmit">
        <div class="col-md-6">
          <label class="form-label">Título</label>
          <input
            type="text"
            class="form-control"
            name="titulo"
            placeholder="titulo"
            @change="inputTextHandler"
            :value="atividade.titulo"
            required
            maxlength="40"
          />
        </div>
        <div class="col-md-6">
          <label class="form-label">Prioridade</label>
          <select
            class="form-select"
            name="prioridade"
            @change="inputTextHandler"
            :value="atividade.prioridade"
            required
          >
            <option value="">Selecione...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
          </div>
          <div class="col-md-6">
              <label class="form-label">Descrição</label>
              <textarea
              class="form-control"
              name="descricao"
              placeholder="descrição"
              @change="inputTextHandler"
              :value="atividade.descricao"
              />
          </div>
          <div class="col-md-6">
              <label class="form-label">Data de entrega</label>
              <input
              type="date"
              name="data"
              class="form-control"
              @change="inputTextHandler"
              :value="atividade.data"
              required
              max="9999-12-31"
              />
          </div>
          <hr />
          <div class="col-12 mt-0" v-if="!atividade.id">
              <button class="btn btn-outline-secondary" type="submit">
                  <i class="fa fa-plus me-2"></i>
                      Atividade
              </button>
          </div>
          <div class="col-12 mt-0" v-else>
            <button class="btn btn-outline-success me-2" type="submit">
              <i class="fa fa-plus me-2"></i>
              Salvar
            </button>
            <button
              class="btn btn-outline-warning"
              @click="handleCancelar"
            >
              <i class="fa fa-plus me-2"></i>
              Cancelar
            </button>
          </div>
      </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'atividade-form',
    data() {
        return {
            atividade: this.atividadeAtual,
            atividadeInicial: {
                id: 0,
                titulo: '',
                prioridade: '',
                descricao: '',
                data: ''
            }
        }
    },
    methods: {
      ...mapMutations(['atualizarAtividade', 'addAtividade', 'cancelarAtividade']),
      setAtividade(ativ) {
          this.atividade = ativ
      },
      inputTextHandler(e) {
        const {name, value} = e.target
    
        this.setAtividade({ ...this.atividade, [name]: value })
      },
      handleSubmit(e) {
        e.preventDefault()
    
        if (this.atividadeSelecionada.id !== 0) {
          this.atualizarAtividade(this.atividade)
        }
        else {
          this.addAtividade(this.atividade)    
        }

        this.setAtividade(this.atividadeInicial)
      },
    
      handleCancelar(e) {
        e.preventDefault()
    
        this.cancelarAtividade()
    
        this.setAtividade(this.atividadeInicial)
      },
      atividadeAtual() {
        if (this.atividadeSelecionada.id !== 0 ) {
            return this.atividadeSelecionada
        } 
        else {
            return this.atividadeInicial
        }
      },
    },
    computed: {
      atividadeSelecionada() {
        return this.$store.getters.atividadeSelecionada
      }
    },
    watch: {
          atividadeSelecionada(atividadeSelecionada) {
            if (atividadeSelecionada.id !== 0) {
                this.setAtividade(atividadeSelecionada)
            }
        }
    }
}
</script>