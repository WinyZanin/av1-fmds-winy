<template>
    <div class="text-center pa-4">
        <v-dialog v-model="dialog" width="auto">
            <v-card width="400">
                <v-card-title>Editar</v-card-title>
                <v-card-text>
                    <v-text-field v-model="editTitle" :rules="rules" label="Titulo"></v-text-field>
                    <v-textarea v-model="editSubtitle" label="Descrição(opcional)"></v-textarea>
                </v-card-text>
                <template v-slot:actions>
                    <v-btn class="ms-auto" @click="dialog = false">Cancelar</v-btn>
                    <v-btn @click="list.editToDo(editIndex, editTitle, editSubtitle); dialog = false"
                        :disabled="disable">Editar</v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
    <div>
        <v-select class="mx-auto w-25" label="Filtro" :items="['Concluído', 'Pendente']" variant="outlined"
            v-model="filtro"></v-select>
    </div>

    <v-list lines="two" class="mx-auto mt-10" width="500">
        <v-list-item v-for="(lista, index) in filtrado" :key="index" :title=lista.title :subtitle=lista.subtitle
            :class="{ 'text-decoration-line-through': lista.check }">
            <template v-slot:prepend>
                <v-list-item-action start>
                    <v-checkbox-btn :model-value="lista.check" @change="list.changeCheck(index)"></v-checkbox-btn>
                </v-list-item-action>
            </template>
            <template v-slot:append>
                <v-btn variant="text" @click="list.deleteToDo(index)" icon>
                    <v-icon color="error">mdi-delete</v-icon>
                </v-btn>
                <v-btn variant="text"
                    @click="editIndex = index; dialog = true; editTitle = list.getToDoList[index].title; editSubtitle = list.getToDoList[index].subtitle"
                    icon>
                    <v-icon color="info">mdi-pencil</v-icon>
                </v-btn>
            </template>
        </v-list-item>
    </v-list>

    <!--debug-->
    <!--<v-btn @click="console.log(list.getToDoList)" class="mx-auto mt-5" block>Log</v-btn>
    <v-btn @click="list.getToDoList[0].title = 'batata'" class="mx-auto mt-5" block>test</v-btn>-->

</template>

<script setup>
import { ref, computed } from 'vue'
import { toDoList } from '@/stores/app.js'
const list = toDoList()

const dialog = ref(false)
let editIndex = ref(null);

let editTitle = ref('');
let editSubtitle = ref('');

const filtro = ref('');

const editar = (index) => {
    console.log(index)
    dialog = true;
}

const rules = [
    (v) => !!v || 'Campo obrigatório',
    (v) => (v && v.length >= 5) || 'Máximo de 5 caracteres',
]

const disable = computed(() => {
    return !editTitle.value || editTitle.value.length < 5;
})

const filtrado = computed(() => {
    if (filtro.value === '') {
        return list.getToDoList;
    } else if (filtro.value === 'Pendente') {
        return list.getToDoList.filter((item) => !item.check)
    } else {
        return list.getToDoList.filter((item) => item.check)
    }

})
</script>