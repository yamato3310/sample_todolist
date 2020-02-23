<template>
  <div id="app">
    <h1>Todoリスト!</h1>
    <ul>
      <li v-for="todo in todos" :key="todos.indexOf(todo)" class="todo-items">
        <div class="todo-text">
          {{todo}}
        </div>
        <div>
          <button id="delete-item" @click="deleteItem(todo)">完了</button>
        </div>
      </li>
    </ul>
    <div>
      <div>
         <input id="todo-text" type="text" v-model="newItem">
      </div>
      <div>
        <button id="add-item" @click="addItem">追加</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      todos: [],
      newItem: ""
    }
  },
  methods: {
    deleteItem(item) {
      this.todos = this.todos.filter(listItem => listItem != item)
    },
    addItem() {
      this.todos.push(this.newItem)
      this.newItem = ""
    }
  }
}
</script>

<style>
</style>
