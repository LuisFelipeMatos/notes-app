<template>
  <div>
    <ul class="list-unstyled">
      <li v-for="(item, index) of value" :key="index">
        <n-checklist-item v-model="value[index]"></n-checklist-item>
      </li>
      <li>
        <n-checklist-item
          v-model="checklist"
          @itemConfirmado="adicionar()"
        ></n-checklist-item>
      </li>
    </ul>

    <p class="text-muted">
      <small>{{ mensagemNumeroItens }} </small>
    </p>
  </div>
</template>

<script>
export default {
  name: "n-checklist",
  props: {
    value: Array
  },
  data() {
    return {
      checklist: {
        descricao: null,
        concluida: 0
      }
    };
  },
  computed: {
    numeroItens() {
      return this.value.length;
    },
    mensagemNumeroItens() {
      return this.value.length > 1
        ? `${this.numeroItens} itens adicionados`
        : `${this.numeroItens} item adicionado`;
    }
  },
  methods: {
    adicionar() {
      this.value.push(this.checklist);

      this.checklist = {
        descricao: null,
        concluida: 0
      };
    }
  }
};
</script>

<style></style>
