<template>
  <div>
    <h2>Done</h2>
    <table>
      <tr v-for="todo in todos" :key="todo.id">
        <td>
          {{ todo.task }}
        </td>
        <td class="itemfunction">
          <button class="reset" @click="todo.completed = false">Reset</button>
        </td>
        <td class="itemfunction">
          <button class="delete" @click="deleteItem(todo.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.getDoneTodos;
    },
  },
  methods: {
    deleteItem(item) {
      this.$store.commit("deleteTodoItem", { item });
      },
    resetAll() {
      this.$store.commit("resetAllTodoItems");
    },
    deleteAll() {
      const isUserSure = confirm('Are you sure you want to delete all items?');
      if (isUserSure) {
        this.$store.commit("removeAllTodoItems");
      }
    }
  },
};
</script>

<style scoped>
table {
  width: 100%;
  margin-top: 1rem;
}
td {
  font-size: 0.9rem;
  padding: 0.2rem 0;
  margin: 0;
}
.itemfunction {
  width: 10%;
}
button {
  width: 100%;
  border: none;
  padding: 0.3rem 1rem;
  color: #fff;
  display: inline-block;
}
.delete {
  background-color: #cc6666;
}
.reset {
  background-color: #669966;
}
</style>