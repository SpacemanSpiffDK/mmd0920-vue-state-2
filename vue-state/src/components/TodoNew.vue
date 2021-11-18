<template>
  <form @submit.prevent="addTodo">
    <input type="text" placeholder="Enter a new task" v-model.trim="task" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: "",
      id: 0,
      completed: false
    };
  },
  methods: {
    addTodo: function () {
      if (this.task != "") {
          const { id, task, completed } = this;
          this.$store.commit("addTodoItem", { id, task, completed });
          this.id++;
          this.task = "";
      }
    },
  },
};
</script>

<style scoped>
  input {
    width: 100%;
    font-family: 'Signika', sans-serif;
  }
  input {
    padding: .4rem;
    font-size: 1rem;
  }
</style>