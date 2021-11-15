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
    };
  },
  methods: {
    addTodo: function () {
      // this content later!
      if (this.task != "") {
          const { id, task } = this;
          this.$store.commit("addTodoItem", { id, task });
          this.id++;
          this.task = "";
      }
    },
  },
};
</script>