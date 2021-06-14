<template>
  <div>
    <h1>Notes App</h1>
    <p>Informe os dados abaixo para acessar</p>

    <b-form @submit.prevent="login">
      <b-form-group>
        <b-form-input
          v-model="email"
          type="email"
          placeholder="E-mail"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          v-model="senha"
          type="password"
          placeholder="Senha"
          required
        ></b-form-input>
      </b-form-group>

      <b-button v-if="$nuxt.isOnline" block type="submit" variant="primary"
        >Acessar</b-button
      >

      <b-button class="mt-5" to="registro" block variant="link"
        >Cadastre-se</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  layout: "externo",
  head: {
    title: "Login - Notes App"
  },
  data() {
    return {
      email: null,
      senha: null
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            senha: this.senha
          }
        });

        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style>
.cover {
  background: url("https://url.gratis/wftZc") center center;
}
</style>
