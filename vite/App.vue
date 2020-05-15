<template>
  <div v-cloak>
    <img alt="Vue logo" src="./logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>