<template>
  <v-tabs bg-color="indigo-darken-2" fixed-tabs>
    <v-tab v-for="link in links" :key="link" :text="link.name" :to="link.to"></v-tab>
  </v-tabs>
</template>
<script setup>
const links = [
  { name: 'Listar', to: '/listpage' },
  { name: 'Adicionar', to: '/addPage' },
];
</script>