<template>
    <v-sheet class="mx-auto mt-10" width="400">
        <v-form>
            <v-text-field v-model="title" :rules="rules" label="Titulo"></v-text-field>
            <v-textarea v-model="subtitle" label="Descrição(opcional)"></v-textarea>
            <v-btn @click="adicionar()" class="mt-2" type="submit" block :disabled="disable">Adicionar</v-btn>
        </v-form>
    </v-sheet>
</template>

<script setup>
import { ref, computed } from 'vue'
import { toDoList } from '@/stores/app.js'

const toDo = toDoList();

const title = ref(null);
const subtitle = ref(null);

const rules = [
    (v) => !!v || 'Campo obrigatório',
    (v) => (v && v.length >= 5) || 'Máximo de 5 caracteres',
]

const disable = computed(() => {
    return !title.value || title.value.length < 5;
})

const adicionar = () => {
    toDo.addToDo(title.value, subtitle.value);  
    title.value = null;
    subtitle.value = null;
}
</script>