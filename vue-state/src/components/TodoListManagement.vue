<template>
    <div>
      <button class="reset" @click="resetAll">Reset all to "not done"</button>
      <button class="delete" @click="deleteAll">Delete all items</button>
    </div>
</template>

<script>
export default {
  computed: {
    
  },
  methods: {
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
button {
  width: 100%;
  border: none;
  padding: 1rem;
  color: #fff;
  display: inline-block;
  margin-top: 1rem;
}
.delete {
  background-color: #cc6666;
}
.reset {
  background-color: #669966;
}
</style>