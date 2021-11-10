<template>
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.task }}
  </li>
</ul>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  }
};
</script>

<style scoped>
    li {
        font-size: 1.2rem;
    }
</style>