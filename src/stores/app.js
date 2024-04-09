// Utilities
import { defineStore } from 'pinia'

export const toDoList = defineStore('app', {
  state: () => ({
    list: [],
  }),
  getters: {
    getToDoList() {
      return this.list
    },
  },
  actions: {
    addToDo(title, subtitle) {
      this.list.push({
        title: title,
        subtitle: subtitle,
        check: false,
      })
    },
    deleteToDo(index) {
      this.list.splice(index, 1)
    },
    changeCheck(index) {
      this.list[index].check = !this.list[index].check
      //console.log(this.list[index])
    },
    editToDo(index, title, subtitle) {
      this.list[index].title = title
      this.list[index].subtitle = subtitle
    }

  },
})
