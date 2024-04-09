<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>

// populando a lista de tarefas para testes
import { toDoList } from '@/stores/app.js'
const list = toDoList()
list.addToDo("treinar violão", "treinar 1 hora de violão");
list.addToDo("fazer bolo", "comprar ingredientes e fazer bolo");
list.changeCheck(1);
list.addToDo('fazer exercícios', 'fazer 30 minutos de exercícios');

</script>
