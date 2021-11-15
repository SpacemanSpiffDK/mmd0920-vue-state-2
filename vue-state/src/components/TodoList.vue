<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.task }}
      <button @click="this.$store.commit('deleteTodoItem', { todo })">
        Done
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  },
};
</script>

<style scoped>
li {
  font-size: 1.2rem;
}
button {
  margin-left: 2rem;
  border: none;
  background-color: #669966;
  padding: 0.3rem 1rem;
  color: #fff;
  display: inline-block;
}
</style>