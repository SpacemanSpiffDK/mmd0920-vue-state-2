<template>
  <table>
    <tr v-for="todo in todos" :key="todo.id">
      <td>
        {{ todo.task }}
      </td>
      <td class="itemfunction">
        <button class="done" @click="todo.completed = true">
          Done
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  margin-top: 1rem;
}
td {
  font-size: .9rem;
  padding: .2rem 0;
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
.done {
  background-color: #669966;
}
</style>