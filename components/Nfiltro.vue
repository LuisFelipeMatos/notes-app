<template>
    <button v-on:click="count++">Você clicou em mim {{ count }} vezes.</button>
</template>

<script>
    export default{
        nome ="n-filtro",
        props: {
           id: [Number, String] 
        },
    data(){
    return {
      count: 0
    }
    }
    }
</script>

<style>
</style>
