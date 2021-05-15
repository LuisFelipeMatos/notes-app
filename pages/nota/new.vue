<template>
  <div class="card bg-warning my-5">
    <div class="card-body">
      <b-form @submit.prevent="adicionar" autocomplete="off">
        <b-form-group>
          <b-form-input
            class="bg-warning border-0 titulo text-dark"
            v-model="nota.titulo"
            type="text"
            size="lg"
            placeholder="Título"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-textarea
            class="bg-warning border-0 text-dark"
            v-model="nota.descricao"
            placeholder="Descrição"
            :required="true"
            rows="10"
            size="lg"
            :autofocus="true"
          ></b-form-textarea>
        </b-form-group>

       <b-button type="button" variant="warning">
        <b-icon icon="check2-square" />
      </b-button>
      <b-button type="button" variant="warning">
        <b-icon icon="tag" />
      </b-button>
      <b-button type="submit" variant="dark" >
       Adicionar 
      </b-button>
      </b-form>
      
    </div>
  </div>
</template>

<script>
export default {
  layout: "home",
  data() {
    return {
      nota: {
        titulo: null,
        descricao: null,
        checklists: [],
        tags: []
      }
    };
  },
  methods:{
    async adicionar(){
      this.$store.dispatch("nota/add", this.nota);
    }
  }
};
</script>

<style>
.titulo {
  font-weight: 600;
}
</style>