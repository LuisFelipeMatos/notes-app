<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-7 d-flex vh-100 justify-content-center">
        <div class="col-md-5 align-self-center">
          <h1>Cadastro</h1>
          <p>Informe seus dados</p>

          <b-form @submit.prevent="cadastro">
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
                v-model="usuario.nome"
                type="text"
                placeholder="Nome"
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

            	
            <b-button block type="submit" variant="primary">Cadastrar</b-button>
          </b-form>
        </div>
      </div>
      <div class="col-md-5 vh-100 cover"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario:{
      email: null,
      nome: null,
      senha: null
    }
  };
  },
  methods: {
    async cadastro() {
      this.$store.dispatch("usuario/add", this.usuario);
       
    }
 }
};

</script>

<style>

.cover {
  background: url("https://url.gratis/wftZc") center center;}
</style>
