<script setup>
import { ref } from 'vue'
// const title = 'Vue.js Course'
let price = ref(9.99)
function increment() {
  price.value += 1
  console.log(price)
}
</script>
<template>
  <h1>{{ price }}</h1>
  <button @click="increment">button</button>
</template>
<style>
h1 {
  color: red;
}
</style>
