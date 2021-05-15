<template>
  <div>
    <div class="text-center">
      <b-button to="nota/new" variant="dark" size="lg" class="my-5"
        >Nova Nota</b-button
      >
    </div>

    <p v-if="$fetchState.pending" class="text-center">Carregando...</p>
    <p v-else-if="$fetchState.error" class="text-center">
      Ocorreu um erro :(
    </p>
    <div v-else class="row">
      <div v-for="nota of notas" :key="nota.id" class="col-md-3">
        <div class="card bg-warning my-3">
          <div class="card-body">
            <h5 class="card-title">{{ nota.titulo }}</h5>
            <p v-if="nota.descricao" class="card-text">
              {{ nota.descricao }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "home",
  middleware: "auth",
  async fetch() {
    await this.$store.dispatch("nota/list", this.usuario.id);
  },
  computed: {
    usuario() {
      return this.$store.state.auth.user;
    },
    notas() {
      return this.$store.state.nota.list;
    }
  }
};
</script>

<style>
.card {
  min-height: 15rem;
}
</style>