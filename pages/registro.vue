<template>
  <div>
    <h1>Notes App</h1>
    <p>Informe os dados abaixo para se registrar</p>

    <b-form @submit.prevent="registrar">
      <b-form-group>
        <b-form-input
          v-model="usuario.nome"
          type="text"
          placeholder="Nome"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          v-model="usuario.email"
          type="email"
          placeholder="E-mail"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          v-model="usuario.senha"
          type="password"
          placeholder="Senha"
          required
        ></b-form-input>
      </b-form-group>

      <b-button v-if="$nuxt.isOnline" block type="submit" variant="primary"
        >Registrar</b-button
      >

      <b-button class="mt-5" to="login" block variant="link">Acessar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  layout: "externo",
  data() {
    return {
      usuario: {
        nome: null,
        email: null,
        senha: null
      }
    };
  },
  methods: {
    async registrar() {
      try {
        const { data } = await this.$axios.post(`login/registro`, this.usuario);

        this.$router.push("/login");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style></style>
