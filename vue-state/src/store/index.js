import { createStore } from 'vuex';

export default createStore({
  // defining store state - start
  state() {
    return {
      todos: []
    }
  },
  // defining store state - end
  // defining store mutations - start
  mutations: {
    addTodoItem: (state, item) => {
      state.todos.unshift(item);
    },
    deleteTodoItem: (state, item) => {
      // convert proxy to an actual object to work with
      const data = JSON.parse(JSON.stringify(item)); 
      // find the index of the item with the id we are looking for
      const i = state.todos.map(todo => todo.id).indexOf(data.todo.id); 
      // at position i, remove 1 item
      state.todos.splice(i, 1); 
    }
  },
  // defining store mutations - end
  getters: {
    getTodos: (state) => {
      return state.todos;
    },
    todoCount: (state) => {
      return state.todos.length;
    }
  }
});