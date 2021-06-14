<template>
  <div>
    <pre>
    {{ value }}
    </pre>
    <b-form-tag
      class="my-2"
      v-for="(tag, index) of value"
      :key="index"
      no-remove
    >
      {{ tag.nome }}
    </b-form-tag>

    <b-form-group>
      <b-form-input
        class="bg-warning border-0 titulo text-dark my-2"
        type="text"
        placeholder="Categorize sua nota com tags"
        v-model="tag"
        @keyup.enter="adicionar()"
      ></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "n-tag",
  props: {
    value: Array
  },
  data() {
    return {
      tag: null
    };
  },
  methods: {
    adicionar() {
      !this.isDuplicado(this.tag) && this.value.push({ nome: this.tag });
      this.tag = null;
    },
    isDuplicado(nomeTag) {
      return this.value.find(t => t.nome == nomeTag);
    }
  }
};
</script>

<style></style>
