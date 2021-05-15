<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand to="/">Notes App</b-navbar-brand>
      <b-navbar-toggle target="notesBar"></b-navbar-toggle>

      <b-collapse id="notesBar" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown :text="primeiroNome" right>
            <b-dropdown-item href="perfil">Perfil</b-dropdown-item>
            <b-dropdown-item href="#" @click.prevent="logout"
              >Sair</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    usuario() {
      return this.$store.state.auth.user;
    },
    primeiroNome() {
      if (this.usuario) {
        const [nome] = this.usuario.nome.split(" ");

        return nome;
      }
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
    }
  }
};
</script>

<style></style>
