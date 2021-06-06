<template>
  <div class="card bg-warning my-5">
    <div class="card-body">
      <b-form @submit.prevent="" autocomplete="off">
        <b-form-group>
          <b-form-input
            class="bg-warning border-0 titulo text-dark"
            v-model="nota.titulo"
            type="text"
            size="lg"
            placeholder="Título"
          ></b-form-input>
        </b-form-group>
        <b-form-group v-if="!exibirChecklist">
          <b-form-textarea
            class="bg-warning border-0 text-dark"
            v-model="nota.descricao"
            placeholder="Descrição"
            rows="10"
            size="lg"
            :required="true"
            :autofocus="true"
          ></b-form-textarea>
        </b-form-group>

        <n-checklist
          v-if="exibirChecklist"
          v-model="this.nota.checklists"
        ></n-checklist>

        <b-input-group>
          <b-form-tags
            class="bg-warning border-0 text-dark"
            tag-variant="dark"
            placeholder="Adicione tags"
            v-model="nota.tags"
          ></b-form-tags>
        </b-input-group>

        <b-button
          type="button"
          variant="warning"
          @click="habilitarChecklist(!exibirChecklist)"
        >
          <b-icon icon="check2-square" />
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "n-nota",
  props: {
    id: [Number, String]
  },
  data() {
    return {
      exibirChecklist: false,
      esperandoAlteracao: false,
      nota: {
        id: null,
        titulo: null,
        descricao: null,
        criadoEm: null,
        atualizadoEm: null,
        checklists: [],
        tags: []
      }
    };
  },
  computed: {
    notaObservada() {
      return JSON.parse(JSON.stringify(this.nota));
    }
  },
  watch: {
    notaObservada: {
      handler(value, oldValue) {
        if (this.compararNotas(value, oldValue)) {
          if (!this.esperandoAlteracao) {
            setTimeout(() => {
              this.id ? this.editar() : this.adicionar();
              this.esperandoAlteracao = false;
            }, 3000);
          }
          this.esperandoAlteracao = true;
        }
      },
      deep: true
    }
  },
  methods: {
    compararNotas(novaNota, antigaNota) {
      return JSON.stringify(novaNota) != JSON.stringify(antigaNota);
    },
    habilitarChecklist(ativo) {
      this.exibirChecklist = ativo;
    },
    async adicionar() {
      const notaSaved = await this.$store.dispatch("nota/add", this.nota);

      this.$router.push(`/nota/edit/${notaSaved.id}`);
    },
    async editar() {
      await this.$store.dispatch("nota/edit", this.nota);

      await this.carregar();
    },
    async carregar() {
      const { data } = await this.$axios.get(`nota/${this.id}`);

      this.nota = data;

      this.habilitarChecklist(this.nota.checklists.length > 0);
    }
  },
  async mounted() {
    if (this.id) {
      await this.carregar();
    }
  }
};
</script>

<style>
.titulo {
  font-weight: 600;
}
</style>
