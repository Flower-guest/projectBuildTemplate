<script setup lang="ts">
import useGlobalProperties from '@/hooks/globalVar'
const globalProperties = useGlobalProperties()
let count = $ref(0);
const success = () => {
  globalProperties.$messages.success('This is a success message')
}

const countAdd = () => {
  count++;
}

</script>

<template>
  <!-- <router-view /> -->
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <a-button type="primary" @click="success">Primary</a-button>
  <a-button type="primary" @click="countAdd">Prim {{ count }}ary</a-button>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
