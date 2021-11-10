<template>
  <div>
    <h1>To-Do List</h1>
    <div>Todo count: {{ $store.getters.todoCount }}</div>
    <div>
      <TodoNew />
      <TodoList />
    </div>
  </div>
</template>
<script>
import TodoNew from "./components/TodoNew.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    TodoNew,
    TodoList
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Signika&display=swap');
  html {
    font-size: 16px;
  }
  body {
    padding: 2rem;
  }
  body, input {
    font-family: 'Signika', sans-serif;
  }
  h1 {
    margin-top: 0;
    background-color: #000;
    color: #fff;
    padding: .2rem .6rem;
    font-size: 2rem;
  }
  input {
    padding: .4rem;
    font-size: 1rem;
  }
</style>
